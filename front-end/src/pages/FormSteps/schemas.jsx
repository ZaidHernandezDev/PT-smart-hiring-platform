import * as yup from 'yup';

const schemas = {
  schemaPersonalData: yup.object({
    name: yup
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
    state: yup.string().required('Estado de residencia es obligatorio'),
    fullTime: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
    startNow: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
  }),

  schemaContactData: yup.object({
    mail: yup
      .string()
      .required('Correo es obligatorio')
      .matches(/^[a-zA-Z0-9._%+-áéíóúüñÑ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Correo inválido'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Debe tener 10 dígitos')
      .required('Teléfono obligatorio'),
    remoteExperience: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
    portFolioLink: yup.string().url('Ingresa un link válido'),
    salario: yup.number().typeError('Ingresa una cantidad válida').required('Salario requerido').positive(),
  }),

  schemaSoftSkills: yup.object({
    trabajoRemoto: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    gestionTiempo: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    resolverProblemas: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    usoHerramientas: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    comunicacion: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
    autonomia: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
  }),

  schemaHardSkills: yup.object({
    HTML: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    javaScript: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    Frameworks: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    responsive: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    git: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    rendimientoFront: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    uxui: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    APIREST: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    depurar: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
    testing: yup.number().typeError('Número entre 1 y 10').min(1).max(10).required(),
  }),
};

export const steps = ['Datos personales', 'Datos de contacto', 'Habilidades blandas', 'Habilidades técnicas'];
export const schemaArray = [schemas.schemaPersonalData, schemas.schemaContactData, schemas.schemaSoftSkills, schemas.schemaHardSkills];
export const defaultValues = {
  // Primer schema
  name: '',
  age: '',
  state: '',
  fullTime: '',
  startNow: '',
  //   Segundo schema
  mail: '',
  phoneNumber: '',
  remoteExperience: '',
  portFolioLink: '',
  salario: '',
  //   Tercer schema
  trabajoRemoto: 5,
  gestionTiempo: 5,
  resolverProblemas: 5,
  usoHerramientas: 5,
  comunicacion: 5,
  autonomia: 5,
  //   Cuarto schema
  HTML: 5,
  javaScript: 5,
  Frameworks: 5,
  responsive: 5,
  git: 5,
  rendimientoFront: 5,
  uxui: 5,
  APIREST: 5,
  depurar: 5,
  testing: 5,
};
