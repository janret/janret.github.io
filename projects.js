/** UI copy and project entries. Each string field is `{ en, es }`. */
window.PORTFOLIO_I18N = {
  en: {
    title: "Jan Reglà Torrents — Projects",
    description:
      "Selected projects by Jan Reglà Torrents — computational biomedical engineering, modelling, and software.",
    eyebrow: "Computational biomedical engineering",
    lede:
      "Selected work on physiological modelling, data-driven personalisation, and scientific software.",
    viewProjects: "View projects",
    projectsHeading: "Projects",
    langLabel: "Language",
    projectFallback: "Project",
  },
  es: {
    title: "Jan Reglà Torrents — Proyectos",
    description:
      "Proyectos seleccionados de Jan Reglà Torrents — ingeniería biomédica computacional, modelización y software.",
    eyebrow: "Ingeniería biomédica computacional",
    lede:
      "Selección de trabajos sobre modelización fisiológica, personalización basada en datos y software científico.",
    viewProjects: "Ver proyectos",
    projectsHeading: "Proyectos",
    langLabel: "Idioma",
    projectFallback: "Proyecto",
  },
};

/** Add a project by appending an object to this array. */
window.PORTFOLIO_PROJECTS = [
  {
    tag: { en: "Master's thesis", es: "Trabajo de fin de máster" },
    title: {
      en: "Fetal haemodynamic digital twin",
      es: "Gemelo digital hemodinámico fetal",
    },
    description: {
      en: "Sensitivity-guided personalisation of a 0D fetal circulation model from Doppler ultrasound — Morris/Sobol analysis, constrained CMA-ES and NSGA-II optimisation.",
      es: "Personalización guiada por sensibilidad de un modelo 0D de circulación fetal a partir de ecografía Doppler: análisis Morris/Sobol y optimización CMA-ES restringida y NSGA-II.",
    },
    links: [
      {
        label: { en: "GitHub", es: "GitHub" },
        href: "https://github.com/janret/tfm-fetal-digital-twin",
      },
      {
        label: { en: "Thesis PDF", es: "PDF de la tesis" },
        href: "https://github.com/janret/tfm-fetal-digital-twin/blob/main/TFM.pdf",
      },
    ],
  },
  {
    tag: { en: "Course project", es: "Proyecto de asignatura" },
    title: {
      en: "Poroviscoelastic modelling of brain oedema",
      es: "Modelización poroviscoelástica del edema cerebral",
    },
    description: {
      en: "Multilayer biphasic FEBio model of oedema-driven brain deformation over 72 hours (cortex, basal ganglia, corona radiata, corpus callosum), for a UPF Computational Therapies brain-modelling workshop on neurosurgical brain shift.",
      es: "Modelo bifásico multicapa en FEBio de la deformación cerebral inducida por edema a lo largo de 72 horas (córtex, ganglios basales, corona radiata y cuerpo calloso), para un workshop de modelización cerebral en Computational Therapies (UPF) sobre el desplazamiento cerebral quirúrgico.",
    },
    links: [
      {
        label: { en: "Report", es: "Informe" },
        href: "https://github.com/janret/janret.github.io/blob/main/assets/brain-oedema/Report.pdf",
      },
      {
        label: { en: "FEBio model", es: "Modelo FEBio" },
        href: "https://github.com/janret/janret.github.io/blob/main/assets/brain-oedema/Model.feb",
      },
    ],
  },
  {
    tag: { en: "Course project", es: "Proyecto de asignatura" },
    title: {
      en: "Biomechanics of gait — statistical analysis of total knee replacement patients",
      es: "Biomecánica de la marcha — análisis estadístico de pacientes con prótesis total de rodilla",
    },
    description: {
      en: "Statistical and time-series analysis of human walking, comparing conservatively managed vs total knee replacement–planned patients. Methods from univariate statistics to multivariate and continuous-waveform analysis, implemented from scratch in MATLAB and validated against standard toolboxes: ANOVA / ANCOVA, Hotelling's T², two-way MANOVA, mixed ANOVA, SPM1D on gait-cycle waveforms, and Hilbert-transform phase synchronization.",
      es: "Análisis estadístico y de series temporales de la marcha humana, comparando pacientes con tratamiento conservador frente a candidatos a prótesis total de rodilla. Métodos desde estadística univariante hasta análisis multivariante y de formas de onda continuas, implementados desde cero en MATLAB y validados frente a toolboxes estándar: ANOVA / ANCOVA, T² de Hotelling, MANOVA bidireccional, ANOVA mixto, SPM1D sobre el ciclo de marcha y sincronización de fase con transformada de Hilbert.",
    },
    links: [
      {
        label: { en: "GitHub", es: "GitHub" },
        href: "https://github.com/janret/Advanced-Biosignal-Analysis",
      },
      {
        label: { en: "Report", es: "Informe" },
        href: "https://github.com/janret/Advanced-Biosignal-Analysis/blob/main/Report.pdf",
      },
    ],
  },
  {
    tag: { en: "Bachelor's thesis", es: "Trabajo de fin de grado" },
    title: {
      en: "Longitudinal MRI tissue segmentation",
      es: "Segmentación longitudinal de tejidos en MRI",
    },
    description: {
      en: "Deep-learning pipelines that add subject-specific longitudinal context to U-Net brain tissue segmentation (GM / WM / CSF), aiming for more temporally consistent volumes in Alzheimer's research on the MIRIAD dataset, and compared with SAMSeg-Long and SynthSeg+.",
      es: "Pipelines de aprendizaje profundo que añaden contexto longitudinal específico del sujeto a la segmentación de tejidos cerebrales con U-Net (GM / WM / CSF), buscando volúmenes más consistentes en el tiempo para la investigación del Alzheimer en el conjunto de datos MIRIAD, y comparados con SAMSeg-Long y SynthSeg+.",
    },
    links: [
      {
        label: { en: "GitHub", es: "GitHub" },
        href: "https://github.com/janret/TFG",
      },
      {
        label: { en: "Thesis", es: "Tesis" },
        href: "https://dugi-doc.udg.edu/handle/10256/28870",
      },
    ],
  },
];
