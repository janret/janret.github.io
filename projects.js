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
