import styled from 'styled-components';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { steps, schemaArray, defaultValues } from './FormSteps/schemas';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import PersonalData from './FormSteps/PersonalData';
import ContactData from './FormSteps/ContactData';
import SoftSkills from './FormSteps/SoftSkills';
import HardSkills from './FormSteps/HardSkills';
import FormWrapper from '../styledElements/FormWrapper';

const StyledForm = styled.form`
  width: 100%;
  margin: 2rem auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavButton = styled(Button)`
padding: 1.25rem 2rem !important;
  background-image: linear-gradient(90deg, #254b2b, #9bc6a6);
  max-height: 2.25rem;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 1rem !important;
  font-weight: 700 !important;
`;

export default function FrontEnd() {
  const [activeStep, setActiveStep] = useState(0);
  const currentSchema = schemaArray[activeStep];
  const LAST_STEP = steps.length - 1;

  const methods = useForm({
    resolver: yupResolver(currentSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    if (activeStep < LAST_STEP) setActiveStep((currentStep) => currentStep + 1);
    else alert('Formulario enviado');
  };

  const handleBack = () => {
    setActiveStep((currentStep) => currentStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <FormWrapper>
          {activeStep === 0 && <PersonalData />}
          {activeStep === 1 && <ContactData />}
          {activeStep === 2 && <SoftSkills />}
          {activeStep === 3 && <HardSkills />}
        </FormWrapper>

        <ButtonWrapper sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {activeStep > 0 && (
            <NavButton variant="contained" onClick={handleBack}>
              Atrás
            </NavButton>
          )}
          <NavButton variant="contained" type="submit">
            {activeStep === LAST_STEP ? 'Enviar' : 'Siguiente'}
          </NavButton>
        </ButtonWrapper>
      </StyledForm>
    </FormProvider>
  );
}
