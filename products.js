const products = [
    {
        id: "palier-mb-1114",
        name: "Palier Camión Mercedes Benz 1114",
        image: "palier_1114.jpg",
        description: "Palier trasero para Mercedes Benz 1114. Repuesto de alta calidad y durabilidad garantizada.",
        category: "Transmisión"
    },
    {
        id: "kit-embrague-mb-1114",
        name: "Kit Embrague Para M. Benz Camion 1114 Om 352",
        image: "kit_embrague_1114.jpg",
        description: "Kit de embrague completo para Mercedes Benz 1114 motor OM 352. Calidad superior para máxima durabilidad.",
        category: "Embragues"
    },
    {
        id: "servo-freno-mb-1114",
        name: "Servo Freno Mercedes Benz 1114",
        image: "servo_freno_1114.jpg",
        description: "Servo freno de potencia para Mercedes Benz 1114. Garantiza un frenado eficiente y seguro.",
        category: "Frenos"
    },
    {
        id: "alternador-mb-1112-1114",
        name: "Alternador Mercedes Benz 1112 1114",
        image: "alternador_mb.jpg",
        description: "Alternador compatible con Mercedes Benz 1112 y 1114. Alta confiabilidad y rendimiento eléctrico óptimo.",
        category: "Sistema eléctrico"
    },
    {
        id: "bomba-agua-mb-1114",
        name: "Bomba de Agua MB 1114 1517 1518",
        image: "bomba_agua_mb1114.jpg",
        description: "Bomba de agua completa para Mercedes Benz 1114, 1517 y 1518.",
        category: "Refrigeración"
    },
    {
        id: "bomba-freno-mb-1114-simple",
        name: "Bomba Freno M.benz 1114 Simple",
        image: "bomba_freno_mb1114.jpg",
        description: "Bomba de freno simple para Mercedes Benz 1114. Calidad asegurada.",
        category: "Frenos"
    },
    {
        id: "bomba-freno-mb-1114-doble",
        name: "Bomba Freno Mb 1114 Doble Circuito",
        image: "bomba_freno_mb1114_doble.jpg",
        description: "Bomba de freno doble circuito para Mercedes Benz 1114. Mayor seguridad y rendimiento.",
        category: "Frenos"
    },
    {
        id: "soporte-motor-mb-1114-3agujeros",
        name: "Soporte Motor 3 Agujeros Mercedes Benz 1114",
        image: "soporte_motor_mb1114.jpg",
        description: "Soporte de motor trasero con 3 agujeros para Mercedes Benz 1114. Alta resistencia.",
        category: "Motor"
    },
    {
        id: "soporte-radiador-mb-1112-1114",
        name: "Soporte De Radiador Mercedes Benz 1112 1114",
        image: "soporte_radiador_mb1114.jpg",
        description: "Soporte de radiador para Mercedes Benz 1112 y 1114. Excelente absorción de vibraciones.",
        category: "Refrigeración"
    },
    {
        id: "termostato-mb-multiple",
        name: "Termostato Mercedes Benz 1114/1214/1514/1618",
        image: "termostato_mb.jpg",
        description: "Termostato para múltiples modelos Mercedes Benz (1114, 1214, 1514, 1618).",
        category: "Refrigeración"
    },
    {
        id: "filtro-aire-mb-1114",
        name: "Filtro Aire 1114",
        image: "filtro_aire_mb1114.jpg",
        description: "Filtro de aire para Mercedes Benz 1114. Alta eficiencia de filtrado.",
        category: "Filtros"
    },
    {
        id: "filtro-combustible-mb-1114",
        name: "Filtro Combustible 1114",
        image: "filtro_combustible_mb1114.jpg",
        description: "Filtro de combustible para Mercedes Benz 1114. Protege el sistema de inyección.",
        category: "Filtros"
    },
    {
        id: "filtro-aceite-mb-1114",
        name: "Filtro De Aceite Mercedes Benz 1114",
        image: "filtro_aceite_mb1114.jpg",
        description: "Filtro de aceite de alta retención para Mercedes Benz 1114. Mantiene el motor limpio.",
        category: "Filtros"
    },
    {
        id: "filtro-aire-secundario-mb-1114",
        name: "Filtro Aire Secundario 1114",
        image: "filtro_aire_secundario_mb1114.jpg",
        description: "Filtro de aire secundario de seguridad para Mercedes Benz 1114.",
        category: "Filtros"
    },
    {
        id: "cruceta-mb-1114",
        name: "Cruceta Mercedes Benz 1114 1112 1517",
        image: "cruceta_mb1114.jpg",
        description: "Cruceta de cardan para Mercedes Benz 1114, 1112 y 1517. Alta durabilidad.",
        category: "Transmisión"
    },
    {
        id: "amortiguador-delantero-mb-1114",
        name: "Amortiguador Delantero Mercedes Benz 1114",
        image: "amortiguador_delantero_mb1114.jpg",
        description: "Amortiguador delantero de suspensión para Mercedes Benz 1114. Confort y estabilidad.",
        category: "Suspensión"
    },
    {
        id: "amortiguador-trasero-mb-1114",
        name: "Amortiguador Trasero Mercedes Benz 1114",
        image: "amortiguador_trasero_mb1114.jpg",
        description: "Amortiguador trasero reforzado para Mercedes Benz 1114. Carga segura.",
        category: "Suspensión"
    },
    {
        id: "amortiguador-cabina-mb-1114",
        name: "Amortiguador cabina Mercedes Benz 1114",
        image: "amortiguador_cabina_mb1114.jpg",
        description: "Amortiguador de cabina para Mercedes Benz 1114. Suaviza el movimiento de la cabina.",
        category: "Suspensión"
    },
    {
        id: "bomba-alimentadora-mb-multiple",
        name: "Bomba Alimentadora Benz 1114 1518 1620",
        image: "bomba_alimentadora_mb.jpg",
        description: "Bomba alimentadora de combustible para Mercedes Benz 1114, 1518 y 1620. Alto rendimiento.",
        category: "Motor"
    },
    {
        id: "turbo-mb-multiple",
        name: "Turbo Mercedes Benz 1114/1517/1518",
        image: "turbo_mb_1114.jpg",
        description: "Turbocompresor para motores Mercedes Benz. Aumenta la potencia y eficiencia.",
        category: "Motor"
    },
    {
        id: "flotante-combustible-mb-1114",
        name: "Flotante Combustible 1114",
        image: "flotante_combustible_mb1114.jpg",
        description: "Flotante de tanque de combustible para Mercedes Benz 1114. Medición precisa.",
        category: "Motor"
    },
    {
        id: "esparrago-palier-mb-1114",
        name: "Esparrago palier Mercedes Benz 1114",
        image: "esparrago_palier_mb1114.jpg",
        description: "Esparrago de palier para Mercedes Benz 1114. Acero de alta resistencia.",
        category: "Transmisión"
    },
    {
        id: "bulones-rueda-mb-1114",
        name: "Bulones Para Rueda Mercedes 1114",
        image: "bulones_rueda_mb1114.jpg",
        description: "Bulones de rueda de alta resistencia para Mercedes Benz 1114. Seguridad garantizada.",
        category: "Ruedas"
    },
    {
        id: "junta-tapa-cilindros-mb-1114",
        name: "Junta Tapa Cilindros M. Benz 1114",
        image: "junta_tapa_cilindros_mb1114.jpg",
        description: "Junta de tapa de cilindros para Mercedes Benz 1114. Sellado perfecto y resistencia térmica.",
        category: "Motor"
    },
    {
        id: "junta-tapa-valvula-mb-1114",
        name: "Junta Tapa De Valvula Mercedes Benz 1114",
        image: "junta_tapa_valvula_mb1114.jpg",
        description: "Junta de tapa de válvula para Mercedes Benz 1114. Previene fugas de aceite.",
        category: "Motor"
    },
    {
        id: "reten-valvula-mb-1114",
        name: "Reten Valvula Mercedes 1114",
        image: "reten_valvula_mb1114.jpg",
        description: "Juego de retenes de válvula para Mercedes Benz 1114. Calidad superior.",
        category: "Motor"
    },
    {
        id: "arbol-leva-mb-1114",
        name: "Arbol De Leva De Mercedes 1114",
        image: "arbol_leva_mb1114.jpg",
        description: "Arbol de levas para Mercedes Benz 1114. Precisión y potencia.",
        category: "Motor"
    },
    {
        id: "tapa-cilindros-mb-multiple",
        name: "Tapa De Cilindros Mercedes Benz 1114/1518",
        image: "tapa_cilindros_mb.jpg",
        description: "Tapa de cilindros completa para Mercedes Benz 1114 y 1518. Lista para montar.",
        category: "Motor"
    },
    {
        id: "tensor-alternador-curvo-mb-multiple",
        name: "Tensor De Alternador Curvo M.benz 1114/1517",
        image: "tensor_alternador_curvo_mb1114.jpg",
        description: "Tensor de alternador curvo para Mercedes Benz 1114 y 1517. Ajuste preciso.",
        category: "Motor"
    },
    {
        id: "buje-alternador-mb-multiple",
        name: "Buje Acero Goma Alternador Mercedes Benz 1114 1518 1620",
        image: "buje_alternador_mb.jpg",
        description: "Buje de acero y goma para alternador de Mercedes Benz 1114, 1518 y 1620. Absorción de vibraciones.",
        category: "Motor"
    },
    {
        id: "optica-mb-1114",
        name: "Optica Mercedes Benz 1114",
        image: "optica_mb1114.jpg",
        description: "Óptica delantera para Mercedes Benz 1114. Excelente iluminación y visibilidad.",
        category: "Iluminación"
    },
    {
        id: "soporte-cardan-mb-1114",
        name: "Soporte Cardan Reforma Flotante 40mm MB 1114/1517",
        image: "soporte_cardan_mb1114.jpg",
        description: "Soporte de cardan con reforma flotante de 40mm para Mercedes Benz 1114 y 1517. Mayor durabilidad.",
        category: "Transmisión"
    },
    {
        id: "ruleman-rueda-delantera-interno-mb-1114",
        name: "Ruleman Rueda Delantera Interno Mercedes 1114",
        image: "ruleman_rueda_delantera_interno_mb1114.jpg",
        description: "Ruleman de rueda delantera interno para Mercedes Benz 1114. Alta capacidad de carga.",
        category: "Ruedas"
    },
    {
        id: "ruleman-rueda-delantera-exterior-mb-1114",
        name: "Ruleman Rueda Delantera Exterior Mercedes 1114",
        image: "ruleman_rueda_delantera_exterior_mb1114.jpg",
        description: "Ruleman de rueda delantera exterior para Mercedes Benz 1114. Rodamiento suave.",
        category: "Ruedas"
    },
    {
        id: "reten-rueda-delantera-mb-1114",
        name: "Retén Rueda Delantera Mercedes Benz 1114",
        image: "reten_rueda_delantera_mb1114.jpg",
        description: "Retén de rueda delantera para Mercedes Benz 1114. Máxima protección y durabilidad.",
        category: "Ruedas"
    },
    {
        id: "reten-rueda-trasera-mb-1114",
        name: "Reten Rueda Trasera Mercedes Benz 1114",
        image: "reten_rueda_trasera_mb1114.jpg",
        description: "Retén de rueda trasera para Mercedes Benz 1114. Alta resistencia y durabilidad.",
        category: "Ruedas"
    },
    {
        id: "reten-distribucion-mb-multiple",
        name: "Retén Distribución Mercedes Benz 608 911 1112 1114 1517 1518",
        image: "reten_distribucion_mb_multiple.jpg",
        description: "Retén de distribución para múltiples modelos Mercedes Benz (608-1518). Calidad garantizada.",
        category: "Motor"
    },
    {
        id: "valvula-gobernadora-mb-universal",
        name: "Valvula Gobernadora Mercedes Benz Universal",
        image: "valvula_gobernadora_mb_universal.jpg",
        description: "Válvula gobernadora universal para circuitos de aire Mercedes Benz. Control y seguridad.",
        category: "Frenos"
    }
];

// Helper to find a product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Ensure it's available globally
window.productsData = products;
window.getProductById = getProductById;
