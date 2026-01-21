const products = [
    {
        id: "P001",
        name: "ELEMENTO F/ACEITE 1114/1517/1518 OM352",
        brand: "Mercedes Benz",
        code: "0011843925",
        image: "img/products/om352/elemento-aceite-om352.jpg",
        description: "Filtro de aceite tipo elemento para motores Mercedes Benz OM352, compatible con modelos 1114, 1517 y 1518. Calidad garantizada para el cuidado de su motor."
    },
    {
        id: "P002",
        name: "CONJ. PLACA DISCO CRAPODINA DE EMBRAGUE 310mm 10 est LUK OM352 1114/1517",
        brand: "Mercedes Benz",
        code: "0002504615 / 3482654113 / 1878654433 / 3151000808",
        image: "img/products/om352/conjunto-embrague-om352.jpg",
        description: "Conjunto de embrague completo (Placa, Disco y Crapodina) de 310mm y 10 estrÃ­as. Marca LUK, compatible con motores Mercedes Benz OM352 en modelos 1114 and 1517."
    },
    {
        id: "P003",
        name: "TAPA FILTRO GAS-OIL DOBLE 1/2 LITRO REFORMA (UNIDAD SELLADA) OM352/366",
        brand: "Mercedes Benz",
        code: "0000924808",
        image: "img/products/om352/tapa-filtro-gasoil-om352.jpg",
        description: "Tapa para filtro de gasoil doble de 1/2 litro, versiÃ³n reforma para unidad sellada. Compatible con motores Mercedes Benz OM352 y OM366. Alta resistencia y durabilidad."
    },
    {
        id: "P004",
        name: "TOBERA 1517/1620 OM352/366",
        brand: "Mercedes Benz",
        code: "9430084247",
        image: "img/products/om352/tobera-mercedes-om352-366.jpg",
        description: "Tobera de inyecciÃ³n para motores Mercedes Benz OM352 y OM366, compatible con modelos 1517 y 1620. Componente de alta precisiÃ³n para el sistema de combustible."
    },
    {
        id: "P005",
        name: "JGO.JUNTA MOTOR S/T.1114OM352",
        brand: "Mercedes Benz",
        code: "48806X",
        image: "img/products/om352/juego-juntas-om352.jpg",
        description: "Juego de juntas de motor completo (sin tapa) para Mercedes Benz 1114 con motor OM352. Incluye todas las juntas necesarias para el block y accesorios. Calidad SabÃ³ para un sellado perfecto."
    },
    {
        id: "P006",
        name: "RETEN DISTRIBUCION 710/1114/1517/1215/1620 OM352/364/366 65/90/15 SABO",
        brand: "Mercedes Benz",
        code: "0069975446",
        image: "img/products/om352/reten-distribucion-om352.jpg",
        description: "RetÃ©n de distribuciÃ³n de 65/90/15mm. Marca SABO, compatible con una amplia gama de motores Mercedes Benz (OM352, OM364, OM366) en modelos como 710, 1114, 1517, 1215 y 1620."
    },
    {
        id: "P007",
        name: "SILENCIADOR OH1314 MOTOR TRAS. OM352",
        brand: "Mercedes Benz",
        code: "3214906101",
        image: "img/products/om352/silenciador-oh1314-om352.jpg",
        description: "Silenciador de escape para chasis de Ã³mnibus OH1314 con motor trasero OM352. Fabricado con materiales resistentes a la corrosiÃ³n y altas temperaturas para un rendimiento Ã³ptimo."
    },
    {
        id: "P008",
        name: "VALVULA CABEZAL F/ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3521840032",
        image: "img/products/om352/valvula-cabezal-filtro-om352.jpg",
        description: "VÃ¡lvula para el cabezal del filtro de aceite, compatible con motores Mercedes Benz OM352. Componente esencial para mantener la presiÃ³n de aceite correcta en el sistema."
    },
    {
        id: "P009",
        name: "VASO FILTRO ACEITE ALUMINIO OM352",
        brand: "Mercedes Benz",
        code: "3461800011",
        image: "img/products/om352/vaso-filtro-aceite-aluminio-om352.jpg",
        description: "Vaso para filtro de aceite fabricado en aluminio de alta calidad. DiseÃ±ado especÃ­ficamente para motores Mercedes Benz OM352, garantizando un ajuste perfecto y durabilidad."
    },
    {
        id: "P010",
        name: "VASO FILTRO ACEITE USADO OM352",
        brand: "Mercedes Benz",
        code: "3461800011",
        image: "img/products/om352/vaso-filtro-aceite-usado-om352.jpg",
        description: "Vaso para filtro de aceite usado/reacondicionado para motores Mercedes Benz OM352. Una opciÃ³n econÃ³mica y funcional con la garantÃ­a de calidad original."
    },
    {
        id: "P011",
        name: "VALVULA BOMBA ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3521800015",
        image: "img/products/om352/valvula-bomba-aceite-om352.jpg",
        description: "VÃ¡lvula para bomba de aceite compatible con motores Mercedes Benz OM352. Fabricada bajo estÃ¡ndares originales para asegurar el flujo y presiÃ³n correctos del lubricante."
    },
    {
        id: "P012",
        name: "TURBO 1518 OM352 IMPORTADO",
        brand: "Mercedes Benz",
        code: "3520965799",
        image: "img/products/om352/turbo-mercedes-1518.jpg",
        description: "Turbocompresor importado de alta performance para Mercedes Benz 1518 con motor OM352. Calidad superior para optimizar la potencia y eficiencia de su motor."
    },
    {
        id: "P013",
        name: "BOTADOR VALVULA IMP. OM352/366",
        brand: "Mercedes Benz",
        code: "3520540501",
        image: "img/products/om352/botador-valvula-om352-366.jpg",
        description: "Botador de vÃ¡lvula importado para motores Mercedes Benz OM352 and OM366. Fabricado con acero de alta resistencia para un funcionamiento silencioso y duradero del tren de vÃ¡lvulas."
    },
    {
        id: "P014",
        name: "RAMPA BALANCINES COMPLETA OM352/366",
        brand: "Mercedes Benz",
        code: "50050",
        image: "img/products/om352/rampa-balancines-om352-366.jpg",
        description: "Rampa de balancines completa para motores Mercedes Benz OM352 y OM366. Incluye eje, balancines, resortes y soportes. Lista para instalar y garantizar una correcta apertura de vÃ¡lvulas."
    },
    {
        id: "P015",
        name: "SOPORTE BOMBA INYECTORA OM352",
        brand: "Mercedes Benz",
        code: "3220760235",
        image: "img/products/om352/soporte-bomba-inyectora-om352.jpg",
        description: "Soporte para bomba inyectora de motores Mercedes Benz OM352. Fabricado en material de alta resistencia para un montaje preciso y seguro de la bomba inyectora."
    },
    {
        id: "P016",
        name: "BOMBA ALIMENTADORA OM352 1114",
        brand: "Mercedes Benz",
        code: "0000900250",
        image: "img/products/om352/bomba-alimentadora-om352.jpg",
        description: "Bomba alimentadora de combustible para Mercedes Benz 1114 con motor OM352. Incluye vaso decantador de vidrio. Repuesto de alta calidad para asegurar el suministro de gasoil al motor."
    },
    {
        id: "P017",
        name: "AVANCE ARBOL LEVAS IMPORTADO OM352/366",
        brand: "Mercedes Benz",
        code: "3660700245",
        image: "img/products/om352/avance-arbol-levas-om352.jpg",
        description: "Engranaje de avance para Ã¡rbol de levas, calidad importada. Compatible con motores Mercedes Benz OM352 y OM366. Componente crÃ­tico para la correcta sincronizaciÃ³n del motor."
    },
    {
        id: "P018",
        name: "REGISTRO VALVULA C/TUERCA OM352/366",
        brand: "Mercedes Benz",
        code: "3120550321",
        image: "img/products/om352/registro-valvula-om352.jpg",
        description: "Tornillo de registro de vÃ¡lvula con tuerca para motores Mercedes Benz OM352 and OM366. Pieza fundamental para el ajuste preciso de la luz de vÃ¡lvulas."
    },
    {
        id: "P019",
        name: "CHAVETA ARBOL LEVAS M/NUEVO OM352/366",
        brand: "Mercedes Benz",
        code: "006885006039",
        image: "img/products/om352/chaveta-arbol-levas-om352.jpg",
        description: "Chaveta para Ã¡rbol de levas (modelo nuevo) compatible con motores Mercedes Benz OM352 and OM366. Fabricada con materiales de alta resistencia para una fijaciÃ³n segura del engranaje."
    },
    {
        id: "P020",
        name: "EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3120500231",
        image: "img/products/om352/eje-balancin-om352.jpg",
        description: "Eje de balancines para motores Mercedes Benz OM352 and OM366. Rectificado de precisiÃ³n para asegurar un movimiento suave y equilibrado de los balancines."
    },
    {
        id: "P021",
        name: "RESORTE PUNTA EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3129930005",
        image: "img/products/om352/resorte-eje-balancin-om352.jpg",
        description: "Resorte de presiÃ³n para la punta del eje de balancines, compatible con motores Mercedes Benz OM352 y OM366. Mantiene la tensiÃ³n adecuada en el conjunto de balancines."
    },
    {
        id: "P022",
        name: "PRISIONERO EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "000417006001",
        image: "img/products/om352/prisionero-eje-balancin-om352.jpg",
        description: "Tornillo prisionero para la fijaciÃ³n del eje de balancines en motores Mercedes Benz OM352 y OM366. Componente de precisiÃ³n para mantener la estabilidad del conjunto."
    },
    {
        id: "P023",
        name: "PLAQUETA ARBOL LEVAS M/NUEVO OM352/366",
        brand: "Mercedes Benz",
        code: "3520520762",
        image: "img/products/om352/plaqueta-arbol-levas-om352.jpg",
        description: "Plaqueta de fijaciÃ³n para Ã¡rbol de levas (modelo nuevo) compatible con motores Mercedes Benz OM352 y OM366. Asegura la posiciÃ³n axial del Ã¡rbol de levas."
    },
    {
        id: "P024",
        name: "PLAQUETA ARBOL LEVAS M/VIEJO OM352",
        brand: "Mercedes Benz",
        code: "3120520262",
        image: "img/products/om352/plaqueta-arbol-levas-viejo-om352.jpg",
        description: "Plaqueta de fijaciÃ³n para Ã¡rbol de levas (modelo viejo) para motores Mercedes Benz OM352. Componente original para restauraciones o reparaciones de motores clÃ¡sicos."
    },
    {
        id: "P025",
        name: "ENGRANAJE ARBOL LEVAS GRANDE M/VJO.OM352 ZF",
        brand: "Mercedes Benz",
        code: "3120520601",
        image: "img/products/om352/engranaje-arbol-levas-om352-grande.jpg",
        description: "Engranaje de Ã¡rbol de levas grande (modelo viejo) para motores Mercedes Benz OM352. Fabricado bajo especificaciones ZF para garantizar mÃ¡xima precisiÃ³n y durabilidad en la distribuciÃ³n."
    },
    {
        id: "P026",
        name: "SEGURO EJE BALANCINES OM352/366",
        brand: "Mercedes Benz",
        code: "3129930225",
        image: "img/products/om352/seguro-eje-balancines-om352.jpg",
        description: "Seguro para eje de balancines en motores Mercedes Benz OM352 y OM366. Pieza de acero templado para asegurar la retenciÃ³n lateral de los balancines en el eje."
    },
    {
        id: "P027",
        name: "AVANCE ARBOL LEVAS OM352/366",
        brand: "Mercedes Benz",
        code: "3620700045",
        image: "img/products/om352/avance-arbol-levas-om352-362.jpg",
        description: "Engranaje de avance para Ã¡rbol de levas compatible con motores Mercedes Benz OM352 y OM366. Componente de alta precisiÃ³n para la sincronizaciÃ³n del sistema de distribuciÃ³n."
    },
    {
        id: "P028",
        name: "TUERCA REGISTRO VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3159900051",
        image: "img/products/om352/tuerca-registro-valvula-om352.jpg",
        description: "Tuerca para tornillo de registro de vÃ¡lvula, compatible con motores Mercedes Benz OM352 y OM366. Pieza esencial para asegurar el ajuste de la luz de vÃ¡lvulas."
    },
    {
        id: "P029",
        name: "RESORTE VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520530320",
        image: "img/products/om352/resorte-valvula-om352.jpg",
        description: "Resorte de vÃ¡lvula para motores Mercedes Benz OM352 y OM366. Fabricado con acero de alta calidad para mantener la elasticidad y tensiÃ³n necesarias en el tren de vÃ¡lvulas."
    },
    {
        id: "P030",
        name: "VARILLA LEV. VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520540205 / 3520540005",
        image: "img/products/om352/varilla-valvula-om352.jpg",
        description: "Varilla levanta vÃ¡lvula para motores Mercedes Benz OM352 y OM366. Calidad importada, diseÃ±ada para soportar las exigencias del tren de vÃ¡lvulas con mÃ¡xima precisiÃ³n."
    },
    {
        id: "P031",
        name: "CHAVETA VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3430537027 / 3120530127",
        image: "img/products/om352/chaveta-valvula-om352.jpg",
        description: "Chaveta de vÃ¡lvula (seguro) para motores Mercedes Benz OM352 y OM366. Pieza de seguridad fundamental para la retenciÃ³n del platillo y resorte de vÃ¡lvula."
    },
    {
        id: "P032",
        name: "BUJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3440550050",
        image: "img/products/om352/buje-balancin-om352.jpg",
        description: "Buje de balancÃ­n para motores Mercedes Benz OM352 y OM366. Fabricado en bronce de alta calidad para reducir la fricciÃ³n y el desgaste en el eje de balancines."
    },
    {
        id: "P033",
        name: "ENGRANAJE FIJO BOMBA INY. OM352/366",
        brand: "Mercedes Benz",
        code: "3440777012 / 3520770412",
        image: "img/products/om352/engranaje-fijo-bomba-inyectora-om352.jpg",
        description: "Engranaje fijo para bomba inyectora compatible con motores Mercedes Benz OM352 y OM366. Pieza de precisiÃ³n para asegurar la correcta transferencia de movimiento al sistema de inyecciÃ³n."
    },
    {
        id: "P034",
        name: "SOPORTE BALANCIN (NROS: 2-5-6) OM352/366",
        brand: "Mercedes Benz",
        code: "3520550410",
        image: "img/products/om352/soporte-balancin-om352.jpg",
        description: "Soporte de balancÃ­n (nÃºmeros 2, 5 y 6) para motores Mercedes Benz OM352 y OM366. Fabricado en fundiciÃ³n de alta resistencia para un anclaje firme del eje de balancines."
    },
    {
        id: "P035",
        name: "JGO. CONOS UNION EJE BALANCIN OM352/366",
        brand: "Mercedes Benz",
        code: "3120550553 / 3120550653 / 9934701",
        image: "img/products/om352/conos-union-eje-balancin-om352.jpg",
        description: "Juego de conos de uniÃ³n para eje de balancines, compatible con motores Mercedes Benz OM352 y OM366. Incluye conos y resorte para asegurar la alineaciÃ³n perfecta del conjunto."
    },
    {
        id: "P036",
        name: "CHAVETA ARBOL LEVAS M/VIEJO 6x10mm.OM352",
        brand: "Mercedes Benz",
        code: "006888006006",
        image: "img/products/om352/chaveta-arbol-levas-viejo-6x10-om352.jpg",
        description: "Chaveta para Ã¡rbol de levas (modelo viejo) de 6x10mm. Especialmente diseÃ±ada para motores Mercedes Benz OM352 clÃ¡sicos, asegurando un encastre perfecto."
    },
    {
        id: "P037",
        name: "PLATILLO VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3220530125",
        image: "img/products/om352/platillo-valvula-om352.jpg",
        description: "Platillo de vÃ¡lvula para motores Mercedes Benz OM352 y OM366. Componente de precisiÃ³n para el correcto apoyo del resorte de vÃ¡lvula."
    },
    {
        id: "P038",
        name: "AVANCE BOMBA INYECTORA OM352/314",
        brand: "Mercedes Benz",
        code: "3520701345",
        image: "img/products/om352/avance-bomba-inyectora-om352.jpg",
        description: "Engranaje de avance para bomba inyectora compatible con motores Mercedes Benz OM352 and OM314. Pieza clave para la puesta a punto y sincronizaciÃ³n de la inyecciÃ³n diÃ©sel."
    },
    {
        id: "P039",
        name: "VOLANTE MOTOR C/CORONA 375MM 125DTES OM352/366",
        brand: "Mercedes Benz",
        code: "3520303905",
        image: "img/products/om352/volante-motor-om352.jpg",
        description: "Volante de motor con corona de arranque de 375mm and 125 dientes. Compatible con motores Mercedes Benz OM352 and OM366. Fabricado con fundiciÃ³n de alta resistencia para un balanceo perfecto."
    },
    {
        id: "P041",
        name: "ENGRANAJE ARBOL LEVAS CHICO M/VJO. OM352",
        brand: "Mercedes Benz",
        code: "3520770014",
        image: "img/products/om352/engranaje-arbol-levas-om352-chico.jpg",
        description: "Engranaje de Ã¡rbol de levas chico (modelo viejo) para motores Mercedes Benz OM352. Pieza de distribuciÃ³n fundamental para la sincronizaciÃ³n del motor, fabricada bajo estÃ¡ndares originales."
    },
    {
        id: "P042",
        name: "SOPORTE BALANCIN (NROS: 3-4) OM352/366",
        brand: "Mercedes Benz",
        code: "3520550210",
        image: "img/products/om352/soporte-balancin-3-4-om352.jpg",
        description: "Soporte de balancÃ­n (nÃºmeros 3 y 4) para motores Mercedes Benz OM352 and OM366. Fabricado en fundiciÃ³n de alta resistencia para un anclaje firme del eje de balancines en las posiciones centrales."
    },
    {
        id: "P043",
        name: "BOTADOR VALVULA OM352/366",
        brand: "Mercedes Benz",
        code: "3520540501",
        image: "img/products/om352/botador-valvula-om352-original.jpg",
        description: "Botador de vÃ¡lvula para motores Mercedes Benz OM352 and OM366. Componente de precisiÃ³n para el correcto funcionamiento del sistema de distribuciÃ³n."
    },
    {
        id: "P044",
        name: "CHAVETA CIGÃœEÃ‘AL 8x13x32mm. OM352/366",
        brand: "Mercedes Benz",
        code: "006888008004",
        image: "img/products/om352/chaveta-ciguenal-om352.png",
        description: "Chaveta para cigÃ¼eÃ±al de 8x13x32mm, compatible con motores Mercedes Benz OM352 and OM366. Pieza fundamental para la fijaciÃ³n del engranaje de distribuciÃ³n en el cigÃ¼eÃ±al."
    },
    {
        id: "P045",
        name: "BULON VOLANTE MOTOR 12x25 OM352",
        brand: "Mercedes Benz",
        code: "3529902201",
        image: "img/products/om352/bulon-volante-motor-om352.jpg",
        description: "BulÃ³n de volante de motor de 12x25mm, compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para garantizar un ajuste seguro and duradero del volante."
    },
    {
        id: "P046",
        name: "ESPIGA BIELA MOTOR 6mm.STD OM352",
        brand: "Mercedes Benz",
        code: "000007006100",
        image: "img/products/om352/espiga-biela-om352.jpg",
        description: "Espiga de biela de motor, medida 6mm estÃ¡ndar. Compatible con motores Mercedes Benz OM352. Pieza de precisiÃ³n para asegurar la correcta alineaciÃ³n and montaje del conjunto de biela."
    },
    {
        id: "P047",
        name: "BULON CONTRAPESO CIGÃœEÃ‘AL LARGO OM352",
        brand: "Mercedes Benz",
        code: "3520310071",
        image: "img/products/om352/bulon-contrapeso-ciguenal-largo-om352.jpg",
        description: "BulÃ³n largo para contrapeso de cigÃ¼eÃ±al, compatible with motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para soportar las fuerzas centrÃ­fugas del cigÃ¼eÃ±al."
    },
    {
        id: "P048",
        name: "CORONA ARRANQUE ANCHA 125 D. OM352",
        brand: "Mercedes Benz",
        code: "3120320105",
        image: "img/products/om352/corona-arranque-om352-ancha.jpg",
        description: "Corona de arranque modelo ancho con 125 dientes. Compatible with motores Mercedes Benz OM352. Fabricada en acero templado para resistir el impacto del piÃ±Ã³n de arranque."
    },
    {
        id: "P049",
        name: "RETEN BANCADA (JUEGO EMPAQUETADURA) ELRING OM352",
        brand: "Mercedes Benz",
        code: "0009979641",
        image: "img/products/om352/reten-bancada-om352-elring.jpg",
        description: "Juego de empaquetadura (retÃ©n de bancada) marca Elring para motores Mercedes Benz OM352. Calidad alemana superior para asegurar el sellado perfecto del cÃ¡rter and bloque motor."
    },
    {
        id: "P050",
        name: "ENGRANAJE CIGÃœEÃ‘AL (-0.03) STD OM352/366",
        brand: "Mercedes Benz",
        code: "3520520003",
        image: "img/products/om352/engranaje-ciguenal-om352-std.jpg",
        description: "Engranaje de cigÃ¼eÃ±al medida estÃ¡ndar con tolerancia -0.03. Compatible with motores Mercedes Benz OM352 and OM366. Pieza crÃ­tica de distribuciÃ³n para una sincronizaciÃ³n exacta."
    },
    {
        id: "P051",
        name: "PISTA DISTRIBUCION C/CHAV. IMP OM352/366",
        brand: "Mercedes Benz",
        code: "3140350214 / 3220350014",
        image: "img/products/om352/pista-distribucion-om352.jpg",
        description: "PISTA DE DISTRIBUCION C/CHAVETERA INTEGRADA. CALIDAD IMPORTADA (IMP) PARA MOTORES MERCEDES BENZ OM352 Y OM366. COMPONENTE ESENCIAL PARA EL CORRECTO POSICIONAMIENTO DEL RETEN DE DISTRIBUCION."
    },
    {
        id: "P052",
        name: "BULON TAPA CILINDRO 12X111 12.9 (x25) OM352/366",
        brand: "Mercedes Benz",
        code: "3669900301",
        image: "img/products/om352/bulon-tapa-cilindro-om352-12x111.jpg",
        description: "BulÃ³n de tapa de cilindro de alta resistencia (grado 12.9), medida 12x111mm. Compatible with motores Mercedes Benz OM352 and OM366. Se comercializa por juego de 25 unidades para asegurar la sustituciÃ³n completa."
    },
    {
        id: "P053",
        name: "BULON PUNTA CIGÃœEÃ‘AL LARGO 24x55 OM352",
        brand: "Mercedes Benz",
        code: "3149901001",
        image: "img/products/om352/bulon-punta-ciguenal-om352.jpg",
        description: "BulÃ³n de punta de cigÃ¼eÃ±al modelo largo, medida 24x55mm. Compatible with motores Mercedes Benz OM352. Fabricado with acero de alta resistencia para un anclaje seguro de la polea and engranajes."
    },
    {
        id: "P054",
        name: "ENGRANAJE CIGÃœEÃ‘AL (-0.05) STD OM352/366",
        brand: "Mercedes Benz",
        code: "3520520003",
        image: "img/products/om352/engranaje-ciguenal-om352-005.jpg",
        description: "Engranaje de cigÃ¼eÃ±al medida estÃ¡ndar con tolerancia -0.05. Compatible with motores Mercedes Benz OM352 and OM366. Componente de precisiÃ³n para la cadena cinemÃ¡tica del motor."
    },
    {
        id: "P055",
        name: "CORONA ARRANQUE ANGOSTA 125 D. OM352/366",
        brand: "Mercedes Benz",
        code: "3520321105",
        image: "img/products/om352/corona-arranque-om352-angosta.jpg",
        description: "Corona de arranque modelo angosta con 125 dientes. Compatible con motores Mercedes Benz OM352 y OM366. Fabricada en acero de alta resistencia para un arranque confiable."
    },
    {
        id: "P056",
        name: "ESPIGA BIELA MOTOR S/MEDIDA OM352",
        brand: "Mercedes Benz",
        code: "000007006100",
        image: "img/products/om352/espiga-biela-om352-smedida.jpg",
        description: "Espiga de biela de motor, versiÃ³n sin medida (S/Medida) para ajuste. Compatible con motores Mercedes Benz OM352. Ideal para trabajos de rectificaciÃ³n que requieren un ajuste personalizado."
    },
    {
        id: "P057",
        name: "DEFLECTOR ACEITE CIGÃœEÃ‘AL OM352",
        brand: "Mercedes Benz",
        code: "00324",
        image: "img/products/om352/deflector-aceite-ciguenal-om352.jpg",
        description: "Deflector de aceite para cigÃ¼eÃ±al, compatible con motores Mercedes Benz OM352. Pieza fundamental para el control del flujo de aceite y protecciÃ³n del sistema de lubricaciÃ³n."
    },
    {
        id: "P058",
        name: "BIELA MOTOR OM352",
        brand: "Mercedes Benz",
        code: "3410307220",
        image: "img/products/om352/biela-motor-om352.jpg",
        description: "Biela de motor para Mercedes Benz OM352. Fabricada con acero forjado de alta resistencia para soportar las exigencias de la combustiÃ³n diÃ©sel. Calidad original garantizada."
    },
    {
        id: "P059",
        name: "BULON CONTRAPESO CIGÃœEÃ‘AL CORTO 12x45 OM352",
        brand: "Mercedes Benz",
        code: "3520310071",
        image: "img/products/om352/bulon-contrapeso-ciguenal-corto-om352.jpg",
        description: "BulÃ³n corto para contrapeso de cigÃ¼eÃ±al, medida 12x45mm. Compatible con motores Mercedes Benz OM352. Pieza de alta resistencia esencial para el equilibrado dinÃ¡mico del conjunto motor."
    },
    {
        id: "P060",
        name: "BULON BIELA MOTOR PASANTE 14x81 OM352",
        brand: "Mercedes Benz",
        code: "3520382271",
        image: "img/products/om352/bulon-biela-pasante-om352.jpg",
        description: "BulÃ³n pasante de biela de motor, medida 14x81mm. Compatible con motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para garantizar la integridad mecÃ¡nica de la biela."
    },
    {
        id: "P061",
        name: "RETEN BANCADA (JUEGO EMPAQUETADURA) OM352 (SABO) 1114",
        brand: "Mercedes Benz",
        code: "0009979641 / 0019973141",
        image: "img/products/om352/reten-bancada-om352-sabo.jpg",
        description: "Juego de empaquetadura (retÃ©n de bancada) marca SABO para motores Mercedes Benz OM352, especialmente para camiones 1114. Calidad reconocida para un sellado duradero del motor."
    },
    {
        id: "P062",
        name: "PORTA RULEMAN CIGÃœEÃ‘AL OM352",
        brand: "Mercedes Benz",
        code: "3120310533",
        image: "img/products/om352/porta-ruleman-ciguenal-om352.jpg",
        description: "Porta ruleman de cigÃ¼eÃ±al para motores Mercedes Benz OM352. Pieza de precisiÃ³n fabricada para alojar el rodamiento del cigÃ¼eÃ±al and asegurar su correcta alineaciÃ³n."
    },
    {
        id: "P063",
        name: "BULON BIELA MOTOR PRISIONERO 15x60 OM352",
        brand: "Mercedes Benz",
        code: "3520382771",
        image: "img/products/om352/bulon-biela-prisionero-om352.jpg",
        description: "BulÃ³n prisionero de biela de motor, medida 15x60mm. Compatible with motores Mercedes Benz OM352. Fabricado con acero de alta resistencia para un ajuste seguro and duradero."
    },
    {
        id: "P064",
        name: "TUERCA BULON BIELA OM352",
        brand: "Mercedes Benz",
        code: "3520380572",
        image: "img/products/om352/tuerca-bulon-biela-om352.jpg",
        description: "Tuerca de seguridad para bulÃ³n de biela, compatible con motores Mercedes Benz OM352. DiseÃ±ada para soportar altas tensiones and asegurar el correcto cierre de la biela."
    },
    {
        id: "P065",
        name: "ORING CAMISA PORTA INYECTOR (30.8x3.7) OM352/366",
        brand: "Mercedes Benz",
        code: "0169978248",
        image: "img/products/om352/oring-camisa-inyector-om352.jpg",
        description: "O-ring para camisa porta inyector, medida 30.8x3.7mm. Compatible con motores Mercedes Benz OM352 y OM366. Fabricado en material resistente a altas temperaturas and combustibles para un sellado estanco."
    },
    {
        id: "P066",
        name: "CARCAZA DISTRIBUCION ORIGINAL OM352/366",
        brand: "Mercedes Benz",
        code: "00334",
        image: "img/products/om352/carcaza-distribucion-om352.jpg",
        description: "Carcaza de distribuciÃ³n original para motores Mercedes Benz OM352 y OM366. Pieza estructural de alta calidad que aloja and protege los engranajes de la distribuciÃ³n."
    },
    {
        id: "P067",
        name: "TAPON TAPA CILINDRO (C/HEMBRA) OM352",
        brand: "Mercedes Benz",
        code: "3120160061",
        image: "img/products/om352/tapon-tapa-cilindro-om352-hembra.jpg",
        description: "TapÃ³n para tapa de cilindro con encastre hembra, compatible con motores Mercedes Benz OM352. Fabricado con materiales resistentes a la presiÃ³n and temperatura del sistema de refrigeraciÃ³n/aceite."
    },
    {
        id: "P068",
        name: "BULON TAPA VALVULAS 8X45 (CORTO) OM352",
        brand: "Mercedes Benz",
        code: "3529900619 / 3229900019 / 3449907019",
        image: "img/products/om352/bulon-tapa-valvulas-om352-corto.jpg",
        description: "BulÃ³n corto para tapa de vÃ¡lvulas, medida 8x45mm. Compatible with motores Mercedes Benz OM352. Incluye arandela integrada para un sellado Ã³ptimo and distribuciÃ³n de la presiÃ³n."
    },
    {
        id: "P069",
        name: "BULON TAPA VALVULAS 8X105 (LARGO) (x2) OM352",
        brand: "Mercedes Benz",
        code: "914008008002",
        image: "img/products/om352/bulon-tapa-valvulas-om352-largo.jpg",
        description: "BulÃ³n largo para tapa de vÃ¡lvulas, medida 8x105mm. Compatible with motores Mercedes Benz OM352. Se comercializa por par (2 unidades) para fijaciÃ³n de las zonas que requieren mayor longitud."
    },
    {
        id: "P070",
        name: "TAPA DISTRIBUCION ALUMINIO OM352",
        brand: "Mercedes Benz",
        code: "3520150201",
        image: "img/products/om352/tapa-distribucion-aluminio-om352.jpg",
        description: "Tapa de distribuciÃ³n fabricada en aluminio de alta calidad para motores Mercedes Benz OM352. DiseÃ±ada para un ajuste perfecto and excelente disipaciÃ³n de calor, protegiendo los componentes internos."
    },
    {
        id: "P071",
        name: "CAMISA PORTA INYECTOR OM352/366",
        brand: "Mercedes Benz",
        code: "3520170053",
        image: "img/products/om352/camisa-porta-inyector-om352.jpg",
        description: "Camisa porta inyector para motores Mercedes Benz OM352 y OM366. Fabricada con materiales de alta precisiÃ³n para asegurar el correcto alojamiento and refrigeraciÃ³n del inyector en la tapa de cilindro."
    },
    {
        id: "P072",
        name: "TAPON BLOCK CANAL ACEITE OM352",
        brand: "Mercedes Benz",
        code: "3520110335",
        image: "img/products/om352/tapon-block-aceite-om352.jpg",
        description: "TapÃ³n para block de motor, especÃ­fico para el canal de aceite. Compatible with motores Mercedes Benz OM352. Pieza fundamental para el sellado hermÃ©tico del circuito de lubricaciÃ³n principal."
    },
    {
        id: "P073",
        name: "TAPA SUPERIOR VALVULA (OM352) OH1314",
        brand: "Mercedes Benz",
        code: "3440108030",
        image: "img/products/om352/tapa-valvulas-om352-oh1314.jpg",
        description: "Tapa superior de vÃ¡lvulas para motores Mercedes Benz OM352, compatible with el modelo OH1314. Fabricada con materiales resistentes para un sellado perfecto de la parte superior del motor."
    },
    {
        id: "P074",
        name: "CARCAZA DISTRIBUCION ORIGINAL OM352/366",
        brand: "Mercedes Benz",
        code: "3520102033",
        image: "img/products/om352/carcaza-distribucion-om352-v2.jpg",
        description: "Carcaza de distribuciÃ³n original para motores Mercedes Benz OM352 y OM366. VersiÃ³n reforzada para un montaje preciso de los engranajes and bomba inyectora."
    },
    {
        id: "P075",
        name: "BULON CARTER LEGITIMO 8X20 OM352/366 (x2)",
        brand: "Mercedes Benz",
        code: "0039905801",
        image: "img/products/om352/bulon-carter-om352.jpg",
        description: "BulÃ³n legÃ­timo para cÃ¡rter, medida 8x20mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por par (2 unidades). Incluye arandela de presiÃ³n para un ajuste seguro y evitar filtraciones."
    },
    {
        id: "P076",
        name: "ESPARRAGO CARTER 8X20 OM352/366",
        brand: "Mercedes Benz",
        code: "000939008083",
        image: "img/products/om352/esparrago-carter-om352.jpg",
        description: "EspÃ¡rrago para cÃ¡rter medida 8x20mm. Compatible con motores Mercedes Benz OM352 y OM366. Pieza de sujeciÃ³n de alta resistencia fabricada en acero endurecido para un montaje seguro del cÃ¡rter."
    },
    {
        id: "P077",
        name: "PERNO GUIA TAPA BANCADA 8.00 OM352",
        brand: "Mercedes Benz",
        code: "000007008101",
        image: "img/products/om352/perno-guia-tapa-bancada-om352.jpg",
        description: "Perno guÃ­a para tapa de bancada, medida 8.00mm. Compatible con motores Mercedes Benz OM352. Esencial para asegurar la alineaciÃ³n perfecta de las tapas de bancada durante el armado del motor."
    },
    {
        id: "P078",
        name: "VALVULA VENTEO ROSCADA ALTA 1518 OM352/366/447/457",
        brand: "Mercedes Benz",
        code: "0000185835 / 0000182935 / 0000183535",
        image: "img/products/om352/valvula-venteo-om352-alta.jpg",
        description: "VÃ¡lvula de venteo modelo roscada alta, compatible con motores Mercedes Benz 1518, OM352, OM366, OM447 y OM457. Pieza clave para la correcta ventilaciÃ³n del carter y control de presiÃ³n interna."
    },
    {
        id: "P079",
        name: "BULON TAPA DISTRIBUCION LEG.6X70 (x5) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906301",
        image: "img/products/om352/bulon-tapa-distribucion-om352-6x70.jpg",
        description: "BulÃ³n legÃ­timo para tapa de distribuciÃ³n, medida 6x70mm. Compatible con motores Mercedes Benz OM352 y OM366. Se comercializa por juego de 5 unidades. Incluye arandela para un sellado y sujeciÃ³n profesional."
    },
    {
        id: "P080",
        name: "BULON BANCADA BLOCK 15X121 OM352/366",
        brand: "Mercedes Benz",
        code: "3669900304",
        image: "img/products/om352/bulon-bancada-om352.jpg",
        description: "BulÃ³n de bancada para block, medida 15x121mm. Compatible con motores Mercedes Benz OM352 y OM366. Fabricado con acero de mÃ¡xima resistencia para asegurar la fijaciÃ³n crÃ­tica de las tapas de bancada del cigÃ¼eÃ±al."
    },
    {
        id: "P081",
        name: "TAPA BANCADA CENTRAL SEMITERM. OM352/366",
        brand: "Mercedes Benz",
        code: "3660100123",
        image: "img/products/om352/tapa-bancada-central-om352.jpg",
        description: "Tapa de bancada central en estado semi-terminado para un ajuste preciso. Compatible con motores Mercedes Benz OM352 y OM366. Pieza de fundiciÃ³n de alta calidad lista para el proceso final de rectificado."
    },
    {
        id: "P082",
        name: "BULON CARTER LEGITIMO 6X16 (x18) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906001",
        image: "img/products/om352/bulon-carter-om352-6x16.jpg",
        description: "BulÃ³n legÃ­timo para cÃ¡rter, medida 6x16mm. Compatible with motores Mercedes Benz OM352 and OM366. Se comercializa por juego de 18 unidades. Incluye arandela integrada para una fijaciÃ³n estanca and segura del cÃ¡rter."
    },
    {
        id: "P083",
        name: "CODO DESCARGA TURBO AL CARTER OM352A CHAPA",
        brand: "Mercedes Benz",
        code: "4961340022",
        image: "img/products/om352/codo-descarga-turbo-om352-chapa.jpg",
        description: "Codo de descarga de aceite de turbo hacia el cÃ¡rter, fabricado en chapa de alta resistencia. Compatible con motores Mercedes Benz OM352A. Pieza fundamental para el retorno eficiente del lubricante del turbo."
    },
    {
        id: "P084",
        name: "CODO DESCARGA TURBO AL CARTER OM352A",
        brand: "Mercedes Benz",
        code: "4961340022",
        image: "img/products/om352/codo-descarga-turbo-om352-v2.jpg",
        description: "Codo de descarga de aceite de turbo hacia el cÃ¡rter, compatible with motores Mercedes Benz OM352A. Pieza de alta durabilidad diseÃ±ada para asegurar el flujo constante de retorno de aceite al cÃ¡rter."
    },
    {
        id: "P085",
        name: "BULON TAPA DISTRIBUCION LEG.6X22 (x8) OM352/366",
        brand: "Mercedes Benz",
        code: "0039906501",
        image: "img/products/om352/bulon-tapa-distribucion-om352-6x22.jpg",
        description: "BulÃ³n legÃ­timo para tapa de distribuciÃ³n, medida 6x22mm. Compatible with motores Mercedes Benz OM352 and OM366. Se comercializa por juego de 8 unidades. Incluye arandela para un sellado and sujeciÃ³n profesional."
    },
    {
        id: "P086",
        name: "CAÃ‘O SALIDA BOMBA D/H 1218/OM366/A/LA",
        brand: "Mercedes Benz",
        code: "3884608188",
        image: "img/products/om366/cano-salida-bomba-om366.jpg",
        description: "CaÃ±o de salida de bomba de direcciÃ³n hidrÃ¡ulica para Mercedes Benz 1218 con motor OM366/A/LA. Fabricado en acero de alta resistencia con acabado anticorrosivo para garantizar durabilidad en el sistema hidrÃ¡ulico."
    },
    {
        id: "P087",
        name: "COMPRESOR T/WABCO 75mm OM366",
        brand: "Mercedes Benz",
        code: "0031316301 / 0041315801 / 0031314801 / 4111418180 / 42338404850",
        image: "img/products/om366/compresor-wabco-om366.jpg",
        description: "Compresor de aire tipo WABCO de 75mm para motores Mercedes Benz OM366. Compatible con mÃºltiples modelos. Componente esencial del sistema de frenos neumÃ¡ticos, fabricado con estÃ¡ndares de alta calidad para garantizar presiÃ³n constante y seguridad en el frenado."
    },
    {
        id: "P088",
        name: "ELEM.H947/1 ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3661800009",
        image: "img/products/om366/elemento-aceite-om366.jpg",
        description: "Elemento de filtro de aceite H947/1 para motores Mercedes Benz OM366. Filtro de alta eficiencia que garantiza la limpieza del aceite lubricante, protegiendo los componentes internos del motor contra el desgaste y prolongando su vida Ãºtil."
    },
    {
        id: "P089",
        name: "JUNTA T/CIL.OM366/6A I.A",
        brand: "Mercedes Benz",
        code: "3660160020",
        image: "img/products/om366/junta-tapa-cilindro-om366.jpg",
        description: "Junta de tapa de cilindro para motores Mercedes Benz OM366/6A. Fabricada con materiales de alta calidad resistentes a altas temperaturas y presiones. Garantiza un sellado hermÃ©tico perfecto entre la tapa de cilindros y el block del motor."
    },
    {
        id: "P090",
        name: "FILTRO ACEITE W1168/5 OM366 MANN (01835/1)",
        brand: "Mercedes Benz",
        code: "0031843301",
        image: "img/products/om366/filtro-aceite-mann-om366.jpg",
        description: "Filtro de aceite MANN W1168/5 (referencia 01835/1) para motores Mercedes Benz OM366. Filtro de rosca de alta eficiencia que garantiza la mÃ¡xima protecciÃ³n del motor. Calidad alemana MANN-FILTER para un rendimiento Ã³ptimo y durabilidad superior."
    },
    {
        id: "P091",
        name: "CONEXION DE REFRIGERACION 1621/OM366/366LA",
        brand: "Mercedes Benz",
        code: "3762007852 / 3762008352",
        image: "img/products/om366/conexion-refrigeracion-om366.jpg",
        description: "ConexiÃ³n de refrigeraciÃ³n para Mercedes Benz 1621 con motores OM366 y OM366LA. Pieza fundamental del sistema de enfriamiento que conecta las mangueras de refrigerante. Fabricada en material resistente a altas temperaturas y presiÃ³n del sistema."
    },
    {
        id: "P092",
        name: "TAPA SUPERIOR VALVULA C/VENTEO Y SIN ENTRADA DE ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3660160605",
        image: "img/products/om366/tapa-valvulas-om366.jpg",
        description: "Tapa superior de vÃ¡lvulas con venteo y sin entrada de aceite para motores Mercedes Benz OM366. Fabricada en aluminio de alta calidad con acabado resistente. Incluye sistema de ventilaciÃ³n integrado para el control de gases del cÃ¡rter."
    },
    {
        id: "P093",
        name: "POLEA B/AGUA 3 CANALES REFORMA 196MM/152MM OM366 1215 ALUMINIO",
        brand: "Mercedes Benz",
        code: "3662020810",
        image: "img/products/om366/polea-bomba-agua-om366.jpg",
        description: "Polea de bomba de agua de 3 canales, versiÃ³n reforma, medidas 196mm/152mm. Fabricada en aluminio de alta resistencia para motores Mercedes Benz OM366 en modelo 1215. DiseÃ±o optimizado para el sistema de refrigeraciÃ³n y accesorios del motor."
    },
    {
        id: "P094",
        name: "JUNTA TAPA TERMOSTATO OM366",
        brand: "Mercedes Benz",
        code: "3662030280",
        image: "img/products/om366/junta-tapa-termostato-om366.jpg",
        description: "Junta de tapa de termostato para motores Mercedes Benz OM366. Fabricada en material resistente a altas temperaturas y refrigerante. Garantiza un sellado hermÃ©tico perfecto en la carcasa del termostato del sistema de refrigeraciÃ³n."
    },
    {
        id: "P095",
        name: "JGO.JUNTA T/REFRI.M/N. OM366",
        brand: "Mercedes Benz",
        code: "3661803765",
        image: "img/products/om366/juego-juntas-tapa-refrigeracion-om366.jpg",
        description: "Juego de juntas de tapa de refrigeraciÃ³n mÃºltiple/nueva para motores Mercedes Benz OM366. Incluye todas las juntas necesarias para el sistema de refrigeraciÃ³n. Fabricadas con materiales de alta calidad resistentes a altas temperaturas y refrigerante."
    },
    {
        id: "P096",
        name: "JTA.PALIER OM366/1517",
        brand: "Mercedes Benz",
        code: "3273560180",
        image: "img/products/om366/junta-palier-om366.jpg",
        description: "Junta de palier para motores Mercedes Benz OM366 y modelo 1517. Fabricada en material resistente al aceite de transmisiÃ³n. Garantiza un sellado perfecto en el conjunto del palier, evitando pÃ©rdidas de lubricante."
    },
    {
        id: "P097",
        name: "JGO.JUNTA CARTER OM366",
        brand: "Mercedes Benz",
        code: ">71184",
        originalCode: "3660100580 3660100680",
        image: "img/products/om366/juego-junta-carter-om366.jpg",
        description: "Juego de juntas de cÃ¡rter para motores Mercedes Benz OM366. Incluye todas las juntas necesarias para el sellado perfecto del cÃ¡rter. Fabricadas con materiales de alta calidad resistentes al aceite y a las altas temperaturas, garantizando un sellado hermÃ©tico duradero."
    },
    {
        id: "P098",
        name: "JUNTA TAPA DISTRIBUCION CORCHO/GOMA/TELA OM366",
        brand: "Mercedes Benz",
        code: "3520150520",
        image: "img/products/om366/junta-tapa-distribucion-om366.jpg",
        description: "Junta de tapa de distribuciÃ³n fabricada en material compuesto de corcho/goma/tela para motores Mercedes Benz OM366. DiseÃ±ada para soportar altas temperaturas y presiÃ³n del aceite, garantizando un sellado hermÃ©tico perfecto entre la tapa y la carcasa de distribuciÃ³n."
    },
    {
        id: "P099",
        name: "JUNTA LATERAL BOT. T/VALV GOMA OM366",
        brand: "Mercedes Benz",
        code: "3520150160",
        image: "img/products/om366/junta-lateral-tapa-valvulas-om366.jpg",
        description: "Junta lateral de botador para tapa de vÃ¡lvulas fabricada en goma de alta calidad para motores Mercedes Benz OM366. DiseÃ±ada para sellar perfectamente el lateral de la tapa de vÃ¡lvulas, resistente al aceite y a las altas temperaturas del motor."
    },
    {
        id: "P100",
        name: "JUNTA TAPA VALV.SUPERIOR OM366",
        brand: "Mercedes Benz",
        code: "3660160321",
        image: "img/products/om366/junta-tapa-valvulas-superior-om366.jpg",
        description: "Junta de tapa de vÃ¡lvulas superior para motores Mercedes Benz OM366. Fabricada con materiales de alta calidad resistentes al aceite y a las altas temperaturas. Garantiza un sellado hermÃ©tico perfecto en la parte superior de la tapa de vÃ¡lvulas."
    },
    {
        id: "P101",
        name: "JTA.SAL.ESC.DOBLE. OM366",
        brand: "Mercedes Benz",
        code: "6844927080",
        image: "img/products/om366/junta-salida-escape-doble-om366.jpg",
        description: "Junta de salida de escape doble para motores Mercedes Benz OM366. Fabricada en material resistente a altas temperaturas y gases de escape. DiseÃ±ada para sellar perfectamente la conexiÃ³n doble del mÃºltiple de escape, evitando fugas de gases."
    },
    {
        id: "P102",
        name: "SILENCIADOR 1620/OM366A 3 1/2 C/COLA 4.\" LLENO",
        brand: "Mercedes Benz",
        code: "3824907201",
        image: "img/products/om366/silenciador-1620-om366a.jpg",
        description: "Silenciador de escape para Mercedes Benz 1620 con motor OM366A. Entrada de 3 1/2 pulgadas con cola de 4 pulgadas, modelo lleno. Fabricado con materiales resistentes a la corrosiÃ³n y altas temperaturas para un rendimiento Ã³ptimo del sistema de escape."
    },
    {
        id: "P103",
        name: "CAÃ‘O SALIDA DE BOMBA HIDRAULICA 1215 OM366",
        brand: "Mercedes Benz",
        code: "3444608624",
        image: "img/products/om366/cano-salida-bomba-hidraulica-1215-om366.jpg",
        description: "CaÃ±o de salida de bomba hidrÃ¡ulica para Mercedes Benz 1215 con motor OM366. Fabricado en acero de alta resistencia con acabado anticorrosivo. DiseÃ±ado para garantizar el flujo Ã³ptimo del fluido hidrÃ¡ulico desde la bomba hacia el sistema de direcciÃ³n."
    },
    {
        id: "P104",
        name: "CILINDRO FRENO MOTOR T/KNORR OM366/447/449/457",
        brand: "Mercedes Benz",
        code: "0004306026",
        originalCode: "I94326 0004304926 0004305926 0004305026 I90281 8845021210 0004304826",
        image: "img/products/om366/cilindro-freno-motor-knorr-om366.jpg",
        description: "Cilindro de freno motor tipo KNORR compatible con motores Mercedes Benz OM366, OM447, OM449 y OM457. Fabricado con materiales de alta resistencia para soportar las exigencias del sistema de frenado auxiliar. Componente esencial para el control del freno motor en vehÃ­culos pesados."
    },
    {
        id: "P105",
        name: "FLEXIBLE EMBRAGUE (220mm) H/H 1215 OM366 14mm",
        brand: "Mercedes Benz",
        code: "3762957035",
        image: "img/products/om366/flexible-embrague-1215-om366.jpg",
        description: "Flexible de embrague de 220mm hembra/hembra para Mercedes Benz 1215 con motor OM366. Rosca de 14mm. Fabricado con manguera de alta presiÃ³n y conexiones de acero reforzado. Componente esencial para el sistema de accionamiento hidrÃ¡ulico del embrague."
    },
    {
        id: "P106",
        name: "RIGIDO BOMBIN EMBRAGUE L1620 OM366LA",
        brand: "Mercedes Benz",
        code: "6952907213",
        image: "img/products/om366/rigido-bombin-embrague-l1620-om366la.jpg",
        description: "CaÃ±o rÃ­gido de bombÃ­n de embrague para Mercedes Benz L1620 con motor OM366LA. Fabricado en acero de alta resistencia con acabado anticorrosivo. DiseÃ±ado para conectar el sistema hidrÃ¡ulico del embrague, garantizando una transmisiÃ³n eficiente de la presiÃ³n hidrÃ¡ulica."
    },
    {
        id: "P107",
        name: "RIGIDO BOMBA EMBRAGUE L1620 OM366LA",
        brand: "Mercedes Benz",
        code: "6952907113",
        image: "img/products/om366/rigido-bomba-embrague-l1620-om366la.jpg",
        description: "CaÃ±o rÃ­gido de bomba de embrague para Mercedes Benz L1620 con motor OM366LA. Fabricado en acero de alta resistencia con acabado anticorrosivo. Componente del sistema hidrÃ¡ulico que conecta la bomba de embrague, asegurando una transmisiÃ³n eficiente de la presiÃ³n."
    },
    {
        id: "P108",
        name: "PORTACRAPODINA OM366",
        brand: "Mercedes Benz",
        code: "3812501415",
        image: "img/products/om366/portacrapodina-om366.jpg",
        description: "Porta crapodina (porta collarin) para motores Mercedes Benz OM366. Fabricado en fundiciÃ³n de alta resistencia. Componente esencial del sistema de embrague que aloja y soporta el collarÃ­n de empuje, garantizando un accionamiento suave y preciso del embrague."
    },
    {
        id: "P109",
        name: "PALETA PLASTICO OM366 7 PALAS 550mm",
        brand: "Mercedes Benz",
        code: "3762000224",
        image: "img/products/om366/paleta-plastico-om366-7-palas.jpg",
        description: "Paleta de ventilador de plÃ¡stico de 7 palas, diÃ¡metro 550mm para motores Mercedes Benz OM366. Fabricada en material plÃ¡stico de alta resistencia a temperaturas extremas. DiseÃ±ada para optimizar el flujo de aire y la refrigeraciÃ³n del motor."
    },
    {
        id: "P110",
        name: "PALETA PLASTICO OM366 C/CHAP.10PAL",
        brand: "Mercedes Benz",
        code: "3762000224",
        image: "img/products/om366/paleta-plastico-om366-10-palas.jpg",
        description: "Paleta de ventilador de plÃ¡stico con chapa de 10 palas para motores Mercedes Benz OM366. Fabricada en material plÃ¡stico de alta resistencia con refuerzo metÃ¡lico central. DiseÃ±ada para maximizar el flujo de aire y mejorar la eficiencia del sistema de refrigeraciÃ³n."
    },
    {
        id: "P111",
        name: "PALETA PLASTICO OM366 C/CHAP.9PALAS 6 AGUJ.515mm",
        brand: "Mercedes Benz",
        code: "3762000224",
        image: "img/products/om366/paleta-plastico-om366-9-palas.jpg",
        description: "Paleta de ventilador de plÃ¡stico con chapa de 9 palas, 6 agujeros, diÃ¡metro 515mm para motores Mercedes Benz OM366. Fabricada en material plÃ¡stico de alta resistencia con refuerzo metÃ¡lico central. DiseÃ±ada para optimizar el flujo de aire y la refrigeraciÃ³n del motor."
    },
    {
        id: "P112",
        name: "POLEA B/AGUA 3 CANALES 209MM/149MM OM366 1215",
        brand: "Mercedes Benz",
        code: "3662020810",
        image: "img/products/om366/polea-bomba-agua-om366-3-canales.jpg",
        description: "Polea de bomba de agua de 3 canales, medidas 209mm/149mm para motores Mercedes Benz OM366 en modelo 1215. Fabricada en fundiciÃ³n de alta resistencia. DiseÃ±ada para el accionamiento Ã³ptimo de la bomba de agua y otros accesorios del motor mediante correas trapezoidales."
    },
    {
        id: "P113",
        name: "BOMBA ACEITE OM366A",
        brand: "Mercedes Benz",
        code: "3661800301",
        image: "img/products/om366/bomba-aceite-om366a.jpg",
        description: "Bomba de aceite para motores Mercedes Benz OM366A. Fabricada con engranajes de alta precisiÃ³n y carcasa de fundiciÃ³n resistente. Componente esencial del sistema de lubricaciÃ³n que garantiza la presiÃ³n y circulaciÃ³n adecuada del aceite en todo el motor."
    },
    {
        id: "P114",
        name: "VASO FILTRO ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3661800311",
        image: "img/products/om366/vaso-filtro-aceite-om366.jpg",
        description: "Vaso para filtro de aceite para motores Mercedes Benz OM366. Fabricado en aluminio de alta calidad con acabado resistente a la corrosiÃ³n. DiseÃ±ado para alojar el elemento filtrante de aceite, garantizando un ajuste perfecto y durabilidad en el sistema de lubricaciÃ³n."
    },
    {
        id: "P115",
        name: "REFRIGERADOR ACEITE OM366A",
        brand: "Mercedes Benz",
        code: "3661803865",
        originalCode: "3661800865",
        image: "img/products/om366/refrigerador-aceite-om366a.jpg",
        description: "Refrigerador de aceite para motores Mercedes Benz OM366A. Fabricado en aluminio de alta conductividad tÃ©rmica. Componente esencial del sistema de lubricaciÃ³n que mantiene la temperatura Ã³ptima del aceite, prolongando la vida Ãºtil del motor y mejorando su rendimiento."
    },
    {
        id: "P116",
        name: "JUNTA FILTRO RADIADOR ACEITE OM366 (ORING)",
        brand: "Mercedes Benz",
        code: "0059976948",
        image: "img/products/om366/junta-filtro-radiador-aceite-om366.jpg",
        description: "Junta (O-ring) para filtro intermedio de radiador de aceite, compatible con motores Mercedes Benz OM366. Fabricada en material de goma resistente al aceite y altas temperaturas. Garantiza un sellado estanco en la conexiÃ³n del intercambiador de calor."
    },
    {
        id: "P117",
        name: "PALETA PLASTICO L1620/1218 8 PALAS 592mm",
        brand: "Mercedes Benz",
        code: "3762007123",
        image: "img/products/om366/paleta-plastico-8-palas-om366.jpg",
        description: "Paleta de ventilador de plÃ¡stico de 8 palas, diÃ¡metro 592mm. Compatible con Mercedes Benz L1620, 1218 y motores OM366/904. DiseÃ±o aerodinÃ¡mico de alta eficiencia para optimizar el flujo de aire a travÃ©s del radiador y mejorar la refrigeraciÃ³n del motor."
    },
    {
        id: "P118",
        name: "BULON MULTIPLE 10X60 OM366",
        brand: "Mercedes Benz",
        code: "000933010347",
        originalCode: "910105010003",
        image: "img/products/om366/bulon-multiple-10x60-om366.jpg",
        description: "BulÃ³n para mÃºltiple de medida 10x60mm. Compatible con motores Mercedes Benz OM366. Fabricado en acero de alta resistencia para soportar las variaciones tÃ©rmicas y la tensiÃ³n mecÃ¡nica en la fijaciÃ³n de los mÃºltiples de admisiÃ³n o escape."
    },
    {
        id: "P119",
        name: "VALVULA BOMBA ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3661800315",
        image: "img/products/om366/valvula-bomba-aceite-om366.jpg",
        description: "VÃ¡lvula para bomba de aceite compatible con motores Mercedes Benz OM366. Componente de precisiÃ³n diseÃ±ado para regular y asegurar el correcto flujo y presiÃ³n de aceite en el sistema de lubricaciÃ³n del motor."
    },
    {
        id: "P120",
        name: "TAPA REFRIGERADORA M/N OM366",
        brand: "Mercedes Benz",
        code: "3661803665",
        image: "img/products/om366/tapa-refrigeradora-om366.jpg",
        description: "Tapa refrigeradora (modelo nuevo) para motores Mercedes Benz OM366. Fabricada en fundiciÃ³n de alta calidad. DiseÃ±ada para sellar y proteger el intercambiador de calor/refrigerador de aceite, asegurando la eficiencia del sistema de enfriamiento del lubricante."
    },
    {
        id: "P121",
        name: "TAPA COMPRESOR TRAS. OH1420/OM366",
        brand: "Mercedes Benz",
        code: "0001311142",
        originalCode: "4110426004",
        image: "img/products/om366/tapa-compresor-trasera-om366.jpg",
        description: "Tapa trasera de compresor para Mercedes Benz OH1420 con motor OM366. Fabricada en acero de alta resistencia. Componente fundamental para el sellado y cierre de la carcasa del compresor de aire."
    },
    {
        id: "P122",
        name: "CIGUEÃ‘AL COMPRESOR KNORR 88 OM366",
        brand: "Mercedes Benz",
        code: "0001314216",
        image: "img/products/om366/ciguenal-compresor-knorr-om366.jpg",
        description: "CigÃ¼eÃ±al para compresor tipo Knorr de 88mm, compatible con motores Mercedes Benz OM366. Fabricado en acero forjado de alta resistencia y rectificado de precisiÃ³n. Pieza central del compresor que convierte el movimiento rotativo en lineal para la compresiÃ³n de aire."
    },
    {
        id: "P123",
        name: "CODO BAJADA TURBO S/FREN.IMP. OM366A",
        brand: "Mercedes Benz",
        code: "3761440112",
        image: "img/products/om366/codo-bajada-turbo-om366a.jpg",
        description: "Codo de bajada de turbo sin freno (importado) para motores Mercedes Benz OM366A. Fabricado en fundiciÃ³n de alta resistencia tÃ©rmica. Pieza clave del sistema de escape que conecta la salida del turbocompresor con el resto de la lÃ­nea de escape."
    },
    {
        id: "P124",
        name: "TURBO IMPORTADO OM366 (SIN VALVULA)",
        brand: "Mercedes Benz",
        code: "3760968799",
        originalCode: "3660961899",
        image: "img/products/om366/turbo-importado-om366-sin-valvula.jpg",
        description: "Turbocompresor importado sin vÃ¡lvula para motores Mercedes Benz OM366. DiseÃ±ado para aumentar la potencia y eficiencia del motor mediante la compresiÃ³n del aire de admisiÃ³n. Fabricado con materiales de alta calidad para soportar altas temperaturas y velocidades de rotaciÃ³n."
    },
    {
        id: "P125",
        name: "KIT TURBO LATERAL S/ESCAPE OM366",
        brand: "Mercedes Benz",
        code: ">00935/1",
        image: "img/products/om366/kit-turbo-lateral-sin-escape-om366.jpg",
        description: "Kit de turbo lateral sin escape para motores Mercedes Benz OM366. Incluye mÃºltiples de admisiÃ³n y escape, codos, abrazaderas, juntas, bulonerÃ­a y tuberÃ­as de aceite necesarias para la instalaciÃ³n o reparaciÃ³n del sistema de turbocompresor. Conjunto completo para una instalaciÃ³n precisa."
    },
    {
        id: "P126",
        name: "TURBO SCHWITZER OM366/366LA",
        brand: "Mercedes Benz",
        code: "3660963899",
        image: "img/products/om366/turbo-schwitzer-om366.jpg",
        description: "Turbocompresor marca Schwitzer compatible con motores Mercedes Benz OM366 y OM366LA. DiseÃ±ado para optimizar la entrada de aire y potenciar el rendimiento del motor bajo condiciones exigentes de trabajo. ConstrucciÃ³n robusta para mÃ¡xima durabilidad."
    },
    {
        id: "P127",
        name: "CODO BAJADA TURBO OM366A C/FRENO MOTOR",
        brand: "Mercedes Benz",
        code: "3761400553",
        image: "img/products/om366/codo-bajada-turbo-con-freno-motor-om366a.jpg",
        description: "Codo de bajada de turbo con freno motor para Mercedes Benz OM366A. Fabricado en fundiciÃ³n de alta resistencia. Incluye el mecanismo de mariposa para el accionamiento del freno motor, esencial para la seguridad y control del vehÃ­culo en pendientes."
    },
    {
        id: "P128",
        name: "CODO BAJADA TURBO OM366 ECOLOGICO C/FRENO",
        brand: "Mercedes Benz",
        code: "3760900428",
        image: "img/products/om366/codo-bajada-turbo-ecologico-con-freno-om366.jpg",
        description: "Codo de bajada de turbo ecolÃ³gico con freno motor para Mercedes Benz OM366. DiseÃ±o optimizado para reducir emisiones y mejorar el rendimiento. Incluye sistema de mariposa para freno motor, fabricado en fundiciÃ³n de alta calidad para soportar altas temperaturas."
    },
    {
        id: "P129",
        name: "CODO BAJADA TURBO OM366A",
        brand: "Mercedes Benz",
        code: "3761440112",
        image: "img/products/om366/codo-bajada-turbo-om366a-std.jpg",
        description: "Codo de bajada de turbo estÃ¡ndar para motores Mercedes Benz OM366A. Fabricado en fundiciÃ³n de hierro resistente a ciclos tÃ©rmicos. Conecta la salida del turbo con el sistema de escape, asegurando un flujo de gases eficiente."
    },
    {
        id: "P130",
        name: "KIT TURBO S/ESCAPE OM366 1215",
        brand: "Mercedes Benz",
        code: ">00935",
        image: "img/products/om366/kit-turbo-sin-escape-om366-1215.jpg",
        description: "Kit de turbo sin escape para Mercedes Benz 1215 con motor OM366. Conjunto completo de componentes para la instalaciÃ³n del sistema de turbocompresor, incluyendo mÃºltiples, abrazaderas, juntas y tuberÃ­as necesarias, pero sin incluir el turbocompresor ni la bajada de escape."
    },
    {
        id: "P131",
        name: "CODO BAJADA TURBO OM366A P/FRENO MOTOR",
        brand: "Mercedes Benz",
        code: "3761400553",
        image: "img/products/om366/codo-bajada-turbo-om366a-para-freno-motor.jpg",
        description: "Codo de bajada de turbo preparado para freno motor, compatible con Mercedes Benz OM366A. Fabricado en fundiciÃ³n resistente. DiseÃ±o especÃ­fico para alojar el sistema de mariposa de freno motor (no incluido), asegurando un ajuste perfecto y duradero."
    },
    {
        id: "P132",
        name: "CODO BAJADA TURBO OM366 ECOLOGICO P/FRENO",
        brand: "Mercedes Benz",
        code: "3760900428",
        image: "img/products/om366/codo-bajada-turbo-ecologico-para-freno-om366.jpg",
        description: "Codo de bajada de turbo ecolÃ³gico preparado para freno motor, compatible con motores Mercedes Benz OM366. DiseÃ±ado para alojar el mecanismo de freno motor (no incluido). Fabricado en fundiciÃ³n de alta calidad, optimizado para sistemas de escape ecolÃ³gicos."
    },
    {
        id: "P133",
        name: "CODO BAJADA TURBO OM366 ECOLOGICO",
        brand: "Mercedes Benz",
        code: "3660987315",
        image: "img/products/om366/codo-bajada-turbo-ecologico-om366.jpg",
        description: "Codo de bajada de turbo ecolÃ³gico para motores Mercedes Benz OM366. Componente del sistema de escape diseÃ±ado para mejorar el flujo de gases y reducir la contrapresiÃ³n, contribuyendo a una mayor eficiencia y menores emisiones."
    },
    {
        id: "P134",
        name: "SOPORTE F/GAS OIL COMPRESOR OM366LA OHL1621/L1620",
        brand: "Mercedes Benz",
        code: "3760920140",
        image: "img/products/om366/soporte-filtro-gasoil-compresor-om366la.jpg",
        description: "Soporte de filtro de gasoil y compresor para Mercedes Benz OM366LA, modelos OHL1621 y L1620. Fabricado en fundiciÃ³n de alta resistencia. DiseÃ±ado para soportar y fijar firmemente el filtro de combustible y el compresor al bloque del motor."
    },
    {
        id: "P135",
        name: "ORING ACOP.BOMBA INY OM366",
        brand: "Mercedes Benz",
        code: ">72023",
        image: "img/products/om366/oring-acople-bomba-inyectora-om366.jpg",
        description: "O-ring para acople de bomba inyectora, compatible con motores Mercedes Benz OM366. Fabricado en material de goma resistente al combustible y aceites. Garantiza un sellado hermÃ©tico en la conexiÃ³n de la bomba inyectora, preveniendo fugas."
    },
    {
        id: "P136",
        name: "JGO.CAÃ‘OS INYECTOR OM366",
        brand: "Mercedes Benz",
        code: ">77020",
        image: "img/products/om366/juego-canos-inyector-om366.jpg",
        description: "Juego de caÃ±os de inyector para motores Mercedes Benz OM366. Incluye la tuberÃ­a de alta presiÃ³n completa para el sistema de inyecciÃ³n. Fabricados en acero de alta resistencia para soportar las elevadas presiones de inyecciÃ³n y vibraciones del motor."
    },
    {
        id: "P137",
        name: "SOPORTE BOMBA INYECTORA OM366",
        brand: "Mercedes Benz",
        code: "3640760035",
        image: "img/products/om366/soporte-bomba-inyectora-om366.jpg",
        description: "Soporte de bomba inyectora para motores Mercedes Benz OM366. Fabricado en fundiciÃ³n de alta calidad. Garantiza la correcta fijaciÃ³n y alineaciÃ³n de la bomba de inyecciÃ³n al bloque del motor, asegurando el funcionamiento preciso del sistema de combustible."
    },
    {
        id: "P138",
        name: "ENGRANAJE FIJO BOMBA INYECT. EURO1/OM366",
        brand: "Mercedes Benz",
        code: "3760770112",
        image: "img/products/om366/engranaje-fijo-bomba-inyectora-euro1-om366.jpg",
        description: "Engranaje fijo de bomba inyectora para motores Mercedes Benz OM366 (Euro 1). Fabricado en acero de alta resistencia y endurecido para soportar el desgaste. Componente crucial para la sincronizaciÃ³n precisa de la inyecciÃ³n de combustible."
    },
    {
        id: "P139",
        name: "BULON PUNTA ARBOL LEVAS OM366/352A",
        brand: "Mercedes Benz",
        code: "3520750071",
        image: "img/products/om366/bulon-punta-arbol-levas-om366.jpg",
        description: "BulÃ³n de punta de Ã¡rbol de levas para motores Mercedes Benz OM366 y OM352A. Fabricado en acero de alta resistencia para garantizar un apriete seguro y duradero del engranaje del Ã¡rbol de levas, soportando las exigencias del sistema de distribuciÃ³n."
    },
    {
        id: "P140",
        name: "ENGRANAJE FIJO BOMBA INYECT. EURO2/OM366",
        brand: "Mercedes Benz",
        code: "3760777112",
        image: "img/products/om366/engranaje-fijo-bomba-inyectora-euro2-om366.jpg",
        description: "Engranaje fijo de bomba inyectora para motores Mercedes Benz OM366 (Euro 2). DiseÃ±ado con especificaciones precisas para la sincronizaciÃ³n del sistema de inyecciÃ³n en motores de normativa Euro 2. Fabricado en acero tratado para mÃ¡xima durabilidad."
    },
    {
        id: "P141",
        name: "AVANCE ARBOL LEVAS /EURO II/ OM366LA",
        brand: "Mercedes Benz",
        code: "3760707445",
        image: "img/products/om366/avance-arbol-levas-euro2-om366la.jpg",
        description: "Variador de avance de Ã¡rbol de levas para motores Mercedes Benz OM366LA (Euro II). Mecanismo de precisiÃ³n que optimiza los tiempos de la distribuciÃ³n, mejorando el rendimiento del motor y reduciendo emisiones. Fabricado con materiales de alta durabilidad."
    },
    {
        id: "P142",
        name: "BIELA MOTOR ECOLOGICO OM366LA",
        brand: "Mercedes Benz",
        code: "3760307320",
        image: "img/products/om366/biela-motor-ecologico-om366la.jpg",
        description: "Biela de motor ecolÃ³gico para Mercedes Benz OM366LA. Fabricada en acero forjado de alta resistencia para soportar las mayores presiones de combustiÃ³n de los motores ecolÃ³gicos. DiseÃ±o reforzado para garantizar durabilidad y rendimiento Ã³ptimo."
    },
    {
        id: "P143",
        name: "TAPA SUPERIOR VALVULA C/VENTEO Y ENTRADA DE ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3660161505",
        image: "img/products/om366/tapa-valvulas-con-venteo-om366.jpg",
        description: "Tapa superior de vÃ¡lvulas con venteo y entrada de aceite para motores Mercedes Benz OM366. Fabricada en aluminio fundido de alta calidad. Incluye orificios para el sistema de ventilaciÃ³n del cÃ¡rter y el llenado de aceite, asegurando un sellado perfecto y protecciÃ³n del tren de vÃ¡lvulas."
    },
    {
        id: "P144",
        name: "BIELA MOTOR MODELO VIEJO OM366",
        brand: "Mercedes Benz",
        code: "3760307120",
        image: "img/products/om366/biela-motor-modelo-viejo-om366.jpg",
        description: "Biela de motor (modelo viejo) para Mercedes Benz OM366. Fabricada en acero forjado de alta resistencia. Componente esencial que conecta el pistÃ³n con el cigÃ¼eÃ±al, transmitiendo la fuerza de la combustiÃ³n para generar el movimiento rotativo."
    },
    {
        id: "P145",
        name: "ANILLO CENTRAJE POLEA CIGUENAL OM366",
        brand: "Mercedes Benz",
        code: "3220350018",
        image: "img/products/om366/anillo-centraje-polea-ciguenal-om366.jpg",
        description: "Anillo de centraje para polea de cigÃ¼eÃ±al de motores Mercedes Benz OM366. Fabricado en acero de alta precisiÃ³n. Asegura la correcta alineaciÃ³n y balanceo de la polea, evitando vibraciones y desgastes prematuros."
    },
    {
        id: "P146",
        name: "BULON VOLANTE MOTOR 12x45 OM366LA OHL1420",
        brand: "Mercedes Benz",
        code: "00341",
        originalCode: "3669900701",
        image: "img/products/om366/bulon-volante-motor-12x45-om366la.jpg",
        description: "BulÃ³n de volante de motor medida 12x45, compatible con Mercedes Benz OM366LA y OHL1420. Fabricado en acero de alta resistencia (grado 10.9 o superior) para soportar el torque y la vibraciÃ³n del volante de inercia."
    },
    {
        id: "P147",
        name: "BULON BIELA MOTOR 12x56 OM366/904/906",
        brand: "Mercedes Benz",
        code: "9060380171",
        image: "img/products/om366/bulon-biela-motor-12x56-om366.jpg",
        description: "BulÃ³n de biela de motor medida 12x56, compatible con motores Mercedes Benz OM366, OM904 y OM906. Fabricado en acero de alta resistencia y elasticidad controlada para garantizar la uniÃ³n segura de la biela al cigÃ¼eÃ±al bajo condiciones extremas de funcionamiento."
    },
    {
        id: "P148",
        name: "ANILLO CENTRAJE POLEA CIGUENAL OM366LA",
        brand: "Mercedes Benz",
        code: "3520310064",
        image: "img/products/om366/anillo-centraje-polea-ciguenal-om366la.jpg",
        description: "Anillo de centraje para polea de cigÃ¼eÃ±al de motores Mercedes Benz OM366LA. Componente de precisiÃ³n diseÃ±ado para asegurar el correcto posicionamiento y balance de la polea amortiguadora, evitando vibraciones perjudiciales para el motor."
    },
    {
        id: "P149",
        name: "BULON PUNTA CIGÃœEÃ‘AL CORTO 24x75 OM366",
        brand: "Mercedes Benz",
        code: "3669901501",
        image: "img/products/om366/bulon-punta-ciguenal-corto-om366.jpg",
        description: "BulÃ³n de punta de cigÃ¼eÃ±al corto, medida 24x75, para motores Mercedes Benz OM366. Fabricado en acero de alta resistencia para soportar el torque de apriete y asegurar la polea del cigÃ¼eÃ±al."
    },
    {
        id: "P150",
        name: "POLEA ADICIONAL 2 CANALES OM366/OHL",
        brand: "Mercedes Benz",
        code: ">00339",
        image: "img/products/om366/polea-adicional-2-canales-om366.jpg",
        description: "Polea adicional de 2 canales para motores Mercedes Benz OM366 y OHL. Fabricada en fundiciÃ³n de alta resistencia. DiseÃ±ada para accionar accesorios adicionales mediante correas trapezoidales, asegurando una transmisiÃ³n de potencia eficiente."
    },
    {
        id: "P151",
        name: "BULON VOLANTE MOTOR 12x25 OM366",
        brand: "Mercedes Benz",
        code: "3669900501",
        image: "img/products/om366/bulon-volante-motor-12x25-om366.jpg",
        description: "BulÃ³n de volante de motor medida 12x25, compatible con motores Mercedes Benz OM366. Fabricado en acero de alta resistencia para soportar las exigencias de fijaciÃ³n del volante."
    },
    {
        id: "P152",
        name: "TAPON TAPA CILINDRO (TACITA) 35mm. OM366",
        brand: "Mercedes Benz",
        code: "4039970420",
        image: "img/products/om366/tapon-tapa-cilindro-tacita-35mm-om366.jpg",
        description: "TapÃ³n de tapa de cilindro tipo tacita, diÃ¡metro 35mm, para motores Mercedes Benz OM366. Fabricado en material resistente a la corrosiÃ³n y altas temperaturas. Utilizado para sellar los orificios de fundiciÃ³n de la tapa de cilindros."
    },
    {
        id: "P153",
        name: "TAPA LATERAL BOTADORES ALUMINIO OM366",
        brand: "Mercedes Benz",
        code: "3660150504",
        image: "img/products/om366/tapa-lateral-botadores-aluminio-om366.jpg",
        description: "Tapa lateral de botadores de aluminio para motores Mercedes Benz OM366. Fabricada en aluminio de alta calidad para una mejor disipaciÃ³n de calor y menor peso. Protege y sella la cÃ¡mara de los botadores, evitando fugas de aceite."
    },
    {
        id: "P154",
        name: "CARTER ACEITE MOTOR S/BRIDA OM366",
        brand: "Mercedes Benz",
        code: "3520103627",
        image: "img/products/om366/carter-aceite-motor-sin-brida-om366.jpg",
        description: "CÃ¡rter de aceite de motor sin brida para Mercedes Benz OM366. Componente fundamental del sistema de lubricaciÃ³n, fabricado en chapa de acero estampada de alta resistencia. DiseÃ±ado para almacenar el aceite del motor y permitir su correcta circulaciÃ³n."
    },
    {
        id: "P155",
        name: "TAPON TAPA CILINDRO (TACITA) 25mm. OM366",
        brand: "Mercedes Benz",
        code: "000443025003",
        image: "img/products/om366/tapon-tapa-cilindro-tacita-25mm-om366.jpg",
        description: "TapÃ³n de tapa de cilindro tipo tacita, diÃ¡metro 25mm, para motores Mercedes Benz OM366. Fabricado en acero con recubrimiento protector. Esencial para el sellado de los conductos de refrigeraciÃ³n o lubricaciÃ³n en la tapa de cilindros."
    },
    {
        id: "P156",
        name: "VALVULA VENTEO ROSCADA BAJA OM366A",
        brand: "Mercedes Benz",
        code: "0000185735",
        image: "img/products/om366/valvula-venteo-roscada-baja-om366a.jpg",
        description: "VÃ¡lvula de venteo roscada (tipo baja) para motores Mercedes Benz OM366A. Facilita la evacuaciÃ³n de gases del cÃ¡rter, manteniendo la presiÃ³n interna equilibrada. DiseÃ±o compacto y resistente."
    },
    {
        id: "P157",
        name: "CARTER ACEITE MOTOR PLANO OM366 -OH-",
        brand: "Mercedes Benz",
        code: "3520100513",
        originalCode: "3660108613",
        image: "img/products/om366/carter-aceite-motor-plano-om366-oh.jpg",
        description: "CÃ¡rter de aceite de motor plano para Mercedes Benz OM366 (serie OH). Fabricado en chapa de acero de alta resistencia. DiseÃ±o de perfil bajo ideal para autobuses y vehÃ­culos con espacio reducido debajo del motor. Asegura una correcta reserva y circulaciÃ³n de aceite."
    },
    {
        id: "P158",
        name: "TAPON ALLEN 24mm. TAPA CILINDRO OM366",
        brand: "Mercedes Benz",
        code: "0009972632",
        image: "img/products/om366/tapon-allen-24mm-tapa-cilindro-om366.jpg",
        description: "TapÃ³n roscado con cabeza Allen de 24mm para tapa de cilindro de motores Mercedes Benz OM366. Fabricado en acero de alta resistencia. Utilizado para sellar conductos de aceite o agua en la culata, garantizando hermeticidad."
    },
    {
        id: "P159",
        name: "BULON TAPA LATERAL VALVULAS 8X40 OM366",
        brand: "Mercedes Benz",
        code: "914126008029",
        image: "img/products/om366/bulon-tapa-lateral-valvulas-8x40-om366.jpg",
        description: "BulÃ³n de fijaciÃ³n para tapa lateral de vÃ¡lvulas, medida 8x40, compatible con motores Mercedes Benz OM366. Fabricado en acero de alta resistencia. Cabeza hexagonal con arandela estampada para una mejor distribuciÃ³n de la presiÃ³n de apriete."
    },
    {
        id: "P160",
        name: "VARILLA NIVEL ACEITE 350MM.CORTA 1218/1620/OM366/457",
        brand: "Mercedes Benz",
        code: "3450107472",
        image: "img/products/om366/varilla-nivel-aceite-350mm-om366.jpg",
        description: "Varilla de nivel de aceite corta, longitud 350mm. Compatible con vehÃ­culos Mercedes Benz 1218, 1620 y motores OM366, OM457. Herramienta esencial para el control preciso del nivel de lubricante en el cÃ¡rter."
    },
    {
        id: "P161",
        name: "PERNO GUIA TAPA BANCADA STD. CONICO OM366",
        brand: "Mercedes Benz",
        code: "3669910062",
        image: "img/products/om366/perno-guia-tapa-bancada-conico-om366.jpg",
        description: "Perno guÃ­a de tapa de bancada estÃ¡ndar (cÃ³nico) para motores Mercedes Benz OM366. Fabricado en acero endurecido. Asegura la alineaciÃ³n precisa de las tapas de bancada durante el montaje, crucial para el correcto funcionamiento del cigÃ¼eÃ±al."
    },
    {
        id: "P162",
        name: "CAÃ‘O GOMA LLENADO ACEITE OM366/366A",
        brand: "Mercedes Benz",
        code: "3760187282",
        originalCode: "3660180382",
        image: "img/products/om366/cano-goma-llenado-aceite-om366.jpg",
        description: "CaÃ±o de goma para llenado de aceite, compatible con motores Mercedes Benz OM366 y OM366A. Manguera flexible resistente a hidrocarburos y temperatura. Facilita la carga de lubricante al motor."
    },
    {
        id: "P163",
        name: "BRIDA CARTER (LLENADO ACEITE) OM366",
        brand: "Mercedes Benz",
        code: "3520109764",
        image: "img/products/om366/brida-carter-llenado-aceite-om366.jpg",
        description: "Brida de conexiÃ³n para tubo de llenado de aceite en el cÃ¡rter, para motores Mercedes Benz OM366. Fabricada en fundiciÃ³n de aluminio. Permite la conexiÃ³n segura y hermÃ©tica del tubo de llenado al cÃ¡rter del motor."
    },
    {
        id: "P164",
        name: "VARILLA NIVEL ACEITE 610MM.M96 OM366LA",
        brand: "Mercedes Benz",
        code: "3140106872",
        image: "img/products/om366/varilla-nivel-aceite-610mm-om366la.jpg",
        description: "Varilla de nivel de aceite medida 610mm (modelo M96), compatible con motores Mercedes Benz OM366LA. DiseÃ±ada para una lectura precisa y rÃ¡pida del nivel de lubricante, asegurando el correcto mantenimiento del motor."
    },
    {
        id: "P165",
        name: "REDUCCION BRIDA CARTER 14X16 OM366",
        brand: "Mercedes Benz",
        code: "915013008000",
        originalCode: "074313008102",
        image: "img/products/om366/reduccion-brida-carter-14x16-om366.jpg",
        description: "ReducciÃ³n para brida de cÃ¡rter de 14x16 mm, compatible con motores Mercedes Benz OM366. Accesorio de conexiÃ³n roscada fabricado en acero, utilizado para adaptar diferentes diÃ¡metros de tuberÃ­as o sensores en el sistema de lubricaciÃ³n."
    },
    {
        id: "P166",
        name: "TAPON ALLEN 16mm. VENA ACEITE OM366",
        brand: "Mercedes Benz",
        code: "000908016000",
        image: "img/products/om366/tapon-allen-16mm-vena-aceite-om366.jpg",
        description: "TapÃ³n roscado con cabeza Allen de 16mm para vena de aceite de motores Mercedes Benz OM366. Fabricado en acero de alta resistencia. Asegura el sellado hermÃ©tico de los conductos de lubricaciÃ³n del bloque motor."
    },
    {
        id: "P167",
        name: "BULON PERFORADO INYECTOR ACEITE OM366",
        brand: "Mercedes Benz",
        code: "3669900063",
        image: "img/products/om366/bulon-perforado-inyector-aceite-om366.jpg",
        description: "BulÃ³n perforado para inyector de aceite en motores Mercedes Benz OM366. Permite el flujo controlado de aceite hacia el inyector para la refrigeraciÃ³n de los pistones. Fabricado en acero de alta precisiÃ³n."
    },
    {
        id: "P168",
        name: "TAPON DISTRIBUCION PLASTICO OM366",
        brand: "Mercedes Benz",
        code: "3660100019",
        image: "img/products/om366/tapon-distribucion-plastico-om366.jpg",
        description: "TapÃ³n de distribuciÃ³n de plÃ¡stico para motores Mercedes Benz OM366. DiseÃ±ado para sellar y proteger los componentes de la distribuciÃ³n contra la entrada de polvo y suciedad. FÃ¡cil instalaciÃ³n y ajuste seguro."
    },
    {
        id: "P169",
        name: "TAPON CARTER 26mm. OM366",
        brand: "Mercedes Benz",
        code: ">09458",
        image: "img/products/om366/tapon-carter-26mm-om366.jpg",
        description: "TapÃ³n de cÃ¡rter de 26mm para motores Mercedes Benz OM366. Fabricado en acero con tratamiento superficial para evitar la corrosiÃ³n. Rosca de precisiÃ³n para garantizar un sellado perfecto y evitar fugas de aceite."
    },
    {
        id: "P170",
        name: "INDICADOR PUESTA A PUNTO 19Âº OM366LA II",
        brand: "Mercedes Benz",
        code: "3660323215",
        image: "img/products/om366/indicador-puesta-a-punto-19-om366la-ii.jpg",
        description: "Chapa indicadora de puesta a punto (19 grados) para motores Mercedes Benz OM366LA II. Pieza metÃ¡lica de precisiÃ³n utilizada como referencia visual para el ajuste correcto del tiempo de inyecciÃ³n y distribuciÃ³n del motor."
    }
    ,
    {
        id: "P171",
        name: "POLEA ALTERNADOR OM447/457 1634",
        brand: "Mercedes Benz",
        code: "0011556315",
        image: "img/products/om447/polea-alternador-om447.jpg",
        description: "Polea de alternador para motores Mercedes Benz OM447 y OM457. Repuesto de alta calidad y durabilidad."
    },
    {
        id: "P172",
        name: "PISTON EMBOLO (CON ORING) DE FRENO MOTOR M. BENZ OM447 OM457 CON VALVULA TOP BRAKE",
        brand: "Mercedes Benz",
        code: "5410160690 / 5410160090 / 5410160290 / 5410160490 / 4429975047 / 44201600",
        image: "img/products/om447/piston-embolo-freno-motor-om447.jpg",
        description: "PistÃ³n Ã©mbolo con O-ring de freno motor con vÃ¡lvula Top Brake. Compatible con motores Mercedes Benz OM447 y OM457."
    },
    {
        id: "P173",
        name: "JUNTA COLECTOR ADMISION LATERAL OM447/449/1634",
        brand: "Mercedes Benz",
        code: "4750980280",
        image: "img/products/om447/junta-colector-admision-om447.jpg",
        description: "Junta de colector de admisiÃ³n lateral para motores Mercedes Benz OM447, OM449 y modelo 1634. Repuesto original con cÃ³digo 4750980280."
    },
    {
        id: "P174",
        name: "INYECTOR COMPLETO C/TOBERA 1633/1938 OM447/449",
        brand: "Mercedes Benz",
        code: "9430082318 / 0030176121 / 0020174321 / 0020173021",
        image: "img/products/om447/inyector-completo-om447.jpg",
        description: "Inyector completo con tobera para motores Mercedes Benz OM447 y OM449. Compatible con modelos 1633 y 1938."
    },
    {
        id: "P175",
        name: "ALTERNADOR 24V 80A C/POLEA MULTICANAL OM447/457 1634",
        brand: "Mercedes Benz",
        code: "0001508850",
        image: "img/products/om447/alternador-om447.jpg",
        description: "Alternador de 24V 80A con polea multicanal. Compatible con motores Mercedes Benz OM447 y OM457, modelo 1634. CÃ³digo original 0001508850."
    },
    {
        id: "P176",
        name: "JUNTA T/CIL.ELRING OM447/449",
        brand: "Mercedes Benz",
        code: "4420160420",
        image: "img/products/om447/junta-tapa-cilindro-elring-om447.jpg",
        description: "Junta de tapa de cilindro marca Elring. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4420160420."
    },
    {
        id: "P177",
        name: "ELEMENTO FILTRO AIRE C271340 1634 OM447/457/OM906",
        brand: "Mercedes Benz",
        code: "4760940004 / 0040943504",
        image: "img/products/om447/filtro-aire-om447.jpg",
        description: "Elemento filtro de aire C271340. Compatible con motores OM447, OM457, OM906 y modelo 1634."
    },
    {
        id: "P178",
        name: "BULON CARCAZA DISTRIBUCION OM447",
        brand: "Mercedes Benz",
        code: "0029907700",
        image: "img/products/om447/bulon-carcaza-distribucion-om447.jpg",
        description: "BulÃ³n de carcaza de distribuciÃ³n para motores Mercedes Benz OM447. CÃ³digo original 0029907700."
    },
    {
        id: "P179",
        name: "BULON CARC. DISTRIBUCION OM447",
        brand: "Mercedes Benz",
        code: "4039900704",
        image: "img/products/om447/bulon-carcaza-distribucion-om447-v2.jpg",
        description: "BulÃ³n para carcaza de distribuciÃ³n de motores Mercedes Benz OM447. CÃ³digo original 4039900704."
    },
    {
        id: "P180",
        name: "FILTRO COMBUSTIBLE R120-10MB AQII ATEGO/AXOR/OF1215/1634 OM447",
        brand: "Mercedes Benz",
        code: "9794770015",
        image: "img/products/om447/filtro-combustible-om447.jpg",
        description: "Filtro de combustible R120-10MB AQII. Compatible con Atego, Axor, OF1215 y 1634 con motor OM447. CÃ³digo original 9794770015."
    },
    {
        id: "P181",
        name: "JGO. JUNTA TURBO 1938/1622/1526 OM447/457",
        brand: "Mercedes Benz",
        code: "4570987580",
        image: "img/products/om447/juego-junta-turbo-om447.jpg",
        description: "Juego de juntas para turbo. Compatible con modelos 1938, 1622 y 1526 con motores OM447 y OM457. CÃ³digo original 4570987580."
    },
    {
        id: "P182",
        name: "JUNTA ADM.SABO OM447/9",
        brand: "Mercedes Benz",
        code: "4421411780",
        image: "img/products/om447/junta-admision-sabo-om447.jpg",
        description: "Junta de admisiÃ³n marca Sabo. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4421411780."
    },
    {
        id: "P183",
        name: "JUNTA T/CIL.SABO OM447/449",
        brand: "Mercedes Benz",
        code: "4420160420",
        image: "img/products/om447/junta-tapa-cilindro-sabo-om447.jpg",
        description: "Junta de tapa de cilindro marca Sabo. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4420160420."
    },
    {
        id: "P184",
        name: "LLAVE TUERCA INYECTOR OM447/9",
        brand: "Mercedes Benz",
        code: ">05825",
        image: "img/products/om447/llave-tuerca-inyector-om447.jpg",
        description: "Llave para tuerca de inyector. Herramienta especÃ­fica para motores Mercedes Benz OM447 y OM449. CÃ³digo >05825."
    },
    {
        id: "P185",
        name: "KIT SEGURO CRAP/EMBRAGUE M/DISC OM447",
        brand: "Mercedes Benz",
        code: "0002520646",
        image: "img/products/om447/kit-seguro-embrague-om447.jpg",
        description: "Kit de seguro para crapodina de embrague (monodisco). Compatible con Mercedes Benz OM447. CÃ³digo original 0002520646."
    },
    {
        id: "P186",
        name: "SOPORTE EJE VENT.OM447 O-400",
        brand: "Mercedes Benz",
        code: "4752057305 / 3012050005 / 4752057005",
        image: "img/products/om447/soporte-eje-ventilador-om447.jpg",
        description: "Soporte de eje de ventilador. Compatible con Mercedes Benz OM447 O-400. CÃ³digos originales: 4752057305, 3012050005, 4752057005."
    },
    {
        id: "P187",
        name: "BOMBA AGUA TURBINA 125MM OM447/449 1633/1634/1938",
        brand: "Mercedes Benz",
        code: "4752000101 / 4752000001 / 4572001601",
        image: "img/products/om447/bomba-agua-om447.jpg",
        description: "Bomba de agua con turbina de 125mm. Compatible con motores Mercedes Benz OM447 y OM449, modelos 1633, 1634 y 1938."
    },
    {
        id: "P188",
        name: "REFRIGERADOR ACEITE 10 FILAS OM447/449LA/457",
        brand: "Mercedes Benz",
        code: "0011883101 / 0011886201",
        image: "img/products/om447/refrigerador-aceite-om447.jpg",
        description: "Refrigerador de aceite de 10 filas. Compatible con motores Mercedes Benz OM447, OM449LA y OM457. CÃ³digos originales: 0011883101, 0011886201."
    },
    {
        id: "P189",
        name: "BOMBA ACEITE OM447",
        brand: "Mercedes Benz",
        code: "4031801701",
        image: "img/products/om447/bomba-aceite-om447.jpg",
        description: "Bomba de aceite para motores Mercedes Benz OM447. CÃ³digo original 4031801701."
    },
    {
        id: "P190",
        name: "VALVULA BOMBA ACEITE OM447",
        brand: "Mercedes Benz",
        code: "4421800015 / 4221800315",
        image: "img/products/om447/valvula-bomba-aceite-om447.jpg",
        description: "VÃ¡lvula para bomba de aceite. Compatible con motores Mercedes Benz OM447. CÃ³digos originales: 4421800015, 4221800315."
    },
    {
        id: "P191",
        name: "MULTIPLE ESCAPE 1634/1938 om447",
        brand: "Mercedes Benz",
        code: "4761420001",
        image: "img/products/om447/multiple-escape-om447.jpg",
        description: "MÃºltiple de escape para motores Mercedes Benz OM447. Compatible con modelos 1634 y 1938. CÃ³digo original 4761420001."
    },
    {
        id: "P192",
        name: "CIGUEÃ‘AL COMPRESOR KNORR 90 OM447/449",
        brand: "Mercedes Benz",
        code: "4031300214",
        image: "img/products/om447/ciguenal-compresor-om447.jpg",
        description: "CigÃ¼eÃ±al para compresor Knorr 90. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4031300214."
    },
    {
        id: "P193",
        name: "COMPRESOR COMP. OM447/449 S/ENG.KNORR 90",
        brand: "Mercedes Benz",
        code: "4751300115",
        image: "img/products/om447/compresor-completo-om447.jpg",
        description: "Compresor completo Knorr 90 sin engrane. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4751300115."
    },
    {
        id: "P194",
        name: "CAÃ‘O COMPRESOR 1634/1938 OM447/457 SALIDA 1ER TRAMO",
        brand: "Mercedes Benz",
        code: "6964201226",
        image: "img/products/om447/cano-compresor-om447.jpg",
        description: "CaÃ±o de compresor (salida 1er tramo). Compatible con modelos 1634 y 1938, motores OM447 y OM457. CÃ³digo original 6964201226."
    },
    {
        id: "P195",
        name: "CAÃ‘O COMPRESOR 1938/OM447 SALIDA A GOB. LARGO",
        brand: "Mercedes Benz",
        code: "3884207026",
        image: "img/products/om447/cano-compresor-largo-om447.jpg",
        description: "CaÃ±o de compresor (salida a gobernador, largo). Compatible con modelo 1938 y motor OM447. CÃ³digo original 3884207026."
    },
    {
        id: "P196",
        name: "CONJUNTO COMPRESOR 90MM.OM447/449",
        brand: "Mercedes Benz",
        code: "4421300008",
        image: "img/products/om447/conjunto-compresor-om447.jpg",
        description: "Conjunto de compresor de 90mm. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4421300008."
    },
    {
        id: "P197",
        name: "CAÃ‘O COMPRESOR 1634/1938 OM447/457",
        brand: "Mercedes Benz",
        code: "6954207436",
        image: "img/products/om447/cano-compresor-1634-1938-om447.jpg",
        description: "CaÃ±o de compresor. Compatible con modelos 1634 y 1938, motores OM447 y OM457. CÃ³digo original 6954207436."
    },
    {
        id: "P198",
        name: "CAÃ‘O COMPRESOR 1938/OM447 GOB.A TANQUE AIRE CORTO",
        brand: "Mercedes Benz",
        code: "3884209826",
        image: "img/products/om447/cano-compresor-corto-om447.jpg",
        description: "CaÃ±o de compresor (gobernador a tanque de aire, corto). Compatible con modelo 1938 y motor OM447. CÃ³digo original 3884209826."
    },
    {
        id: "P199",
        name: "AROS COMPRESOR 90M.STD 1521 OM447/9",
        brand: "Mercedes Benz",
        code: "0001318211",
        image: "img/products/om447/aros-compresor-om447.jpg",
        description: "Juego de aros para compresor (90mm STD). Compatible con modelo 1521 y motores OM447/OM449. CÃ³digo original 0001318211."
    },
    {
        id: "P200",
        name: "CODO BAJADA TURBO 1938 OM447 COMP",
        brand: "Mercedes Benz",
        code: "4761400253",
        image: "img/products/om447/codo-bajada-turbo-om447.jpg",
        description: "Codo de bajada de turbo completo. Compatible con modelo 1938 y motor OM447. CÃ³digo original 4761400253."
    },
    {
        id: "P201",
        name: "CODO BAJADA TURBO 1938 OM447 SOLO",
        brand: "Mercedes Benz",
        code: "4761440112",
        image: "img/products/om447/codo-bajada-turbo-solo-om447.jpg",
        description: "Codo de bajada de turbo (solo). Compatible con modelo 1938 y motor OM447. CÃ³digo original 4761440112."
    },
    {
        id: "P202",
        name: "ORING TURBO 60x8 OM447",
        brand: "Mercedes Benz",
        code: "0069974948",
        image: "img/products/om447/oring-turbo-om447.jpg",
        description: "O-ring de turbo 60x8. Compatible con motores Mercedes Benz OM447. CÃ³digo original 0069974948."
    },
    {
        id: "P203",
        name: "FUELLE FILTRO AIRE A CAPOT 1634 OM447/457",
        brand: "Mercedes Benz",
        code: "6955280182",
        image: "img/products/om447/fuelle-filtro-aire-om447.jpg",
        description: "Fuelle de filtro de aire a capot. Compatible con modelo 1634 y motores OM447/OM457. CÃ³digo original 6955280182."
    },
    {
        id: "P204",
        name: "MANGUERA FILTRO AIRE A TURBO 1634 OM447LA",
        brand: "Mercedes Benz",
        code: "4760980083",
        image: "img/products/om447/manguera-filtro-aire-turbo-om447.jpg",
        description: "Manguera de filtro de aire a turbo. Compatible con modelo 1634 y motor OM447LA. CÃ³digo original 4760980083."
    },
    {
        id: "P205",
        name: "BULON SOPORTE BALANCIN 10x50x1.50 OM447",
        brand: "Mercedes Benz",
        code: "000931010369",
        image: "img/products/om447/bulon-soporte-balancin-om447.jpg",
        description: "BulÃ³n de soporte de balancÃ­n 10x50x1.50. Compatible con motores Mercedes Benz OM447. CÃ³digo original 000931010369."
    },
    {
        id: "P206",
        name: "PREFILTRO COMPLETO OM447/449",
        brand: "Mercedes Benz",
        code: "0004770002",
        image: "img/products/om447/prefiltro-completo-om447.jpg",
        description: "Prefiltro completo de combustible. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 0004770002."
    },
    {
        id: "P207",
        name: "SOPORTE BALANCIN OM447/449",
        brand: "Mercedes Benz",
        code: "4030501236",
        image: "img/products/om447/soporte-balancin-om447.jpg",
        description: "Soporte de balancÃ­n. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4030501236."
    },
    {
        id: "P208",
        name: "BALANCIN VALVULAS OM447/449",
        brand: "Mercedes Benz",
        code: "4030500733",
        image: "img/products/om447/balancin-valvulas-om447.jpg",
        description: "BalancÃ­n de vÃ¡lvulas. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4030500733."
    },
    {
        id: "P209",
        name: "CHAVETA VALVULA(X UNIDAD) OM447/449",
        brand: "Mercedes Benz",
        code: "4220530026",
        image: "img/products/om447/chaveta-valvula-om447.jpg",
        description: "Chaveta de vÃ¡lvula (por unidad). Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4220530026."
    },
    {
        id: "P210",
        name: "BULON BALANCEADOR ARMONICO OM447/449",
        brand: "Mercedes Benz",
        code: "4220350071",
        image: "img/products/om447/bulon-balanceador-armonico-om447.jpg",
        description: "BulÃ³n de balanceador armÃ³nico. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4220350071."
    },
    {
        id: "P211",
        name: "VARILLA LEV. VALVULA OM447/449",
        brand: "Mercedes Benz",
        code: "4750540005",
        image: "img/products/om447/varilla-lev-valvula-om447.jpg",
        description: "Varilla levantavÃ¡lvulas. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4750540005."
    },
    {
        id: "P212",
        name: "PLATILLO VALVULA OM447/449",
        brand: "Mercedes Benz",
        code: "4220530025",
        image: "img/products/om447/platillo-valvula-om447.jpg",
        description: "Platillo de vÃ¡lvula. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4220530025."
    },
    {
        id: "P213",
        name: "RESORTE VALVULA EXTERIOR OM447/449",
        brand: "Mercedes Benz",
        code: "4030530120",
        image: "img/products/om447/resorte-valvula-exterior-om447.jpg",
        description: "Resorte de vÃ¡lvula exterior. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4030530120."
    },
    {
        id: "P214",
        name: "REGISTRO VALVULA C/TUERCA OM447/449",
        brand: "Mercedes Benz",
        code: "4420550020",
        image: "img/products/om447/registro-valvula-con-tuerca-om447.jpg",
        description: "Registro de vÃ¡lvula con tuerca. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4420550020."
    },
    {
        id: "P215",
        name: "BOTADOR VALVULA OM447/449",
        brand: "Mercedes Benz",
        code: "4220500325 4030540101",
        image: "img/products/om447/botador-valvula-om447.jpg",
        description: "Botador de vÃ¡lvula. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digos originales 4220500325 y 4030540101."
    },
    {
        id: "P216",
        name: "RESORTE VALVULA INTERIOR OM447/449",
        brand: "Mercedes Benz",
        code: "4030530822",
        image: "img/products/om447/resorte-valvula-interior-om447.jpg",
        description: "Resorte de vÃ¡lvula interior. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4030530822."
    },
    {
        id: "P217",
        name: "JGO. ARANDELAS RESORTE VALVULA OM447/449",
        brand: "Mercedes Benz",
        code: "4030530052 4030530152",
        image: "img/products/om447/juego-arandelas-resorte-valvula-om447.jpg",
        description: "Juego de arandelas para resorte de vÃ¡lvula. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digos originales 4030530052 y 4030530152."
    },
    {
        id: "P218",
        name: "CORONA ARRANQUE 151D.12 AGUJ.EQUIDISTANTES OM447/449/457",
        brand: "Mercedes Benz",
        code: "4750320105",
        image: "img/products/om447/corona-arranque-151d-12-aguj-om447.jpg",
        description: "Corona de arranque de 151 dientes y 12 agujeros equidistantes. Compatible con motores Mercedes Benz OM447, OM449 y OM457. CÃ³digo original 4750320105."
    },
    {
        id: "P219",
        name: "BULON VOLANTE MOTOR 16X76mm. OM447/449/457",
        brand: "Mercedes Benz",
        code: "4600320071 4220320271",
        image: "img/products/om447/bulon-volante-motor-om447.jpg",
        description: "BulÃ³n de volante de motor, medidas 16x76mm. Compatible con motores Mercedes Benz OM447, OM449 y OM457. CÃ³digos originales 4600320071 y 4220320271."
    },
    {
        id: "P220",
        name: "BULON TAPA CILINDRO 15X168 (12/10) OM447/449",
        brand: "Mercedes Benz",
        code: "4229900401",
        image: "img/products/om447/bulon-tapa-cilindro-om447.jpg",
        description: "BulÃ³n de tapa de cilindro, medidas 15x168mm (12/10). Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4229900401."
    },
    {
        id: "P221",
        name: "ENGRANAJE CIGÃœEÃ‘AL 43dtes. OM447/449",
        brand: "Mercedes Benz",
        code: "4030500303 4030520103",
        image: "img/products/om447/engranaje-ciguenal-om447.jpg",
        description: "Engranaje de cigÃ¼eÃ±al de 43 dientes. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digos originales 4030500303 y 4030520103."
    },
    {
        id: "P222",
        name: "BULON BIELA MOTOR 16x1.5x67 OM447/449/457",
        brand: "Mercedes Benz",
        code: "4420380071",
        image: "img/products/om447/bulon-biela-motor-om447.jpg",
        description: "BulÃ³n de biela de motor, medidas 16x1.5x67mm. Compatible con motores Mercedes Benz OM447, OM449 y OM457. CÃ³digo original 4420380071."
    },
    {
        id: "P223",
        name: "VOLANTE MOTOR C/CORONA 430mm 151",
        brand: "Mercedes Benz",
        code: "4760300405 4760300505",
        image: "img/products/om447/volante-motor-con-corona-om447.jpg",
        description: "Volante de motor con corona, diÃ¡metro 430mm, 151 dientes. Compatible con motores Mercedes Benz. CÃ³digos originales 4760300405 y 4760300505."
    },
    {
        id: "P224",
        name: "PISTA CIGÃœEÃ‘AL DELANTERA 105x100 OM447/449/457",
        brand: "Mercedes Benz",
        code: "4420310027",
        image: "img/products/om447/pista-ciguenal-delantera-om447.jpg",
        description: "Pista de cigÃ¼eÃ±al delantera, medidas 105x100mm. Compatible con motores Mercedes Benz OM447, OM449 y OM457. CÃ³digo original 4420310027."
    },
    {
        id: "P225",
        name: "BULON TAPA CILINDRO 15X143 (18/15) OM447/449",
        brand: "Mercedes Benz",
        code: "4229900301",
        image: "img/products/om447/bulon-tapa-cilindro-15x143-om447.jpg",
        description: "BulÃ³n de tapa de cilindro, medidas 15x143mm (18/15). Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4229900301."
    },
    {
        id: "P226",
        name: "POLEA CIGÃœEÃ‘AL CHAPA 2 CAN.OM447/9",
        brand: "Mercedes Benz",
        code: "4760350112 4750350112",
        image: "img/products/om447/polea-ciguenal-chapa-2-can-om447.jpg",
        description: "Polea de cigÃ¼eÃ±al de chapa, 2 canales. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digos originales 4760350112 y 4750350112."
    },
    {
        id: "P227",
        name: "TAPON CARTER 26mm. S/IMAN ALLEN OM447",
        brand: "Mercedes Benz",
        code: "4039970230",
        image: "img/products/om447/tapon-carter-26mm-om447.jpg",
        description: "TapÃ³n de cÃ¡rter de 26mm, sin imÃ¡n, con cabeza Allen. Compatible con motores Mercedes Benz OM447. CÃ³digo original 4039970230."
    },
    {
        id: "P228",
        name: "BUJE GUIA TAPA CILINDRO OM447/449",
        brand: "Mercedes Benz",
        code: "1079910041",
        image: "img/products/om447/buje-guia-tapa-cilindro-om447.jpg",
        description: "Buje guÃ­a de tapa de cilindro. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 1079910041."
    },
    {
        id: "P229",
        name: "JUEGO JUNTA DESCARBONIZACION OM447/449 ELRING",
        brand: "Mercedes Benz",
        code: "4760100120",
        image: "img/products/om447/juego-junta-descarbonizacion-om447.jpg",
        description: "Juego de juntas para descarbonizaciÃ³n Elring. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4760100120."
    },
    {
        id: "P230",
        name: "VARILLA NIVEL ACEITE 970mm. OM447/O400",
        brand: "Mercedes Benz",
        code: "4760107272",
        image: "img/products/om447/varilla-nivel-aceite-om447.jpg",
        description: "Varilla de nivel de aceite, longitud 970mm. Compatible con motores Mercedes Benz OM447 y O400. CÃ³digo original 4760107272."
    },
    {
        id: "P231",
        name: "TAPON CARTER 26mm. C/IMAN ALLEN OM447/904/906",
        brand: "Mercedes Benz",
        code: "4039970230",
        image: "img/products/om447/tapon-carter-26mm-con-iman-om447.jpg",
        description: "TapÃ³n de cÃ¡rter de 26mm, con imÃ¡n, cabeza Allen. Compatible con motores Mercedes Benz OM447, OM904 y OM906. CÃ³digo original 4039970230."
    },
    {
        id: "P232",
        name: "INYECTOR LUBRICACION BOTADORES OM447",
        brand: "Mercedes Benz",
        code: "4271800043",
        image: "img/products/om447/inyector-lubricacion-botadores-om447.jpg",
        description: "Inyector de lubricaciÃ³n para botadores. Compatible con motores Mercedes Benz OM447. CÃ³digo original 4271800043."
    },
    {
        id: "P233",
        name: "BULON CARTER LEGITIMO 8X35 OM447/449/457",
        brand: "Mercedes Benz",
        code: "910105008014",
        image: "img/products/om447/bulon-carter-legitimo-om447.jpg",
        description: "BulÃ³n de cÃ¡rter legÃ­timo, medidas 8x35mm. Compatible con motores Mercedes Benz OM447, OM449 y OM457. CÃ³digo original 910105008014."
    },
    {
        id: "P234",
        name: "VARILLA NIVEL ACEITE 720mm. OM447/449",
        brand: "Mercedes Benz",
        code: "4750100072",
        image: "img/products/om447/varilla-nivel-aceite-720mm-om447.jpg",
        description: "Varilla de nivel de aceite, longitud 720mm. Compatible con motores Mercedes Benz OM447 y OM449. CÃ³digo original 4750100072."
    },
    {
        id: "P235",
        name: "CAÃ‘O GOMA LLENADO ACEITE OM457/O500",
        brand: "Mercedes Benz",
        code: "4570180082",
        image: "img/products/om457/cano-goma-llenado-aceite-om457.jpg",
        description: "CaÃ±o de goma para llenado de aceite. Compatible con motores Mercedes Benz OM457 y chasis O500. CÃ³digo original 4570180082. Fabricado en goma de alta resistencia para soportar altas temperaturas y presiÃ³n del sistema de lubricaciÃ³n."
    },
    {
        id: "P236",
        name: "CABEZAL REFRIGERADOR ACEITE ALUMINIO AXOR OM457 P/SENSOR",
        brand: "Mercedes Benz",
        code: "4571840408",
        image: "img/products/om457/cabezal-refrigerador-aceite-om457.jpg",
        description: "Cabezal de refrigerador de aceite fabricado en aluminio para sensor. Compatible con Mercedes Benz AXOR con motor OM457. CÃ³digo original 4571840408. Componente de alta calidad para el sistema de enfriamiento de aceite del motor."
    },
    {
        id: "P237",
        name: "BULBO PRESION UREA DOSIFICADOR ROSCA M16 X 1.5 / 3 PINES OM457/OM501/OM924/OM926 Euro 5",
        brand: "Mercedes Benz",
        code: "0061537528",
        image: "img/products/om457/bulbo-presion-urea-om457.jpg",
        description: "Bulbo sensor de presiÃ³n de urea para dosificador con rosca M16 x 1.5 y conector de 3 pines. Compatible con motores Mercedes Benz OM457, OM501, OM924 y OM926 Euro 5. CÃ³digo original 0061537528. Componente esencial del sistema de tratamiento de gases AdBlue/SCR."
    },
    {
        id: "P238",
        name: "JUEGO JUNTA ELRING DESCARBONIZACION SELLO BAJO T/ ALUM OM457",
        brand: "Elring",
        code: "4570108120",
        originalCode: "4570108120",
        image: "img/products/om457/juego-junta-elring-om457.jpg",
        description: "Juego de juntas de marca Elring para descarbonizaciÃ³n con sello bajo tapa de aluminio para motores Mercedes Benz OM457. CÃ³digo original 4570108120. Rubro: TAPA CILINDRO Y VÃLVULA. Este kit de alta calidad incluye todas las juntas y sellos necesarios para el mantenimiento integral de la culata, asegurando un sellado estanco y duradero bajo las especificaciones del fabricante original."
    },
    {
        id: "P239",
        name: "PALETA PLASTICO CON VISCOSA OM457 C/ARO 8 PALAS 750mm. AXOR",
        brand: "Mercedes Benz",
        code: "0002008022",
        image: "img/products/om457/paleta-plastico-viscosa-om457.jpg",
        description: "Paleta de ventilador de plÃ¡stico con acople viscoso, con aro, 8 palas y 750mm de diÃ¡metro. Compatible con motores Mercedes Benz OM457 en camiones AXOR. CÃ³digo original 0002008022. Sistema de refrigeraciÃ³n de alta eficiencia con control automÃ¡tico de temperatura."
    },
    {
        id: "P240",
        name: "TUBO ALIMENTACION ACEITE OM457",
        brand: "Mercedes Benz",
        code: "4570101364",
        image: "img/products/om457/tubo-alimentacion-aceite-om457.jpg",
        description: "Tubo de alimentaciÃ³n de aceite para motores Mercedes Benz OM457. CÃ³digo original 4570101364. Componente del sistema de lubricaciÃ³n fabricado con materiales resistentes a altas temperaturas y presiÃ³n del aceite del motor."
    },
    {
        id: "P241",
        name: "PREFILTRO FLOTANTE TANQUE UREA OM457/924/926 EURO V",
        brand: "Mercedes Benz",
        code: "9585420217",
        image: "img/products/om457/prefiltro-flotante-tanque-urea-om457.jpg",
        description: "Prefiltro flotante para tanque de urea AdBlue. Compatible con motores Mercedes Benz OM457, OM924 y OM926 Euro V. CÃ³digo original 9585420217. Componente esencial del sistema SCR para filtrar impurezas del lÃ­quido de urea antes de su dosificaciÃ³n."
    },
    {
        id: "P242",
        name: "CAÃ‘O RAD.AXOR 2044/OM457 SUPERIOR 22/22",
        brand: "Mercedes Benz",
        code: "9405011282",
        image: "img/products/om457/cano-radiador-axor-om457-superior.jpg",
        description: "CaÃ±o superior de radiador para Mercedes Benz AXOR 2044 con motor OM457. Medidas 22mm/22mm. CÃ³digo original 9405011282. Fabricado en goma de alta resistencia para soportar altas temperaturas y presiÃ³n del sistema de refrigeraciÃ³n."
    },
    {
        id: "P243",
        name: "COMPRESOR 85mm OM457 TAPA LARGA SIN ENGRANAJE",
        brand: "Mercedes Benz",
        code: "4571304415 / 4123520260 / 412350270 / 412350310 / 4571306815 / 4571304515 / 4571302415 / 4571306715",
        image: "img/products/om457/compresor-85mm-om457.jpg",
        description: "Compresor de aire de 85mm con tapa larga sin engranaje para motores Mercedes Benz OM457. Compatible con mÃºltiples cÃ³digos originales. Componente esencial del sistema de frenos neumÃ¡ticos, fabricado con estÃ¡ndares de alta calidad para garantizar presiÃ³n constante y seguridad en el frenado."
    },
    {
        id: "P244",
        name: "CAÃ‘O COMPRESOR (SERPENTINA) 5Â°TRAMO C/SALIDA RECTA O500/OM457 LA",
        brand: "Mercedes Benz",
        code: "6344209029 / 3844204228",
        image: "img/products/om457/cano-compresor-serpentina-om457.jpg",
        description: "CaÃ±o de compresor tipo serpentina, 5Â° tramo con salida recta. Compatible con chasis Mercedes Benz O500 y motor OM457 LA. CÃ³digos originales 6344209029 / 3844204228. Fabricado en goma de alta resistencia para soportar la presiÃ³n del sistema de aire comprimido."
    },
    {
        id: "P245",
        name: "CODO TERMOSTATO ALUMINIO AXOR OM457",
        brand: "Mercedes Benz",
        code: "4572010231",
        image: "img/products/om457/codo-termostato-aluminio-om457.jpg",
        description: "Codo de termostato fabricado en aluminio para Mercedes Benz AXOR con motor OM457. CÃ³digo original 4572010231. Componente del sistema de refrigeraciÃ³n diseÃ±ado para un ajuste perfecto y excelente disipaciÃ³n de calor."
    },
    {
        id: "P246",
        name: "CONECTOR 16X1.5 TAPA FILTRO GAS-OIL (49516) OM457/904/906/924",
        brand: "Mercedes Benz",
        code: "9799970172",
        image: "img/products/om457/conector-tapa-filtro-gasoil-om457.jpg",
        description: "Conector de 16x1.5 para tapa de filtro de gas-oil (referencia 49516). Compatible con motores Mercedes Benz OM457, OM904, OM906 y OM924. CÃ³digo original 9799970172. Componente de precisiÃ³n para el sistema de alimentaciÃ³n de combustible."
    },
    {
        id: "P247",
        name: "REPARACION F/MOTOR COMP. OM457 AXOR/ACTROS (19470)",
        brand: "Mercedes Benz",
        code: "5411400163 / 5411400763 / 5411400063 / 4571402253 / 4571401553",
        image: "img/products/om457/reparacion-freno-motor-om457.jpg",
        description: "Kit de reparaciÃ³n completo para freno motor (referencia 19470). Compatible con motores Mercedes Benz OM457 en camiones AXOR y ACTROS. Incluye todos los componentes necesarios para la reparaciÃ³n del sistema de freno motor. Compatible con mÃºltiples cÃ³digos originales."
    },
    {
        id: "P248",
        name: "PISTON EMBOLO (CON ORING) DE FRENO MOTOR M. BENZ OM447 OM457 CON VALVULA TOP BRAKE",
        brand: "Mercedes Benz",
        code: "5410160690 / 5410160090 / 5410160290 / 5410160490 / 4429975047 / 44201600",
        image: "img/products/om457/piston-embolo-freno-motor-om457.jpg",
        description: "PistÃ³n Ã©mbolo con O-ring para freno motor con vÃ¡lvula Top Brake. Compatible con motores Mercedes Benz OM447 y OM457. Compatible con mÃºltiples cÃ³digos originales. Componente de precisiÃ³n para el sistema de freno motor, fabricado con materiales de alta resistencia."
    },
    {
        id: "P249",
        name: "JGO.JUNTA DESCARBONIZACION COMPLETO SABO OM457 EURO III (1 BOCA) ORING ALTO",
        brand: "Mercedes Benz",
        code: "4570160121 / 4571410080 / 4571420180 / 4600160420 / 5411420180",
        image: "img/products/om457/juego-junta-descarbonizacion-completo-om457.jpg",
        description: "Juego de juntas de descarbonizaciÃ³n completo marca SABO para motores Mercedes Benz OM457 Euro III (1 boca) con O-ring alto. Compatible con mÃºltiples cÃ³digos originales. Incluye todas las juntas necesarias para el proceso completo de descarbonizaciÃ³n y mantenimiento del motor."
    },
    {
        id: "P250",
        name: "VALVULA CONTROL ENTRADA COMBUSTIBLE OM457 1634/AXOR",
        brand: "Mercedes Benz",
        code: "4570980257",
        image: "img/products/om457/valvula-control-entrada-combustible-om457.jpg",
        description: "VÃ¡lvula de control de entrada de combustible para motores Mercedes Benz OM457 en modelos 1634 y AXOR. CÃ³digo original 4570980257. Componente de precisiÃ³n del sistema de alimentaciÃ³n de combustible para regular el flujo de gasoil al motor."
    },
    {
        id: "P251",
        name: "CAÃ‘O RAD.O500/OM457 FLEXIBLE DE AGUA AL RADIADOR",
        brand: "Mercedes Benz",
        code: "6345010482",
        image: "img/products/om457/cano-radiador-flexible-o500-om457.jpg",
        description: "CaÃ±o flexible de agua al radiador para chasis Mercedes Benz O500 con motor OM457. CÃ³digo original 6345010482. Fabricado con materiales de alta calidad para asegurar un flujo constante y resistir las vibraciones del sistema de refrigeraciÃ³n."
    },
    {
        id: "P252",
        name: "CAÃ‘O RAD.1635/1735 OM457 ATRON INFERIOR",
        brand: "Mercedes Benz",
        code: "6955012882",
        image: "img/products/om457/cano-radiador-atron-inferior-om457.jpg",
        description: "CaÃ±o inferior de radiador para modelos Mercedes Benz 1635 y 1735 Atron con motor OM457. CÃ³digo original 6955012882. DiseÃ±o especÃ­fico para un ajuste preciso y Ã³ptimo rendimiento en el sistema de enfriamiento del motor."
    },
    {
        id: "P253",
        name: "JUNTA CARTER OM457 M/N",
        brand: "Mercedes Benz",
        code: "4570140522",
        image: "img/products/om457/junta-carter-om457.jpg",
        description: "Junta de cÃ¡rter modelo nuevo (M/N) para motores Mercedes Benz OM457. CÃ³digo original 4570140522. Fabricada con materiales de alta calidad para asegurar un sellado hermÃ©tico y duradero, evitando fugas de aceite."
    },
    {
        id: "P254",
        name: "CAÃ‘O GUIA VARILLA NIVEL ACEITE 1634 OM457",
        brand: "Mercedes Benz",
        code: "4570100866",
        image: "img/products/om457/cano-guia-varilla-nivel-aceite-1634-om457.jpg",
        description: "CaÃ±o guÃ­a de varilla de nivel de aceite para motores Mercedes Benz OM457, modelo 1634. CÃ³digo original 4570100866. Fabricado con materiales de alta resistencia para garantizar un ajuste preciso y durabilidad."
    },
    {
        id: "P255",
        name: "SOPORTE ALTERNADOR OM457",
        brand: "Mercedes Benz",
        code: "4571552535",
        image: "img/products/om457/soporte-alternador-om457.jpg",
        description: "Soporte de alternador para motores Mercedes Benz OM457. CÃ³digo original 4571552535. Pieza estructural de alta resistencia diseÃ±ada para un montaje seguro y alineaciÃ³n precisa del alternador."
    },
    {
        id: "P256",
        name: "FLEXIBLE COMBUSTIBLE A BLOCK OM457",
        brand: "Mercedes Benz",
        code: "4570901676",
        image: "img/products/om457/flexible-combustible-block-om457.jpg",
        description: "Flexible de combustible a block para motores Mercedes Benz OM457. CÃ³digo original 4570901676. Manguera flexible de alta presiÃ³n fabricada con materiales resistentes al combustible diÃ©sel, garantizando un sellado perfecto y durabilidad en el sistema de alimentaciÃ³n."
    },
    {
        id: "P257",
        name: "FILTRO ACEITE HU12140X OM457/ELECT. 1938",
        brand: "Mercedes Benz",
        code: "5411800209 / 4571800009",
        originalCode: "5411800209 / 4571800009",
        image: "img/products/om457/filtro-aceite-hu12140x-om457.jpg",
        description: "Filtro de aceite tipo elemento HU12140X para motores Mercedes Benz OM457 y modelos electrÃ³nicos 1938. CÃ³digos originales: 5411800209 y 4571800009. Filtro de alta eficiencia que garantiza la mÃ¡xima protecciÃ³n del motor, eliminando impurezas y prolongando la vida Ãºtil del sistema de lubricaciÃ³n."
    },
    {
        id: "P258",
        name: "FILTRO ACEITE AXOR OM457 MAN",
        brand: "Mercedes Benz",
        code: "4571840125 / 0001802109",
        image: "img/products/om457/filtro-aceite-axor-om457-man.jpg",
        description: "Filtro de aceite tipo elemento para Mercedes Benz Axor con motor OM457. Compatible con marca MAN. CÃ³digos originales 4571840125 y 0001802109. Filtro de alta calidad que garantiza la protecciÃ³n Ã³ptima del motor, eliminando partÃ­culas e impurezas del aceite lubricante."
    },
    {
        id: "P259",
        name: "FILTRO COMBUSTIBLE R120L-10MB AQII OM457/906 (WIX)",
        brand: "Mercedes Benz",
        code: ">49513/1",
        image: "img/products/om457/filtro-combustible-r120l-10mb-om457.jpg",
        description: "Filtro de combustible R120L-10MB AQII marca WIX para motores Mercedes Benz OM457 y OM906. CÃ³digo >49513/1. Filtro de alta eficiencia con separador de agua integrado, garantiza la mÃ¡xima pureza del combustible y protecciÃ³n del sistema de inyecciÃ³n diÃ©sel."
    },
    {
        id: "P260",
        name: "CAÃ‘O LUBRICACION TURBO OM457 O500",
        brand: "Mercedes Benz",
        code: "5411801422",
        image: "img/products/om457/cano-lubricacion-turbo-om457-o500.jpg",
        description: "CaÃ±o de lubricaciÃ³n para turbocompresor en motores Mercedes Benz OM457, modelo O500. CÃ³digo original 5411801422. TuberÃ­a de alimentaciÃ³n de aceite al turbo fabricada en acero inoxidable de alta resistencia, garantizando el flujo correcto de lubricante y protecciÃ³n del turbocompresor."
    },
    {
        id: "P261",
        name: "TAPA COMPRESOR WABCO 85mm SOLA OM457 1634",
        brand: "Mercedes Benz",
        code: "0009982790 / 2V2145291 / 4123526594 / 4129056544",
        image: "img/products/om457/tapa-compresor-wabco-85mm-om457.jpg",
        description: "Tapa de compresor WABCO de 85mm (solo tapa) para motores Mercedes Benz OM457, modelo 1634. CÃ³digos originales 0009982790, 2V2145291, 4123526594 y 4129056544. Fabricada en aluminio de alta resistencia con acabado mecanizado de precisiÃ³n para un sellado perfecto del compresor de aire."
    },
    {
        id: "P262",
        name: "VALVULA CONTROL ENTRADA COMBUSTIBLE OM457 1634/AXOR ROSCA MACHO",
        brand: "Mercedes Benz",
        code: "4570980057 / 9040980057 / 5410980557",
        image: "img/products/om457/valvula-control-entrada-combustible-om457.jpg",
        description: "VÃ¡lvula de control de entrada de combustible con rosca macho para motores Mercedes Benz OM457, modelos 1634 y Axor. CÃ³digos originales 4570980057, 9040980057 y 5410980557. Componente de precisiÃ³n del sistema de inyecciÃ³n que regula el flujo de combustible, fabricada con materiales de alta calidad resistentes al diÃ©sel."
    },
    {
        id: "P263",
        name: "ENTRETAPA 85mm WABCO OM457 MONOCIL TAPA LARGA",
        brand: "Mercedes Benz",
        code: "0001305019 / 2V2145615 / 4123526582",
        image: "img/products/om457/entretapa-85mm-wabco-om457.jpg",
        description: "Entretapa de compresor WABCO de 85mm monocilÃ­ndrico con tapa larga para motores Mercedes Benz OM457. CÃ³digos originales 0001305019, 2V2145615 y 4123526582. Fabricada en aluminio de alta calidad con canales de refrigeraciÃ³n integrados, garantiza el correcto funcionamiento del compresor de aire."
    },
    {
        id: "P264",
        name: "VISCOSO SOLO C/CABLE ELECTROMAGNETICO OM457LA EURO V AXOR 2036/2041",
        brand: "Mercedes Benz",
        code: "0002007722 / 4572001122 / 0002007822",
        image: "img/products/om457/viscoso-cable-electromagnetico-om457la.jpg",
        description: "Viscoso electromagnÃ©tico con cable para motores Mercedes Benz OM457LA Euro V, modelos Axor 2036 y 2041. CÃ³digos originales 0002007722, 4572001122 y 0002007822. Embrague viscoso de ventilador con control electrÃ³nico que regula automÃ¡ticamente la velocidad del ventilador segÃºn la temperatura del motor, optimizando el rendimiento y reduciendo el consumo de combustible."
    },
    {
        id: "P265",
        name: "CORREA 8PK1614 AXOR 2 OM457",
        brand: "Mercedes Benz",
        code: ">8PK1614",
        originalCode: "0019932596",
        image: "img/products/om457/correa-8pk1614-axor-om457.jpg",
        description: "Correa poli-V 8PK1614 para Mercedes Benz Axor 2 con motor OM457. CÃ³digo >8PK1614, cÃ³digo original 0019932596. Correa de 8 canales tipo PK de 1614mm de longitud, fabricada en caucho de alta resistencia con refuerzos de fibra para transmisiÃ³n de potencia a accesorios del motor (alternador, bomba de agua, direcciÃ³n hidrÃ¡ulica, compresor)."
    },
    {
        id: "P266",
        name: "VOLANTE MOTOR C/CORONA 430MM.160 DTES. 1634/AXOR OM457",
        brand: "Mercedes Benz",
        code: ">10775",
        originalCode: "4570300605",
        image: "img/products/om457/volante-motor-corona-430mm-om457.jpg",
        description: "Volante de motor con corona de arranque de 430mm y 160 dientes. Compatible con Mercedes Benz 1634 y Axor con motor OM457. CÃ³digo original 4570300605. Fabricado en fundiciÃ³n de alta resistencia para un balanceo perfecto y durabilidad."
    },
    {
        id: "P267",
        name: "INYECTOR UREA OM457 AXOR",
        brand: "Mercedes Benz",
        code: "0001403268",
        image: "img/products/om457/inyector-urea-om457-axor.jpg",
        description: "Inyector de urea (AdBlue) para sistemas SCR de motores Mercedes Benz OM457, compatible con modelos Axor. CÃ³digo original 0001403268. Componente de precisiÃ³n para el control de emisiones Euro V / Euro VI, fabricado en acero inoxidable para resistir la corrosiÃ³n."
    },
    {
        id: "P268",
        name: "CABEZAL COMPLETO REFRIGERADOR/FILTRO ACEITE OM457 1634E/AXOR",
        brand: "Mercedes Benz",
        code: "4571803210 / 4571800138 / 4571801010 / 4571803110",
        image: "img/products/om457/cabezal-refrigerador-aceite-om457.jpg",
        description: "Cabezal completo para refrigerador y filtro de aceite de motores Mercedes Benz OM457, modelos 1634E y Axor. CÃ³digos originales 4571803210, 4571800138, 4571801010 y 4571803110. Fabricado en fundiciÃ³n de aluminio de alta resistencia, incluye porta filtro y conexiones para el sistema de lubricaciÃ³n y enfriamiento de aceite."
    },
    {
        id: "P269",
        name: "POLEA TENSOR AXOR 2 OM457",
        brand: "Mercedes Benz",
        code: "0005501933 / 4572001070",
        image: "img/products/om457/tensor-correa-axor-2035-om457.jpg",
        description: "Polea para tensor de correas de motores Mercedes Benz Axor 2 con motor OM457. CÃ³digos originales 0005501933 y 4572001070. Fabricada en acero con rodamiento de alta precisiÃ³n para un giro suave y duradero, esencial para el correcto funcionamiento del sistema de accesorios."
    },
    {
        id: "P270",
        name: "JUNTA FRENTE COMPRESOR WABCO 85MM TAPA LARGA OM457",
        brand: "Mercedes Benz",
        code: "4571310180",
        image: "img/products/om457/juego-junta-flapers-85mm-om457.jpg",
        description: "Junta de frente para compresor de aire WABCO de 85mm con tapa larga, compatible con motores Mercedes Benz OM457. CÃ³digo original 4571310180. Fabricada en material de alta calidad resistente a la temperatura y presiÃ³n, asegurando un sellado hermÃ©tico entre el compresor y el block del motor."
    },
    {
        id: "P271",
        name: "ENGRANAJE COMPRESOR 27DTES.WABCO (CIG.)OM457 T/LARGA",
        brand: "Mercedes Benz",
        code: "4571320905 / 4571321105 / 8959051884",
        image: "img/products/om457/engranaje-compresor-27dtes-om457.jpg",
        description: "Engranaje de 27 dientes para compresor de aire WABCO (lado cigÃ¼eÃ±al), compatible con motores Mercedes Benz OM457 con tapa larga. CÃ³digos originales 4571320905, 4571321105 y 8959051884. Fabricado en acero endurecido de alta resistencia para garantizar una transmisiÃ³n de potencia precisa y duradera en el sistema de distribuciÃ³n."
    },
    {
        id: "P272",
        name: "BOMBA AGUA ELECT. TURBINA 135MM 2 BRIDAS OM457 1938S/1944S/2638/0-400 SUPER TORQUE",
        brand: "Mercedes Benz",
        code: "4572000201 / 4572000501",
        image: "img/products/om457/bomba-agua-turbina-135mm-om457.jpg",
        description: "Bomba de agua con turbina de 135mm y 2 bridas para motores Mercedes Benz OM457 electrÃ³nicos. Compatible con modelos 1938S, 1944S, 2638 y O-400 Super Torque. CÃ³digos originales 4572000201 y 4572000501. Fabricada con materiales de alta calidad y sellos mecÃ¡nicos reforzados para garantizar una Ã³ptima refrigeraciÃ³n del sistema."
    },
    {
        id: "P273",
        name: "COMPRESOR COMPLETO 85mm OM457 AXOR BICILINDRICO TAPA LARGA",
        brand: "Mercedes Benz",
        code: "4571307215 / 4571305515 / 9125102010 / 9125101050",
        image: "img/products/om457/compresor-completo-85mm-om457-axor.jpg",
        description: "Compresor de aire bicilÃ­ndrico WABCO de 85mm con tapa larga para motores Mercedes Benz OM457, modelos Axor. CÃ³digos originales 4571307215, 4571305515, 9125102010 y 9125101050. Equipo original completo de alta capacidad, diseÃ±ado para garantizar el suministro de aire comprimido en sistemas de frenado y suspensiÃ³n."
    },
    {
        id: "P274",
        name: "BOTADOR VALVULA 1 AGUJERO OM457/501/502",
        brand: "Mercedes Benz",
        code: "5410500722 / 5410500922 / 5410500322 / 5410501722 / 5410501222 / 5410502022",
        image: "img/products/om457/botador-valvula-1-agujero-om457.jpg",
        description: "Botador de vÃ¡lvula de 1 agujero para motores Mercedes Benz OM457, OM501 y OM502. CÃ³digos originales 5410500722, 5410500922, 5410500322, 5410501722, 5410501222 y 5410502022. Fabricado en acero de alta dureza cementado para resistir el desgaste por fricciÃ³n constante con el Ã¡rbol de levas."
    },
    {
        id: "P275",
        name: "FLEXIBLE REFRIG.COMPRESOR OM457 1634",
        brand: "Mercedes Benz",
        code: "4572005052 / 4572004952",
        image: "img/products/om457/flexible-refrigeracion-compresor-om457-1634.jpg",
        description: "Manguera flexible de refrigeraciÃ³n para compresor de motores Mercedes Benz OM457, modelo 1634. CÃ³digos originales 4572005052 y 4572004952. Fabricada con materiales resistentes a la alta temperatura y presiÃ³n del sistema de enfriamiento."
    },
    {
        id: "P276",
        name: "FLEXIBLE DE BOMBA A VALVULA GAS-OIL 1634/1938/AXOR OM457",
        brand: "Mercedes Benz",
        code: "4570900376",
        image: "img/products/om457/flexible-bomba-valvula-gasoil-om457.jpg",
        description: "Flexible de alimentaciÃ³n para bomba a vÃ¡lvula de gas-oil, compatible con motores Mercedes Benz OM457, modelos 1634, 1938 y Axor. CÃ³digo original 4570900376. Fabricado con materiales de alta calidad resistentes a hidrocarburos para garantizar un flujo constante de combustible."
    },
    {
        id: "P277",
        name: "FLEXIBLE DE BOMBA A FILTRO GAS-OIL 1634/1938/AXOR OM457",
        brand: "Mercedes Benz",
        code: "4570900876",
        image: "img/products/om457/flexible-bomba-filtro-gasoil-om457.jpg",
        description: "Flexible de alimentaciÃ³n para bomba a filtro de gas-oil, compatible con motores Mercedes Benz OM457, modelos 1634, 1938 y Axor. CÃ³digo original 4570900876. Fabricado con materiales de alta resistencia diseÃ±ados para el sistema de combustible de alta presiÃ³n."
    },
    {
        id: "P278",
        name: "FLEXIBLE DE FILTRO A DEPOSITO GAS-OIL 1634/1938/AXOR OM457",
        brand: "Mercedes Benz",
        code: "4570900076",
        image: "img/products/om457/flexible-filtro-deposito-gasoil-om457.jpg",
        description: "Flexible de retorno para filtro a depÃ³sito de gas-oil, compatible con motores Mercedes Benz OM457, modelos 1634, 1938 y Axor. CÃ³digo original 4570900076. Fabricado con materiales resistentes a hidrocarburos y vibraciones, garantizando un retorno seguro del combustible al tanque."
    },
    {
        id: "P279",
        name: "CONECTOR GOMA ASPIRACION TAPA COMPRESOR 85 LARGA OM457",
        brand: "Mercedes Benz",
        code: "0029980601",
        image: "img/products/om457/conector-goma-aspiracion-compresor-om457.jpg",
        description: "Conector de goma para la aspiraciÃ³n de la tapa del compresor (85mm tapa larga) de motores Mercedes Benz OM457. CÃ³digo original 0029980601. Pieza de caucho de alta resistencia diseÃ±ada para un sellado hermÃ©tico y duradero en el sistema de admisiÃ³n de aire del compresor."
    },
    {
        id: "P280",
        name: "VISCOSO SOLA O-400/O-500 OM457",
        brand: "Mercedes Benz",
        code: "4752000222 / 4762000622 / 4752050106 / 4752057906",
        image: "img/products/om457/viscoso-sola-o400-o500-om457.jpg",
        description: "Acople viscoso (solo viscoso) para ventilador de motores Mercedes Benz OM457, modelos de buses O-400 y O-500. CÃ³digos originales 4752000222, 4762000622, 4752050106 y 4752057906. Componente de alta precisiÃ³n que regula la velocidad del ventilador segÃºn la temperatura del motor para una Ã³ptima gestiÃ³n tÃ©rmica."
    },
    {
        id: "P281",
        name: "TAPA COMPRESOR WABCO 85mm LARGA COMPLETA OM457 1634E",
        brand: "Mercedes Benz",
        code: "4123529222 / 0011301215 / 0011302615 / 4123528042",
        image: "img/products/om457/tapa-compresor-wabco-85mm-larga-completa-om457.jpg",
        description: "Tapa de compresor WABCO de 85mm larga completa para motores Mercedes Benz OM457, modelo 1634E. CÃ³digos originales 4123529222, 0011301215, 0011302615 y 4123528042. Incluye todas las vÃ¡lvulas y sellos necesarios, fabricada con precisiÃ³n para garantizar el rendimiento Ã³ptimo del sistema de aire comprimido."
    },
    {
        id: "P282",
        name: "SUBCONJUNTO PISTON COMPLETO 85MM STD.WABCO OM457/904",
        brand: "Mercedes Benz",
        code: ">10686/1",
        image: "img/products/om457/subconjunto-piston-compresor-85mm-om457.jpg",
        description: "Subconjunto de pistÃ³n completo de 85mm (Standard) para compresores WABCO de motores Mercedes Benz OM457 y OM904. CÃ³digo original >10686/1. Incluye pistÃ³n, perno, seguros y aros, fabricado bajo normas de equipo original para garantizar la compresiÃ³n y durabilidad del sistema."
    },
    {
        id: "P283",
        name: "PALETA PLASTICO OM457 AXOR/ACTROS C/ARO 8 PALAS 750mm.",
        brand: "Mercedes Benz",
        code: "0032053606 / 0032054506 / 0032053906 / 0032054206",
        image: "img/products/om457/paleta-plastico-viscosa-om457.jpg",
        description: "Paleta de ventilador fabricada en plÃ¡stico reforzado para motores Mercedes Benz OM457 (modelos Axor y Actros). Cuenta con aro protector y 8 palas con un diÃ¡metro total de 750mm. CÃ³digos originales 0032053606, 0032054506, 0032053906 y 0032054206. Proporciona un alto flujo de aire para una refrigeraciÃ³n eficiente del motor bajo condiciones severas de trabajo."
    },
    {
        id: "P284",
        name: "FILTRO GAS-OIL COMPLETO OM457/906/904",
        brand: "Mercedes Benz",
        code: "5410900852 / 5410900452 / 4570900352",
        image: "img/products/om457/filtro-gasoil-completo-om457.jpg",
        description: "Carcasa de filtro de gas-oil completa para motores Mercedes Benz OM457, OM906 y OM904. CÃ³digos originales 5410900852, 5410900452 y 4570900352. Incluye tapa y elemento filtrante, fabricada con materiales de alta durabilidad para resistir la presiÃ³n del sistema de inyecciÃ³n y garantizar la pureza del combustible."
    },
    {
        id: "P285",
        name: "VARILLA NIVEL ACEITE 491mm- 1634E OM457 EURO 5",
        brand: "Mercedes Benz",
        code: "4570105272",
        image: "img/products/om457/varilla-nivel-aceite-491mm-om457-1634e.jpg",
        description: "Varilla de nivel de aceite de 491mm para motores Mercedes Benz OM457, modelo 1634E Euro 5. CÃ³digo original 4570105272. Fabricada en acero flexible de alta calidad con empuÃ±adura ergonÃ³mica resistente al calor, permitiendo una mediciÃ³n precisa y segura del lubricante."
    },
    {
        id: "P286",
        name: "CORREA 9PK2337 AXOR 12.0 OM457",
        brand: "Mercedes Benz",
        code: ">9PK2337",
        originalCode: "0019932496",
        image: "img/products/om457/correa-9pk2337-om457.jpg",
        description: "Correa Multiv 9PK2337 para motores Mercedes Benz OM457, compatible con modelos Axor 12.0. CÃ³digo original 0019932496. Calidad garantizada para el sistema de transmisiÃ³n de accesorios de su motor."
    },
    {
        id: "P287",
        name: "CAÃ‘O COMPRESOR 1634/OM457 SALIDA 2DO TRAMO",
        brand: "Mercedes Benz",
        code: "6954203528 / 6954207528",
        originalCode: "6954203528 / 6954207528",
        image: "img/products/om457/cano-compresor-salida-2do-tramo-om457.jpg",
        description: "CaÃ±o de salida para compresor de aire (2do tramo), compatible con motores Mercedes Benz OM457 y modelo 1634. CÃ³digos originales 6954203528 y 6954207528. Fabricado en material de alta resistencia para soportar la presiÃ³n y temperatura del sistema neumÃ¡tico."
    },
    {
        id: "P288",
        name: "CAÃ‘O RAD.O500/OM457 SUPERIOR",
        brand: "Mercedes Benz",
        code: "6345010382",
        originalCode: "6345010382",
        image: "img/products/om457/cano-radiador-superior-om457.jpg",
        description: "CaÃ±o superior de radiador para motores Mercedes Benz OM457, compatible con modelos de buses O-500. CÃ³digo original 6345010382. Fabricado con materiales de alta durabilidad resistentes a la temperatura y presiÃ³n del sistema de refrigeraciÃ³n."
    },
    {
        id: "P289",
        name: "SENSOR ELECT.GIRO CIGUEÃ‘AL/A.LEVA C/CABLE OM457",
        brand: "Mercedes Benz",
        code: "0001539520",
        originalCode: "0001539520",
        image: "img/products/om457/sensor-giro-ciguenal-om457.jpg",
        description: "Sensor electrÃ³nico de giro para cigÃ¼eÃ±al o Ã¡rbol de levas con cable, compatible con motores Mercedes Benz OM457. CÃ³digo original 0001539520. Componente de alta precisiÃ³n para la sincronizaciÃ³n electrÃ³nica del motor y control de inyecciÃ³n."
    },
    {
        id: "P290",
        name: "CAÃ‘O RAD.O500/OM457 SUPER. 20/90",
        brand: "Mercedes Benz",
        code: "6345010084 / 3825010384",
        originalCode: "6345010084 / 3825010384",
        image: "img/products/om457/cano-radiador-superior-20-90-om457.jpg",
        description: "CaÃ±o superior de radiador (modelo 20/90) para motores Mercedes Benz OM457, compatible con modelos de buses O-500. CÃ³digos originales 6345010084 y 3825010384. Fabricado en caucho reforzado de alta calidad para soportar condiciones extremas de temperatura y presiÃ³n."
    },
    {
        id: "P291",
        name: "BOMBA ACEITE OM457/457LA 6cil.(eng.49mm)",
        brand: "Mercedes Benz",
        code: "4601800301 / 4601800701",
        originalCode: "4601800301 / 4601800701",
        image: "img/products/om457/bomba-aceite-om457-49mm.jpg",
        description: "Bomba de aceite para motores Mercedes Benz OM457 y OM457LA de 6 cilindros. VersiÃ³n con engranaje de 49mm. CÃ³digos originales 4601800301 y 4601800701. Fabricada bajo estÃ¡ndares de equipo original para garantizar la presiÃ³n y caudal de aceite necesarios para la correcta lubricaciÃ³n del motor."
    },
    {
        id: "P292",
        name: "CAÃ‘O COMPRESOR 1938E/OM457",
        brand: "Mercedes Benz",
        code: "6644200236",
        originalCode: "6644200236",
        image: "img/products/om457/cano-compresor-1938e-om457.jpg",
        description: "CaÃ±o de compresor (tipo serpentina) para motores Mercedes Benz OM457, compatible con modelos 1938E. CÃ³digo original 6644200236. Fabricado en material de alta resistencia diseÃ±ado para la refrigeraciÃ³n y conducciÃ³n eficiente del aire comprimido desde el compresor."
    },
    {
        id: "P293",
        name: "CAÃ‘O COMPRESOR (SERPENTINA) INTERMEDIO O500/OM457",
        brand: "Mercedes Benz",
        code: "6344209029",
        originalCode: "6344209029",
        image: "img/products/om457/cano-compresor-intermedio-o500-om457.jpg",
        description: "CaÃ±o intermedio de compresor (tipo serpentina) para motores Mercedes Benz OM457, compatible con modelos de buses O-500. CÃ³digo original 6344209029. Fabricado con tubos de alta resistencia para optimizar el enfriamiento del aire comprimido antes de ingresar al sistema neumÃ¡tico."
    },
    {
        id: "P294",
        name: "VALVULA BOMBA ACEITE OM457",
        brand: "Mercedes Benz",
        code: "5411800715",
        originalCode: "5411800715",
        image: "img/products/om457/valvula-bomba-aceite-om457.jpg",
        description: "VÃ¡lvula para bomba de aceite de motores Mercedes Benz OM457. CÃ³digo original 5411800715. Componente esencial para la regulaciÃ³n de la presiÃ³n de aceite en el circuito de lubricaciÃ³n del motor, fabricado con materiales de alta precisiÃ³n para un funcionamiento confiable."
    },
    {
        id: "P295",
        name: "JGO.JUNTA T/CIL.COMPLETO SABO OM457 (1 BOCA) ORING BAJO",
        brand: "Mercedes Benz",
        code: "4570160020",
        originalCode: "4570160020",
        image: "img/products/om457/juego-junta-tapa-sabo-om457.jpg",
        description: "Juego de juntas completo para tapa de cilindro (1 boca) con o-ring bajo, marca SABO, para motores Mercedes Benz OM457. CÃ³digo original 4570160020. Incluye todos los componentes necesarios para el sellado hermÃ©tico de la tapa de cilindros, garantizando la compresiÃ³n y evitando fugas de fluidos."
    },
    {
        id: "P296",
        name: "EJE POLEA VENT. OM457/AXOR",
        brand: "Mercedes Benz",
        code: "4572050102",
        originalCode: "4572050102",
        image: "img/products/om457/eje-polea-ventilador-om457.jpg",
        description: "Eje de polea de ventilador para motores Mercedes Benz OM457, compatible con la lÃ­nea Axor. CÃ³digo original 4572050102. Fabricado en acero de alta resistencia con terminaciÃ³n de precisiÃ³n para asegurar el correcto alineamiento y durabilidad del sistema de enfriamiento."
    },
    {
        id: "P297",
        name: "REGISTRO VALVULA C/TUERCA OM457",
        brand: "Mercedes Benz",
        code: "5410550420",
        originalCode: "5410550420",
        image: "img/products/om457/registro-valvula-tuerca-om457.jpg",
        description: "Tornillo de registro de vÃ¡lvula con tuerca para motores Mercedes Benz OM457. CÃ³digo original 5410550420. Fabricado con materiales tratados tÃ©rmicamente para resistir el desgaste constante, permitiendo un ajuste preciso de la luz de vÃ¡lvulas para un rendimiento Ã³ptimo del motor."
    },
    {
        id: "P298",
        name: "PERNO GUIA TAPA CILINDRO 8x35 OM457",
        brand: "Mercedes Benz",
        code: "0007008217",
        originalCode: "0007008217",
        image: "img/products/om457/perno-guia-tapa-cilindro-om457.jpg",
        description: "Perno guÃ­a para tapa de cilindro (medida 8x35) para motores Mercedes Benz OM457. CÃ³digo original 0007008217. Pieza de precisiÃ³n fundamental para el correcto centrado y montaje de la tapa de cilindros sobre el bloque motor."
    },
    {
        id: "P299",
        name: "REFRIGERADOR ACEITE 13 FILAS OM457/460",
        brand: "Mercedes Benz",
        code: "0021884301 / 0021888001 / 0021881801",
        originalCode: "0021884301 / 0021888001 / 0021881801",
        image: "img/products/om457/refrigerador-aceite-13-filas-om457.jpg",
        description: "Refrigerador de aceite (enfriador) de 13 filas para motores Mercedes Benz OM457 y OM460. CÃ³digos originales 0021884301, 0021888001 y 0021881801. ConstrucciÃ³n robusta en placas superpuestas para una mÃ¡xima eficiencia en el intercambio tÃ©rmico y control de temperatura del lubricante."
    },
    {
        id: "P300",
        name: "CAMISA PORTA INYECTOR OM457/904/906/924/926",
        brand: "Mercedes Benz",
        code: "9060170488 / 5410170188 / 5410170388",
        originalCode: "9060170488 / 5410170188 / 5410170388",
        image: "img/products/om457/camisa-porta-inyector-om457.jpg",
        description: "Camisa porta inyector compatible con motores Mercedes Benz OM457 y serie 900 (904, 906, 924, 926). CÃ³digos originales 9060170488, 5410170188 y 5410170388. Fabricada en material de alta conductividad tÃ©rmica para asegurar el correcto enfriamiento del inyector y sellado hermÃ©tico en la culata."
    },
    {
        id: "P301",
        name: "DEFLECTOR CARCAZA DISTRIBUCION OM457",
        brand: "Mercedes Benz",
        code: "4570100270",
        originalCode: "4570100270",
        image: "img/products/om457/deflector-carcaza-distribucion-om457.jpg",
        description: "Deflector para carcaza de distribuciÃ³n de motores Mercedes Benz OM457. CÃ³digo original 4570100270. Componente de protecciÃ³n fabricado en tecnopolÃ­mero de alta resistencia al calor y aceites, diseÃ±ado para dirigir correctamente el flujo de lubricante dentro de la tapa de distribuciÃ³n."
    },
    {
        id: "P302",
        name: "SENSOR PRESION AIRE/TEMPERATURA 1418 OM904LA/OM906LA/OM457LA",
        brand: "Mercedes Benz",
        code: "0041537028 / 0041537628 / 0281002468",
        originalCode: "0041537028 / 0041537628 / 0281002468",
        image: "img/products/om457/sensor-presion-aire-temperatura-om457.jpg",
        description: "Sensor combinado de presiÃ³n de aire y temperatura para motores Mercedes Benz electrÃ³nicos (OM904LA, OM906LA, OM457LA). CÃ³digos originales 0041537028, 0041537628 y 0281002468. Sensor de alta precisiÃ³n para el monitoreo de los parÃ¡metros de admisiÃ³n, esencial para la gestiÃ³n electrÃ³nica del motor."
    },
    {
        id: "P303",
        name: "JUNTA CARTER OM457 M/V",
        brand: "Mercedes Benz",
        code: "4470140322 / 4570140222",
        originalCode: "4470140322 / 4570140222",
        image: "img/products/om457/junta-carter-om457.jpg",
        description: "Junta de cÃ¡rter de aceite para motores Mercedes Benz OM457. CÃ³digos originales 4470140322 y 4570140222. Fabricada en material de alta resistencia tÃ©rmica y quÃ­mica para asegurar un sellado perfecto y duradero, evitando filtraciones de aceite en la base del motor."
    },
    {
        id: "P304",
        name: "DEPOSITO RADIADOR O500/OM457",
        brand: "Mercedes Benz",
        code: "6295000049",
        originalCode: "6295000049",
        image: "img/products/om457/deposito-radiador-om457.jpg",
        description: "DepÃ³sito de expansiÃ³n para radiador de Mercedes Benz O500 y motores OM457. CÃ³digo original 6295000049. Fabricado en polÃ­mero reforzado de alta resistencia a la presiÃ³n y temperaturas extremas, diseÃ±ado para el correcto control del nivel y expansiÃ³n del lÃ­quido refrigerante."
    },
    {
        id: "P305",
        name: "DEPOSITO RADIADOR 1938E/OM457 AXOR",
        brand: "Mercedes Benz",
        code: "9585000149 / 6935007149",
        originalCode: "9585000149 / 6935007149",
        image: "img/products/om457/deposito-radiador-axor-om457.jpg",
        description: "DepÃ³sito de expansiÃ³n para radiador de Mercedes Benz 1938E, Axor y motores OM457. CÃ³digos originales 9585000149 y 6935007149. Fabricado con materiales de alta durabilidad para resistir la presiÃ³n del sistema de enfriamiento y variaciones tÃ©rmicas, asegurando un funcionamiento Ã³ptimo del motor."
    },
    {
        id: "P306",
        name: "FLEXIBLE GAS OIL DE BOMBA ALIM. MANUAL OM457",
        brand: "Mercedes Benz",
        code: "4570900676",
        originalCode: "4570900676",
        image: "img/products/om457/flexible-gasoil-bomba-manual-om457.jpg",
        description: "Manguera flexible de combustible para la bomba de alimentaciÃ³n manual de motores Mercedes Benz OM457. CÃ³digo original 4570900676. Fabricada con materiales de caucho nitrÃ­lico reforzado para una mÃ¡xima resistencia al gasoil y agentes externos, con conexiones banjo de alta precisiÃ³n para un sellado hermÃ©tico."
    },
    {
        id: "P307",
        name: "FLEXIBLE GAS OIL DE FILTRO A BLOCK OM457",
        brand: "Mercedes Benz",
        code: "4570900276",
        originalCode: "4570900276",
        image: "img/products/om457/flexible-gasoil-filtro-block-om457.jpg",
        description: "Manguera flexible de combustible que conecta el filtro con el bloque motor en motores Mercedes Benz OM457. CÃ³digo original 4570900276. DiseÃ±ada para soportar las vibraciones del motor y la presiÃ³n del sistema de alimentaciÃ³n, fabricada en caucho sintÃ©tico de alta calidad con terminales de acero zincado."
    },
    {
        id: "P308",
        name: "CONEX.CODO SALIDA CIL. F/MOTOR 1634 OM457",
        brand: "Mercedes Benz",
        code: "3884297138",
        originalCode: "3884297138",
        image: "img/products/om457/conexion-codo-salida-cil-om457.jpg",
        description: "ConexiÃ³n en codo para la salida del cilindro de freno motor en camiones Mercedes Benz 1634 con motor OM457. CÃ³digo original 3884297138. Pieza de alta resistencia mecÃ¡nica y tÃ©rmica, diseÃ±ada para asegurar un acople perfecto y duradero en el sistema de escape y freno motor."
    },
    {
        id: "P309",
        name: "JUEGO DE REPARACION BOMBA DE AGUA OM457",
        brand: "S&M",
        code: "1124",
        originalCode: "457 200 0050",
        image: "img/products/om457/bomba-agua-turbina-135mm-om457.png",
        description: "Kit completo de reparaciÃ³n para bomba de agua en motores Mercedes Benz OM457. Incluye rodamiento, sello y componentes crÃ­ticos para restaurar el flujo y enfriamiento del motor."
    },
    {
        id: "P310",
        name: "BULBO PRESION UREA DOSIFICADOR ROSCA M14 X 1.5 / 3 PINES OM457 /OM501/OM 924/OM 926/ Euro 5",
        brand: "Mercedes Benz",
        code: "0061537428",
        originalCode: "0061537428",
        image: "img/products/om457/0061537428.jpg",
        description: "Sensor de presiÃ³n de urea (AdBlue) para dosificador, con rosca M14 x 1.5 y conector de 3 pines. Compatible con motores Mercedes Benz OM457, OM501, OM924 y OM926 Euro 5. CÃ³digo original 0061537428. Componente esencial para el sistema de post-tratamiento de gases."
    },
    {
        id: "P311",
        name: "TENSOR DE CORREA O500/OM457/OM457LA (74X39)",
        brand: "Mercedes Benz",
        code: "4572003270 / 4572003870",
        originalCode: "4572003270 / 4572003870",
        image: "img/products/om457/tensor-correa-om457.jpg",
        description: "Tensor de correa automÃ¡tico para motores Mercedes Benz OM457, OM457LA y chasis O500. Medidas de la polea: 74x39mm. CÃ³digos originales 4572003270 y 4572003870. Fabricado con materiales de alta calidad para garantizar una tensiÃ³n constante y durabilidad del sistema de accesorios."
    },
    {
        id: "P312",
        name: "SOPORTE MOTOR DEL. OM457 1938S",
        brand: "Mercedes Benz",
        code: "9412417813",
        originalCode: "9412417813",
        image: "img/products/om457/soporte-motor-delantero-om457.jpg",
        description: "Soporte de motor delantero para camiones Mercedes Benz 1938S con motor OM457. CÃ³digo original 9412417813. Rubro: SuspensiÃ³n de motor. Pieza de alta resistencia diseÃ±ada para absorber vibraciones y garantizar la alineaciÃ³n del motor."
    },
    {
        id: "P313",
        name: "PALETA PLASTICO OM457/926 INV.OMNIB. O-500RSD 9 PALAS 700MM",
        brand: "Mercedes Benz",
        code: "4752050706 / 4752050006",
        originalCode: "4752050706 / 4752050006",
        image: "img/products/om457/paleta-ventilador-o500-om457.jpg",
        description: "Paleta de ventilador plÃ¡stica de 9 palas y 700mm de diÃ¡metro. Giro inverso, diseÃ±ada especÃ­ficamente para Ã³mnibus Mercedes Benz O-500RSD with motores OM457 and OM926. CÃ³digos originales 4752050706 y 4752050006. Alta eficiencia en el flujo de aire para el sistema de refrigeraciÃ³n."
    },
    {
        id: "P314",
        name: "TENSOR DE CORREA OM457LA/AXOR",
        brand: "Mercedes Benz",
        code: "4572001670",
        originalCode: "4572001670",
        image: "img/products/om457/tensor-correa-axor-om457.jpg",
        description: "Tensor de correa automÃ¡tico para motores Mercedes Benz OM457LA, compatible con la lÃ­nea Axor. CÃ³digo original 4572001670. Rubro: RefrigeraciÃ³n. Componente de alta precisiÃ³n para mantener la tensiÃ³n Ã³ptima de las correas de mando."
    },
    {
        id: "P315",
        name: "SOPORTE MOTOR DEL./TRAS. AXOR/ACTROS OM457LA",
        brand: "Mercedes Benz",
        code: "9412418713 / 6342410513 / 6342410913 / 9412415713 / 9412417713",
        originalCode: "9412418713 / 6342410513 / 6342410913 / 9412415713 / 9412417713",
        image: "img/products/om457/soporte-motor-axor-actros-om457.jpg",
        description: "Soporte de motor delantero/trasero para camiones Mercedes Benz Axor y Actros con motor OM457LA. Compatible con mÃºltiples cÃ³digos originales (9412418713, 6342410513, 6342410913, 9412415713, 9412417713). Rubro: SuspensiÃ³n de motor. Fabricado para alta resistencia y durabilidad bajo condiciones de carga pesada."
    },
    {
        id: "P316",
        name: "SOPORTE MOTOR TRASERO OM457 1938S",
        brand: "Mercedes Benz",
        code: "6932410013",
        originalCode: "6932410013",
        image: "img/products/om457/soporte-motor-trasero-1938s-om457.jpg",
        description: "Soporte de motor trasero para camiones Mercedes Benz 1938S con motor OM457. CÃ³digo original 6932410013. Rubro: SuspensiÃ³n de motor. Pieza de fundiciÃ³n y caucho reforzado para soportar el peso y torsiÃ³n del motor en la parte posterior."
    },
    {
        id: "P317",
        name: "TENSOR DE CORREA OM457LA/AXOR 2035",
        brand: "Mercedes Benz",
        code: "4572002270 / 4572001470 / 4572002970 / 4572003170 / 4572000270",
        originalCode: "4572002270 / 4572001470 / 4572002970 / 4572003170 / 4572000270",
        image: "img/products/om457/tensor-correa-axor-2035-om457.jpg",
        description: "Tensor de correa automÃ¡tico para motores Mercedes Benz OM457LA, especÃ­fico para la lÃ­nea Axor 2035. Compatible con mÃºltiples cÃ³digos originales. Rubro: RefrigeraciÃ³n. Garantiza el correcto funcionamiento de las correas auxiliares y la refrigeraciÃ³n del motor."
    },
    {
        id: "P318",
        name: "POLEA TENSOR LISA OM457 1938S/2044S/O500 (80x45)",
        brand: "Mercedes Benz",
        code: "0005500833 / 0005501633",
        originalCode: "0005500833 / 0005501633",
        image: "img/products/om457/polea-tensor-lisa-om457.jpg",
        description: "Polea tensora lisa para motores Mercedes Benz OM457, compatible con modelos 1938S, 2044S y chasis O500. Medidas: 80x45mm. CÃ³digos originales 0005500833 y 0005501633. Rubro: RefrigeraciÃ³n. Componente esencial para el correcto guiado y tensiÃ³n de la correa de accesorios."
    },
    {
        id: "P319",
        name: "POLEA TENSOR LISA OM906/OM457",
        brand: "Mercedes Benz",
        code: "0005500433",
        originalCode: "0005500433",
        image: "img/products/om457/polea-tensor-lisa-om906-om457.jpg",
        description: "Polea tensora lisa de alta calidad para motores Mercedes Benz OM906 y OM457. CÃ³digo original 0005500433. Rubro: RefrigeraciÃ³n. ConstrucciÃ³n robusta con rodamiento integrado para asegurar el flujo de aire y enfriamiento Ã³ptimo."
    },
    {
        id: "P320",
        name: "POLEA TENSOR OM457 1938S/2044S/O500",
        brand: "Mercedes Benz",
        code: "0005500633",
        originalCode: "0005500633",
        image: "img/products/om457/polea-tensor-om457-estriada.jpg",
        description: "Polea tensora estriada para motores Mercedes Benz OM457, compatible con modelos 1938S, 2044S y chasis O500. CÃ³digo original 0005500633. Rubro: RefrigeraciÃ³n. Fabricada con materiales de alta resistencia para garantizar una larga vida Ãºtil y un funcionamiento suave."
    },
    {
        id: "P321",
        name: "BOMBA AGUA OM457/LA/OM460",
        brand: "Mercedes Benz",
        code: "4602000001",
        originalCode: "4602000001",
        image: "img/products/om457/bomba-agua-om460.jpg",
        description: "Bomba de agua completa para motores Mercedes Benz OM457, OM457LA y OM460. CÃ³digo original 4602000001. Rubro: RefrigeraciÃ³n. Incluye juntas para una instalaciÃ³n correcta. Componente vital para mantener la temperatura Ã³ptima de operaciÃ³n del motor."
    },
    {
        id: "P322",
        name: "BOMBA AGUA ELECT. TURBINA 135MM OM457 1634E/1938/O-400/AXOR",
        brand: "Mercedes Benz",
        code: "4572000101 / 4572001601 / 4572004701 / 4572007001",
        originalCode: "4572000101 / 4572001601 / 4572004701 / 4572007001",
        image: "img/products/om457/bomba-agua-turbina-135mm-om457.png",
        description: "Bomba de agua completa con turbina de 135mm para motores Mercedes Benz OM457. Compatible con modelos 1634E, 1938, chasis O-400 y lÃ­nea Axor. CÃ³digos originales: 4572000101, 4572001601, 4572004701, 4572007001. Rubro: RefrigeraciÃ³n. Rendimiento superior para sistemas de enfriamiento de alta demanda."
    },
    {
        id: "P323",
        name: "TENSOR DE CORREA 1938 OM457",
        brand: "Mercedes Benz",
        code: "4572003470 / 4572000070 / 4572001770",
        originalCode: "4572003470 / 4572000070 / 4572001770",
        image: "img/products/om457/tensor-correa-1938-om457.jpg",
        description: "Tensor de correa automÃ¡tico para camiones Mercedes Benz 1938 con motor OM457. Compatible con cÃ³digos originales 4572003470, 4572000070 y 4572001770. Rubro: RefrigeraciÃ³n. Asegura la tensiÃ³n constante de las correas de mando del motor."
    },
    {
        id: "P324",
        name: "MULTIPLE ESCAPE 1634/1938/1944 OM457LA",
        brand: "Mercedes Benz",
        code: "4571421101",
        originalCode: "4571421101",
        image: "img/products/om457/multiple-escape-om457la.jpg",
        description: "MÃºltiple de escape para motores Mercedes Benz OM457LA, compatible con modelos 1634, 1938 y 1944. CÃ³digo original 4571421101. Rubro: MÃºltiples (AdmisiÃ³n y Escape). Fabricado en fundiciÃ³n de alta resistencia para soportar altas temperaturas y presiones de los gases de escape."
    },
    {
        id: "P325",
        name: "MULTIPLE ESCAPE O-500 OM457",
        brand: "Mercedes Benz",
        code: "4571421401",
        originalCode: "4571421401",
        image: "img/products/om457/multiple-escape-o500-om457.jpg",
        description: "MÃºltiple de escape para chasis Mercedes Benz O-500 con motor OM457. CÃ³digo original 4571421401. Rubro: MÃºltiples (AdmisiÃ³n y Escape). Componente de fundiciÃ³n reforzada diseÃ±ado para un flujo Ã³ptimo de gases y resistencia a fatiga tÃ©rmica."
    },
    {
        id: "P326",
        name: "MULTIPLE ESCAPE AXOR 2035/2040/2045 OM457LA",
        brand: "Mercedes Benz",
        code: "4571420901 / 4571421501",
        originalCode: "4571420901 / 4571421501",
        image: "img/products/om457/multiple-escape-axor-om457la.jpg",
        description: "MÃºltiple de escape para motores Mercedes Benz OM457LA, compatible con la lÃ­nea Axor modelos 2035, 2040 y 2045. CÃ³digos originales: 4571420901 y 4571421501. Rubro: MÃºltiples (AdmisiÃ³n y Escape). Fabricado con fundiciÃ³n de gran durabilidad y diseÃ±ado para soportar el rÃ©gimen de trabajo pesado."
    },
    {
        id: "P327",
        name: "ENGRANAJE BBA. ALIM. A A/LEVA OM457",
        brand: "Mercedes Benz",
        code: "4571320405",
        originalCode: "4571320405",
        image: "img/products/om457/engranaje-bomba-alimentacion-om457.jpg",
        description: "Engranaje de bomba de alimentaciÃ³n a Ã¡rbol de levas para motores Mercedes Benz OM457. CÃ³digo original 4571320405. Rubro: InyecciÃ³n. Fabricado con acero de alta resistencia y precisiÃ³n para asegurar una sincronizaciÃ³n perfecta y larga durabilidad en el sistema de inyecciÃ³n."
    },
    {
        id: "P328",
        name: "COMPRESOR COMPLETO 85mm OM457 TAPA LARGA",
        brand: "Mercedes Benz",
        code: "4571304415 / 4123520260 / 412350270 / 412350310 / 4571306815 / 4571304515 / 4571302415 / 4571306715",
        originalCode: "4571304415 / 4123520260 / 412350270 / 412350310 / 4571306815 / 4571304515 / 4571302415 / 4571306715",
        image: "img/products/om457/compresor-completo-85mm-om457.jpg",
        description: "Compresor de aire completo de 85mm con tapa larga para motores Mercedes Benz OM457. VersiÃ³n completa que incluye el engranaje de mando. CÃ³digos originales coincidentes: 4571304415, 4123520260, entre otros. Rubro: Compresor. Componente vital para el sistema de frenos y suspensiÃ³n neumÃ¡tica."
    },
    {
        id: "P329",
        name: "Jgo. Flapers c/juntas wabco 85mm tapa larga vw const.19320/24250 MB1634E/1938E OM457LA",
        brand: "Ford/VW",
        code: "2V2198156 / 4123520022 / 0011301015",
        originalCode: "2V2198156 / 4123520022 / 0011301015",
        image: "img/products/om457/juego-flapers-85mm-om457.jpg",
        description: "Juego de flapers con juntas para compresores Wabco de 85mm con tapa larga. Compatible con Volkswagen Constellation 19320, 24250 y Mercedes Benz 1634E, 1938E con motor OM457LA. CÃ³digos originales: 2V2198156, 4123520022, 0011301015. Rubro: Compresor. Kit de reparaciÃ³n esencial para mantener la eficiencia volumÃ©trica del compresor."
    },
    {
        id: "P330",
        name: "CAÃ‘O COMPRESOR O-400 OM457 SALIDA",
        brand: "Mercedes Benz",
        code: "6644200236",
        originalCode: "6644200236",
        image: "img/products/om457/cano-compresor-o400-om457.jpg",
        description: "CaÃ±o de compresor (salida) para motores Mercedes Benz OM457, compatible con modelos de Ã³mnibus O-400. CÃ³digo original 6644200236. Fabricado en material de alta resistencia diseÃ±ado para la conducciÃ³n eficiente del aire comprimido."
    },
    {
        id: "P331",
        name: "ENGRANAJE COMPRESOR 25DTES.WABCO (CIG.)OM457",
        brand: "Mercedes Benz",
        code: "4571320005",
        originalCode: "4571320005",
        image: "img/products/om457/engranaje-compresor-25d-om457.jpg",
        description: "Engranaje de compresor de 25 dientes para compresores Wabco, ubicado en el cigÃ¼eÃ±al. Compatible con motores Mercedes Benz OM457. CÃ³digo original 4571320005. Rubro: Compresor. Fabricado con acero forjado de alta resistencia para garantizar una transmisiÃ³n de potencia confiable y duradera."
    },
    {
        id: "P332",
        name: "CAÃ‘O REFRIGERACION COMPRESOR OM457",
        brand: "Mercedes Benz",
        code: "4572002052",
        originalCode: "4572002052",
        image: "img/products/om457/cano-refrigeracion-compresor-om457.jpg",
        description: "CaÃ±o de refrigeraciÃ³n para compresor de motores Mercedes Benz OM457. CÃ³digo original 4572002052. Rubro: Compresor. Fabricado con materiales resistentes a la corrosiÃ³n y altas temperaturas para garantizar el flujo Ã³ptimo de refrigerante al compresor."
    },
    {
        id: "P333",
        name: "PISTON SOLO 85MM WABCO OM457/904",
        brand: "Mercedes Benz",
        code: "0001303417 / 0001305317 / 9115016252",
        originalCode: "0001303417 / 0001305317 / 9115016252",
        image: "img/products/om457/piston-solo-85mm-om457.jpg",
        description: "PistÃ³n de 85mm para compresores Wabco, compatible con motores Mercedes Benz OM457 y OM904. CÃ³digos originales: 0001303417, 0001305317, 9115016252. Rubro: Compresor. Fabricado con aleaciÃ³n de aluminio de alta resistencia tÃ©rmica para garantizar el sellado y durabilidad del compresor."
    },
    {
        id: "P334",
        name: "CAÃ‘O COMPRESOR 1634/OM457",
        brand: "Mercedes Benz",
        code: "6964207436",
        originalCode: "6964207436",
        image: "img/products/om457/cano-compresor-1634-om457.jpg",
        description: "CaÃ±o de compresor para camiones Mercedes Benz 1634 con motor OM457. CÃ³digo original 6964207436. Rubro: Compresor. Fabricado con acero de alta resistencia y precisiÃ³n para asegurar estanqueidad y durabilidad en el sistema de aire compromido."
    },
    {
        id: "P335",
        name: "CAÃ‘O REFRIGERACION COMPRESOR 1938E/OM457",
        brand: "Mercedes Benz",
        code: "4572000542",
        originalCode: "4572000542",
        image: "img/products/om457/cano-refrigeracion-compresor-1938e-om457.jpg",
        description: "CaÃ±o de refrigeraciÃ³n para compresor de camiones Mercedes Benz 1938E con motor OM457. CÃ³digo original 4572000542. Rubro: Compresor. Fabricado con acero de alta resistencia para garantizar el flujo Ã³ptimo de refrigerante y durabilidad en el sistema."
    },
    {
        id: "P336",
        name: "CAÃ‘O COMPRESOR 1938/OM457 A GOBERNADOR",
        brand: "Mercedes Benz",
        code: "6964207236 / 6964207336",
        originalCode: "6964207236 / 6964207336",
        image: "img/products/om457/cano-compresor-gobernador-om457.jpg",
        description: "CaÃ±o de compresor a gobernador para camiones Mercedes Benz 1938 with motor OM457. CÃ³digos originales: 6964207236, 6964207336. Rubro: Compresor. Fabricado con acero de alta calidad y precisiÃ³n para garantizar el funcionamiento correcto del gobernador de aire."
    },
    {
        id: "P337",
        name: "BLOCK COMPRESOR WABCO 85mm TAPA LARGA OM457",
        brand: "Mercedes Benz",
        code: "4129050112",
        originalCode: "4129050112",
        image: "img/products/om457/block-compresor-85mm-om457.jpg",
        description: "Block de compresor para motores Mercedes Benz OM457. VersiÃ³n para compresores Wabco de 85mm con tapa larga. CÃ³digo original 4129050112. Rubro: Compresor. Fabricado en fundiciÃ³n de alta resistencia, procesado con precisiÃ³n para asegurar el sellado y durabilidad del conjunto del compresor."
    },
    {
        id: "P338",
        name: "BLOCK COMPRESOR WABCO 85mm TAPA CORTA OM457/O400/1938E",
        brand: "Mercedes Benz",
        code: "0001300310 / 9111530132",
        originalCode: "0001300310 / 9111530132",
        image: "img/products/om457/block-compresor-85mm-tapa-corta-om457.jpg",
        description: "Block de compresor para motores Mercedes Benz OM457, compatible con modelos O-400 y 1938E. VersiÃ³n para compresores Wabco de 85mm con tapa corta. CÃ³digos originales: 0001300310, 9111530132. Rubro: Compresor. Fabricado con fundiciÃ³n de precisiÃ³n para asegurar un flujo de aire Ã³ptimo y mÃ¡xima durabilidad."
    },
    {
        id: "P339",
        name: "CAÃ‘O REFRIGERACION COMPRESOR 1938/OM457",
        brand: "Mercedes Benz",
        code: "4572000452",
        originalCode: "4572000452",
        image: "img/products/om457/cano-refrigeracion-compresor-1938-om457.jpg",
        description: "CaÃ±o de refrigeraciÃ³n para compresor de camiones Mercedes Benz 1938 con motor OM457. CÃ³digo original 4572000452. Rubro: Compresor. Fabricado con acero de alta resistencia para garantizar el flujo Ã³ptimo de refrigerante y durabilidad en el sistema de refrigeraciÃ³n del compresor."
    },
    {
        id: "P340",
        name: "JGO.JUNTA C/FLAPERS 85mm.OM457(MONOCIL TAPA LARGA)",
        brand: "Mercedes Benz",
        code: "0011300815 / 3661300120 / 0011301015",
        originalCode: "0011300815 / 3661300120 / 0011301015",
        image: "img/products/om457/juego-junta-flapers-85mm-om457.jpg",
        description: "Juego de juntas con flapers para compresores de 85mm en motores Mercedes Benz OM457 (VersiÃ³n MonocilÃ­ndrico Tapa Larga). CÃ³digos originales: 0011300815, 3661300120, 0011301015. Rubro: Compresor. Kit completo de alta calidad diseÃ±ado para restaurar la estanqueidad y eficiencia del sistema de vÃ¡lvulas del compresor."
    },
    {
        id: "P341",
        name: "CAÃ‘O COMPRESOR ENTRADA APU 1938 OM457",
        brand: "Mercedes Benz",
        code: "6964207136",
        originalCode: "6964207136",
        image: "img/products/om457/cano-compresor-apu-1938-om457.jpg",
        description: "CaÃ±o de entrada APU para compresor de camiones Mercedes Benz 1938 con motor OM457. CÃ³digo original 6964207136. Rubro: Compresor. Fabricado con acero de alta resistencia y precisiÃ³n para asegurar una conexiÃ³n estanca y duradera en el sistema APU."
    },
    {
        id: "P342",
        name: "CAÃ‘O COMPRESOR 1634/OM457 SALIDA",
        brand: "Mercedes Benz",
        code: "6954200136",
        originalCode: "6954200136",
        image: "img/products/om457/cano-compresor-salida-1634-om457.jpg",
        description: "CaÃ±o de salida para compresor de camiones Mercedes Benz 1634 con motor OM457. CÃ³digo original 6954200136. Rubro: Compresor. Fabricado con acero de alta resistencia y precisiÃ³n para asegurar una conducciÃ³n eficiente del aire comprimido."
    },
    {
        id: "P343",
        name: "CAÃ‘O COMPRESOR O-400 OM457E",
        brand: "Mercedes Benz",
        code: "6644200136",
        originalCode: "6644200136",
        image: "img/products/om457/cano-compresor-o400-om457e.jpg",
        description: "CaÃ±o de compresor para chasis de Ã³mnibus Mercedes Benz O-400 con motor OM457E. CÃ³digo original 6644200136. Rubro: Compresor. Fabricado con acero de alta resistencia y diseÃ±o especÃ­fico para el ruteo de aire en aplicaciones de transporte de pasajeros."
    },
    {
        id: "P344",
        name: "CAÃ‘O REFRIGERACION COMPRESOR 1938/OM457",
        brand: "Mercedes Benz",
        code: "4572001452 / 4602000152",
        originalCode: "4572001452 / 4602000152",
        image: "img/products/om457/cano-refrigeracion-compresor-1938-om457-v2.jpg",
        description: "CaÃ±o de refrigeraciÃ³n para compresor de camiones Mercedes Benz 1938 con motor OM457. Compatible con cÃ³digos originales 4572001452 y 4602000152. Rubro: Compresor. Fabricado con acero de alta resistencia para garantizar el flujo Ã³ptimo de refrigerante y durabilidad en el sistema de refrigeraciÃ³n del compresor."
    },
    {
        id: "P345",
        name: "ENTRETAPA 85mm WABCO OM457/904 ELEC.",
        brand: "Mercedes Benz",
        code: "0001310909 / 4111516522",
        originalCode: "0001310909 / 4111516522",
        image: "img/products/om457/entretapa-85mm-om457-elec.jpg",
        description: "Entretapa para compresores Wabco de 85mm en motores Mercedes Benz electrÃ³nicos OM457 y OM904. CÃ³digos originales: 0001310909, 4111516522. Rubro: Compresor. Componente de precisiÃ³n fabricado bajo estÃ¡ndares OEM para garantizar el sellado y funcionamiento correcto de la tapa del compresor."
    },
    {
        id: "P346",
        name: "CODO BAJADA TURBO 1938S/1944S FRONTAL OM457 COMP",
        brand: "Mercedes Benz",
        code: "4571401153",
        originalCode: "4571401153",
        image: "img/products/om457/codo-bajada-turbo-1938s-om457.jpg",
        description: "Codo de bajada de turbo frontal para camiones Mercedes Benz 1938S and 1944S con motor OM457. Incluye mariposa de freno motor. CÃ³digo original 4571401153. Rubro: Turbo. Fabricado en material de alta resistencia tÃ©rmica para soportar las condiciones extremas del flujo de escape."
    },
    {
        id: "P347",
        name: "CODO BAJADA TURBO 1634/1938/O-400 OM457 COMP",
        brand: "Mercedes Benz",
        code: "4571401053",
        originalCode: "4571401053",
        image: "img/products/om457/codo-bajada-turbo-1634-om457.jpg",
        description: "Codo de bajada de turbo para camiones Mercedes Benz 1634, 1938 y chasis O-400 con motor OM457. Incluye mariposa de freno motor integrada. CÃ³digo original 4571401053. Rubro: Turbo. Fabricado en fundiciÃ³n de alta resistencia tÃ©rmica para un rendimiento Ã³ptimo del sistema de escape y freno motor."
    },
    {
        id: "P348",
        name: "CODO BAJADA TURBO O-500 OM457 COMP",
        brand: "Mercedes Benz",
        code: "4571401553",
        originalCode: "4571401553",
        image: "img/products/om457/codo-bajada-turbo-o500-om457.jpg",
        description: "Codo de bajada de turbo para chasis de Ã³mnibus Mercedes Benz O-500 con motor OM457. Incluye mariposa de freno motor integrada. CÃ³digo original 4571401553. Rubro: Turbo. Fabricado en fundiciÃ³n de alta resistencia para garantizar durabilidad y eficiencia en el sistema de escape y freno motor."
    },
    {
        id: "P349",
        name: "ABRAZADERA TURBO 4 1/2 O500/OM457 130MM",
        brand: "Mercedes Benz",
        code: "6939970190",
        originalCode: "6939970190",
        image: "img/products/om457/abrazadera-turbo-o500-om457.jpg",
        description: "Abrazadera para turbo de 4 1/2 pulgadas (130mm) para chasis de Ã³mnibus Mercedes Benz O-500 con motor OM457. CÃ³digo original 6939970190. Rubro: Turbo. Fabricada en acero inoxidable de alta calidad para asegurar un ajuste firme y duradero en el sistema de sobrealimentaciÃ³n."
    },
    {
        id: "P350",
        name: "TAPA FILTRO AIRE 1938E/2638 OM457",
        brand: "Mercedes Benz",
        code: "0000961602",
        originalCode: "0000961602",
        image: "img/products/om457/tapa-filtro-aire-1938-om457.jpg",
        description: "Tapa para el conjunto del filtro de aire de camiones Mercedes Benz 1938E y 2638 con motor OM457. CÃ³digo original 0000961602. Rubro: Filtros de Aire. Fabricada en material plÃ¡stico de alta resistencia, diseÃ±ada para asegurar un cierre hermÃ©tico y proteger el elemento filtrante del motor."
    },
    {
        id: "P351",
        name: "MANGUERA FILTRO AIRE A TURBO 1634 OM457",
        brand: "Mercedes Benz",
        code: "6955280382",
        originalCode: "6955280382",
        image: "img/products/om457/manguera-filtro-aire-1634-om457.jpg",
        description: "Manguera de conexiÃ³n entre el filtro de aire y el turbo para camiones Mercedes Benz 1634 con motor OM457. CÃ³digo original 6955280382. Rubro: Filtros de Aire. Fabricada en caucho de alta resistencia con refuerzos para soportar la succiÃ³n y las vibraciones del motor."
    },
    {
        id: "P352",
        name: "TAPA FILTRO AIRE PLASTICA AXOR OM457LA (00901)",
        brand: "Mercedes Benz",
        code: "0010944603",
        originalCode: "0010944603",
        image: "img/products/om457/tapa-filtro-aire-axor-om457.jpg",
        description: "Tapa plÃ¡stica para el filtro de aire de camiones Mercedes Benz Axor con motor OM457LA. Referencia 00901. CÃ³digo original 0010944603. Rubro: Filtros de Aire. Fabricada en material plÃ¡stico de alta durabilidad, diseÃ±ada para proporcionar un sellado Ã³ptimo y protecciÃ³n al sistema de admisiÃ³n en aplicaciones de carga pesada."
    },
    {
        id: "P353",
        name: "MANGUERA FILTRO AIRE-TURBO OM457ELECT.",
        brand: "Mercedes Benz",
        code: "4760987583",
        originalCode: "4760987583",
        image: "img/products/om457/manguera-filtro-aire-om457-elect.jpg",
        description: "Manguera de conexiÃ³n entre el filtro de aire y el turbo para motores Mercedes Benz electrÃ³nicos OM457. CÃ³digo original 4760987583. Rubro: Filtros de Aire. Fabricada en material de alta resistencia, diseÃ±ada para soportar las presiones de succiÃ³n y temperaturas del vano motor en unidades electrÃ³nicas."
    },
    {
        id: "P354",
        name: "FILTRO COMBUSTIBLE R120L-10MB AQII OM457/906",
        brand: "Mercedes Benz",
        code: "9584770015",
        originalCode: "9584770015",
        image: "img/products/om457/filtro-combustible-r120l-om457.jpg",
        description: "Elemento filtrante Racor (Parker) para combustible/separador de agua. Modelo R120L-10MB AQII. Compatible con motores Mercedes Benz OM457 y OM906. CÃ³digo original 9584770015. Rubro: Filtro Combustible. Utiliza tecnologÃ­a Aquabloc Plus para una separaciÃ³n superior de agua y contaminantes."
    },
    {
        id: "P355",
        name: "FILTRO COMBUST.OM457LA ELECT. 1938",
        brand: "Mercedes Benz",
        code: "5410900151 / 4570900051 / E500KP02D36",
        originalCode: "5410900151 / 4570900051 / E500KP02D36",
        image: "img/products/om457/filtro-combustible-1938-om457.jpg",
        description: "Elemento filtrante de combustible para motores Mercedes Benz OM457LA electrÃ³nicos, aplicado en camiones 1938. CÃ³digos originales: 5410900151, 4570900051. Referencia Hengst E500KP02D36. Rubro: Filtro Combustible. Fabricado con papel filtrante de alta eficiencia para garantizar la limpieza del combustible en sistemas de inyecciÃ³n de alta presiÃ³n."
    },
    {
        id: "P356",
        name: "TAPA NEGRA F/GASOIL ELEC.OM457/904/6",
        brand: "Mercedes Benz",
        code: "0000924708 / 0000925208",
        originalCode: "0000924708 / 0000925208",
        image: "img/products/om457/tapa-filtro-gasoil-negra-om457.jpg",
        description: "Tapa para el porta filtro de combustible (gasoil) de motores Mercedes Benz electrÃ³nicos OM457, OM904 y OM906. CÃ³digos originales 0000924708 y 0000925208. Rubro: Filtro Combustible. Fabricada en material termoplÃ¡stico de alta resistencia, diseÃ±ada para soportar la presiÃ³n del sistema y facilitar el cambio del elemento filtrante."
    },
    {
        id: "P357",
        name: "BOMBA ALIMENTADORA OM457",
        brand: "Mercedes Benz",
        code: "4570910601 / 4570910401",
        originalCode: "4570910601 / 4570910401",
        image: "img/products/om457/bomba-alimentadora-om457.jpg",
        description: "Bomba alimentadora de combustible para motores Mercedes Benz OM457. CÃ³digos originales 4570910601 y 4570910401. Rubro: InyecciÃ³n. Bomba de tipo piÃ±Ã³n de alta precisiÃ³n, encargada de transferir el combustible desde el tanque hacia la bomba de alta presiÃ³n o inyectores, asegurando un flujo constante y fiable."
    },
    {
        id: "P358",
        name: "CAÃ‘O INYECTOR OM457 (ELECT.) 1634/1938",
        brand: "Mercedes Benz",
        code: "4570701733 / 4570700933",
        originalCode: "4570701733 / 4570700933",
        image: "img/products/om457/cano-inyector-om457-elec.jpg",
        description: "CaÃ±o de inyecciÃ³n de combustible para motores Mercedes Benz electrÃ³nicos OM457, aplicado en camiones 1634 y 1938. CÃ³digos originales 4570701733 y 4570700933. Rubro: InyecciÃ³n. Fabricado en acero de alta presiÃ³n con conexiones roscadas rectificadas para garantizar un suministro de combustible estanco y preciso hacia el inyector."
    },
    {
        id: "P359",
        name: "BULON TAPA CILINDRO 15X229 (x24) OM457",
        brand: "Mercedes Benz",
        code: "4579900201 / 4579900501",
        originalCode: "4579900201 / 4579900501",
        image: "img/products/om457/bulon-tapa-cilindro-om457.jpg",
        description: "BulÃ³n de tapa de cilindro para motores Mercedes Benz OM457. Medida 15x229mm. El juego completo para el motor requiere 24 unidades. CÃ³digos originales 4579900201 y 4579900501. Rubro: TAPA CILINDRO Y VÃLVULA. Fabricado en acero de alta resistencia para garantizar el torque y sellado adecuado de la culata."
    },
    {
        id: "P360",
        name: "CORONA ARRANQUE 160D. 12AGUJ. 430MM OM457/OM501/500/1938 FRONTAL",
        brand: "Mercedes Benz",
        code: "4030320305",
        originalCode: "4030320305",
        image: "img/products/om457/corona-arranque-160d-om457.jpg",
        description: "Corona de arranque (volante motor) de 160 dientes y 12 agujeros para motores Mercedes Benz OM457 y OM501. DiÃ¡metro 430mm. AplicaciÃ³n en camiones 1938 Frontal y chasis de Ã³mnibus O-500. CÃ³digo original 4030320305. Rubro: PIEZAS MOTRICES. Fabricada en aleaciÃ³n de alta dureza para soportar el impacto y desgaste del bendix de arranque."
    },
    {
        id: "P361",
        name: "POLEA CIGÃœEÃ‘AL CHAPA 9PK OM457",
        brand: "Mercedes Benz",
        code: "4570351212",
        originalCode: "4570351212",
        image: "img/products/om457/polea-ciguenal-chapa-om457.jpg",
        description: "Polea de cigÃ¼eÃ±al fabricada en chapa para motores Mercedes Benz OM457. Perfil de 9 canales (9PK). CÃ³digo original 4570351212. Rubro: PIEZAS MOTRICES. DiseÃ±ada para un guiado preciso de la correa de accesorios, garantizando el correcto funcionamiento del alternador, bomba de agua y demÃ¡s perifÃ©ricos."
    },
    {
        id: "P362",
        name: "TAPA ENTRADA ACEITE FRONTAL 1718/OM457 (ROSCADA)",
        brand: "Mercedes Benz",
        code: "3520100468",
        originalCode: "3520100468",
        image: "img/products/om457/tapa-aceite-roscada-om457.jpg",
        description: "Tapa roscada de entrada de aceite frontal para motores Mercedes Benz OM457 y chasis 1718. CÃ³digo original 3520100468. Rubro: BLOCK DE MOTOR Y CÃRTER. Fabricada en material plÃ¡stico de alta resistencia al calor y aceites, asegurando un cierre hermÃ©tico para evitar fugas y contaminaciÃ³n del lubricante."
    },
    {
        id: "P363",
        name: "TAPA SUPERIOR VALVULA OM457",
        brand: "Mercedes Benz",
        code: "4570100930",
        originalCode: "4570100930",
        image: "img/products/om457/tapa-superior-valvula-om457.jpg",
        description: "Tapa superior de vÃ¡lvula para motores Mercedes Benz OM457. CÃ³digo original 4570100930. Rubro: TAPA CILINDRO Y VÃLVULA. Fabricada en material de alta resistencia tÃ©rmica para proteger los componentes del tren de vÃ¡lvulas y asegurar un sellado estanco en la culata."
    },
    {
        id: "P364",
        name: "ORING CAMISA PORTA INYECTOR INFERIOR OM904/906/OM457",
        brand: "Mercedes Benz",
        code: "5419970745 / 5419970345",
        originalCode: "5419970745 / 5419970345",
        image: "img/products/om457/oring-camisa-porta-inyector-inferior.jpg",
        description: "O'ring inferior para la camisa porta inyector de motores Mercedes Benz OM904, OM906 y OM457. CÃ³digos originales 5419970745 y 5419970345. Rubro: TAPA CILINDRO Y VÃLVULA. Fabricado en material elastÃ³mero de alta resistencia tÃ©rmica para asegurar un sellado estanco contra el refrigerante y evitar fugas hacia la cÃ¡mara de combustiÃ³n."
    },
    {
        id: "P365",
        name: "CAÃ‘O GUIA VARILLA NIVEL ACEITE CORTO 1620/OM457",
        brand: "Mercedes Benz",
        code: "3760108566",
        originalCode: "3760108566",
        image: "img/products/om457/cano-guia-varilla-corto-om457.jpg",
        description: "CaÃ±o guÃ­a corto para la varilla de nivel de aceite, compatible con camiones Mercedes Benz 1620 y motores OM457. CÃ³digo original 3760108566. Rubro: BLOCK DE MOTOR Y CÃRTER. Fabricado en material metÃ¡lico resistente para asegurar la correcta inserciÃ³n y protecciÃ³n de la varilla de mediciÃ³n."
    },
    {
        id: "P366",
        name: "SENSOR OXIGENO/TEMPERATURA GASES ESCAPE OM906/924/926",
        brand: "Mercedes Benz",
        code: "0061530528",
        originalCode: "0061530528",
        image: "img/products/om906/sensor-oxigeno-om906.jpg",
        description: "Sensor de oxÃ­geno y temperatura de gases de escape para motores Mercedes Benz OM906, OM924 y OM926. CÃ³digo original 0061530528. Rubro: INSTRUMENTAL. Componente de alta precisiÃ³n esencial para el monitoreo y control de emisiones, asegurando un funcionamiento eficiente del sistema de escape y la gestiÃ³n del motor."
    },
    {
        id: "P367",
        name: "MANGUERA FILTRO AIRE O500/1725/1726 OM906/926",
        brand: "Mercedes Benz",
        code: "3825200001",
        originalCode: "3825200001",
        image: "img/products/om906/manguera-filtro-aire-om906.jpg",
        description: "Manguera de filtro de aire para Mercedes Benz O500 y camiones 1725/1726 con motores OM906 y OM926. CÃ³digo original 3825200001. Rubro: ADMISIÃ“N. Fabricada en caucho reforzado de alta calidad para asegurar un flujo de aire Ã³ptimo y estanco hacia el motor, resistiendo vibraciones y temperaturas de operaciÃ³n."
    },
    {
        id: "P368",
        name: "TAPA SUPERIOR VALVULA PLASTICA OM906/926",
        brand: "Mercedes Benz",
        code: "9060101030",
        originalCode: "9060101030",
        image: "img/products/om906/tapa-superior-valvula-plastica-om906.jpg",
        description: "Tapa superior de vÃ¡lvula fabricada en material plÃ¡stico de alta resistencia para motores Mercedes Benz OM906 y OM926. CÃ³digo original 9060101030. Rubro: TAPA CILINDRO Y VÃLVULA. DiseÃ±ada para proteger los componentes del tren de vÃ¡lvulas y asegurar un sellado estanco en la culata, resistiendo las altas temperaturas del motor."
    },
    {
        id: "P369",
        name: "RIGIDO DE COMPRESOR ULTIMO TRAMO O500 OM906/926",
        brand: "Mercedes Benz",
        code: "3824208831 / 3824204735",
        originalCode: "3824208831 / 3824204735",
        image: "img/products/om906/rigido-compresor-o500-om906.jpg",
        description: "RÃ­gido de compresor Ãºltimo tramo para chasis de Ã³mnibus Mercedes Benz O500 con motores OM906 y OM926. CÃ³digos originales 3824208831 y 3824204735. Rubro: COMPRESOR. Fabricado en material de alta resistencia para asegurar la conducciÃ³n eficiente del aire comprimido desde el compresor hacia el sistema neumÃ¡tico, diseÃ±ado para soportar altas presiones y vibraciones."
    },
    {
        id: "P370",
        name: "POLEA CIGÃœEÃ‘AL OM906/926",
        brand: "Mercedes Benz",
        code: "9060350800",
        originalCode: "9060350800",
        image: "img/products/om906/polea-ciguenal-om906.jpg",
        description: "Polea de cigÃ¼eÃ±al para motores Mercedes Benz OM906 y OM926. CÃ³digo original 9060350800. Rubro: PIEZAS MOTRICES. Fabricada con materiales de alta resistencia para un guiado preciso de la correa de accesorios, garantizando el correcto funcionamiento del alternador, bomba de agua y demÃ¡s perifÃ©ricos del motor."
    },
    {
        id: "P371",
        name: "MANGUERA D/HID BOMBA AL DEPOSITO OF1721/1722 OM906",
        brand: "Mercedes Benz",
        code: "3844661181",
        originalCode: "3844661181",
        image: "img/products/om906/manguera-dhid-bomba-deposito-om906.jpg",
        description: "Manguera de direcciÃ³n hidrÃ¡ulica que conecta la bomba al depÃ³sito para chasis Mercedes Benz OF1721 y OF1722 con motor OM906. CÃ³digo original 3844661181. Rubro: DIRECCIÃ“N. Fabricada en caucho de alta resistencia a la presiÃ³n y temperatura del fluido hidrÃ¡ulico, diseÃ±ada para asegurar un retorno eficiente del aceite al depÃ³sito del sistema de direcciÃ³n."
    },
    {
        id: "P372",
        name: "CEBADOR CON SOP 457/OM906 LA/OM926/O500",
        brand: "Mercedes Benz",
        code: "0000908550 / 0000909250 / 0440011021",
        originalCode: "0000908550 / 0000909250 / 0440011021",
        image: "img/products/om906/cebador-con-sop-om906.jpg",
        description: "Cebador manual con soporte para sistema de inyecciÃ³n de combustible. Compatible con motores Mercedes Benz OM457, OM906 LA, OM926 y chasis O500. CÃ³digos originales 0000908550, 0000909250 y 0440011021. Rubro: INYECCIÃ“N. Componente esencial para purgar el aire del sistema de combustible y facilitar el arranque del motor, fabricado con materiales resistentes al gasoil."
    },
    {
        id: "P373",
        name: "JGO.JUNTA COMPLETO 85mm OM906/926 BICILINDRICO TAPA LARGA",
        brand: "Mercedes Benz",
        code: "9115539232 / 9125101404 / 8975700084 / 9125109352",
        originalCode: "9115539232 / 9125101404 / 8975700084 / 9125109352",
        image: "img/products/om906/jgo-junta-compresor-85mm-om906.jpg",
        description: "Juego de juntas completo para compresor bicilÃ­ndrico de 85mm con tapa larga, compatible con motores Mercedes Benz OM906 y OM926. CÃ³digos originales 9115539232, 9125101404, 8975700084 y 9125109352. Rubro: COMPRESOR. Incluye todas las juntas necesarias para el sellado perfecto del compresor de aire, fabricadas con materiales de alta calidad resistentes a altas temperaturas y presiÃ³n."
    },
    {
        id: "P374",
        name: "AMORTIGUADOR DELANTERO OM906/926 O500",
        brand: "Mercedes Benz",
        code: "3823230100 / 6283230100 / 6283230400",
        originalCode: "3823230100 / 6283230100 / 6283230400",
        image: "img/products/om906/amortiguador-delantero-o500-om906.jpg",
        description: "Amortiguador delantero para chasis de Ã³mnibus Mercedes Benz O500 con motores OM906 y OM926. CÃ³digos originales 3823230100, 6283230100 y 6283230400. Rubro: ELÃSTICO-SUSPENSIÃ“N-AMORT. Fabricado con tecnologÃ­a de alta calidad para garantizar una conducciÃ³n suave y segura, diseÃ±ado para soportar las exigencias del transporte de pasajeros."
    },
    {
        id: "P375",
        name: "CUBO ACOPLE VENTILADOR OHL1618 OM904 OM906 O500",
        brand: "Mercedes Benz",
        code: "4752057604",
        originalCode: "4752057604",
        image: "img/products/om906/cubo-acople-ventilador-om906.jpg",
        description: "Cubo de acople para ventilador compatible con chasis Mercedes Benz OHL1618, O500 y motores OM904 y OM906. CÃ³digo original 4752057604. Rubro: REFRIGERACIÃ“N. Fabricado en fundiciÃ³n de alta resistencia para transmitir el movimiento del motor al ventilador de refrigeraciÃ³n, asegurando un enfriamiento eficiente del sistema."
    },
    {
        id: "P376",
        name: "CAÃ‘O TEE UNION DE TUBOS DE AGUA O500/OM904/924/OM906/926",
        brand: "Mercedes Benz",
        code: "3685000094",
        originalCode: "3685000094",
        image: "img/products/om906/cano-tee-union-tubos-agua-om906.jpg",
        description: "CaÃ±o en forma de T para uniÃ³n de tubos de agua del sistema de refrigeraciÃ³n. Compatible con chasis Mercedes Benz O500 y motores OM904, OM924, OM906 y OM926. CÃ³digo original 3685000094. Rubro: RADIADOR. Fabricado en material plÃ¡stico de alta resistencia tÃ©rmica para asegurar conexiones estancas en el circuito de refrigeraciÃ³n."
    },
    {
        id: "P377",
        name: "ARBOL LEVAS OM906 C/ENGRANAJE",
        brand: "Mercedes Benz",
        code: "9060501401",
        originalCode: "9060501401",
        image: "img/products/om906/arbol-levas-om906.jpg",
        description: "Ãrbol de levas completo con engranaje para motores Mercedes Benz OM906. CÃ³digo original 9060501401. Rubro: DISTRIBUCIÃ“N. Componente crÃ­tico del sistema de distribuciÃ³n fabricado con acero de alta resistencia, diseÃ±ado para controlar la apertura y cierre de las vÃ¡lvulas con precisiÃ³n, garantizando el rendimiento Ã³ptimo del motor."
    },
    {
        id: "P378",
        name: "CAÃ‘O LLENADO ACEITE MOTOR OM906 O500",
        brand: "Mercedes Benz",
        code: "9060100182",
        originalCode: "9060100182",
        image: "img/products/om906/cano-llenado-aceite-om906.jpg",
        description: "CaÃ±o de llenado de aceite para motores Mercedes Benz OM906 en chasis O500. CÃ³digo original 9060100182. Rubro: BLOCK DE MOTOR Y CÃRTER. Fabricado en caucho de alta resistencia tÃ©rmica para asegurar un llenado seguro y estanco del aceite lubricante, diseÃ±ado para soportar las temperaturas del vano motor."
    },
    {
        id: "P379",
        name: "MANGUERA RETORNO DESCARGA ACEITE TURBO OM906",
        brand: "Mercedes Benz",
        code: "9069970382",
        originalCode: "9069970382",
        image: "img/products/om906/manguera-retorno-aceite-turbo-om906.jpg",
        description: "Manguera de retorno de descarga de aceite del turbocompresor para motores Mercedes Benz OM906. CÃ³digo original 9069970382. Rubro: TURBO. Fabricada en caucho de alta resistencia tÃ©rmica y al aceite, diseÃ±ada para asegurar el retorno eficiente del lubricante desde el turbo hacia el cÃ¡rter del motor."
    },
    {
        id: "P380",
        name: "JGO. JUNTA SUPERIOR MOTOR OM906",
        brand: "Mercedes Benz",
        code: "9060101721",
        originalCode: "9060101721",
        image: "img/products/om906/jgo-junta-superior-motor-om906.jpg",
        description: "Juego de juntas superior completo para motores Mercedes Benz OM906. CÃ³digo original 9060101721. Rubro: JUNTAS. Incluye junta de tapa de cilindros, juntas de mÃºltiple de admisiÃ³n y escape, y todas las juntas necesarias para el sellado superior del motor. Fabricado con materiales de alta calidad resistentes a altas temperaturas y presiÃ³n."
    },
    {
        id: "P381",
        name: "TURBO BORGWARNER K27 EURO2 OM906/O500 17288 MOTOR 906.977 HASTA 906.993",
        brand: "Mercedes Benz",
        code: "9060963199",
        originalCode: "9060963199",
        image: "img/products/om906/turbo-borgwarner-k27-om906.jpg",
        description: "Turbocompresor BorgWarner K27 EURO2 para motores Mercedes Benz OM906 en chasis O500, modelo 17288. Compatible con motores desde 906.977 hasta 906.993. CÃ³digo original 9060963199. Rubro: TURBO. Turbocompresor de alta performance diseÃ±ado para aumentar la potencia y eficiencia del motor, fabricado bajo estÃ¡ndares OEM para garantizar durabilidad y rendimiento Ã³ptimo."
    },
    {
        id: "P382",
        name: "FLEXIBLE COMBUSTIBLE OF1417/O500/OM906/LA-924",
        brand: "Mercedes Benz",
        code: "6934707064",
        originalCode: "6934707064",
        image: "img/products/om906/flexible-combustible-om906.jpg",
        description: "Flexible de combustible para chasis Mercedes Benz OF1417 y O500 con motores OM906 LA y OM924. CÃ³digo original 6934707064. Rubro: FLEXIBLES Y RÃGIDOS. Fabricado en caucho de alta resistencia al gasoil con refuerzos internos, diseÃ±ado para asegurar una conducciÃ³n segura y estanca del combustible desde el tanque hacia el sistema de inyecciÃ³n."
    },
    {
        id: "P383",
        name: "CAÃ‘O COMPRESOR (SERPENTINA) APU OM906/O500",
        brand: "Mercedes Benz",
        code: "3824201828 / 3824208531",
        originalCode: "3824201828 / 3824208531",
        image: "img/products/om906/cano-compresor-serpentina-om906.jpg",
        description: "CaÃ±o compresor tipo serpentina para APU (Auxiliary Power Unit) de chasis Mercedes Benz O500 con motor OM906. CÃ³digos originales 3824201828 y 3824208531. Rubro: COMPRESOR. Fabricado en acero con recubrimiento anticorrosivo, diseÃ±ado para conducir el aire comprimido de manera eficiente en el sistema neumÃ¡tico del vehÃ­culo."
    },
    {
        id: "P384",
        name: "CAÃ‘O COMPRESOR O500/ OM906",
        brand: "Mercedes Benz",
        code: "3824200128 / 3824205732 / 3824208934",
        originalCode: "3824200128 / 3824205732 / 3824208934",
        image: "img/products/om906/cano-compresor-o500-om906.jpg",
        description: "CaÃ±o de compresor para chasis Mercedes Benz O500 con motor OM906. CÃ³digos originales 3824200128, 3824205732 y 3824208934. Rubro: COMPRESOR. Fabricado en material de alta resistencia para soportar la presiÃ³n y temperatura del sistema de aire comprimido, asegurando una conexiÃ³n fiable y duradera."
    },
    {
        id: "P385",
        name: "FILTRO ACEITE OM906/924/926 HU945/2 L 1624/1933S MANN",
        brand: "Mercedes Benz",
        code: "0001801709",
        originalCode: "0001801709",
        image: "img/products/om906/filtro-aceite-hu945-2l-om906.jpg",
        description: "Filtro de aceite MANN HU945/2 L para motores Mercedes Benz OM906, OM924 y OM926, compatible con modelos 1624 y 1933S. Código original 0001801709. Rubro: LUBRICACIÓN. Filtro de alta eficiencia diseñado para garantizar la limpieza del aceite lubricante, protegiendo los componentes internos del motor contra el desgaste."
    },
    {
        id: "P386",
        name: "CAÑO RAD.O500 OM906/926 REFR. CAJA A MOTOR",
        brand: "Mercedes Benz",
        code: "3825015682 / 6645018882",
        originalCode: "3825015682 / 6645018882",
        image: "img/products/om906/cano-radiador-o500-om906-caja-a-motor.jpg",
        description: "Caño de radiador para chasis Mercedes Benz O500 con motores OM906 y OM926, utilizado para la refrigeración de la caja al motor. Códigos originales 3825015682 y 6645018882. Rubro: RADIADOR. Fabricado con materiales resistentes al calor y la presión, garantizando un flujo óptimo de refrigerante en el sistema."
    },
    {
        id: "P387",
        name: "VARILLA NIVEL ACEITE ATEGO/AXOR OM906/926 17-20",
        brand: "Mercedes Benz",
        code: "9260105072",
        originalCode: "9260105072",
        image: "img/products/om906/varilla-aceite-atego-axor-om906.jpg",
        description: "Varilla de nivel de aceite para camiones Mercedes Benz Atego y Axor con motores OM906 y OM926, modelos 17-20. Código original 9260105072. Rubro: BLOCK DE MOTOR Y CÁRTER. Fabricada con materiales de alta calidad para una medición precisa y resistencia a la corrosión."
    },
    {
        id: "P388",
        name: "MULTIPLE ADMISION PLASTICO OM906/926",
        brand: "Mercedes Benz",
        code: "9060901654 / 9060901642",
        originalCode: "9060901654 / 9060901642",
        image: "img/products/om906/multiple-admision-plastico-om906.jpg",
        description: "Múltiple de admisión fabricado en material plástico de alta resistencia para motores Mercedes Benz OM906 y OM926. Códigos originales 9060901654 y 9060901642. Rubro: 140-MÚLTIPLES(ADMIS. Y ESCAPE). Diseñado para optimizar el flujo de aire hacia el motor, garantizando durabilidad y ligereza."
    },
    {
        id: "P389",
        name: "TAPA MULTIPLE ADMISION ALUMINIO OM906/926",
        brand: "Mercedes Benz",
        code: "9060980617",
        originalCode: "9060980617",
        image: "img/products/om906/tapa-multiple-admision-om906.jpg",
        description: "Tapa de múltiple de admisión fabricada en aluminio de alta calidad para motores Mercedes Benz OM906 y OM926. Código original 9060980617. Rubro: MÚLTIPLES(ADMIS. Y ESCAPE). Componente diseñado para un sellado perfecto y resistencia a la corrosión, garantizando la integridad del sistema de admisión."
    },
    {
        id: "P390",
        name: "CAÑO ASPIRACION COMPRESOR ATEGO OM906",
        brand: "Mercedes Benz",
        code: "9061301357",
        originalCode: "9061301357",
        image: "img/products/om906/cano-aspiracion-compresor-atego-om906.jpg",
        description: "Caño de aspiración para el compresor de camiones Mercedes Benz Atego con motor OM906. Código original 9061301357. Rubro: COMPRESOR. Manguera corrugada de alta resistencia diseñada para el sistema de admisión del compresor."
    },
    {
        id: "P391",
        name: "CAÑO COMPRESOR (SERPENTINA) A APU OM906/O500",
        brand: "Mercedes Benz",
        code: "3824201036 / 3824200736",
        originalCode: "3824201036 / 3824200736",
        image: "img/products/om906/cano-compresor-serpentina-2-om906.jpg",
        description: "Caño de compresor tipo serpentina para APU (Auxiliary Power Unit) de chasis Mercedes Benz O500 con motor OM906. Códigos originales 3824201036 y 3824200736. Rubro: COMPRESOR. Tubo de acero en espiral diseñado para la refrigeración y conducción eficiente del aire comprimido."
    },
    {
        id: "P392",
        name: "BUJE (TUBO DISTANCIADOR)PALANCA ROD.TENSOR O500/OH1618/OM906",
        brand: "Mercedes Benz",
        code: "6645527253",
        originalCode: "6645527253",
        image: "img/products/om906/buje-distanciador-tensor-om906.jpg",
        description: "Buje espaciador o tubo distanciador para la palanca del rodillo tensor, compatible con chasis Mercedes Benz O500, OH1618 y motores OM906. Código original 6645527253. Rubro: REFRIGERACIÓN. Componente esencial para el correcto alineamiento y funcionamiento del sistema de correas."
    },
    {
        id: "P393",
        name: "CAÑO COMPRESOR (SERPENTINA) APU OM906/O500",
        brand: "Mercedes Benz",
        code: "3824204828 / 3824207429",
        originalCode: "3824204828 / 3824207429",
        image: "img/products/om906/cano-compresor-serpentina-3-om906.jpg",
        description: "Caño de compresor tipo serpentina para APU (Auxiliary Power Unit) de chasis Mercedes Benz O500 con motor OM906. Códigos originales 3824204828 y 3824207429. Rubro: COMPRESOR. Fabricado para soportar el flujo constante de aire comprimido en condiciones de alto rendimiento."
    },
    {
        id: "P394",
        name: "ABRAZADERA ESCAPE 90MM (3 1/2") OM906",
        brand: "Mercedes Benz",
        code: "6209970590",
        originalCode: "6209970590",
        image: "img/products/om906/abrazadera-escape-90mm-om906.jpg",
        description: "Abrazadera de escape de 90mm (3 1/2 pulgadas) para motores Mercedes Benz OM906. Código original 6209970590. Rubro: 490-ESCAPE. Fabricada en material de alta resistencia para un sellado seguro y duradero en el sistema de escape."
    },
    {
        id: "P395",
        name: "EJE TUBULAR FILTRO ACEITE OM906/926",
        brand: "Mercedes Benz",
        code: "9061840066",
        originalCode: "9061840066",
        image: "img/products/om906/eje-tubular-filtro-aceite-om906.jpg",
        description: "Eje tubular para el filtro de aceite de motores Mercedes Benz OM906 and OM926. Código original 9061840066. Rubro: LUBRICACIÓN. Componente plástico de alta calidad diseñado para el correcto flujo y soporte del elemento filtrante de aceite."
    },
    {
        id: "P396",
        name: "CAÑO RAD.OM906 2423 A BOMBA AGUA INFERIOR",
        brand: "Mercedes Benz",
        code: "6935019282",
        originalCode: "6935019282",
        image: "img/products/om906/cano-radiador-om906-2423-bomba-agua.jpg",
        description: "Caño de radiador para camiones Mercedes Benz 2423 con motor OM906, conexión a bomba de agua inferior. Código original 6935019282. Rubro: RADIADOR. Fabricado con materiales resistentes a la presión y temperatura para un flujo óptimo de refrigerante."
    },
    {
        id: "P397",
        name: "CAÑO COMPRESOR 1624 OM906 SALIDA COMPRESOR",
        brand: "Mercedes Benz",
        code: "6944204426 / 6944200326",
        originalCode: "6944204426 / 6944200326",
        image: "img/products/om906/cano-compresor-1624-om906-salida.jpg",
        description: "Caño de salida de compresor para camiones Mercedes Benz 1624 con motor OM906. Códigos originales 6944204426 y 6944200326. Rubro: COMPRESOR. Tubo rígido de alta precisión diseñado para la descarga segura de aire comprimido desde el compresor."
    },
    {
        id: "P398",
        name: "JUNTA RADIADOR ACEITE OM906/926",
        brand: "Mercedes Benz",
        code: "9061880280 / 9261880080",
        originalCode: "9061880280 / 9261880080",
        image: "img/products/om906/junta-radiador-aceite-om906.jpg",
        description: "Junta para el radiador de aceite de motores Mercedes Benz OM906 y OM926. Códigos originales 9061880280 y 9261880080. Rubro: JUNTAS. Fabricada en material de alta calidad para garantizar un sellado perfecto y prevenir fugas de aceite en el sistema de lubricación."
    },
    {
        id: "P399",
        name: "SOPORTE MOTOR TRASERO OM906 AXOR 1933",
        brand: "Mercedes Benz",
        code: "9402401118 / 9402401218",
        originalCode: "9402401118 / 9402401218",
        image: "img/products/om906/soporte-motor-trasero-axor-om906.jpg",
        description: "Soporte de motor trasero para camiones Mercedes Benz Axor 1933 con motor OM906. Códigos originales 9402401118 y 9402401218. Rubro: SUSPENSIÓN DE MOTOR. Fabricado con materiales de alta resistencia para absorber vibraciones y garantizar una sujeción segura del motor."
    },
    {
        id: "P400",
        name: "CAÑO RETORNO ACEITE OM906",
        brand: "Mercedes Benz",
        code: "9061871801",
        originalCode: "9061871801",
        image: "img/products/om906/cano-retorno-aceite-om906.jpg",
        description: "Caño de retorno de aceite para motor Mercedes Benz OM906. Código original 9061871801. Rubro: LUBRICACIÓN. Conducto metálico diseñado para asegurar el retorno eficiente del aceite al cárter, fabricado con materiales resistentes a la corrosión y alta temperatura."
    },
    {
        id: "P401",
        name: "MANGUERA DEPOSITO COMPENSACION ATEGO 1725 OM906",
        brand: "Mercedes Benz",
        code: "9585010982",
        originalCode: "9585010982",
        image: "img/products/om906/manguera-deposito-compensacion-atego-om906.jpg",
        description: "Manguera para el depósito de compensación de camiones Mercedes Benz Atego 1725 con motor OM906. Código original 9585010982. Rubro: RADIADOR. Fabricada con materiales de alta durabilidad para resistir la presión y temperatura del sistema de enfriamiento."
    },
    {
        id: "P402",
        name: "CAÑO RAD.1624 COMPLEMENTO DE (19440) OM906",
        brand: "Mercedes Benz",
        code: "6955011882",
        originalCode: "6955011882",
        image: "img/products/om906/cano-radiador-1624-complemento-om906.jpg",
        description: "Caño de radiador complementario para camiones Mercedes Benz 1624 con motor OM906. Código original 6955011882. Rubro: RADIADOR. Tubo rígido diseñado para complementar el sistema de refrigeración principal, asegurando un flujo de refrigerante constante y fiable."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
