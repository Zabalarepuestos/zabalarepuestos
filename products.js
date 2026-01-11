const products = [
    {
        id: "P001",
        name: "ELEMENTO F/ACEITE 1114/1517/1518 OM352",
        brand: "Mercedes Benz",
        code: "0011843925",
        image: "img/products/elemento-aceite-om352.jpg",
        description: "Filtro de aceite tipo elemento para motores Mercedes Benz OM352, compatible con modelos 1114, 1517 y 1518. Calidad garantizada para el cuidado de su motor."
    },
    {
        id: "P002",
        name: "CONJ. PLACA DISCO CRAPODINA DE EMBRAGUE 310mm 10 est LUK OM352 1114/1517",
        brand: "Mercedes Benz",
        code: "0002504615 / 3482654113 / 1878654433 / 3151000808",
        image: "img/products/conjunto-embrague-om352.jpg",
        description: "Conjunto de embrague completo (Placa, Disco y Crapodina) de 310mm y 10 estrías. Marca LUK, compatible con motores Mercedes Benz OM352 en modelos 1114 y 1517."
    },
    {
        id: "P003",
        name: "TAPA FILTRO GAS-OIL DOBLE 1/2 LITRO REFORMA (UNIDAD SELLADA) OM352/366",
        brand: "Mercedes Benz",
        code: "0000924808",
        image: "img/products/tapa-filtro-gasoil-om352.jpg",
        description: "Tapa para filtro de gasoil doble de 1/2 litro, versión reforma para unidad sellada. Compatible con motores Mercedes Benz OM352 y OM366. Alta resistencia y durabilidad."
    },
    {
        id: "P004",
        name: "TOBERA 1517/1620 OM352/366",
        brand: "Mercedes Benz",
        code: "9430084247",
        image: "img/products/tobera-mercedes-om352-366.jpg",
        description: "Tobera de inyección para motores Mercedes Benz OM352 y OM366, compatible con modelos 1517 y 1620. Componente de alta precisión para el sistema de combustible."
    },
    {
        id: "P005",
        name: "JGO.JUNTA MOTOR S/T.1114OM352",
        brand: "Mercedes Benz",
        code: "48806X",
        image: "img/products/juego-juntas-om352.jpg",
        description: "Juego de juntas de motor completo (sin tapa) para Mercedes Benz 1114 con motor OM352. Incluye todas las juntas necesarias para el block y accesorios. Calidad Sabó para un sellado perfecto."
    },
    {
        id: "P006",
        name: "RETEN DISTRIBUCION 710/1114/1517/1215/1620 OM352/364/366 65/90/15 SABO",
        brand: "Mercedes Benz",
        code: "0069975446",
        image: "img/products/reten-distribucion-om352.jpg",
        description: "Retén de distribución de 65/90/15mm. Marca SABO, compatible con una amplia gama de motores Mercedes Benz (OM352, OM364, OM366) en modelos como 710, 1114, 1517, 1215 y 1620."
    },
    {
        id: "P007",
        name: "SILENCIADOR OH1314 MOTOR TRAS. OM352",
        brand: "Mercedes Benz",
        code: "3214906101",
        image: "img/products/silenciador-oh1314-om352.jpg",
        description: "Silenciador de escape para chasis de ómnibus OH1314 con motor trasero OM352. Fabricado con materiales resistentes a la corrosión y altas temperaturas para un rendimiento óptimo."
    },
    {
        id: "P008",
        name: "VALVULA CABEZAL F/ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3521840032",
        image: "img/products/valvula-cabezal-filtro-om352.jpg",
        description: "Válvula para el cabezal del filtro de aceite, compatible con motores Mercedes Benz OM352. Componente esencial para mantener la presión de aceite correcta en el sistema."
    },
    {
        id: "P009",
        name: "VASO FILTRO ACEITE ALUMINIO OM352",
        brand: "Mercedes Benz",
        code: "3461800011",
        image: "img/products/vaso-filtro-aceite-aluminio-om352.jpg",
        description: "Vaso para filtro de aceite fabricado en aluminio de alta calidad. Diseñado específicamente para motores Mercedes Benz OM352, garantizando un ajuste perfecto y durabilidad."
    },
    {
        id: "P010",
        name: "VASO FILTRO ACEITE USADO OM352",
        brand: "Mercedes Benz",
        code: "3461800011",
        image: "img/products/vaso-filtro-aceite-usado-om352.jpg",
        description: "Vaso para filtro de aceite usado/reacondicionado para motores Mercedes Benz OM352. Una opción económica y funcional con la garantía de calidad original."
    },
    {
        id: "P011",
        name: "VALVULA BOMBA ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3521800015",
        image: "img/products/valvula-bomba-aceite-om352.jpg",
        description: "Válvula para bomba de aceite compatible con motores Mercedes Benz OM352. Fabricada bajo estándares originales para asegurar el flujo y presión correctos del lubricante."
    },
    {
        id: "P012",
        name: "TURBO 1518 OM352 IMPORTADO",
        brand: "Mercedes Benz",
        code: "3520965799",
        image: "img/products/turbo-mercedes-1518.jpg",
        description: "Turbocompresor importado de alta performance para Mercedes Benz 1518 con motor OM352. Calidad superior para optimizar la potencia y eficiencia de su motor."
    },
    {
        id: "P013",
        name: "BOTADOR VALVULA IMP. OM352/366",
        brand: "Mercedes Benz",
        code: "3520540501",
        image: "img/products/botador-valvula-om352-366.jpg",
        description: "Botador de válvula importado para motores Mercedes Benz OM352 and OM366. Fabricado con acero de alta resistencia para un funcionamiento silencioso y duradero del tren de válvulas."
    },
    {
        id: "P014",
        name: "RAMPA BALANCINES COMPLETA OM352/366",
        brand: "Mercedes Benz",
        code: "50050",
        image: "img/products/rampa-balancines-om352-366.jpg",
        description: "Rampa de balancines completa para motores Mercedes Benz OM352 y OM366. Incluye eje, balancines, resortes y soportes. Lista para instalar y garantizar una correcta apertura de válvulas."
    },
    {
        id: "P015",
        name: "SOPORTE BOMBA INYECTORA OM352",
        brand: "Mercedes Benz",
        code: "3220760235",
        image: "img/products/soporte-bomba-inyectora-om352.jpg",
        description: "Soporte para bomba inyectora de motores Mercedes Benz OM352. Fabricado en material de alta resistencia para un montaje preciso y seguro de la bomba inyectora."
    },
    {
        id: "P016",
        name: "BOMBA ALIMENTADORA OM352 1114",
        brand: "Mercedes Benz",
        code: "0000900250",
        image: "img/products/bomba-alimentadora-om352.jpg",
        description: "Bomba alimentadora de combustible para Mercedes Benz 1114 con motor OM352. Incluye vaso decantador de vidrio. Repuesto de alta calidad para asegurar el suministro de gasoil al motor."
    },
    {
        id: "P017",
        name: "AVANCE ARBOL LEVAS IMPORTADO OM352/366",
        brand: "Mercedes Benz",
        code: "3660700245",
        image: "img/products/avance-arbol-levas-om352.jpg",
        description: "Engranaje de avance para árbol de levas, calidad importada. Compatible con motores Mercedes Benz OM352 y OM366. Componente crítico para la correcta sincronización del motor."
    },
    {
        id: "P018",
        name: "REGISTRO VALVULA C/TUERCA OM352/366",
        brand: "Mercedes Benz",
        code: "3120550321",
        image: "img/products/registro-valvula-om352.jpg",
        description: "Tornillo de registro de válvula con tuerca para motores Mercedes Benz OM352 y OM366. Pieza fundamental para el ajuste preciso de la luz de válvulas."
    },
    {
        id: "P019",
        name: "CHAVETA ARBOL LEVAS M/NUEVO OM352/366",
        brand: "Mercedes Benz",
        code: "006885006039",
        image: "img/products/chaveta-arbol-levas-om352.jpg",
        description: "Chaveta para árbol de levas (modelo nuevo) compatible con motores Mercedes Benz OM352 y OM366. Fabricada con materiales de alta resistencia para una fijación segura del engranaje."
    },
    {
        id: "P020",
        name: "EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3120500231",
        image: "img/products/eje-balancin-om352.jpg",
        description: "Eje de balancines para motores Mercedes Benz OM352 y OM366. Rectificado de precisión para asegurar un movimiento suave y equilibrado de los balancines."
    },
    {
        id: "P021",
        name: "RESORTE PUNTA EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3129930005",
        image: "img/products/resorte-eje-balancin-om352.jpg",
        description: "Resorte de presión para la punta del eje de balancines, compatible con motores Mercedes Benz OM352 y OM366. Mantiene la tensión adecuada en el conjunto de balancines."
    },
    {
        id: "P022",
        name: "PRISIONERO EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "000417006001",
        image: "img/products/prisionero-eje-balancin-om352.jpg",
        description: "Tornillo prisionero para la fijación del eje de balancines en motores Mercedes Benz OM352 y OM366. Componente de precisión para mantener la estabilidad del conjunto."
    },
    {
        id: "P023",
        name: "PLAQUETA ARBOL LEVAS M/NUEVO OM352/366",
        brand: "Mercedes Benz",
        code: "3520520762",
        image: "img/products/plaqueta-arbol-levas-om352.jpg",
        description: "Plaqueta de fijación para árbol de levas (modelo nuevo) compatible con motores Mercedes Benz OM352 y OM366. Asegura la posición axial del árbol de levas."
    },
    {
        id: "P024",
        name: "PLAQUETA ARBOL LEVAS M/VIEJO OM352",
        brand: "Mercedes Benz",
        code: "3120520262",
        image: "img/products/plaqueta-arbol-levas-viejo-om352.jpg",
        description: "Plaqueta de fijación para árbol de levas (modelo viejo) para motores Mercedes Benz OM352. Componente original para restauraciones o reparaciones de motores clásicos."
    },
    {
        id: "P025",
        name: "ENGRANAJE ARBOL LEVAS GRANDE M/VJO.OM352 ZF",
        brand: "Mercedes Benz",
        code: "3120520601",
        image: "img/products/engranaje-arbol-levas-om352-grande.jpg",
        description: "Engranaje de árbol de levas grande (modelo viejo) para motores Mercedes Benz OM352. Fabricado bajo especificaciones ZF para garantizar máxima precisión y durabilidad en la distribución."
    },
    {
        id: "P026",
        name: "SEGURO EJE BALANCINES OM352/366",
        brand: "Mercedes Benz",
        code: "3129930225",
        image: "img/products/seguro-eje-balancines-om352.jpg",
        description: "Seguro para eje de balancines en motores Mercedes Benz OM352 y OM366. Pieza de acero templado para asegurar la retención lateral de los balancines en el eje."
    },
    {
        id: "P027",
        name: "AVANCE ARBOL LEVAS OM352/366",
        brand: "Mercedes Benz",
        code: "3620700045",
        image: "img/products/avance-arbol-levas-om352-362.jpg",
        description: "Engranaje de avance para árbol de levas compatible con motores Mercedes Benz OM352 y OM366. Componente de alta precisión para la sincronización del sistema de distribución."
    },
    {
        id: "P028",
        name: "TUERCA REGISTRO VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3159900051",
        image: "img/products/tuerca-registro-valvula-om352.jpg",
        description: "Tuerca para tornillo de registro de válvula, compatible con motores Mercedes Benz OM352 y OM366. Pieza esencial para asegurar el ajuste de la luz de válvulas."
    },
    {
        id: "P029",
        name: "RESORTE VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520530320",
        image: "img/products/resorte-valvula-om352.jpg",
        description: "Resorte de válvula para motores Mercedes Benz OM352 y OM366. Fabricado con acero de alta calidad para mantener la elasticidad y tensión necesarias en el tren de válvulas."
    },
    {
        id: "P030",
        name: "VARILLA LEV. VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520540205 / 3520540005",
        image: "img/products/varilla-valvula-om352.jpg",
        description: "Varilla levanta válvula para motores Mercedes Benz OM352 y OM366. Calidad importada, diseñada para soportar las exigencias del tren de válvulas con máxima precisión."
    },
    {
        id: "P031",
        name: "CHAVETA VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3430537027 / 3120530127",
        image: "img/products/chaveta-valvula-om352.jpg",
        description: "Chaveta de válvula (seguro) para motores Mercedes Benz OM352 y OM366. Pieza de seguridad fundamental para la retención del platillo y resorte de válvula."
    },
    {
        id: "P032",
        name: "BUJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3440550050",
        image: "img/products/buje-balancin-om352.jpg",
        description: "Buje de balancín para motores Mercedes Benz OM352 y OM366. Fabricado en bronce de alta calidad para reducir la fricción y el desgaste en el eje de balancines."
    },
    {
        id: "P033",
        name: "ENGRANAJE FIJO BOMBA INY. OM352/366",
        brand: "Mercedes Benz",
        code: "3440777012 / 3520770412",
        image: "img/products/engranaje-fijo-bomba-inyectora-om352.jpg",
        description: "Engranaje fijo para bomba inyectora compatible con motores Mercedes Benz OM352 y OM366. Pieza de precisión para asegurar la correcta transferencia de movimiento al sistema de inyección."
    },
    {
        id: "P034",
        name: "SOPORTE BALANCIN (NROS: 2-5-6) OM352/366",
        brand: "Mercedes Benz",
        code: "3520550410",
        image: "img/products/soporte-balancin-om352.jpg",
        description: "Soporte de balancín (números 2, 5 y 6) para motores Mercedes Benz OM352 y OM366. Fabricado en fundición de alta resistencia para un anclaje firme del eje de balancines."
    },
    {
        id: "P035",
        name: "JGO. CONOS UNION EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3120550553 / 3120550653 / 9934701",
        image: "img/products/conos-union-eje-balancin-om352.jpg",
        description: "Juego de conos de unión para eje de balancines, compatible con motores Mercedes Benz OM352 y OM366. Incluye conos y resorte para asegurar la alineación perfecta del conjunto."
    },
    {
        id: "P036",
        name: "CHAVETA ARBOL LEVAS M/VIEJO 6x10mm.OM352",
        brand: "Mercedes Benz",
        code: "006888006006",
        image: "img/products/chaveta-arbol-levas-viejo-6x10-om352.jpg",
        description: "Chaveta para árbol de levas (modelo viejo) de 6x10mm. Especialmente diseñada para motores Mercedes Benz OM352 clásicos, asegurando un encastre perfecto."
    },
    {
        id: "P037",
        name: "PLATILLO VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3220530125",
        image: "img/products/platillo-valvula-om352.jpg",
        description: "Platillo de válvula para motores Mercedes Benz OM352 y OM366. Componente de precisión para el correcto apoyo del resorte de válvula."
    },
    {
        id: "P038",
        name: "AVANCE BOMBA INYECTORA OM352/314",
        brand: "Mercedes Benz",
        code: "3520701345",
        image: "img/products/avance-bomba-inyectora-om352.jpg",
        description: "Engranaje de avance para bomba inyectora compatible con motores Mercedes Benz OM352 y OM314. Pieza clave para la puesta a punto y sincronización de la inyección diésel."
    },
    {
        id: "P039",
        name: "VOLANTE MOTOR C/CORONA 375MM 125DTES OM352/366",
        brand: "Mercedes Benz",
        code: "3520303905",
        image: "img/products/volante-motor-om352.jpg",
        description: "Volante de motor con corona de arranque de 375mm y 125 dientes. Compatible con motores Mercedes Benz OM352 y OM366. Fabricado con fundición de alta resistencia para un balanceo perfecto."
    },
    {
        id: "P041",
        name: "ENGRANAJE ARBOL LEVAS CHICO M/VJO. OM352",
        brand: "Mercedes Benz",
        code: "3520770014",
        image: "img/products/engranaje-arbol-levas-om352-chico.jpg",
        description: "Engranaje de árbol de levas chico (modelo viejo) para motores Mercedes Benz OM352. Pieza de distribución fundamental para la sincronización del motor, fabricada bajo estándares originales."
    },
    {
        id: "P042",
        name: "SOPORTE BALANCIN (NROS: 3-4) OM352/366",
        brand: "Mercedes Benz",
        code: "3520550210",
        image: "img/products/soporte-balancin-3-4-om352.jpg",
        description: "Soporte de balancín (números 3 y 4) para motores Mercedes Benz OM352 y OM366. Fabricado en fundición de alta resistencia para un anclaje firme del eje de balancines en las posiciones centrales."
    },
    {
        id: "P043",
        name: "BOTADOR VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520540501",
        image: "img/products/botador-valvula-om352-original.jpg",
        description: "Botador de válvula para motores Mercedes Benz OM352 y OM366. Componente de precisión para el correcto funcionamiento del sistema de distribución."
    },
    {
        id: "P044",
        name: "CHAVETA CIGÜEÑAL 8x13x32mm. OM352/366",
        brand: "Mercedes Benz",
        code: "006888008004",
        image: "img/products/chaveta-ciguenal-om352.png",
        description: "Chaveta para cigüeñal de 8x13x32mm, compatible con motores Mercedes Benz OM352 y OM366. Pieza fundamental para la fijación del engranaje de distribución en el cigüeñal."
    },
    {
        id: "P045",
        name: "BULON VOLANTE MOTOR 12x25 OM352",
        brand: "Mercedes Benz",
        code: "3529902201",
        image: "img/products/bulon-volante-motor-om352.jpg",
        description: "Bulón de volante de motor de 12x25mm, compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para garantizar un ajuste seguro y duradero del volante."
    },
    {
        id: "P046",
        name: "ESPIGA BIELA MOTOR 6mm.STD OM352",
        brand: "Mercedes Benz",
        code: "000007006100",
        image: "img/products/espiga-biela-om352.jpg",
        description: "Espiga de biela de motor, medida 6mm estándar. Compatible con motores Mercedes Benz OM352. Pieza de precisión para asegurar la correcta alineación y montaje del conjunto de biela."
    },
    {
        id: "P047",
        name: "BULON CONTRAPESO CIGÜEÑAL LARGO OM352",
        brand: "Mercedes Benz",
        code: "3520310071",
        image: "img/products/bulon-contrapeso-ciguenal-largo-om352.jpg",
        description: "Bulón largo para contrapeso de cigüeñal, compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para soportar las fuerzas centrífugas del cigüeñal."
    },
    {
        id: "P048",
        name: "CORONA ARRANQUE ANCHA 125 D. OM352",
        brand: "Mercedes Benz",
        code: "3120320105",
        image: "img/products/corona-arranque-om352-ancha.jpg",
        description: "Corona de arranque modelo ancho con 125 dientes. Compatible con motores Mercedes Benz OM352. Fabricada en acero templado para resistir el impacto del piñón de arranque."
    },
    {
        id: "P049",
        name: "RETEN BANCADA (JUEGO EMPAQUETADURA) ELRING OM352",
        brand: "Mercedes Benz",
        code: "0009979641",
        image: "img/products/reten-bancada-om352-elring.jpg",
        description: "Juego de empaquetadura (retén de bancada) marca Elring para motores Mercedes Benz OM352. Calidad alemana superior para asegurar el sellado perfecto del cárter y bloque motor."
    },
    {
        id: "P050",
        name: "ENGRANAJE CIGÜEÑAL (-0.03) STD OM352/366",
        brand: "Mercedes Benz",
        code: "3520520003",
        image: "img/products/engranaje-ciguenal-om352-std.jpg",
        description: "Engranaje de cigüeñal medida estándar con tolerancia -0.03. Compatible con motores Mercedes Benz OM352 y OM366. Pieza crítica de distribución para una sincronización exacta."
    },
    {
        id: "P051",
        name: "PISTA DISTRIBUCION C/CHAV. IMP OM352/366",
        brand: "Mercedes Benz",
        code: "3140350214 / 3220350014",
        image: "img/products/pista-distribucion-om352.jpg",
        description: "PISTA DE DISTRIBUCION C/CHAVETERA INTEGRADA. CALIDAD IMPORTADA (IMP) PARA MOTORES MERCEDES BENZ OM352 Y OM366. COMPONENTE ESENCIAL PARA EL CORRECTO POSICIONAMIENTO DEL RETEN DE DISTRIBUCION."
    },
    {
        id: "P052",
        name: "BULON TAPA CILINDRO 12X111 12.9 (x25) OM352/366",
        brand: "Mercedes Benz",
        code: "3669900301",
        image: "img/products/bulon-tapa-cilindro-om352-12x111.jpg",
        description: "Bulón de tapa de cilindro de alta resistencia (grado 12.9), medida 12x111mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por juego de 25 unidades para asegurar la sustitución completa."
    },
    {
        id: "P053",
        name: "BULON PUNTA CIGÜEÑAL LARGO 24x55 OM352",
        brand: "Mercedes Benz",
        code: "3149901001",
        image: "img/products/bulon-punta-ciguenal-om352.jpg",
        description: "Bulón de punta de cigüeñal modelo largo, medida 24x55mm. Compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para un anclaje seguro de la polea y engranajes."
    },
    {
        id: "P054",
        name: "ENGRANAJE CIGÜEÑAL (-0.05) STD OM352/366",
        brand: "Mercedes Benz",
        code: "3520520003",
        image: "img/products/engranaje-ciguenal-om352-005.jpg",
        description: "Engranaje de cigüeñal medida estándar con tolerancia -0.05. Compatible con motores Mercedes Benz OM352 y OM366. Componente de precisión para la cadena cinemática del motor."
    },
    {
        id: "P055",
        name: "CORONA ARRANQUE ANGOSTA 125 D. OM352/366",
        brand: "Mercedes Benz",
        code: "3520321105",
        image: "img/products/corona-arranque-om352-angosta.jpg",
        description: "Corona de arranque modelo angosta con 125 dientes. Compatible con motores Mercedes Benz OM352 y OM366. Fabricada en acero de alta resistencia para un arranque confiable."
    },
    {
        id: "P056",
        name: "ESPIGA BIELA MOTOR S/MEDIDA OM352",
        brand: "Mercedes Benz",
        code: "000007006100",
        image: "img/products/espiga-biela-om352-smedida.jpg",
        description: "Espiga de biela de motor, versión sin medida (S/Medida) para ajuste. Compatible con motores Mercedes Benz OM352. Ideal para trabajos de rectificación que requieren un ajuste personalizado."
    },
    {
        id: "P057",
        name: "DEFLECTOR ACEITE CIGÜEÑAL OM352",
        brand: "Mercedes Benz",
        code: "00324",
        image: "img/products/deflector-aceite-ciguenal-om352.jpg",
        description: "Deflector de aceite para cigüeñal, compatible con motores Mercedes Benz OM352. Pieza fundamental para el control del flujo de aceite y protección del sistema de lubricación."
    },
    {
        id: "P058",
        name: "BIELA MOTOR OM352",
        brand: "Mercedes Benz",
        code: "3410307220",
        image: "img/products/biela-motor-om352.jpg",
        description: "Biela de motor para Mercedes Benz OM352. Fabricada con acero forjado de alta resistencia para soportar las exigencias de la combustión diésel. Calidad original garantizada."
    },
    {
        id: "P059",
        name: "BULON CONTRAPESO CIGÜEÑAL CORTO 12x45 OM352",
        brand: "Mercedes Benz",
        code: "3520310071",
        image: "img/products/bulon-contrapeso-ciguenal-corto-om352.jpg",
        description: "Bulón corto para contrapeso de cigüeñal, medida 12x45mm. Compatible con motores Mercedes Benz OM352. Pieza de alta resistencia esencial para el equilibrado dinámico del conjunto motor."
    },
    {
        id: "P060",
        name: "BULON BIELA MOTOR PASANTE 14x81 OM352",
        brand: "Mercedes Benz",
        code: "3520382271",
        image: "img/products/bulon-biela-pasante-om352.jpg",
        description: "Bulón pasante de biela de motor, medida 14x81mm. Compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para garantizar la integridad mecánica de la biela."
    },
    {
        id: "P061",
        name: "RETEN BANCADA (JUEGO EMPAQUETADURA) OM352 (SABO) 1114",
        brand: "Mercedes Benz",
        code: "0009979641 / 0019973141",
        image: "img/products/reten-bancada-om352-sabo.jpg",
        description: "Juego de empaquetadura (retén de bancada) marca SABO para motores Mercedes Benz OM352, especialmente para camiones 1114. Calidad reconocida para un sellado duradero del motor."
    },
    {
        id: "P062",
        name: "PORTA RULEMAN CIGÜEÑAL OM352",
        brand: "Mercedes Benz",
        code: "3120310533",
        image: "img/products/porta-ruleman-ciguenal-om352.jpg",
        description: "Porta ruleman de cigüeñal para motores Mercedes Benz OM352. Pieza de precisión fabricada para alojar el rodamiento del cigüeñal y asegurar su correcta alineación."
    },
    {
        id: "P063",
        name: "BULON BIELA MOTOR PRISIONERO 15x60 OM352",
        brand: "Mercedes Benz",
        code: "3520382771",
        image: "img/products/bulon-biela-prisionero-om352.jpg",
        description: "Bulón prisionero de biela de motor, medida 15x60mm. Compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para un ajuste seguro y duradero."
    },
    {
        id: "P064",
        name: "TUERCA BULON BIELA OM352",
        brand: "Mercedes Benz",
        code: "3520380572",
        image: "img/products/tuerca-bulon-biela-om352.jpg",
        description: "Tuerca de seguridad para bulón de biela, compatible con motores Mercedes Benz OM352. Diseñada para soportar altas tensiones y asegurar el correcto cierre de la biela."
    },
    {
        id: "P065",
        name: "ORING CAMISA PORTA INYECTOR (30.8x3.7) OM352/366",
        brand: "Mercedes Benz",
        code: "0169978248",
        image: "img/products/oring-camisa-inyector-om352.jpg",
        description: "O-ring para camisa porta inyector, medida 30.8x3.7mm. Compatible con motores Mercedes Benz OM352 y OM366. Fabricado en material resistente a altas temperaturas y combustibles para un sellado estanco."
    },
    {
        id: "P066",
        name: "CARCAZA DISTRIBUCION ORIGINAL OM352/366",
        brand: "Mercedes Benz",
        code: "00334",
        image: "img/products/carcaza-distribucion-om352.jpg",
        description: "Carcaza de distribución original para motores Mercedes Benz OM352 y OM366. Pieza estructural de alta calidad que aloja y protege los engranajes de la distribución."
    },
    {
        id: "P067",
        name: "TAPON TAPA CILINDRO (C/HEMBRA) OM352",
        brand: "Mercedes Benz",
        code: "3120160061",
        image: "img/products/tapon-tapa-cilindro-om352-hembra.jpg",
        description: "Tapón para tapa de cilindro con encastre hembra, compatible con motores Mercedes Benz OM352. Fabricado con materiales resistentes a la presión y temperatura del sistema de refrigeración/aceite."
    },
    {
        id: "P068",
        name: "BULON TAPA VALVULAS 8X45 (CORTO) OM352",
        brand: "Mercedes Benz",
        code: "3529900619 / 3229900019 / 3449907019",
        image: "img/products/bulon-tapa-valvulas-om352-corto.jpg",
        description: "Bulón corto para tapa de válvulas, medida 8x45mm. Compatible con motores Mercedes Benz OM352. Incluye arandela integrada para un sellado óptimo y distribución de la presión."
    },
    {
        id: "P069",
        name: "BULON TAPA VALVULAS 8X105 (LARGO) (x2) OM352",
        brand: "Mercedes Benz",
        code: "914008008002",
        image: "img/products/bulon-tapa-valvulas-om352-largo.jpg",
        description: "Bulón largo para tapa de válvulas, medida 8x105mm. Compatible con motores Mercedes Benz OM352. Se comercializa por par (2 unidades) para fijación de las zonas que requieren mayor longitud."
    },
    {
        id: "P070",
        name: "TAPA DISTRIBUCION ALUMINIO OM352",
        brand: "Mercedes Benz",
        code: "3520150201",
        image: "img/products/tapa-distribucion-aluminio-om352.jpg",
        description: "Tapa de distribución fabricada en aluminio de alta calidad para motores Mercedes Benz OM352. Diseñada para un ajuste perfecto y excelente disipación de calor, protegiendo los componentes internos."
    },
    {
        id: "P071",
        name: "CAMISA PORTA INYECTOR OM352/366",
        brand: "Mercedes Benz",
        code: "3520170053",
        image: "img/products/camisa-porta-inyector-om352.jpg",
        description: "Camisa porta inyector para motores Mercedes Benz OM352 y OM366. Fabricada con materiales de alta precisión para asegurar el correcto alojamiento y refrigeración del inyector en la tapa de cilindro."
    },
    {
        id: "P072",
        name: "TAPON BLOCK CANAL ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3520110335",
        image: "img/products/tapon-block-aceite-om352.jpg",
        description: "Tapón para block de motor, específico para el canal de aceite. Compatible con motores Mercedes Benz OM352. Pieza fundamental para el sellado hermético del circuito de lubricación principal."
    },
    {
        id: "P073",
        name: "TAPA SUPERIOR VALVULA (OM352) OH1314",
        brand: "Mercedes Benz",
        code: "3440108030",
        image: "img/products/tapa-valvulas-om352-oh1314.jpg",
        description: "Tapa superior de válvulas para motores Mercedes Benz OM352, compatible con el modelo OH1314. Fabricada con materiales resistentes para un sellado perfecto de la parte superior del motor."
    },
    {
        id: "P074",
        name: "CARCAZA DISTRIBUCION ORIGINAL OM352/366",
        brand: "Mercedes Benz",
        code: "3520102033",
        image: "img/products/carcaza-distribucion-om352-v2.jpg",
        description: "Carcaza de distribución original para motores Mercedes Benz OM352 y OM366. Versión reforzada para un montaje preciso de los engranajes y bomba inyectora."
    },
    {
        id: "P075",
        name: "BULON CARTER LEGITIMO 8X20 OM352/366 (x2)",
        brand: "Mercedes Benz",
        code: "0039905801",
        image: "img/products/bulon-carter-om352.jpg",
        description: "Bulón legítimo para cárter, medida 8x20mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por par (2 unidades). Incluye arandela de presión para un ajuste seguro y evitar filtraciones."
    },
    {
        id: "P076",
        name: "ESPARRAGO CARTER 8X20 OM352/366",
        brand: "Mercedes Benz",
        code: "000939008083",
        image: "img/products/esparrago-carter-om352.jpg",
        description: "Espárrago para cárter medida 8x20mm. Compatible con motores Mercedes Benz OM352 y OM366. Pieza de sujeción de alta resistencia fabricada en acero endurecido para un montaje seguro del cárter."
    },
    {
        id: "P077",
        name: "PERNO GUIA TAPA BANCADA 8.00 OM352",
        brand: "Mercedes Benz",
        code: "000007008101",
        image: "img/products/perno-guia-tapa-bancada-om352.jpg",
        description: "Perno guía para tapa de bancada, medida 8.00mm. Compatible con motores Mercedes Benz OM352. Esencial para asegurar la alineación perfecta de las tapas de bancada durante el armado del motor."
    },
    {
        id: "P078",
        name: "VALVULA VENTEO ROSCADA ALTA 1518 OM352/366/447/457",
        brand: "Mercedes Benz",
        code: "0000185835 / 0000182935 / 0000183535",
        image: "img/products/valvula-venteo-om352-alta.jpg",
        description: "Válvula de venteo modelo roscada alta, compatible con motores Mercedes Benz 1518, OM352, OM366, OM447 y OM457. Pieza clave para la correcta ventilación del carter y control de presión interna."
    },
    {
        id: "P079",
        name: "BULON TAPA DISTRIBUCION LEG.6X70 (x5) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906301",
        image: "img/products/bulon-tapa-distribucion-om352-6x70.jpg",
        description: "Bulón legítimo para tapa de distribución, medida 6x70mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por juego de 5 unidades. Incluye arandela para un sellado y sujeción profesional."
    },
    {
        id: "P080",
        name: "BULON BANCADA BLOCK 15X121 OM352/366",
        brand: "Mercedes Benz",
        code: "3669900304",
        image: "img/products/bulon-bancada-om352.jpg",
        description: "Bulón de bancada para block, medida 15x121mm. Compatible con motores Mercedes Benz OM352 y OM366. Fabricado con acero de máxima resistencia para asegurar la fijación crítica de las tapas de bancada del cigüeñal."
    },
    {
        id: "P081",
        name: "TAPA BANCADA CENTRAL SEMITERM. OM352/366",
        brand: "Mercedes Benz",
        code: "3660100123",
        image: "img/products/tapa-bancada-central-om352.jpg",
        description: "Tapa de bancada central en estado semi-terminado para un ajuste preciso. Compatible con motores Mercedes Benz OM352 y OM366. Pieza de fundición de alta calidad lista para el proceso final de rectificado."
    },
    {
        id: "P082",
        name: "BULON CARTER LEGITIMO 6X16 (x18) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906001",
        image: "img/products/bulon-carter-om352-6x16.jpg",
        description: "Bulón legítimo para cárter, medida 6x16mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por juego de 18 unidades. Incluye arandela integrada para una fijación estanca y segura del cárter."
    },
    {
        id: "P083",
        name: "CODO DESCARGA TURBO AL CARTER OM352A CHAPA",
        brand: "Mercedes Benz",
        code: "4961340022",
        image: "img/products/codo-descarga-turbo-om352-chapa.jpg",
        description: "Codo de descarga de aceite de turbo hacia el cárter, fabricado en chapa de alta resistencia. Compatible con motores Mercedes Benz OM352A. Pieza fundamental para el retorno eficiente del lubricante del turbo."
    },
    {
        id: "P084",
        name: "CODO DESCARGA TURBO AL CARTER OM352A",
        brand: "Mercedes Benz",
        code: "4961340022",
        image: "img/products/codo-descarga-turbo-om352-v2.jpg",
        description: "Codo de descarga de aceite de turbo hacia el cárter, compatible con motores Mercedes Benz OM352A. Pieza de alta durabilidad diseñada para asegurar el flujo constante de retorno de aceite al cárter."
    },
    {
        id: "P085",
        name: "BULON TAPA DISTRIBUCION LEG.6X22 (x8) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906501",
        image: "img/products/bulon-tapa-distribucion-om352-6x22.jpg",
        description: "Bulón legítimo para tapa de distribución, medida 6x22mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por juego de 8 unidades. Incluye arandela para un sellado y sujeción profesional."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
