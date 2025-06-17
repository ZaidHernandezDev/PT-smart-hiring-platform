import * as yup from 'yup';

const schemas = {
  schemaPersonalData: yup.object({
    full_name: yup
      .string()
      .required('Nombre es obligatorio')
      .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo se permiten letras y espacios'),
    age: yup
      .number()
      .typeError('Ingresa una edad válida')
      .required('Edad requerida')
      .positive('Ingresa una edad válida')
      .min(18, 'Ingresa una edad válida')
      .max(100, 'Ingresa una edad válida'),
    location: yup.string().required('Estado de residencia es obligatorio'),
    availability: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
    start_date: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
  }),

  schemaContactData: yup.object({
    email: yup
      .string()
      .required('Correo es obligatorio')
      .matches(/^[a-zA-Z0-9._%+-áéíóúüñÑ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Correo inválido'),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Debe tener 10 dígitos')
      .required('Teléfono obligatorio'),
    remote_experience: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
    portfolio_url: yup.string().url('Ingresa un link válido'),
    salary_expectation: yup
      .number()
      .typeError('Ingresa una cantidad válida')
      .required('Salario requerido')
      .positive('Solo se aceptan números mayores a cero'),
  }),

  schemaSoftSkills: yup.object({
    teamwork: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    time_management: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    problem_solving: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    adaptability: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    communication: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    autonomy: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    english_level: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
  }),

  schemaHardSkills: yup.object({
    html_css: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    javascript: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    frameworks: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    responsive_design: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    git: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    performance_optimization: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    ui_ux: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    api_integration: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    debugging: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    testing: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
  }),
};

export const steps = ['Datos personales', 'Datos de contacto', 'Habilidades blandas', 'Habilidades técnicas'];
export const schemaArray = [schemas.schemaPersonalData, schemas.schemaContactData, schemas.schemaSoftSkills, schemas.schemaHardSkills];
export const defaultValues = {
  // Step 1
  full_name: '',
  age: '',
  location: '',
  availability: '',
  start_date: '',

  // Step 2
  email: '',
  phone: '',
  remote_experience: '',
  portfolio_url: '',
  salary_expectation: '',

  // Step 3
  teamwork: 1,
  time_management: 1,
  problem_solving: 1,
  adaptability: 1,
  communication: 1,
  autonomy: 1,
  english_level: 1,

  // Step 4
  html_css: 1,
  javascript: 1,
  frameworks: 1,
  responsive_design: 1,
  git: 1,
  performance_optimization: 1,
  ui_ux: 1,
  api_integration: 1,
  debugging: 1,
  testing: 1,
};
