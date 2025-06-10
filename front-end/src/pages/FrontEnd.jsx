import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Asegúrate que cada componente está correctamente importado
import PersonalData from './FormSteps/PersonalData';
import ContactData from './FormSteps/ContactData'; // CORREGIDO
import SoftSkills from './FormSteps/SoftSkills';
import HardSkills from './FormSteps/HardSkills';

const steps = ['Datos personales', 'Datos de contacto', 'Habilidades blandas', 'Habilidades técnicas'];

const schemaPersonalData = yup.object({
  name: yup.string().required('Nombre es obligatorio'),
  age: yup
    .number()
    .typeError('Ingresa una edad válida')
    .required('Edad requerida')
    .positive('Ingresa una edad válida')
    .max(100, 'Ingresa una edad válida'),
  state: yup.string().required('Estado de residencia es obligatorio'),
  fullTime: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
  startNow: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
});

const schemaContactData = yup.object({
  mail: yup.string().email('Correo inválido').required('Correo es obligatorio'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Debe tener 10 dígitos')
    .required('Teléfono obligatorio'),
  remoteExperience: yup.string().oneOf(['Sí', 'No'], 'Selecciona una opción válida').required('Campo obligatorio'),
  portFolioLink: yup.string().url('Ingresa un link válido').required('Portafolio requerido'),
  salario: yup.number().typeError('Ingresa una cantidad válida').required('Salario requerido').positive(),
});

const schemaSoftSkills = yup.object({
  trabajoRemoto: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
  gestionTiempo: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
  resolverProblemas: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
  usoHerramientas: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
  comunicacion: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
  autonomia: yup.number().typeError('Ingresa un número').min(1).max(10).required('Campo obligatorio'),
});

const schemaHardSkills = yup.object({
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
});

export default function FrontEnd() {
  const [activeStep, setActiveStep] = useState(0);
  const currentSchema = [schemaPersonalData, schemaContactData, schemaSoftSkills, schemaHardSkills][activeStep];

  const methods = useForm({
    resolver: yupResolver(currentSchema),
    mode: 'onTouched',
    defaultValues: {
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
    },
  });

  useEffect(() => {
    const currentStepErrors = methods.formState.errors;
    console.log(`Errores en el paso ${activeStep}:`, currentStepErrors);
  }, [methods.formState.errors, activeStep]);

  const onSubmit = (data) => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log('Formulario completo:', data);
      alert('Formulario enviado');
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 2 }}>
          {activeStep === 0 && <PersonalData />}
          {activeStep === 1 && <ContactData />}
          {activeStep === 2 && <SoftSkills />}
          {activeStep === 3 && <HardSkills />}
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          {activeStep > 0 && (
            <Button variant="contained" onClick={handleBack}>
              Atrás
            </Button>
          )}
          <Button variant="contained" type="submit">
            {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
}
