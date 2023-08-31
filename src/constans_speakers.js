const speakers = [
  {
    id: 1,
    conference: 'Hacia un transporte eléctrico y de bajas emisiones en México',
    name: 'Cynthia Chávez Ríos',
    company: 'Municipio de León',
    rol: 'Directora General de Movilidad',
    avatar: '/foro-electromovilidad/speakers/CynthiaChavez.webp',
    sketch: 'Economista por la Universidad de las Américas de Puebla y maestra en Administración por la Benemérita Universidad Autónoma de Puebla. Más de 10 años de experiencia en planeación e implementación de nuevos proyectos, principalmente de transporte. Fungió como asesora de Programación y Presupuestos de la Secretaría de Finanzas y Administración de Puebla, con la estructuración de fideicomisos públicos y privados, así como proyecciones presupuestales. Estuvo a cargo de la Dirección de Transporte Masivo en Carreteras de Cuotas, con la supervisión y regulación de operación de transporte BRT en Puebla. Además, se desempeñó como titular de la comisión de Transición de la Secretaría de Infraestructura y Transporte de Puebla, con la implementación y regulación del tren Puebla-Cholula. Fue Directora de Planeación de la Secretaria de Transportes de Puebla y Operadora Estatal de Aeropuertos.Actualmente funge como Directora General de la Dirección de Movilidad de León, Guanajuato.'
  },
  {
    id: 2,
    conference: 'Hacia un transporte eléctrico y de bajas emisiones en México',
    name: 'Nicolás Rosales Pallares',
    company: 'Asociación Mexicana de Transporte y Movilidad',
    rol: 'Presidente',
    avatar: '/foro-electromovilidad/speakers/NicolasRosales.webp',
    sketch: 'Licenciado en Derecho por la Universidad La Salle. Socio del Corredor Insurgentes S.A de C.V., primera empresa operadora de BRT en la Ciudad de México, con experiencia de más de 39 años en la operación de transporte público de pasajeros. Desde el año 2011 es responsable de la formación y coordinación del programa de actividades interinstitucionales y alianzas estratégicas que permitan el posicionamiento de la Asociación y responsable de la gestión con socios estratégicos enfocados en resolver las distintas problemáticas de los centros urbanos y sistemas de transporte. Fue miembro del Consejo Consultivo de INTERTRAFFIC y presidente de la Comisión de Movilidad de COPARMEX CDMX (2020-2022). A partir de septiembre del 2020 asumió la presidencia de la Asociación Mexicana de Transporte y Movilidad (AMTM) y es Vicepresidente de la Unión Internacional de Transporte Público, División América Latina (UITP).'
  },
  {
    id: 3,
    conference: 'Hacia un transporte eléctrico y de bajas emisiones en México',
    name: 'Osvaldo Belmont Reyes',
    company: 'Asociación Mexicana de la Industria automotriz (AMIA)',
    rol: 'Director Técnico',
    avatar: '/foro-electromovilidad/speakers/OsvaldoBelmont.webp',
    resume: 'Es ingeniero químico industrial egresado del Instituto Politécnico Nacional.  Es director técnico en la Asociación Mexicana de la Industria Automotriz (AMIA) con 10 años de experiencia en la industria automotriz, responsable de la agenda de temas técnicos automotrices, de electromovilidad y sustentabilidad. Ha sido funcionario público en la SEMARNAT en temas de residuos peligrosos y sustancias químicas. También ha sido consultor para la USAID en proyectos de prevención de la contaminación.  Cuenta con diversos diplomados en ingeniería de proyectos, desarrollo sostenible, infraestructura de la calidad, entre otros.'
  },
  {
    id: 4,
    conference: 'Hacia un transporte eléctrico y de bajas emisiones en México',
    name: 'Alejandro Saniger Alba',
    company: 'Robert Bosch México',
    rol: 'Gerente de Movilidad Urbana',
    avatar: '/foro-electromovilidad/speakers/AlejandroSaniger.webp',
    sketch: 'Actualmente se desempeña como Gerente de Movilidad Urbana en Robert Bosch México, especializándose en temas de nueva movilidad (movilidad eléctrica, como servicio, autónoma), sostenibilidad, simulación y modelación de transporte, y estimación de emisiones vehiculares.     Su experiencia laboral incluye cargos como Gerente Técnico en PTV Group para América Latina (2012 - 2018), empresa internacional basada en Karlsruhe, Alemania, especializada en desarrollo de softwares para modelación y simulación transporte; y anteriormente consultor en transporte y movilidad entre 2005 y 2012. Es Ingeniero Civil -UNAM- (2002), con una Maestría en Ingeniería y Planeación de Transporte cursada en University of Leeds, en Reino Unido (2004). Paralelamente, desde 2014 ha impartido las clases de ‘Ingeniería de Tránsito’ y ‘Transporte Sustentable y Tecnología’.'
  },
  {
    id: 5,
    conference: 'Equidad e innovación: el rol vital de la mujer en la industria',
    name: 'Isabel von Griesheim',
    company: 'GIZ México',
    rol: 'Directora de Proyecto',
    avatar: '/foro-electromovilidad/speakers/IsabelvonGriesheim.webp',
    sketch: 'Actual Directora de TranSIT, proyecto de la Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH, la Cooperación Técnica Alemana, para promover un transporte público inteligente, inclusivo y amigable con el clima en México. Ha trabajado para esta organización por diez años en diversas temáticas y países. Entre 2019 y 2021, fue Directora regional de dos proyectos de energía en Centroamérica, enfocándose en el fomento de la electromovilidad. En 2015, trabajó como Asesora para proyectos globales sobre mitigación del cambio climático y financiamiento climático, centrándose en el comercio de emisiones. Inició sus pasos en la GIZ como Gerente de Proyecto para la cartera de clima y energía en Bruselas, Bélgica. Anteriormente, trabajó en el Parlamento Europeo y en la Fundación Konrad Adenauer. Tiene una maestría en Economía Política Internacional de la Escuela de Economía de Londres (LSE, por sus siglas en inglés) y una maestría en Gestión Pública del Instituto de Estudios Políticos de París (Sciences Po Paris).'
  },
  {
    id: 6,
    conference: 'Mejores prácticas de inclusión de mujeres en las empresas',
    name: 'Josefina Lozano Soto',
    company: 'GIZ México',
    rol: 'Asesora Técnica',
    avatar: '/foro-electromovilidad/speakers/JosefinaLozano.webp',
    resume: 'La promoción de la equidad de género dentro de las empresas cada vez va adquiriendo una mayor relevancia en México. Sin embargo, a pesar de los esfuerzos que se han hecho para atraer y retener el talento de las mujeres, siguen estando subrepresentadas al interior de las organizaciones, especialmente en los puestos de mayor nivel jerárquico. Para hacer frente a esta realidad y brindar propuestas de acción, la Fundación Konrad Adenauer (KAS) México, en colaboración con el Instituto Mexicano para la Competitividad (IMCO), presenta las mejores prácticas y políticas corporativas implementadas por empresas mexicanas para sumar e incluir a más mujeres en toda la estructura organizacional.',
    sketch: 'Es asesora técnica del Proyecto Global Infraestructura de la Calidad (GPQI) comisionado por el Ministerio Federal de Economía y Protección del Clima (BMWK) de Alemania para facilitar el Diálogo Mexicano-Alemán en Infraestructura de la Calidad. Desde 2020 colabora en la Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH, la Cooperación Técnica Alemana, siendo responsable de los temas de movilidad. Es internacionalista por Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM).'
  },
  {
    id: 7,
    conference: '',
    name: 'José Guillermo Zozaya Délano',
    company: 'Mexicana de la Industria Automotriz',
    rol: 'Presidente Ejecutivo de la Asociación',
    avatar: '/foro-electromovilidad/speakers/JoseGuillermo.webp',
    sketch: 'El Dr. Zozaya es Presidente Ejecutivo de la Asociación Mexicana de la Industria Automotriz a partir de Agosto del 2020. Fungió como Presidente, Gerente General y Representante Ejecutivo de Kansas City Southern de México, S.A. de C.V. (KCSM),empresa subsidiaria de Kansas City Southern (KCS) (NYSE: KSU), desde Abril del 2006 a Julio del 2020. Cuenta con más de 40 años de experiencia en relaciones gubernamentales, asuntos legales y asuntos internacionales, así como en fusiones y adquisiciones. Previo a ser Presidente Ejecutivo de Kansas City Southern de México, S.A. de C.V. (KCSM), fue Director Jurídico y de Relaciones Gubernamentales de ExxonMobil México, posición que ocupó durante nueve años. Tiene un Doctorado Honoris Causa otorgado por parte de la Academia Mexicana de Derecho Internacional y una Licenciatura en Derecho por la Universidad Iberoamericana. Realizó estudios avanzados en Derecho Corporativo y Competencia Económica en el Instituto Tecnológico Autónomo de México, cursó el programa ejecutivo de Administración de Empresas Internacionales en la Universidad Thunderbird en Arizona, el programa de gestión para abogados en la Universidad de Yale y el curso ejecutivo para miembros del consejo de administración en la Escuela de Negocios de    Harvard. Fue también Presidente de la Asociación Mexicana de Ferrocarriles para el periodo 2020 – 2021; Vicepresidente de CONCAMIN desde 2018, miembro del Consejo de Administración de Afore Siglo XXI, de la empresa Ferrovalle y de Cumbre de Negocios. Desde el 24 de mayo de 2016, fue nombrado Presidente del Consejo Binacional de Directores de la US-Mexico Chamber of Commerce. Fue Presidente del Consejo Mexicano del Transporte (2014 – 2016), Vicepresidente del Consejo Ejecutivo de Empresas Globales (2010 – 2013), Presidente Nacional de la American Chamber durante dos periodos (2010 – 2012), es miembro del Patronato de la Orquesta Sinfónica del Estado de México y miembro del board de Fomento Educacional A.C.'
  },
  {
    id: 8,
    conference: '',
    name: 'Armando Cortés Galicia',
    company: 'Industria Nacional de Autopartes, A.C.',
    rol: 'Director General ',
    avatar: '/foro-electromovilidad/speakers/ArmandoCortes.webp',
    sketch: 'Armando Cortés Galicia es Director General de la Industria Nacional de Autopartes, A.C. (INA) desde junio de 2023. Es especialista en la industria automotriz y cuenta con una trayectoria profesional de más de 15 años en los sectores público y privado transnacional. Fue Director Ejecutivo de la Industria Automotriz y de Autopartes en ProMéxico, siendo integrante del equipo responsable de la atracción al país de las plantas de BMW en San Luis Potosí, KIA en Nuevo León y Toyota en Guanajuato, además de muchos otros proyectos de inversión relevantes en la industria automotriz terminal y en la cadena de suministro, en un periodo en el que se registró un número inédito de inversiones de plantas automotrices y nuevas líneas de producción en México. En esta responsabilidad, también coordinó la organización de numerosos eventos B2B con la Organización de Comercio Exterior de Japón JETRO, la Embajada de Canadá, así como diversos eventos de promoción con Business France y la Cámara Mexicano-Alemana de Comercio e Industria CAMEXA, entre otros. Anteriormente, se desempeñó como Gerente de Proyectos Estratégicos en Chrysler de México, siendo parte del equipo responsable de la atracción al país de las nuevas líneas de producción del Fiat 500 y la RAM ProMaster. Además, participó en el proyecto del primer vehículo eléctrico manufacturado en México, el Fiat 500 eléctrico, mismo que fue galardonado por el Consejo Nacional de Ciencia y Tecnología. Es autor de diversas publicaciones sobre la industria automotriz y de autopartes, promotor del desarrollo de cadenas de proveeduría a partir de la Industria 4.0 y ha sido conferencista en eventos nacionales e internacionales sobre oportunidades de negocios en el sector. Asimismo, se ha desempeñado como consultor de estrategia y negocios internacionales brindando asesoría en comercio exterior, y recientemente colaboró con la empresa canadiense Trade Export Canada, nombrada una de las 100 start-ups tecnológicas más importantes de Canadá en 2021. Armando es licenciado en Economía, cuenta con estudios de maestría en Prospectiva Estratégica por el Instituto Tecnológico y de Estudios Superiores de Monterrey y un diplomado en Innovación Gubernamental por la Escuela de Gobierno John F. Kennedy de la Universidad de Harvard.'
  }
]
export { speakers }
