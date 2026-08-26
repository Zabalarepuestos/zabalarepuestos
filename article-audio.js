(() => {
    'use strict';

    const player = document.querySelector('[data-article-audio]');
    if (!player) return;

    player.innerHTML = `
        <div class="article-audio-controls">
            <button type="button" class="article-audio-toggle" data-audio-toggle>
                <span class="article-audio-icon" aria-hidden="true"></span>
                <span data-audio-label>Escuchar art&#237;culo</span>
            </button>
            <button type="button" class="article-audio-stop" data-audio-stop
                aria-label="Detener lectura" title="Detener lectura" disabled>
                <span class="article-audio-icon" aria-hidden="true"></span>
            </button>
            <label class="article-audio-speed">Velocidad
                <select data-audio-speed aria-label="Velocidad de lectura">
                    <option value="0.75">0,75&#215;</option>
                    <option value="1" selected>1&#215;</option>
                    <option value="1.25">1,25&#215;</option>
                    <option value="1.5">1,5&#215;</option>
                    <option value="2">2&#215;</option>
                </select>
            </label>
        </div>
        <div class="article-audio-progress">
            <progress max="100" value="0" aria-label="Progreso de lectura"></progress>
            <span data-audio-percent aria-hidden="true">0%</span>
        </div>
        <p class="article-audio-status" data-audio-status role="status">Listo para escuchar</p>`;

    const toggle = player.querySelector('[data-audio-toggle]');
    const label = player.querySelector('[data-audio-label]');
    const stop = player.querySelector('[data-audio-stop]');
    const speed = player.querySelector('[data-audio-speed]');
    const progress = player.querySelector('progress');
    const percent = player.querySelector('[data-audio-percent]');
    const status = player.querySelector('[data-audio-status]');

    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
        toggle.disabled = speed.disabled = true;
        status.textContent = 'La lectura en voz alta no est\u00e1 disponible en este navegador.';
        return;
    }

    const nodes = document.querySelectorAll(
        '.article-header h1, .article-header > p:not(.article-update), ' +
        '.article-content h2, .article-content h3, .article-content p, .article-content li'
    );
    const chunks = [];
    for (const node of nodes) {
        if (node.closest('.article-source-box')) continue;
        const words = node.textContent.trim().split(/\s+/).filter(Boolean);
        let chunk = '';
        // Short utterances avoid long-reading interruptions in speech engines.
        for (const word of words) {
            if (chunk && chunk.length + word.length + 1 > 160) {
                chunks.push(chunk);
                chunk = '';
            }
            chunk += (chunk ? ' ' : '') + word;
        }
        if (chunk) chunks.push(chunk);
    }

    if (!chunks.length) {
        toggle.disabled = speed.disabled = true;
        status.textContent = 'No hay texto disponible para escuchar.';
        return;
    }

    const synth = window.speechSynthesis;
    const total = chunks.reduce((sum, text) => sum + text.length, 0);
    let completed = 0;
    let index = 0;
    let offset = 0;
    let generation = 0;
    let state = 'idle';
    let activeUtterance = null;
    let voice = null;

    function updateVoice() {
        const voices = synth.getVoices().filter(item => /^es(?:[-_]|$)/i.test(item.lang));
        voice = voices.find(item => /^es[-_]AR$/i.test(item.lang)) ||
            voices.find(item => item.localService) || voices[0] || null;
    }
    updateVoice();
    synth.addEventListener('voiceschanged', updateVoice);

    function render(message) {
        const playing = state === 'playing';
        player.dataset.state = state;
        label.textContent = playing ? 'Pausar lectura' :
            state === 'paused' ? 'Reanudar lectura' :
            state === 'ended' ? 'Escuchar de nuevo' :
            state === 'error' ? 'Reintentar lectura' : 'Escuchar art\u00edculo';
        toggle.title = label.textContent;
        stop.disabled = state === 'idle' || state === 'ended';
        status.textContent = message || (playing ? 'Leyendo el art\u00edculo' :
            state === 'paused' ? 'Lectura en pausa' :
            state === 'ended' ? 'Lectura finalizada' : 'Listo para escuchar');
        updateProgress();
    }

    function updateProgress() {
        const value = state === 'ended' ? 100 : Math.min(99, Math.floor((completed + offset) / total * 100));
        progress.value = value;
        percent.textContent = `${value}%`;
    }

    function cancel() {
        // Ignore late end/error events from a canceled utterance.
        generation += 1;
        activeUtterance = null;
        synth.cancel();
    }

    function speak() {
        const currentGeneration = generation;
        const startOffset = offset;
        const utterance = new SpeechSynthesisUtterance(chunks[index].slice(startOffset));
        activeUtterance = utterance;
        utterance.lang = voice ? voice.lang : 'es-AR';
        if (voice) utterance.voice = voice;
        utterance.rate = Number(speed.value);
        utterance.onboundary = event => {
            if (currentGeneration !== generation || activeUtterance !== utterance) return;
            if (event.name === 'word') {
                offset = startOffset + event.charIndex;
                updateProgress();
            }
        };
        utterance.onend = () => {
            if (currentGeneration !== generation || activeUtterance !== utterance || state !== 'playing') return;
            completed += chunks[index].length;
            index += 1;
            offset = 0;
            activeUtterance = null;
            if (index < chunks.length) {
                updateProgress();
                speak();
            } else {
                state = 'ended';
                render();
            }
        };
        utterance.onerror = () => {
            if (currentGeneration !== generation || activeUtterance !== utterance) return;
            cancel();
            state = 'error';
            render('No se pudo reproducir la voz. Pod\u00e9s volver a intentarlo.');
        };
        try {
            synth.speak(utterance);
        } catch {
            utterance.onerror();
        }
    }

    function reset() {
        cancel();
        completed = index = offset = 0;
        state = 'idle';
        render();
    }

    toggle.addEventListener('click', () => {
        if (state === 'playing') {
            // Cancel at the last word boundary: pause/resume is inconsistent on mobile.
            cancel();
            state = 'paused';
            render();
            return;
        }
        if (state === 'ended') reset();
        cancel();
        updateVoice();
        synth.resume();
        state = 'playing';
        render();
        speak();
    });
    stop.addEventListener('click', reset);
    speed.addEventListener('change', () => {
        if (state !== 'playing') return;
        cancel();
        speak();
    });
    window.addEventListener('pagehide', reset);
    render();
})();
