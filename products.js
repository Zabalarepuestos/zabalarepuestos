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
    },
    {
        id: "cubretuercas-32",
        name: "CubreTuercas 32",
        image: "cubretuercas_32.jpg",
        description: "Cubre tuercas cromado medida 32mm. Estética y protección para sus ruedas.",
        category: "Ruedas"
    },
    {
        id: "guia-guardabarro-1114",
        name: "Guia De Guardabarro 1114",
        image: "guia_guardabarro_1114.jpg",
        description: "Guía de guardabarro para Mercedes Benz 1114. Repuesto de alta calidad y resistencia.",
        category: "Carrocería"
    },
    {
        id: "guardabarro-delantero-1114",
        name: "Guardabarro Delantero Mercedes Benz 1114",
        image: "guardabarro_delantero_mb1114.jpg",
        description: "Guardabarro delantero para Mercedes Benz 1114. Fabricado en material resistente para larga duración.",
        category: "Carrocería"
    },
    {
        id: "juego-cubre-opticas-1114",
        name: "Juego De Cubre Opticas Mercedes Benz 1114",
        image: "juego_cubre_opticas_mb1114.jpg",
        description: "Juego de cubre ópticas para Mercedes Benz 1114. Diseño clásico y ajuste perfecto.",
        category: "Iluminación"
    },
    {
        id: "palanca-cambios-1114",
        name: "Palanca de cambios Mercedes Benz 1114",
        image: "palanca_cambios_mb1114.jpg",
        description: "Palanca de cambios para Mercedes Benz 1114. Repuesto robusto y confiable.",
        category: "Transmisión"
    },
    {
        id: "torre-palanca-1114-1518-reforma",
        name: "Torre Palanca Cambios Mercedes Benz 1114-1518 Reforma",
        image: "torre_palanca_mb1114_1518_reforma.jpg",
        description: "Torre de palanca de cambios con reforma para Mercedes Benz 1114 y 1518. Mejora la precisión y durabilidad del sistema.",
        category: "Transmisión"
    },
    {
        id: "cano-guia-varilla-1114",
        name: "CAÑO GUIA VARILLA NIVEL ACEITE 1114",
        image: "cano_guia_varilla_1114.jpg",
        description: "Caño guía para varilla de nivel de aceite de Mercedes Benz 1114. Fabricado con materiales de alta resistencia.",
        category: "Motor"
    },
    {
        id: "varilla-nivel-aceite-650mm-1114-1517",
        name: "VARILLA NIVEL ACEITE 650mm. 1114/1517",
        image: "varilla_nivel_aceite_650mm.jpg",
        description: "Varilla de nivel de aceite de 650mm para Mercedes Benz 1114 y 1517. Medición precisa y fácil lectura.",
        category: "Motor"
    },
    {
        id: "tapon-block-tacita-30mm-todos",
        name: "TAPON BLOCK (TACITA) 30mm. TODOS",
        image: "tapon_block_tacita_30mm.jpg",
        description: "Tapón de block tipo tacita de 30mm. Compatible con diversos modelos. Fabricado en material resistente para asegurar un sellado perfecto.",
        category: "Motor"
    },
    {
        id: "tapon-arbol-levas-60mm-todos",
        name: "TAPON ARBOL DE LEVAS 60mm. TODOS",
        image: "tapon_arbol_levas_60mm.jpg",
        description: "Tapón de árbol de levas de 60mm. Compatible con todos los modelos. Asegura un sellado hermético y duradero.",
        category: "Motor"
    },
    {
        id: "cano-entrada-aceite-1114",
        name: "CAÑO ENTRADA ACEITE 1114",
        image: "cano_entrada_aceite_1114.jpg",
        description: "Caño de entrada de aceite para Mercedes Benz 1114. Reemplazo de alta calidad para asegurar el correcto flujo de lubricación.",
        category: "Motor"
    },
    {
        id: "codo-descarga-turbo-om352a",
        name: "CODO DESCARGA TURBO AL CARTER OM352A CHAPA",
        image: "codo_descarga_turbo_om352a.jpg",
        description: "Codo de descarga de turbo al cárter para motor Mercedes Benz OM352A. Fabricado en chapa de alta resistencia para un sellado y durabilidad óptimos.",
        category: "Motor"
    },
    {
        id: "bulon-bancada-15x121-om352-366",
        name: "BULON BANCADA BLOCK 15X121 OM352/366",
        image: "bulon_bancada_15x121.jpg",
        description: "Bulón de bancada de block 15x121 para motores Mercedes Benz OM352 y OM366. Repuesto de alta resistencia y precisión para el ensamble del motor.",
        category: "Motor"
    },
    {
        id: "tapa-filtro-gasoil-doble-reforma",
        name: "TAPA FILTRO GAS-OIL DOBLE 1/2 LITRO REFORMA (UNIDAD SELLADA) OM352/366",
        image: "tapa_filtro_gasoil_doble_reforma.jpg",
        description: "Tapa de filtro gas-oil doble 1/2 litro reforma, unidad sellada. Compatible con OM352/366.",
        category: "Filtros"
    },
    {
        id: "juego-junta-motor-st-1114-om352",
        name: "JGO.JUNTA MOTOR S/T.1114OM352",
        image: "juego_junta_motor_om352.jpg",
        description: "Juego de juntas de motor S/T (Sin Tapa) para Mercedes Benz 1114 motor OM352. Marca SABO.",
        category: "Motor"
    },
    {
        id: "valvula-bomba-aceite-om352",
        name: "VALVULA BOMBA ACEITE OM352",
        image: "valvula_bomba_aceite_om352.jpg",
        description: "Válvula de bomba de aceite para Mercedes Benz motor OM352. Garantiza la presión correcta de lubricación.",
        category: "Motor"
    },
    {
        id: "avance-arbol-levas-importado-om352-366",
        name: "AVANCE ARBOL LEVAS IMPORTADO OM352/366",
        image: "avance_arbol_levas_importado_om352.jpg",
        description: "Avance de árbol de levas importado para motores Mercedes Benz OM352 y OM366. Calidad superior y precisión.",
        category: "Motor"
    },
    {
        id: "soporte-bomba-inyectora-om352",
        name: "SOPORTE BOMBA INYECTORA OM352",
        image: "soporte_bomba_inyectora_om352.jpg",
        description: "Soporte de bomba inyectora para Mercedes Benz OM352. Pieza de fundición de alta resistencia.",
        category: "Motor"
    },
    {
        id: "botador-valvula-imp-om352-366",
        name: "BOTADOR VALVULA IMP. OM352/366",
        image: "botador_valvula_imp_om352.jpg",
        description: "Botador de válvula importado para motores Mercedes Benz OM352 y OM366. Alta durabilidad y precisión.",
        category: "Motor"
    },
    {
        id: "chaveta-arbol-levas-mnuevo-om352-366",
        name: "CHAVETA ARBOL LEVAS M/NUEVO OM352/366",
        image: "chaveta_arbol_levas_mnuevo_om352.jpg",
        description: "Chaveta de árbol de levas modelo nuevo para Mercedes Benz OM352 y OM366. Ajuste perfecto.",
        category: "Motor"
    },
    {
        id: "registro-valvula-ctuerca-om352-366",
        name: "REGISTRO VALVULA C/TUERCA OM352/366",
        image: "registro_valvula_ctuerca_om352.jpg",
        description: "Registro de válvula con tuerca para Mercedes Benz OM352 y OM366. Ajuste preciso del juego de válvulas.",
        category: "Motor"
    },
    {
        id: "plaqueta-arbol-levas-mviejo-om352",
        name: "PLAQUETA ARBOL LEVAS M/VIEJO OM352",
        image: "plaqueta_arbol_levas_mviejo_om352.jpg",
        description: "Plaqueta de fijación de árbol de levas modelo viejo para Mercedes Benz OM352. Material resistente.",
        category: "Motor"
    },
    {
        id: "seguro-eje-balancines-om352-366",
        name: "SEGURO EJE BALANCINES OM352/366",
        image: "seguro_eje_balancines_om352.jpg",
        description: "Seguro de eje de balancines para Mercedes Benz OM352 y OM366. Material de alta resistencia.",
        category: "Motor"
    },
    {
        id: "engranaje-arbol-levas-grande-mv-om352-zf",
        name: "ENGRANAJE ARBOL LEVAS GRANDE M/VJO.OM352 ZF",
        image: "engranaje_arbol_levas_grande_mv_om352.jpg",
        description: "Engranaje de árbol de levas grande modelo viejo para Mercedes Benz OM352 (ZF). Alta precisión y durabilidad.",
        category: "Motor"
    },
    {
        id: "eje-balancin-om352-366",
        name: "EJE BALANCIN OM352/366",
        image: "eje_balancin_om352.jpg",
        description: "Eje de balancín para Mercedes Benz OM352 y OM366. Componente esencial para el sistema de distribución.",
        category: "Motor"
    },
    {
        id: "prisionero-eje-balancin-om352-366",
        name: "PRISIONERO EJE BALANCIN OM352/366",
        image: "prisionero_eje_balancin_om352.jpg",
        description: "Prisionero de eje de balancín para Mercedes Benz OM352 y OM366. Fijación segura y resistente.",
        category: "Motor"
    },
    {
        id: "plaqueta-arbol-levas-mnuevo-om352-366",
        name: "PLAQUETA ARBOL LEVAS M/NUEVO OM352/366",
        image: "plaqueta_arbol_levas_mnuevo_om352.jpg",
        description: "Plaqueta de fijación de árbol de levas modelo nuevo para Mercedes Benz OM352 y OM366. Material resistente.",
        category: "Motor"
    },
    {
        id: "balancin-valvulas-esc-izq-om352-366",
        name: "BALANCIN VALVULAS ESC. (IZQ.) OM352/366",
        image: "balancin_valvulas_esc_izq_om352.jpg",
        description: "Balancín de válvulas de escape (izquierdo) para Mercedes Benz OM352 y OM366. Alta resistencia.",
        category: "Motor"
    },
    {
        id: "resorte-entre-balancines-om352-366",
        name: "RESORTE ENTRE BALANCINES OM352/366",
        image: "resorte_entre_balancines_om352.jpg",
        description: "Resorte ubicado entre balancines para Mercedes Benz OM352 y OM366. Correcta tensión y funcionamiento.",
        category: "Motor"
    },
    {
        id: "avance-bomba-inyectora-om352-314",
        name: "AVANCE BOMBA INYECTORA OM352/314",
        image: "avance_bomba_inyectora_om352_314.jpg",
        description: "Avance de bomba inyectora para Mercedes Benz OM352 y OM314. Optimiza la inyección de combustible.",
        category: "Motor"
    },
    {
        id: "varilla-lev-valvula-om352-366",
        name: "VARILLA LEV. VALVULA (x12) OM352/366",
        image: "varilla_lev_valvula_om352.jpg",
        description: "Varilla levanta válvula (juego x12) para Mercedes Benz OM352 y OM366. Alta resistencia y durabilidad.",
        category: "Motor"
    },
    {
        id: "soporte-balancin-nros-2-5-6-om352-366",
        name: "SOPORTE BALANCIN (NROS: 2-5-6) OM352/366",
        image: "soporte_balancin_nros_2_5_6_om352.jpg",
        description: "Soporte de balancín (números 2, 5 y 6) para Mercedes Benz OM352 y OM366. Fundición de alta calidad.",
        category: "Motor"
    },
    {
        id: "soporte-balancin-nro-1-om352-366",
        name: "SOPORTE BALANCIN (NRO: 1) OM352/366",
        image: "soporte_balancin_nro_1_om352.jpg",
        description: "Soporte de balancín (número 1) para Mercedes Benz OM352 y OM366. Fundición de alta calidad.",
        category: "Motor"
    },
    {
        id: "bulon-plaqueta-arbol-levas-8x24-om352",
        name: "BULON PLAQUETA ARBOL LEVAS 8x24 OM352",
        image: "bulon_plaqueta_arbol_levas_8x24_om352.jpg",
        description: "Bulón de plaqueta de árbol de levas (medida 8x24) para Mercedes Benz OM352. Fijación segura.",
        category: "Motor"
    },
    {
        id: "tuerca-registro-valvula-om352-366",
        name: "TUERCA REGISTRO VALVULA OM352/366",
        image: "tuerca_registro_valvula_om352.jpg",
        description: "Tuerca para registro de válvula Mercedes Benz OM352 y OM366. Asegura un ajuste correcto.",
        category: "Motor"
    }
];

// Helper to find a product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Ensure it's available globally
window.productsData = products;
window.getProductById = getProductById;
