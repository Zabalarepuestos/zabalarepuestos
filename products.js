const products = [
    {
        id: "P001",
        name: "ELEMENTO F/ACEITE 1114/1517/1518 OM352",
        brand: "Mercedes Benz",
        code: "0011843925",
        image: "./img/products/elemento-aceite-om352.jpg",
        description: "Filtro de aceite tipo elemento para motores Mercedes Benz OM352, compatible con modelos 1114, 1517 y 1518. Calidad garantizada para el cuidado de su motor."
    },
    {
        id: "P002",
        name: "CONJ. PLACA DISCO CRAPODINA DE EMBRAGUE 310mm 10 est LUK OM352 1114/1517",
        brand: "Mercedes Benz",
        code: "0002504615 / 3482654113 / 1878654433 / 3151000808",
        image: "./img/products/conjunto-embrague-om352.jpg",
        description: "Conjunto de embrague completo (Placa, Disco y Crapodina) de 310mm y 10 estrías. Marca LUK, compatible con motores Mercedes Benz OM352 en modelos 1114 and 1517."
    },
    {
        id: "P003",
        name: "TAPA FILTRO GAS-OIL DOBLE 1/2 LITRO REFORMA (UNIDAD SELLADA) OM352/366",
        brand: "Mercedes Benz",
        code: "0000924808",
        image: "./img/products/tapa-filtro-gasoil-om352.jpg",
        description: "Tapa para filtro de gasoil doble de 1/2 litro, versión reforma para unidad sellada. Compatible con motores Mercedes Benz OM352 y OM366. Alta resistencia y durabilidad."
    },
    {
        id: "P004",
        name: "TOBERA 1517/1620 OM352/366",
        brand: "Mercedes Benz",
        code: "9430084247",
        image: "./img/products/tobera-mercedes-om352-366.jpg",
        description: "Tobera de inyección para motores Mercedes Benz OM352 y OM366, compatible con modelos 1517 y 1620. Componente de alta precisión para el sistema de combustible."
    },
    {
        id: "P005",
        name: "JGO.JUNTA MOTOR S/T.1114OM352",
        brand: "Mercedes Benz",
        code: "48806X",
        image: "./img/products/juego-juntas-om352.jpg",
        description: "Juego de juntas de motor completo (sin tapa) para Mercedes Benz 1114 con motor OM352. Incluye todas las juntas necesarias para el block y accesorios. Calidad Sabó para un sellado perfecto."
    },
    {
        id: "P006",
        name: "RETEN DISTRIBUCION 710/1114/1517/1215/1620 OM352/364/366 65/90/15 SABO",
        brand: "Mercedes Benz",
        code: "0069975446",
        image: "./img/products/reten-distribucion-om352.jpg",
        description: "Retén de distribución de 65/90/15mm. Marca SABO, compatible con una amplia gama de motores Mercedes Benz (OM352, OM364, OM366) en modelos como 710, 1114, 1517, 1215 y 1620."
    },
    {
        id: "P007",
        name: "SILENCIADOR OH1314 MOTOR TRAS. OM352",
        brand: "Mercedes Benz",
        code: "3214906101",
        image: "./img/products/silenciador-oh1314-om352.jpg",
        description: "Silenciador de escape para chasis de ómnibus OH1314 con motor trasero OM352. Fabricado con materiales resistentes a la corrosión y altas temperaturas para un rendimiento óptimo."
    },
    {
        id: "P008",
        name: "VALVULA CABEZAL F/ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3521840032",
        image: "./img/products/valvula-cabezal-filtro-om352.jpg",
        description: "Válvula para el cabezal del filtro de aceite, compatible con motores Mercedes Benz OM352. Componente esencial para mantener la presión de aceite correcta en el sistema."
    },
    {
        id: "P009",
        name: "VASO FILTRO ACEITE ALUMINIO OM352",
        brand: "Mercedes Benz",
        code: "3461800011",
        image: "./img/products/vaso-filtro-aceite-aluminio-om352.jpg",
        description: "Vaso para filtro de aceite fabricado en aluminio de alta calidad. Diseñado específicamente para motores Mercedes Benz OM352, garantizando un ajuste perfecto y durabilidad."
    },
    {
        id: "P010",
        name: "VASO FILTRO ACEITE USADO OM352",
        brand: "Mercedes Benz",
        code: "3461800011",
        image: "./img/products/vaso-filtro-aceite-usado-om352.jpg",
        description: "Vaso para filtro de aceite usado/reacondicionado para motores Mercedes Benz OM352. Una opción económica y funcional con la garantía de calidad original."
    },
    {
        id: "P011",
        name: "VALVULA BOMBA ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3521800015",
        image: "./img/products/valvula-bomba-aceite-om352.jpg",
        description: "Válvula para bomba de aceite compatible con motores Mercedes Benz OM352. Fabricada bajo estándares originales para asegurar el flujo y presión correctos del lubricante."
    },
    {
        id: "P012",
        name: "TURBO 1518 OM352 IMPORTADO",
        brand: "Mercedes Benz",
        code: "3520965799",
        image: "./img/products/turbo-mercedes-1518.jpg",
        description: "Turbocompresor importado de alta performance para Mercedes Benz 1518 con motor OM352. Calidad superior para optimizar la potencia y eficiencia de su motor."
    },
    {
        id: "P013",
        name: "BOTADOR VALVULA IMP. OM352/366",
        brand: "Mercedes Benz",
        code: "3520540501",
        image: "./img/products/botador-valvula-om352-366.jpg",
        description: "Botador de válvula importado para motores Mercedes Benz OM352 and OM366. Fabricado con acero de alta resistencia para un funcionamiento silencioso y duradero del tren de válvulas."
    },
    {
        id: "P014",
        name: "RAMPA BALANCINES COMPLETA OM352/366",
        brand: "Mercedes Benz",
        code: "50050",
        image: "./img/products/rampa-balancines-om352-366.jpg",
        description: "Rampa de balancines completa para motores Mercedes Benz OM352 y OM366. Incluye eje, balancines, resortes y soportes. Lista para instalar y garantizar una correcta apertura de válvulas."
    },
    {
        id: "P015",
        name: "SOPORTE BOMBA INYECTORA OM352",
        brand: "Mercedes Benz",
        code: "3220760235",
        image: "./img/products/soporte-bomba-inyectora-om352.jpg",
        description: "Soporte para bomba inyectora de motores Mercedes Benz OM352. Fabricado en material de alta resistencia para un montaje preciso y seguro de la bomba inyectora."
    },
    {
        id: "P016",
        name: "BOMBA ALIMENTADORA OM352 1114",
        brand: "Mercedes Benz",
        code: "0000900250",
        image: "./img/products/bomba-alimentadora-om352.jpg",
        description: "Bomba alimentadora de combustible para Mercedes Benz 1114 con motor OM352. Incluye vaso decantador de vidrio. Repuesto de alta calidad para asegurar el suministro de gasoil al motor."
    },
    {
        id: "P017",
        name: "AVANCE ARBOL LEVAS IMPORTADO OM352/366",
        brand: "Mercedes Benz",
        code: "3660700245",
        image: "./img/products/avance-arbol-levas-om352.jpg",
        description: "Engranaje de avance para árbol de levas, calidad importada. Compatible con motores Mercedes Benz OM352 y OM366. Componente crítico para la correcta sincronización del motor."
    },
    {
        id: "P018",
        name: "REGISTRO VALVULA C/TUERCA OM352/366",
        brand: "Mercedes Benz",
        code: "3120550321",
        image: "./img/products/registro-valvula-om352.jpg",
        description: "Tornillo de registro de válvula con tuerca para motores Mercedes Benz OM352 and OM366. Pieza fundamental para el ajuste preciso de la luz de válvulas."
    },
    {
        id: "P019",
        name: "CHAVETA ARBOL LEVAS M/NUEVO OM352/366",
        brand: "Mercedes Benz",
        code: "006885006039",
        image: "./img/products/chaveta-arbol-levas-om352.jpg",
        description: "Chaveta para árbol de levas (modelo nuevo) compatible con motores Mercedes Benz OM352 and OM366. Fabricada con materiales de alta resistencia para una fijación segura del engranaje."
    },
    {
        id: "P020",
        name: "EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3120500231",
        image: "./img/products/eje-balancin-om352.jpg",
        description: "Eje de balancines para motores Mercedes Benz OM352 and OM366. Rectificado de precisión para asegurar un movimiento suave y equilibrado de los balancines."
    },
    {
        id: "P021",
        name: "RESORTE PUNTA EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3129930005",
        image: "./img/products/resorte-eje-balancin-om352.jpg",
        description: "Resorte de presión para la punta del eje de balancines, compatible con motores Mercedes Benz OM352 y OM366. Mantiene la tensión adecuada en el conjunto de balancines."
    },
    {
        id: "P022",
        name: "PRISIONERO EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "000417006001",
        image: "./img/products/prisionero-eje-balancin-om352.jpg",
        description: "Tornillo prisionero para la fijación del eje de balancines en motores Mercedes Benz OM352 y OM366. Componente de precisión para mantener la estabilidad del conjunto."
    },
    {
        id: "P023",
        name: "PLAQUETA ARBOL LEVAS M/NUEVO OM352/366",
        brand: "Mercedes Benz",
        code: "3520520762",
        image: "./img/products/plaqueta-arbol-levas-om352.jpg",
        description: "Plaqueta de fijación para árbol de levas (modelo nuevo) compatible con motores Mercedes Benz OM352 y OM366. Asegura la posición axial del árbol de levas."
    },
    {
        id: "P024",
        name: "PLAQUETA ARBOL LEVAS M/VIEJO OM352",
        brand: "Mercedes Benz",
        code: "3120520262",
        image: "./img/products/plaqueta-arbol-levas-viejo-om352.jpg",
        description: "Plaqueta de fijación para árbol de levas (modelo viejo) para motores Mercedes Benz OM352. Componente original para restauraciones o reparaciones de motores clásicos."
    },
    {
        id: "P025",
        name: "ENGRANAJE ARBOL LEVAS GRANDE M/VJO.OM352 ZF",
        brand: "Mercedes Benz",
        code: "3120520601",
        image: "./img/products/engranaje-arbol-levas-om352-grande.jpg",
        description: "Engranaje de árbol de levas grande (modelo viejo) para motores Mercedes Benz OM352. Fabricado bajo especificaciones ZF para garantizar máxima precisión y durabilidad en la distribución."
    },
    {
        id: "P026",
        name: "SEGURO EJE BALANCINES OM352/366",
        brand: "Mercedes Benz",
        code: "3129930225",
        image: "./img/products/seguro-eje-balancines-om352.jpg",
        description: "Seguro para eje de balancines en motores Mercedes Benz OM352 y OM366. Pieza de acero templado para asegurar la retención lateral de los balancines en el eje."
    },
    {
        id: "P027",
        name: "AVANCE ARBOL LEVAS OM352/366",
        brand: "Mercedes Benz",
        code: "3620700045",
        image: "./img/products/avance-arbol-levas-om352-362.jpg",
        description: "Engranaje de avance para árbol de levas compatible con motores Mercedes Benz OM352 y OM366. Componente de alta precisión para la sincronización del sistema de distribución."
    },
    {
        id: "P028",
        name: "TUERCA REGISTRO VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3159900051",
        image: "./img/products/tuerca-registro-valvula-om352.jpg",
        description: "Tuerca para tornillo de registro de válvula, compatible con motores Mercedes Benz OM352 y OM366. Pieza esencial para asegurar el ajuste de la luz de válvulas."
    },
    {
        id: "P029",
        name: "RESORTE VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520530320",
        image: "./img/products/resorte-valvula-om352.jpg",
        description: "Resorte de válvula para motores Mercedes Benz OM352 y OM366. Fabricado con acero de alta calidad para mantener la elasticidad y tensión necesarias en el tren de válvulas."
    },
    {
        id: "P030",
        name: "VARILLA LEV. VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520540205 / 3520540005",
        image: "./img/products/varilla-valvula-om352.jpg",
        description: "Varilla levanta válvula para motores Mercedes Benz OM352 y OM366. Calidad importada, diseñada para soportar las exigencias del tren de válvulas con máxima precisión."
    },
    {
        id: "P031",
        name: "CHAVETA VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3430537027 / 3120530127",
        image: "./img/products/chaveta-valvula-om352.jpg",
        description: "Chaveta de válvula (seguro) para motores Mercedes Benz OM352 y OM366. Pieza de seguridad fundamental para la retención del platillo y resorte de válvula."
    },
    {
        id: "P032",
        name: "BUJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3440550050",
        image: "./img/products/buje-balancin-om352.jpg",
        description: "Buje de balancín para motores Mercedes Benz OM352 y OM366. Fabricado en bronce de alta calidad para reducir la fricción y el desgaste en el eje de balancines."
    },
    {
        id: "P033",
        name: "ENGRANAJE FIJO BOMBA INY. OM352/366",
        brand: "Mercedes Benz",
        code: "3440777012 / 3520770412",
        image: "./img/products/engranaje-fijo-bomba-inyectora-om352.jpg",
        description: "Engranaje fijo para bomba inyectora compatible con motores Mercedes Benz OM352 y OM366. Pieza de precisión para asegurar la correcta transferencia de movimiento al sistema de inyección."
    },
    {
        id: "P034",
        name: "SOPORTE BALANCIN (NROS: 2-5-6) OM352/366",
        brand: "Mercedes Benz",
        code: "3520550410",
        image: "./img/products/soporte-balancin-om352.jpg",
        description: "Soporte de balancín (números 2, 5 y 6) para motores Mercedes Benz OM352 y OM366. Fabricado en fundición de alta resistencia para un anclaje firme del eje de balancines."
    },
    {
        id: "P035",
        name: "JGO. CONOS UNION EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3120550553 / 3120550653 / 9934701",
        image: "./img/products/conos-union-eje-balancin-om352.jpg",
        description: "Juego de conos de unión para eje de balancines, compatible con motores Mercedes Benz OM352 y OM366. Incluye conos y resorte para asegurar la alineación perfecta del conjunto."
    },
    {
        id: "P036",
        name: "CHAVETA ARBOL LEVAS M/VIEJO 6x10mm.OM352",
        brand: "Mercedes Benz",
        code: "006888006006",
        image: "./img/products/chaveta-arbol-levas-viejo-6x10-om352.jpg",
        description: "Chaveta para árbol de levas (modelo viejo) de 6x10mm. Especialmente diseñada para motores Mercedes Benz OM352 clásicos, asegurando un encastre perfecto."
    },
    {
        id: "P037",
        name: "PLATILLO VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3220530125",
        image: "./img/products/platillo-valvula-om352.jpg",
        description: "Platillo de válvula para motores Mercedes Benz OM352 y OM366. Componente de precisión para el correcto apoyo del resorte de válvula."
    },
    {
        id: "P038",
        name: "AVANCE BOMBA INYECTORA OM352/314",
        brand: "Mercedes Benz",
        code: "3520701345",
        image: "./img/products/avance-bomba-inyectora-om352.jpg",
        description: "Engranaje de avance para bomba inyectora compatible con motores Mercedes Benz OM352 and OM314. Pieza clave para la puesta a punto y sincronización de la inyección diésel."
    },
    {
        id: "P039",
        name: "VOLANTE MOTOR C/CORONA 375MM 125DTES OM352/366",
        brand: "Mercedes Benz",
        code: "3520303905",
        image: "./img/products/volante-motor-om352.jpg",
        description: "Volante de motor con corona de arranque de 375mm and 125 dientes. Compatible con motores Mercedes Benz OM352 and OM366. Fabricado con fundición de alta resistencia para un balanceo perfecto."
    },
    {
        id: "P041",
        name: "ENGRANAJE ARBOL LEVAS CHICO M/VJO. OM352",
        brand: "Mercedes Benz",
        code: "3520770014",
        image: "./img/products/engranaje-arbol-levas-om352-chico.jpg",
        description: "Engranaje de árbol de levas chico (modelo viejo) para motores Mercedes Benz OM352. Pieza de distribución fundamental para la sincronización del motor, fabricada bajo estándares originales."
    },
    {
        id: "P042",
        name: "SOPORTE BALANCIN (NROS: 3-4) OM352/366",
        brand: "Mercedes Benz",
        code: "3520550210",
        image: "./img/products/soporte-balancin-3-4-om352.jpg",
        description: "Soporte de balancín (números 3 y 4) para motores Mercedes Benz OM352 and OM366. Fabricado en fundición de alta resistencia para un anclaje firme del eje de balancines en las posiciones centrales."
    },
    {
        id: "P043",
        name: "BOTADOR VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520540501",
        image: "./img/products/botador-valvula-om352-original.jpg",
        description: "Botador de válvula para motores Mercedes Benz OM352 and OM366. Componente de precisión para el correcto funcionamiento del sistema de distribución."
    },
    {
        id: "P044",
        name: "CHAVETA CIGÜEÑAL 8x13x32mm. OM352/366",
        brand: "Mercedes Benz",
        code: "006888008004",
        image: "./img/products/chaveta-ciguenal-om352.png",
        description: "Chaveta para cigüeñal de 8x13x32mm, compatible con motores Mercedes Benz OM352 and OM366. Pieza fundamental para la fijación del engranaje de distribución en el cigüeñal."
    },
    {
        id: "P045",
        name: "BULON VOLANTE MOTOR 12x25 OM352",
        brand: "Mercedes Benz",
        code: "3529902201",
        image: "./img/products/bulon-volante-motor-om352.jpg",
        description: "Bulón de volante de motor de 12x25mm, compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para garantizar un ajuste seguro and duradero del volante."
    },
    {
        id: "P046",
        name: "ESPIGA BIELA MOTOR 6mm.STD OM352",
        brand: "Mercedes Benz",
        code: "000007006100",
        image: "./img/products/espiga-biela-om352.jpg",
        description: "Espiga de biela de motor, medida 6mm estándar. Compatible con motores Mercedes Benz OM352. Pieza de precisión para asegurar la correcta alineación and montaje del conjunto de biela."
    },
    {
        id: "P047",
        name: "BULON CONTRAPESO CIGÜEÑAL LARGO OM352",
        brand: "Mercedes Benz",
        code: "3520310071",
        image: "./img/products/bulon-contrapeso-ciguenal-largo-om352.jpg",
        description: "Bulón largo para contrapeso de cigüeñal, compatible with motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para soportar las fuerzas centrífugas del cigüeñal."
    },
    {
        id: "P048",
        name: "CORONA ARRANQUE ANCHA 125 D. OM352",
        brand: "Mercedes Benz",
        code: "3120320105",
        image: "./img/products/corona-arranque-om352-ancha.jpg",
        description: "Corona de arranque modelo ancho con 125 dientes. Compatible with motores Mercedes Benz OM352. Fabricada en acero templado para resistir el impacto del piñón de arranque."
    },
    {
        id: "P049",
        name: "RETEN BANCADA (JUEGO EMPAQUETADURA) ELRING OM352",
        brand: "Mercedes Benz",
        code: "0009979641",
        image: "./img/products/reten-bancada-om352-elring.jpg",
        description: "Juego de empaquetadura (retén de bancada) marca Elring para motores Mercedes Benz OM352. Calidad alemana superior para asegurar el sellado perfecto del cárter and bloque motor."
    },
    {
        id: "P050",
        name: "ENGRANAJE CIGÜEÑAL (-0.03) STD OM352/366",
        brand: "Mercedes Benz",
        code: "3520520003",
        image: "./img/products/engranaje-ciguenal-om352-std.jpg",
        description: "Engranaje de cigüeñal medida estándar con tolerancia -0.03. Compatible with motores Mercedes Benz OM352 and OM366. Pieza crítica de distribución para una sincronización exacta."
    },
    {
        id: "P051",
        name: "PISTA DISTRIBUCION C/CHAV. IMP OM352/366",
        brand: "Mercedes Benz",
        code: "3140350214 / 3220350014",
        image: "./img/products/pista-distribucion-om352.jpg",
        description: "PISTA DE DISTRIBUCION C/CHAVETERA INTEGRADA. CALIDAD IMPORTADA (IMP) PARA MOTORES MERCEDES BENZ OM352 Y OM366. COMPONENTE ESENCIAL PARA EL CORRECTO POSICIONAMIENTO DEL RETEN DE DISTRIBUCION."
    },
    {
        id: "P052",
        name: "BULON TAPA CILINDRO 12X111 12.9 (x25) OM352/366",
        brand: "Mercedes Benz",
        code: "3669900301",
        image: "./img/products/bulon-tapa-cilindro-om352-12x111.jpg",
        description: "Bulón de tapa de cilindro de alta resistencia (grado 12.9), medida 12x111mm. Compatible with motores Mercedes Benz OM352 and OM366. Se comercializa por juego de 25 unidades para asegurar la sustitución completa."
    },
    {
        id: "P053",
        name: "BULON PUNTA CIGÜEÑAL LARGO 24x55 OM352",
        brand: "Mercedes Benz",
        code: "3149901001",
        image: "./img/products/bulon-punta-ciguenal-om352.jpg",
        description: "Bulón de punta de cigüeñal modelo largo, medida 24x55mm. Compatible with motores Mercedes Benz OM352. Fabricado with acero de alta resistencia para un anclaje seguro de la polea and engranajes."
    },
    {
        id: "P054",
        name: "ENGRANAJE CIGÜEÑAL (-0.05) STD OM352/366",
        brand: "Mercedes Benz",
        code: "3520520003",
        image: "./img/products/engranaje-ciguenal-om352-005.jpg",
        description: "Engranaje de cigüeñal medida estándar con tolerancia -0.05. Compatible with motores Mercedes Benz OM352 and OM366. Componente de precisión para la cadena cinemática del motor."
    },
    {
        id: "P055",
        name: "CORONA ARRANQUE ANGOSTA 125 D. OM352/366",
        brand: "Mercedes Benz",
        code: "3520321105",
        image: "./img/products/corona-arranque-om352-angosta.jpg",
        description: "Corona de arranque modelo angosta con 125 dientes. Compatible con motores Mercedes Benz OM352 y OM366. Fabricada en acero de alta resistencia para un arranque confiable."
    },
    {
        id: "P056",
        name: "ESPIGA BIELA MOTOR S/MEDIDA OM352",
        brand: "Mercedes Benz",
        code: "000007006100",
        image: "./img/products/espiga-biela-om352-smedida.jpg",
        description: "Espiga de biela de motor, versión sin medida (S/Medida) para ajuste. Compatible con motores Mercedes Benz OM352. Ideal para trabajos de rectificación que requieren un ajuste personalizado."
    },
    {
        id: "P057",
        name: "DEFLECTOR ACEITE CIGÜEÑAL OM352",
        brand: "Mercedes Benz",
        code: "00324",
        image: "./img/products/deflector-aceite-ciguenal-om352.jpg",
        description: "Deflector de aceite para cigüeñal, compatible con motores Mercedes Benz OM352. Pieza fundamental para el control del flujo de aceite y protección del sistema de lubricación."
    },
    {
        id: "P058",
        name: "BIELA MOTOR OM352",
        brand: "Mercedes Benz",
        code: "3410307220",
        image: "./img/products/biela-motor-om352.jpg",
        description: "Biela de motor para Mercedes Benz OM352. Fabricada con acero forjado de alta resistencia para soportar las exigencias de la combustión diésel. Calidad original garantizada."
    },
    {
        id: "P059",
        name: "BULON CONTRAPESO CIGÜEÑAL CORTO 12x45 OM352",
        brand: "Mercedes Benz",
        code: "3520310071",
        image: "./img/products/bulon-contrapeso-ciguenal-corto-om352.jpg",
        description: "Bulón corto para contrapeso de cigüeñal, medida 12x45mm. Compatible con motores Mercedes Benz OM352. Pieza de alta resistencia esencial para el equilibrado dinámico del conjunto motor."
    },
    {
        id: "P060",
        name: "BULON BIELA MOTOR PASANTE 14x81 OM352",
        brand: "Mercedes Benz",
        code: "3520382271",
        image: "./img/products/bulon-biela-pasante-om352.jpg",
        description: "Bulón pasante de biela de motor, medida 14x81mm. Compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para garantizar la integridad mecánica de la biela."
    },
    {
        id: "P061",
        name: "RETEN BANCADA (JUEGO EMPAQUETADURA) OM352 (SABO) 1114",
        brand: "Mercedes Benz",
        code: "0009979641 / 0019973141",
        image: "./img/products/reten-bancada-om352-sabo.jpg",
        description: "Juego de empaquetadura (retén de bancada) marca SABO para motores Mercedes Benz OM352, especialmente para camiones 1114. Calidad reconocida para un sellado duradero del motor."
    },
    {
        id: "P062",
        name: "PORTA RULEMAN CIGÜEÑAL OM352",
        brand: "Mercedes Benz",
        code: "3120310533",
        image: "./img/products/porta-ruleman-ciguenal-om352.jpg",
        description: "Porta ruleman de cigüeñal para motores Mercedes Benz OM352. Pieza de precisión fabricada para alojar el rodamiento del cigüeñal and asegurar su correcta alineación."
    },
    {
        id: "P063",
        name: "BULON BIELA MOTOR PRISIONERO 15x60 OM352",
        brand: "Mercedes Benz",
        code: "3520382771",
        image: "./img/products/bulon-biela-prisionero-om352.jpg",
        description: "Bulón prisionero de biela de motor, medida 15x60mm. Compatible with motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para un ajuste seguro and duradero."
    },
    {
        id: "P064",
        name: "TUERCA BULON BIELA OM352",
        brand: "Mercedes Benz",
        code: "3520380572",
        image: "./img/products/tuerca-bulon-biela-om352.jpg",
        description: "Tuerca de seguridad para bulón de biela, compatible con motores Mercedes Benz OM352. Diseñada para soportar altas tensiones and asegurar el correcto cierre de la biela."
    },
    {
        id: "P065",
        name: "ORING CAMISA PORTA INYECTOR (30.8x3.7) OM352/366",
        brand: "Mercedes Benz",
        code: "0169978248",
        image: "./img/products/oring-camisa-inyector-om352.jpg",
        description: "O-ring para camisa porta inyector, medida 30.8x3.7mm. Compatible con motores Mercedes Benz OM352 y OM366. Fabricado en material resistente a altas temperaturas and combustibles para un sellado estanco."
    },
    {
        id: "P066",
        name: "CARCAZA DISTRIBUCION ORIGINAL OM352/366",
        brand: "Mercedes Benz",
        code: "00334",
        image: "./img/products/carcaza-distribucion-om352.jpg",
        description: "Carcaza de distribución original para motores Mercedes Benz OM352 y OM366. Pieza estructural de alta calidad que aloja and protege los engranajes de la distribución."
    },
    {
        id: "P067",
        name: "TAPON TAPA CILINDRO (C/HEMBRA) OM352",
        brand: "Mercedes Benz",
        code: "3120160061",
        image: "./img/products/tapon-tapa-cilindro-om352-hembra.jpg",
        description: "Tapón para tapa de cilindro con encastre hembra, compatible con motores Mercedes Benz OM352. Fabricado con materiales resistentes a la presión and temperatura del sistema de refrigeración/aceite."
    },
    {
        id: "P068",
        name: "BULON TAPA VALVULAS 8X45 (CORTO) OM352",
        brand: "Mercedes Benz",
        code: "3529900619 / 3229900019 / 3449907019",
        image: "./img/products/bulon-tapa-valvulas-om352-corto.jpg",
        description: "Bulón corto para tapa de válvulas, medida 8x45mm. Compatible with motores Mercedes Benz OM352. Incluye arandela integrada para un sellado óptimo and distribución de la presión."
    },
    {
        id: "P069",
        name: "BULON TAPA VALVULAS 8X105 (LARGO) (x2) OM352",
        brand: "Mercedes Benz",
        code: "914008008002",
        image: "./img/products/bulon-tapa-valvulas-om352-largo.jpg",
        description: "Bulón largo para tapa de válvulas, medida 8x105mm. Compatible with motores Mercedes Benz OM352. Se comercializa por par (2 unidades) para fijación de las zonas que requieren mayor longitud."
    },
    {
        id: "P070",
        name: "TAPA DISTRIBUCION ALUMINIO OM352",
        brand: "Mercedes Benz",
        code: "3520150201",
        image: "./img/products/tapa-distribucion-aluminio-om352.jpg",
        description: "Tapa de distribución fabricada en aluminio de alta calidad para motores Mercedes Benz OM352. Diseñada para un ajuste perfecto and excelente disipación de calor, protegiendo los componentes internos."
    },
    {
        id: "P071",
        name: "CAMISA PORTA INYECTOR OM352/366",
        brand: "Mercedes Benz",
        code: "3520170053",
        image: "./img/products/camisa-porta-inyector-om352.jpg",
        description: "Camisa porta inyector para motores Mercedes Benz OM352 y OM366. Fabricada con materiales de alta precisión para asegurar el correcto alojamiento and refrigeración del inyector en la tapa de cilindro."
    },
    {
        id: "P072",
        name: "TAPON BLOCK CANAL ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3520110335",
        image: "./img/products/tapon-block-aceite-om352.jpg",
        description: "Tapón para block de motor, específico para el canal de aceite. Compatible with motores Mercedes Benz OM352. Pieza fundamental para el sellado hermético del circuito de lubricación principal."
    },
    {
        id: "P073",
        name: "TAPA SUPERIOR VALVULA (OM352) OH1314",
        brand: "Mercedes Benz",
        code: "3440108030",
        image: "./img/products/tapa-valvulas-om352-oh1314.jpg",
        description: "Tapa superior de válvulas para motores Mercedes Benz OM352, compatible with el modelo OH1314. Fabricada con materiales resistentes para un sellado perfecto de la parte superior del motor."
    },
    {
        id: "P074",
        name: "CARCAZA DISTRIBUCION ORIGINAL OM352/366",
        brand: "Mercedes Benz",
        code: "3520102033",
        image: "./img/products/carcaza-distribucion-om352-v2.jpg",
        description: "Carcaza de distribución original para motores Mercedes Benz OM352 y OM366. Versión reforzada para un montaje preciso de los engranajes and bomba inyectora."
    },
    {
        id: "P075",
        name: "BULON CARTER LEGITIMO 8X20 OM352/366 (x2)",
        brand: "Mercedes Benz",
        code: "0039905801",
        image: "./img/products/bulon-carter-om352-8x20.jpg",
        description: "Bulón legítimo para cárter, medida 8x20mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por par (2 unidades). Incluye arandela de presión para un ajuste seguro y evitar filtraciones."
    },
    {
        id: "P076",
        name: "ESPARRAGO CARTER 8X20 OM352/366",
        brand: "Mercedes Benz",
        code: "000939008083",
        image: "./img/products/esparrago-carter-om352.jpg",
        description: "Espárrago para cárter medida 8x20mm. Compatible con motores Mercedes Benz OM352 y OM366. Pieza de sujeción de alta resistencia fabricada en acero endurecido para un montaje seguro del cárter."
    },
    {
        id: "P077",
        name: "PERNO GUIA TAPA BANCADA 8.00 OM352",
        brand: "Mercedes Benz",
        code: "000007008101",
        image: "./img/products/perno-guia-tapa-bancada-om352.jpg",
        description: "Perno guía para tapa de bancada, medida 8.00mm. Compatible con motores Mercedes Benz OM352. Esencial para asegurar la alineación perfecta de las tapas de bancada durante el armado del motor."
    },
    {
        id: "P078",
        name: "VALVULA VENTEO ROSCADA ALTA 1518 OM352/366/447/457",
        brand: "Mercedes Benz",
        code: "0000185835 / 0000182935 / 0000183535",
        image: "./img/products/valvula-venteo-om352-alta.jpg",
        description: "Válvula de venteo modelo roscada alta, compatible con motores Mercedes Benz 1518, OM352, OM366, OM447 y OM457. Pieza clave para la correcta ventilación del carter y control de presión interna."
    },
    {
        id: "P079",
        name: "BULON TAPA DISTRIBUCION LEG.6X70 (x5) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906301",
        image: "./img/products/bulon-tapa-distribucion-om352-6x70.jpg",
        description: "Bulón legítimo para tapa de distribución, medida 6x70mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por juego de 5 unidades. Incluye arandela para un sellado y sujeción profesional."
    },
    {
        id: "P080",
        name: "BULON BANCADA BLOCK 15X121 OM352/366",
        brand: "Mercedes Benz",
        code: "3669900304",
        image: "./img/products/bulon-bancada-om352.jpg",
        description: "Bulón de bancada para block, medida 15x121mm. Compatible con motores Mercedes Benz OM352 y OM366. Fabricado con acero de máxima resistencia para asegurar la fijación crítica de las tapas de bancada del cigüeñal."
    },
    {
        id: "P081",
        name: "TAPA BANCADA CENTRAL SEMITERM. OM352/366",
        brand: "Mercedes Benz",
        code: "3660100123",
        image: "./img/products/tapa-bancada-central-om352.jpg",
        description: "Tapa de bancada central en estado semi-terminado para un ajuste preciso. Compatible con motores Mercedes Benz OM352 y OM366. Pieza de fundición de alta calidad lista para el proceso final de rectificado."
    },
    {
        id: "P082",
        name: "BULON CARTER LEGITIMO 6X16 (x18) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906001",
        image: "./img/products/bulon-carter-om352-6x16.jpg",
        description: "Bulón legítimo para cárter, medida 6x16mm. Compatible with motores Mercedes Benz OM352 and OM366. Se comercializa por juego de 18 unidades. Incluye arandela integrada para una fijación estanca and segura del cárter."
    },
    {
        id: "P083",
        name: "CODO DESCARGA TURBO AL CARTER OM352A CHAPA",
        brand: "Mercedes Benz",
        code: "4961340022",
        image: "./img/products/codo-descarga-turbo-om352-chapa.jpg",
        description: "Codo de descarga de aceite de turbo hacia el cárter, fabricado en chapa de alta resistencia. Compatible con motores Mercedes Benz OM352A. Pieza fundamental para el retorno eficiente del lubricante del turbo."
    },
    {
        id: "P084",
        name: "CODO DESCARGA TURBO AL CARTER OM352A",
        brand: "Mercedes Benz",
        code: "4961340022",
        image: "./img/products/codo-descarga-turbo-om352-v2.jpg",
        description: "Codo de descarga de aceite de turbo hacia el cárter, compatible with motores Mercedes Benz OM352A. Pieza de alta durabilidad diseñada para asegurar el flujo constante de retorno de aceite al cárter."
    },
    {
        id: "P085",
        name: "BULON TAPA DISTRIBUCION LEG.6X22 (x8) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906501",
        image: "./img/products/bulon-tapa-distribucion-om352-6x22.jpg",
        description: "Bulón legítimo para tapa de distribución, medida 6x22mm. Compatible with motores Mercedes Benz OM352 and OM366. Se comercializa por juego de 8 unidades. Incluye arandela para un sellado and sujeción profesional."
    },
    {
        id: "P086",
        name: "CAÑO SALIDA BOMBA D/H 1218/OM366/A/LA",
        brand: "Mercedes Benz",
        code: "3884608188",
        image: "./img/products/om366/cano-salida-bomba-om366.jpg",
        description: "Caño de salida de bomba de dirección hidráulica para Mercedes Benz 1218 con motor OM366/A/LA. Fabricado en acero de alta resistencia con acabado anticorrosivo para garantizar durabilidad en el sistema hidráulico."
    },
    {
        id: "P087",
        name: "COMPRESOR T/WABCO 75mm OM366",
        brand: "Mercedes Benz",
        code: "0031316301 / 0041315801 / 0031314801 / 4111418180 / 42338404850",
        image: "./img/products/om366/compresor-wabco-om366.jpg",
        description: "Compresor de aire tipo WABCO de 75mm para motores Mercedes Benz OM366. Compatible con múltiples modelos. Componente esencial del sistema de frenos neumáticos, fabricado con estándares de alta calidad para garantizar presión constante y seguridad en el frenado."
    },
    {
        id: "P088",
        name: "ELEM.H947/1 ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3661800009",
        image: "./img/products/om366/elemento-aceite-om366.jpg",
        description: "Elemento de filtro de aceite H947/1 para motores Mercedes Benz OM366. Filtro de alta eficiencia que garantiza la limpieza del aceite lubricante, protegiendo los componentes internos del motor contra el desgaste y prolongando su vida útil."
    },
    {
        id: "P089",
        name: "JUNTA T/CIL.OM366/6A I.A",
        brand: "Mercedes Benz",
        code: "3660160020",
        image: "./img/products/om366/junta-tapa-cilindro-om366.jpg",
        description: "Junta de tapa de cilindro para motores Mercedes Benz OM366/6A. Fabricada con materiales de alta calidad resistentes a altas temperaturas y presiones. Garantiza un sellado hermético perfecto entre la tapa de cilindros y el block del motor."
    },
    {
        id: "P090",
        name: "FILTRO ACEITE W1168/5 OM366 MANN (01835/1)",
        brand: "Mercedes Benz",
        code: "0031843301",
        image: "./img/products/om366/filtro-aceite-mann-om366.jpg",
        description: "Filtro de aceite MANN W1168/5 (referencia 01835/1) para motores Mercedes Benz OM366. Filtro de rosca de alta eficiencia que garantiza la máxima protección del motor. Calidad alemana MANN-FILTER para un rendimiento óptimo y durabilidad superior."
    },
    {
        id: "P091",
        name: "CONEXION DE REFRIGERACION 1621/OM366/366LA",
        brand: "Mercedes Benz",
        code: "3762007852 / 3762008352",
        image: "./img/products/om366/conexion-refrigeracion-om366.jpg",
        description: "Conexión de refrigeración para Mercedes Benz 1621 con motores OM366 y OM366LA. Pieza fundamental del sistema de enfriamiento que conecta las mangueras de refrigerante. Fabricada en material resistente a altas temperaturas y presión del sistema."
    },
    {
        id: "P092",
        name: "TAPA SUPERIOR VALVULA C/VENTEO Y SIN ENTRADA DE ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3660160605",
        image: "./img/products/om366/tapa-valvulas-om366.jpg",
        description: "Tapa superior de válvulas con venteo y sin entrada de aceite para motores Mercedes Benz OM366. Fabricada en aluminio de alta calidad con acabado resistente. Incluye sistema de ventilación integrado para el control de gases del cárter."
    },
    {
        id: "P093",
        name: "POLEA B/AGUA 3 CANALES REFORMA 196MM/152MM OM366 1215 ALUMINIO",
        brand: "Mercedes Benz",
        code: "3662020810",
        image: "./img/products/om366/polea-bomba-agua-om366.jpg",
        description: "Polea de bomba de agua de 3 canales, versión reforma, medidas 196mm/152mm. Fabricada en aluminio de alta resistencia para motores Mercedes Benz OM366 en modelo 1215. Diseño optimizado para el sistema de refrigeración y accesorios del motor."
    },
    {
        id: "P094",
        name: "JUNTA TAPA TERMOSTATO OM366",
        brand: "Mercedes Benz",
        code: "3662030280",
        image: "./img/products/om366/junta-tapa-termostato-om366.jpg",
        description: "Junta de tapa de termostato para motores Mercedes Benz OM366. Fabricada en material resistente a altas temperaturas y refrigerante. Garantiza un sellado hermético perfecto en la carcasa del termostato del sistema de refrigeración."
    },
    {
        id: "P095",
        name: "JGO.JUNTA T/REFRI.M/N. OM366",
        brand: "Mercedes Benz",
        code: "3661803765",
        image: "./img/products/om366/juego-juntas-tapa-refrigeracion-om366.jpg",
        description: "Juego de juntas de tapa de refrigeración múltiple/nueva para motores Mercedes Benz OM366. Incluye todas las juntas necesarias para el sistema de refrigeración. Fabricadas con materiales de alta calidad resistentes a altas temperaturas y refrigerante."
    },
    {
        id: "P096",
        name: "JTA.PALIER OM366/1517",
        brand: "Mercedes Benz",
        code: "3273560180",
        image: "./img/products/om366/junta-palier-om366.jpg",
        description: "Junta de palier para motores Mercedes Benz OM366 y modelo 1517. Fabricada en material resistente al aceite de transmisión. Garantiza un sellado perfecto en el conjunto del palier, evitando pérdidas de lubricante."
    },
    {
        id: "P097",
        name: "JGO.JUNTA CARTER OM366",
        brand: "Mercedes Benz",
        code: ">71184",
        originalCode: "3660100580 3660100680",
        image: "./img/products/om366/juego-junta-carter-om366.jpg",
        description: "Juego de juntas de cárter para motores Mercedes Benz OM366. Incluye todas las juntas necesarias para el sellado perfecto del cárter. Fabricadas con materiales de alta calidad resistentes al aceite y a las altas temperaturas, garantizando un sellado hermético duradero."
    },
    {
        id: "P098",
        name: "JUNTA TAPA DISTRIBUCION CORCHO/GOMA/TELA OM366",
        brand: "Mercedes Benz",
        code: "3520150520",
        image: "./img/products/om366/junta-tapa-distribucion-om366.jpg",
        description: "Junta de tapa de distribución fabricada en material compuesto de corcho/goma/tela para motores Mercedes Benz OM366. Diseñada para soportar altas temperaturas y presión del aceite, garantizando un sellado hermético perfecto entre la tapa y la carcasa de distribución."
    },
    {
        id: "P099",
        name: "JUNTA LATERAL BOT. T/VALV GOMA OM366",
        brand: "Mercedes Benz",
        code: "3520150160",
        image: "./img/products/om366/junta-lateral-tapa-valvulas-om366.jpg",
        description: "Junta lateral de botador para tapa de válvulas fabricada en goma de alta calidad para motores Mercedes Benz OM366. Diseñada para sellar perfectamente el lateral de la tapa de válvulas, resistente al aceite y a las altas temperaturas del motor."
    },
    {
        id: "P100",
        name: "JUNTA TAPA VALV.SUPERIOR OM366",
        brand: "Mercedes Benz",
        code: "3660160321",
        image: "./img/products/om366/junta-tapa-valvulas-superior-om366.jpg",
        description: "Junta de tapa de válvulas superior para motores Mercedes Benz OM366. Fabricada con materiales de alta calidad resistentes al aceite y a las altas temperaturas. Garantiza un sellado hermético perfecto en la parte superior de la tapa de válvulas."
    },
    {
        id: "P101",
        name: "JTA.SAL.ESC.DOBLE. OM366",
        brand: "Mercedes Benz",
        code: "6844927080",
        image: "./img/products/om366/junta-salida-escape-doble-om366.jpg",
        description: "Junta de salida de escape doble para motores Mercedes Benz OM366. Fabricada en material resistente a altas temperaturas y gases de escape. Diseñada para sellar perfectamente la conexión doble del múltiple de escape, evitando fugas de gases."
    },
    {
        id: "P102",
        name: "SILENCIADOR 1620/OM366A 3 1/2 C/COLA 4.\" LLENO",
        brand: "Mercedes Benz",
        code: "3824907201",
        image: "./img/products/om366/silenciador-1620-om366a.jpg",
        description: "Silenciador de escape para Mercedes Benz 1620 con motor OM366A. Entrada de 3 1/2 pulgadas con cola de 4 pulgadas, modelo lleno. Fabricado con materiales resistentes a la corrosión y altas temperaturas para un rendimiento óptimo del sistema de escape."
    },
    {
        id: "P103",
        name: "CAÑO SALIDA DE BOMBA HIDRAULICA 1215 OM366",
        brand: "Mercedes Benz",
        code: "3444608624",
        image: "./img/products/om366/cano-salida-bomba-hidraulica-1215-om366.jpg",
        description: "Caño de salida de bomba hidráulica para Mercedes Benz 1215 con motor OM366. Fabricado en acero de alta resistencia con acabado anticorrosivo. Diseñado para garantizar el flujo óptimo del fluido hidráulico desde la bomba hacia el sistema de dirección."
    },
    {
        id: "P104",
        name: "CILINDRO FRENO MOTOR T/KNORR OM366/447/449/457",
        brand: "Mercedes Benz",
        code: "0004306026",
        originalCode: "I94326 0004304926 0004305926 0004305026 I90281 8845021210 0004304826",
        image: "./img/products/om366/cilindro-freno-motor-knorr-om366.jpg",
        description: "Cilindro de freno motor tipo KNORR compatible con motores Mercedes Benz OM366, OM447, OM449 y OM457. Fabricado con materiales de alta resistencia para soportar las exigencias del sistema de frenado auxiliar. Componente esencial para el control del freno motor en vehículos pesados."
    },
    {
        id: "P105",
        name: "FLEXIBLE EMBRAGUE (220mm) H/H 1215 OM366 14mm",
        brand: "Mercedes Benz",
        code: "3762957035",
        image: "./img/products/om366/flexible-embrague-1215-om366.jpg",
        description: "Flexible de embrague de 220mm hembra/hembra para Mercedes Benz 1215 con motor OM366. Rosca de 14mm. Fabricado con manguera de alta presión y conexiones de acero reforzado. Componente esencial para el sistema de accionamiento hidráulico del embrague."
    },
    {
        id: "P106",
        name: "RIGIDO BOMBIN EMBRAGUE L1620 OM366LA",
        brand: "Mercedes Benz",
        code: "6952907213",
        image: "./img/products/om366/rigido-bombin-embrague-l1620-om366la.jpg",
        description: "Caño rígido de bombín de embrague para Mercedes Benz L1620 con motor OM366LA. Fabricado en acero de alta resistencia con acabado anticorrosivo. Diseñado para conectar el sistema hidráulico del embrague, garantizando una transmisión eficiente de la presión hidráulica."
    },
    {
        id: "P107",
        name: "RIGIDO BOMBA EMBRAGUE L1620 OM366LA",
        brand: "Mercedes Benz",
        code: "6952907113",
        image: "./img/products/om366/rigido-bomba-embrague-l1620-om366la.jpg",
        description: "Caño rígido de bomba de embrague para Mercedes Benz L1620 con motor OM366LA. Fabricado en acero de alta resistencia con acabado anticorrosivo. Componente del sistema hidráulico que conecta la bomba de embrague, asegurando una transmisión eficiente de la presión."
    },
    {
        id: "P108",
        name: "PORTACRAPODINA OM366",
        brand: "Mercedes Benz",
        code: "3812501415",
        image: "./img/products/om366/portacrapodina-om366.jpg",
        description: "Porta crapodina (porta collarin) para motores Mercedes Benz OM366. Fabricado en fundición de alta resistencia. Componente esencial del sistema de embrague que aloja y soporta el collarín de empuje, garantizando un accionamiento suave y preciso del embrague."
    },
    {
        id: "P109",
        name: "PALETA PLASTICO OM366 7 PALAS 550mm",
        brand: "Mercedes Benz",
        code: "3762000224",
        image: "./img/products/om366/paleta-plastico-om366-7-palas.jpg",
        description: "Paleta de ventilador de plástico de 7 palas, diámetro 550mm para motores Mercedes Benz OM366. Fabricada en material plástico de alta resistencia a temperaturas extremas. Diseñada para optimizar el flujo de aire y la refrigeración del motor."
    },
    {
        id: "P110",
        name: "PALETA PLASTICO OM366 C/CHAP.10PAL",
        brand: "Mercedes Benz",
        code: "3762000224",
        image: "./img/products/om366/paleta-plastico-om366-10-palas.jpg",
        description: "Paleta de ventilador de plástico con chapa de 10 palas para motores Mercedes Benz OM366. Fabricada en material plástico de alta resistencia con refuerzo metálico central. Diseñada para maximizar el flujo de aire y mejorar la eficiencia del sistema de refrigeración."
    },
    {
        id: "P111",
        name: "PALETA PLASTICO OM366 C/CHAP.9PALAS 6 AGUJ.515mm",
        brand: "Mercedes Benz",
        code: "3762000224",
        image: "./img/products/om366/paleta-plastico-om366-9-palas.jpg",
        description: "Paleta de ventilador de plástico con chapa de 9 palas, 6 agujeros, diámetro 515mm para motores Mercedes Benz OM366. Fabricada en material plástico de alta resistencia con refuerzo metálico central. Diseñada para optimizar el flujo de aire y la refrigeración del motor."
    },
    {
        id: "P112",
        name: "POLEA B/AGUA 3 CANALES 209MM/149MM OM366 1215",
        brand: "Mercedes Benz",
        code: "3662020810",
        image: "./img/products/om366/polea-bomba-agua-om366-3-canales.jpg",
        description: "Polea de bomba de agua de 3 canales, medidas 209mm/149mm para motores Mercedes Benz OM366 en modelo 1215. Fabricada en fundición de alta resistencia. Diseñada para el accionamiento óptimo de la bomba de agua y otros accesorios del motor mediante correas trapezoidales."
    },
    {
        id: "P113",
        name: "BOMBA ACEITE OM366A",
        brand: "Mercedes Benz",
        code: "3661800301",
        image: "./img/products/om366/bomba-aceite-om366a.jpg",
        description: "Bomba de aceite para motores Mercedes Benz OM366A. Fabricada con engranajes de alta precisión y carcasa de fundición resistente. Componente esencial del sistema de lubricación que garantiza la presión y circulación adecuada del aceite en todo el motor."
    },
    {
        id: "P114",
        name: "VASO FILTRO ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3661800311",
        image: "./img/products/om366/vaso-filtro-aceite-om366.jpg",
        description: "Vaso para filtro de aceite para motores Mercedes Benz OM366. Fabricado en aluminio de alta calidad con acabado resistente a la corrosión. Diseñado para alojar el elemento filtrante de aceite, garantizando un ajuste perfecto y durabilidad en el sistema de lubricación."
    },
    {
        id: "P115",
        name: "REFRIGERADOR ACEITE OM366A",
        brand: "Mercedes Benz",
        code: "3661803865",
        originalCode: "3661800865",
        image: "./img/products/om366/refrigerador-aceite-om366a.jpg",
        description: "Refrigerador de aceite para motores Mercedes Benz OM366A. Fabricado en aluminio de alta conductividad térmica. Componente esencial del sistema de lubricación que mantiene la temperatura óptima del aceite, prolongando la vida útil del motor y mejorando su rendimiento."
    },
    {
        id: "P116",
        name: "JUNTA FILTRO RADIADOR ACEITE OM366 (ORING)",
        brand: "Mercedes Benz",
        code: "0059976948",
        image: "./img/products/om366/junta-filtro-radiador-aceite-om366.jpg",
        description: "Junta (O-ring) para filtro intermedio de radiador de aceite, compatible con motores Mercedes Benz OM366. Fabricada en material de goma resistente al aceite y altas temperaturas. Garantiza un sellado estanco en la conexión del intercambiador de calor."
    },
    {
        id: "P117",
        name: "PALETA PLASTICO L1620/1218 8 PALAS 592mm",
        brand: "Mercedes Benz",
        code: "3762007123",
        image: "./img/products/om366/paleta-plastico-8-palas-om366.jpg",
        description: "Paleta de ventilador de plástico de 8 palas, diámetro 592mm. Compatible con Mercedes Benz L1620, 1218 y motores OM366/904. Diseño aerodinámico de alta eficiencia para optimizar el flujo de aire a través del radiador y mejorar la refrigeración del motor."
    },
    {
        id: "P118",
        name: "BULON MULTIPLE 10X60 OM366",
        brand: "Mercedes Benz",
        code: "000933010347",
        originalCode: "910105010003",
        image: "./img/products/om366/bulon-multiple-10x60-om366.jpg",
        description: "Bulón para múltiple de medida 10x60mm. Compatible con motores Mercedes Benz OM366. Fabricado en acero de alta resistencia para soportar las variaciones térmicas y la tensión mecánica en la fijación de los múltiples de admisión o escape."
    },
    {
        id: "P119",
        name: "VALVULA BOMBA ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3661800315",
        image: "./img/products/om366/valvula-bomba-aceite-om366.jpg",
        description: "Válvula para bomba de aceite compatible con motores Mercedes Benz OM366. Componente de precisión diseñado para regular y asegurar el correcto flujo y presión de aceite en el sistema de lubricación del motor."
    },
    {
        id: "P120",
        name: "TAPA REFRIGERADORA M/N OM366",
        brand: "Mercedes Benz",
        code: "3661803665",
        image: "./img/products/om366/tapa-refrigeradora-om366.jpg",
        description: "Tapa refrigeradora (modelo nuevo) para motores Mercedes Benz OM366. Fabricada en fundición de alta calidad. Diseñada para sellar y proteger el intercambiador de calor/refrigerador de aceite, asegurando la eficiencia del sistema de enfriamiento del lubricante."
    },
    {
        id: "P121",
        name: "TAPA COMPRESOR TRAS. OH1420/OM366",
        brand: "Mercedes Benz",
        code: "0001311142",
        originalCode: "4110426004",
        image: "./img/products/om366/tapa-compresor-trasera-om366.jpg",
        description: "Tapa trasera de compresor para Mercedes Benz OH1420 con motor OM366. Fabricada en acero de alta resistencia. Componente fundamental para el sellado y cierre de la carcasa del compresor de aire."
    },
    {
        id: "P122",
        name: "CIGUEÑAL COMPRESOR KNORR 88 OM366",
        brand: "Mercedes Benz",
        code: "0001314216",
        image: "./img/products/om366/ciguenal-compresor-knorr-om366.jpg",
        description: "Cigüeñal para compresor tipo Knorr de 88mm, compatible con motores Mercedes Benz OM366. Fabricado en acero forjado de alta resistencia y rectificado de precisión. Pieza central del compresor que convierte el movimiento rotativo en lineal para la compresión de aire."
    },
    {
        id: "P123",
        name: "CODO BAJADA TURBO S/FREN.IMP. OM366A",
        brand: "Mercedes Benz",
        code: "3761440112",
        image: "./img/products/om366/codo-bajada-turbo-om366a.jpg",
        description: "Codo de bajada de turbo sin freno (importado) para motores Mercedes Benz OM366A. Fabricado en fundición de alta resistencia térmica. Pieza clave del sistema de escape que conecta la salida del turbocompresor con el resto de la línea de escape."
    },
    {
        id: "P124",
        name: "TURBO IMPORTADO OM366 (SIN VALVULA)",
        brand: "Mercedes Benz",
        code: "3760968799",
        originalCode: "3660961899",
        image: "./img/products/om366/turbo-importado-om366-sin-valvula.jpg",
        description: "Turbocompresor importado sin válvula para motores Mercedes Benz OM366. Diseñado para aumentar la potencia y eficiencia del motor mediante la compresión del aire de admisión. Fabricado con materiales de alta calidad para soportar altas temperaturas y velocidades de rotación."
    },
    {
        id: "P125",
        name: "KIT TURBO LATERAL S/ESCAPE OM366",
        brand: "Mercedes Benz",
        code: ">00935/1",
        image: "./img/products/om366/kit-turbo-lateral-sin-escape-om366.jpg",
        description: "Kit de turbo lateral sin escape para motores Mercedes Benz OM366. Incluye múltiples de admisión y escape, codos, abrazaderas, juntas, bulonería y tuberías de aceite necesarias para la instalación o reparación del sistema de turbocompresor. Conjunto completo para una instalación precisa."
    },
    {
        id: "P126",
        name: "TURBO SCHWITZER OM366/366LA",
        brand: "Mercedes Benz",
        code: "3660963899",
        image: "./img/products/om366/turbo-schwitzer-om366.jpg",
        description: "Turbocompresor marca Schwitzer compatible con motores Mercedes Benz OM366 y OM366LA. Diseñado para optimizar la entrada de aire y potenciar el rendimiento del motor bajo condiciones exigentes de trabajo. Construcción robusta para máxima durabilidad."
    },
    {
        id: "P127",
        name: "CODO BAJADA TURBO OM366A C/FRENO MOTOR",
        brand: "Mercedes Benz",
        code: "3761400553",
        image: "./img/products/om366/codo-bajada-turbo-con-freno-motor-om366a.jpg",
        description: "Codo de bajada de turbo con freno motor para Mercedes Benz OM366A. Fabricado en fundición de alta resistencia. Incluye el mecanismo de mariposa para el accionamiento del freno motor, esencial para la seguridad y control del vehículo en pendientes."
    },
    {
        id: "P128",
        name: "CODO BAJADA TURBO OM366 ECOLOGICO C/FRENO",
        brand: "Mercedes Benz",
        code: "3760900428",
        image: "./img/products/om366/codo-bajada-turbo-ecologico-con-freno-om366.jpg",
        description: "Codo de bajada de turbo ecológico con freno motor para Mercedes Benz OM366. Diseño optimizado para reducir emisiones y mejorar el rendimiento. Incluye sistema de mariposa para freno motor, fabricado en fundición de alta calidad para soportar altas temperaturas."
    },
    {
        id: "P129",
        name: "CODO BAJADA TURBO OM366A",
        brand: "Mercedes Benz",
        code: "3761440112",
        image: "./img/products/om366/codo-bajada-turbo-om366a-std.jpg",
        description: "Codo de bajada de turbo estándar para motores Mercedes Benz OM366A. Fabricado en fundición de hierro resistente a ciclos térmicos. Conecta la salida del turbo con el sistema de escape, asegurando un flujo de gases eficiente."
    },
    {
        id: "P130",
        name: "KIT TURBO S/ESCAPE OM366 1215",
        brand: "Mercedes Benz",
        code: ">00935",
        image: "./img/products/om366/kit-turbo-sin-escape-om366-1215.jpg",
        description: "Kit de turbo sin escape para Mercedes Benz 1215 con motor OM366. Conjunto completo de componentes para la instalación del sistema de turbocompresor, incluyendo múltiples, abrazaderas, juntas y tuberías necesarias, pero sin incluir el turbocompresor ni la bajada de escape."
    },
    {
        id: "P131",
        name: "CODO BAJADA TURBO OM366A P/FRENO MOTOR",
        brand: "Mercedes Benz",
        code: "3761400553",
        image: "./img/products/om366/codo-bajada-turbo-om366a-para-freno-motor.jpg",
        description: "Codo de bajada de turbo preparado para freno motor, compatible con Mercedes Benz OM366A. Fabricado en fundición resistente. Diseño específico para alojar el sistema de mariposa de freno motor (no incluido), asegurando un ajuste perfecto y duradero."
    },
    {
        id: "P132",
        name: "CODO BAJADA TURBO OM366 ECOLOGICO P/FRENO",
        brand: "Mercedes Benz",
        code: "3760900428",
        image: "./img/products/om366/codo-bajada-turbo-ecologico-para-freno-om366.jpg",
        description: "Codo de bajada de turbo ecológico preparado para freno motor, compatible con motores Mercedes Benz OM366. Diseñado para alojar el mecanismo de freno motor (no incluido). Fabricado en fundición de alta calidad, optimizado para sistemas de escape ecológicos."
    },
    {
        id: "P133",
        name: "CODO BAJADA TURBO OM366 ECOLOGICO",
        brand: "Mercedes Benz",
        code: "3660987315",
        image: "./img/products/om366/codo-bajada-turbo-ecologico-om366.jpg",
        description: "Codo de bajada de turbo ecológico para motores Mercedes Benz OM366. Componente del sistema de escape diseñado para mejorar el flujo de gases y reducir la contrapresión, contribuyendo a una mayor eficiencia y menores emisiones."
    },
    {
        id: "P134",
        name: "SOPORTE F/GAS OIL COMPRESOR OM366LA OHL1621/L1620",
        brand: "Mercedes Benz",
        code: "3760920140",
        image: "./img/products/om366/soporte-filtro-gasoil-compresor-om366la.jpg",
        description: "Soporte de filtro de gasoil y compresor para Mercedes Benz OM366LA, modelos OHL1621 y L1620. Fabricado en fundición de alta resistencia. Diseñado para soportar y fijar firmemente el filtro de combustible y el compresor al bloque del motor."
    },
    {
        id: "P135",
        name: "ORING ACOP.BOMBA INY OM366",
        brand: "Mercedes Benz",
        code: ">72023",
        image: "./img/products/om366/oring-acople-bomba-inyectora-om366.jpg",
        description: "O-ring para acople de bomba inyectora, compatible con motores Mercedes Benz OM366. Fabricado en material de goma resistente al combustible y aceites. Garantiza un sellado hermético en la conexión de la bomba inyectora, preveniendo fugas."
    },
    {
        id: "P136",
        name: "JGO.CAÑOS INYECTOR OM366",
        brand: "Mercedes Benz",
        code: ">77020",
        image: "./img/products/om366/juego-canos-inyector-om366.jpg",
        description: "Juego de caños de inyector para motores Mercedes Benz OM366. Incluye la tubería de alta presión completa para el sistema de inyección. Fabricados en acero de alta resistencia para soportar las elevadas presiones de inyección y vibraciones del motor."
    },
    {
        id: "P137",
        name: "SOPORTE BOMBA INYECTORA OM366",
        brand: "Mercedes Benz",
        code: "3640760035",
        image: "./img/products/om366/soporte-bomba-inyectora-om366.jpg",
        description: "Soporte de bomba inyectora para motores Mercedes Benz OM366. Fabricado en fundición de alta calidad. Garantiza la correcta fijación y alineación de la bomba de inyección al bloque del motor, asegurando el funcionamiento preciso del sistema de combustible."
    },
    {
        id: "P138",
        name: "ENGRANAJE FIJO BOMBA INYECT. EURO1/OM366",
        brand: "Mercedes Benz",
        code: "3760770112",
        image: "./img/products/om366/engranaje-fijo-bomba-inyectora-euro1-om366.jpg",
        description: "Engranaje fijo de bomba inyectora para motores Mercedes Benz OM366 (Euro 1). Fabricado en acero de alta resistencia y endurecido para soportar el desgaste. Componente crucial para la sincronización precisa de la inyección de combustible."
    },
    {
        id: "P139",
        name: "BULON PUNTA ARBOL LEVAS OM366/352A",
        brand: "Mercedes Benz",
        code: "3520750071",
        image: "./img/products/om366/bulon-punta-arbol-levas-om366.jpg",
        description: "Bulón de punta de árbol de levas para motores Mercedes Benz OM366 y OM352A. Fabricado en acero de alta resistencia para garantizar un apriete seguro y duradero del engranaje del árbol de levas, soportando las exigencias del sistema de distribución."
    },
    {
        id: "P140",
        name: "ENGRANAJE FIJO BOMBA INYECT. EURO2/OM366",
        brand: "Mercedes Benz",
        code: "3760777112",
        image: "./img/products/om366/engranaje-fijo-bomba-inyectora-euro2-om366.jpg",
        description: "Engranaje fijo de bomba inyectora para motores Mercedes Benz OM366 (Euro 2). Diseñado con especificaciones precisas para la sincronización del sistema de inyección en motores de normativa Euro 2. Fabricado en acero tratado para máxima durabilidad."
    },
    {
        id: "P141",
        name: "AVANCE ARBOL LEVAS /EURO II/ OM366LA",
        brand: "Mercedes Benz",
        code: "3760707445",
        image: "./img/products/om366/avance-arbol-levas-euro2-om366la.jpg",
        description: "Variador de avance de árbol de levas para motores Mercedes Benz OM366LA (Euro II). Mecanismo de precisión que optimiza los tiempos de la distribución, mejorando el rendimiento del motor y reduciendo emisiones. Fabricado con materiales de alta durabilidad."
    },
    {
        id: "P142",
        name: "BIELA MOTOR ECOLOGICO OM366LA",
        brand: "Mercedes Benz",
        code: "3760307320",
        image: "./img/products/om366/biela-motor-ecologico-om366la.jpg",
        description: "Biela de motor ecológico para Mercedes Benz OM366LA. Fabricada en acero forjado de alta resistencia para soportar las mayores presiones de combustión de los motores ecológicos. Diseño reforzado para garantizar durabilidad y rendimiento óptimo."
    },
    {
        id: "P143",
        name: "TAPA SUPERIOR VALVULA C/VENTEO Y ENTRADA DE ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3660161505",
        image: "./img/products/om366/tapa-valvulas-con-venteo-om366.jpg",
        description: "Tapa superior de válvulas con venteo y entrada de aceite para motores Mercedes Benz OM366. Fabricada en aluminio fundido de alta calidad. Incluye orificios para el sistema de ventilación del cárter y el llenado de aceite, asegurando un sellado perfecto y protección del tren de válvulas."
    },
    {
        id: "P144",
        name: "BIELA MOTOR MODELO VIEJO OM366",
        brand: "Mercedes Benz",
        code: "3760307120",
        image: "./img/products/om366/biela-motor-modelo-viejo-om366.jpg",
        description: "Biela de motor (modelo viejo) para Mercedes Benz OM366. Fabricada en acero forjado de alta resistencia. Componente esencial que conecta el pistón con el cigüeñal, transmitiendo la fuerza de la combustión para generar el movimiento rotativo."
    },
    {
        id: "P145",
        name: "ANILLO CENTRAJE POLEA CIGUENAL OM366",
        brand: "Mercedes Benz",
        code: "3220350018",
        image: "./img/products/om366/anillo-centraje-polea-ciguenal-om366.jpg",
        description: "Anillo de centraje para polea de cigüeñal de motores Mercedes Benz OM366. Fabricado en acero de alta precisión. Asegura la correcta alineación y balanceo de la polea, evitando vibraciones y desgastes prematuros."
    },
    {
        id: "P146",
        name: "BULON VOLANTE MOTOR 12x45 OM366LA OHL1420",
        brand: "Mercedes Benz",
        code: "00341",
        originalCode: "3669900701",
        image: "./img/products/om366/bulon-volante-motor-12x45-om366la.jpg",
        description: "Bulón de volante de motor medida 12x45, compatible con Mercedes Benz OM366LA y OHL1420. Fabricado en acero de alta resistencia (grado 10.9 o superior) para soportar el torque y la vibración del volante de inercia."
    },
    {
        id: "P147",
        name: "BULON BIELA MOTOR 12x56 OM366/904/906",
        brand: "Mercedes Benz",
        code: "9060380171",
        image: "./img/products/om366/bulon-biela-motor-12x56-om366.jpg",
        description: "Bulón de biela de motor medida 12x56, compatible con motores Mercedes Benz OM366, OM904 y OM906. Fabricado en acero de alta resistencia y elasticidad controlada para garantizar la unión segura de la biela al cigüeñal bajo condiciones extremas de funcionamiento."
    },
    {
        id: "P148",
        name: "ANILLO CENTRAJE POLEA CIGUENAL OM366LA",
        brand: "Mercedes Benz",
        code: "3520310064",
        image: "./img/products/om366/anillo-centraje-polea-ciguenal-om366la.jpg",
        description: "Anillo de centraje para polea de cigüeñal de motores Mercedes Benz OM366LA. Componente de precisión diseñado para asegurar el correcto posicionamiento y balance de la polea amortiguadora, evitando vibraciones perjudiciales para el motor."
    },
    {
        id: "P149",
        name: "BULON PUNTA CIGÜEÑAL CORTO 24x75 OM366",
        brand: "Mercedes Benz",
        code: "3669901501",
        image: "./img/products/om366/bulon-punta-ciguenal-corto-om366.jpg",
        description: "Bulón de punta de cigüeñal corto, medida 24x75, para motores Mercedes Benz OM366. Fabricado en acero de alta resistencia para soportar el torque de apriete y asegurar la polea del cigüeñal."
    },
    {
        id: "P150",
        name: "POLEA ADICIONAL 2 CANALES OM366/OHL",
        brand: "Mercedes Benz",
        code: ">00339",
        image: "./img/products/om366/polea-adicional-2-canales-om366.jpg",
        description: "Polea adicional de 2 canales para motores Mercedes Benz OM366 y OHL. Fabricada en fundición de alta resistencia. Diseñada para accionar accesorios adicionales mediante correas trapezoidales, asegurando una transmisión de potencia eficiente."
    },
    {
        id: "P151",
        name: "BULON VOLANTE MOTOR 12x25 OM366",
        brand: "Mercedes Benz",
        code: "3669900501",
        image: "./img/products/om366/bulon-volante-motor-12x25-om366.jpg",
        description: "Bulón de volante de motor medida 12x25, compatible con motores Mercedes Benz OM366. Fabricado en acero de alta resistencia para soportar las exigencias de fijación del volante."
    },
    {
        id: "P152",
        name: "TAPON TAPA CILINDRO (TACITA) 35mm. OM366",
        brand: "Mercedes Benz",
        code: "4039970420",
        image: "./img/products/om366/tapon-tapa-cilindro-tacita-35mm-om366.jpg",
        description: "Tapón de tapa de cilindro tipo tacita, diámetro 35mm, para motores Mercedes Benz OM366. Fabricado en material resistente a la corrosión y altas temperaturas. Utilizado para sellar los orificios de fundición de la tapa de cilindros."
    },
    {
        id: "P153",
        name: "TAPA LATERAL BOTADORES ALUMINIO OM366",
        brand: "Mercedes Benz",
        code: "3660150504",
        image: "./img/products/om366/tapa-lateral-botadores-aluminio-om366.jpg",
        description: "Tapa lateral de botadores de aluminio para motores Mercedes Benz OM366. Fabricada en aluminio de alta calidad para una mejor disipación de calor y menor peso. Protege y sella la cámara de los botadores, evitando fugas de aceite."
    },
    {
        id: "P154",
        name: "CARTER ACEITE MOTOR S/BRIDA OM366",
        brand: "Mercedes Benz",
        code: "3520103627",
        image: "./img/products/om366/carter-aceite-motor-sin-brida-om366.jpg",
        description: "Cárter de aceite de motor sin brida para Mercedes Benz OM366. Componente fundamental del sistema de lubricación, fabricado en chapa de acero estampada de alta resistencia. Diseñado para almacenar el aceite del motor y permitir su correcta circulación."
    },
    {
        id: "P155",
        name: "TAPON TAPA CILINDRO (TACITA) 25mm. OM366",
        brand: "Mercedes Benz",
        code: "000443025003",
        image: "./img/products/om366/tapon-tapa-cilindro-tacita-25mm-om366.jpg",
        description: "Tapón de tapa de cilindro tipo tacita, diámetro 25mm, para motores Mercedes Benz OM366. Fabricado en acero con recubrimiento protector. Esencial para el sellado de los conductos de refrigeración o lubricación en la tapa de cilindros."
    },
    {
        id: "P156",
        name: "VALVULA VENTEO ROSCADA BAJA OM366A",
        brand: "Mercedes Benz",
        code: "0000185735",
        image: "./img/products/om366/valvula-venteo-roscada-baja-om366a.jpg",
        description: "Válvula de venteo roscada (tipo baja) para motores Mercedes Benz OM366A. Facilita la evacuación de gases del cárter, manteniendo la presión interna equilibrada. Diseño compacto y resistente."
    },
    {
        id: "P157",
        name: "CARTER ACEITE MOTOR PLANO OM366 -OH-",
        brand: "Mercedes Benz",
        code: "3520100513",
        originalCode: "3660108613",
        image: "./img/products/om366/carter-aceite-motor-plano-om366-oh.jpg",
        description: "Cárter de aceite de motor plano para Mercedes Benz OM366 (serie OH). Fabricado en chapa de acero de alta resistencia. Diseño de perfil bajo ideal para autobuses y vehículos con espacio reducido debajo del motor. Asegura una correcta reserva y circulación de aceite."
    },
    {
        id: "P158",
        name: "TAPON ALLEN 24mm. TAPA CILINDRO OM366",
        brand: "Mercedes Benz",
        code: "0009972632",
        image: "./img/products/om366/tapon-allen-24mm-tapa-cilindro-om366.jpg",
        description: "Tapón roscado con cabeza Allen de 24mm para tapa de cilindro de motores Mercedes Benz OM366. Fabricado en acero de alta resistencia. Utilizado para sellar conductos de aceite o agua en la culata, garantizando hermeticidad."
    },
    {
        id: "P159",
        name: "BULON TAPA LATERAL VALVULAS 8X40 OM366",
        brand: "Mercedes Benz",
        code: "914126008029",
        image: "./img/products/om366/bulon-tapa-lateral-valvulas-8x40-om366.jpg",
        description: "Bulón de fijación para tapa lateral de válvulas, medida 8x40, compatible con motores Mercedes Benz OM366. Fabricado en acero de alta resistencia. Cabeza hexagonal con arandela estampada para una mejor distribución de la presión de apriete."
    },
    {
        id: "P160",
        name: "VARILLA NIVEL ACEITE 350MM.CORTA 1218/1620/OM366/457",
        brand: "Mercedes Benz",
        code: "3450107472",
        image: "./img/products/om366/varilla-nivel-aceite-350mm-om366.jpg",
        description: "Varilla de nivel de aceite corta, longitud 350mm. Compatible con vehículos Mercedes Benz 1218, 1620 y motores OM366, OM457. Herramienta esencial para el control preciso del nivel de lubricante en el cárter."
    },
    {
        id: "P161",
        name: "PERNO GUIA TAPA BANCADA STD. CONICO OM366",
        brand: "Mercedes Benz",
        code: "3669910062",
        image: "./img/products/om366/perno-guia-tapa-bancada-conico-om366.jpg",
        description: "Perno guía de tapa de bancada estándar (cónico) para motores Mercedes Benz OM366. Fabricado en acero endurecido. Asegura la alineación precisa de las tapas de bancada durante el montaje, crucial para el correcto funcionamiento del cigüeñal."
    },
    {
        id: "P162",
        name: "CAÑO GOMA LLENADO ACEITE OM366/366A",
        brand: "Mercedes Benz",
        code: "3760187282",
        originalCode: "3660180382",
        image: "./img/products/om366/cano-goma-llenado-aceite-om366.jpg",
        description: "Caño de goma para llenado de aceite, compatible con motores Mercedes Benz OM366 y OM366A. Manguera flexible resistente a hidrocarburos y temperatura. Facilita la carga de lubricante al motor."
    },
    {
        id: "P163",
        name: "BRIDA CARTER (LLENADO ACEITE) OM366",
        brand: "Mercedes Benz",
        code: "3520109764",
        image: "./img/products/om366/brida-carter-llenado-aceite-om366.jpg",
        description: "Brida de conexión para tubo de llenado de aceite en el cárter, para motores Mercedes Benz OM366. Fabricada en fundición de aluminio. Permite la conexión segura y hermética del tubo de llenado al cárter del motor."
    },
    {
        id: "P164",
        name: "VARILLA NIVEL ACEITE 610MM.M96 OM366LA",
        brand: "Mercedes Benz",
        code: "3140106872",
        image: "./img/products/om366/varilla-nivel-aceite-610mm-om366la.jpg",
        description: "Varilla de nivel de aceite medida 610mm (modelo M96), compatible con motores Mercedes Benz OM366LA. Diseñada para una lectura precisa y rápida del nivel de lubricante, asegurando el correcto mantenimiento del motor."
    },
    {
        id: "P165",
        name: "REDUCCION BRIDA CARTER 14X16 OM366",
        brand: "Mercedes Benz",
        code: "915013008000",
        originalCode: "074313008102",
        image: "./img/products/om366/reduccion-brida-carter-14x16-om366.jpg",
        description: "Reducción para brida de cárter de 14x16 mm, compatible con motores Mercedes Benz OM366. Accesorio de conexión roscada fabricado en acero, utilizado para adaptar diferentes diámetros de tuberías o sensores en el sistema de lubricación."
    },
    {
        id: "P166",
        name: "TAPON ALLEN 16mm. VENA ACEITE OM366",
        brand: "Mercedes Benz",
        code: "000908016000",
        image: "./img/products/om366/tapon-allen-16mm-vena-aceite-om366.jpg",
        description: "Tapón roscado con cabeza Allen de 16mm para vena de aceite de motores Mercedes Benz OM366. Fabricado en acero de alta resistencia. Asegura el sellado hermético de los conductos de lubricación del bloque motor."
    },
    {
        id: "P167",
        name: "BULON PERFORADO INYECTOR ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3669900063",
        image: "./img/products/om366/bulon-perforado-inyector-aceite-om366.jpg",
        description: "Bulón perforado para inyector de aceite en motores Mercedes Benz OM366. Permite el flujo controlado de aceite hacia el inyector para la refrigeración de los pistones. Fabricado en acero de alta precisión."
    },
    {
        id: "P168",
        name: "TAPON DISTRIBUCION PLASTICO OM366",
        brand: "Mercedes Benz",
        code: "3660100019",
        image: "./img/products/om366/tapon-distribucion-plastico-om366.jpg",
        description: "Tapón de distribución de plástico para motores Mercedes Benz OM366. Diseñado para sellar y proteger los componentes de la distribución contra la entrada de polvo y suciedad. Fácil instalación y ajuste seguro."
    },
    {
        id: "P169",
        name: "TAPON CARTER 26mm. OM366",
        brand: "Mercedes Benz",
        code: ">09458",
        image: "./img/products/om366/tapon-carter-26mm-om366.jpg",
        description: "Tapón de cárter de 26mm para motores Mercedes Benz OM366. Fabricado en acero con tratamiento superficial para evitar la corrosión. Rosca de precisión para garantizar un sellado perfecto y evitar fugas de aceite."
    },
    {
        id: "P170",
        name: "INDICADOR PUESTA A PUNTO 19º OM366LA II",
        brand: "Mercedes Benz",
        code: "3660323215",
        image: "./img/products/om366/indicador-puesta-a-punto-19-om366la-ii.jpg",
        description: "Chapa indicadora de puesta a punto (19 grados) para motores Mercedes Benz OM366LA II. Pieza metálica de precisión utilizada como referencia visual para el ajuste correcto del tiempo de inyección y distribución del motor."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
