import styled from 'styled-components';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { steps, schemaArray, defaultValues } from './FormSteps/schemas';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StepContent from '@mui/material/StepContent';

import PersonalData from './FormSteps/PersonalData';
import ContactData from './FormSteps/ContactData';
import SoftSkills from './FormSteps/SoftSkills';
import HardSkills from './FormSteps/HardSkills';
import useResponsiveValues from '../Hooks/useResponsiveValues';

const StyledForm = styled.form`
  width: ${({ $type }) => ($type === 'vertical' ? '90%' : '100%')};
  margin: 2rem auto;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
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
  const stepperOrientation = useResponsiveValues([{ width: 700, value: 'vertical' }], 'horizontal');

  const [activeStep, setActiveStep] = useState(0);
  const currentSchema = schemaArray[activeStep];
  const LAST_STEP = steps.length - 1;

  const methods = useForm({
    resolver: yupResolver(currentSchema),
    mode: 'onTouched',
    defaultValues,
  });

  const onSubmit = async (data) => {
    if (activeStep < LAST_STEP) {
      setActiveStep((currentStep) => currentStep + 1);
      return;
    }

    console.log('data', data);
  };

  const handleBack = () => {
    setActiveStep((currentStep) => currentStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm $type={stepperOrientation} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep} alternativeLabel={stepperOrientation === 'horizontal'} orientation={stepperOrientation}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              {stepperOrientation === 'vertical' && (
                <StepContent>
                  {activeStep === 0 && <PersonalData $currentStepper={stepperOrientation} />}
                  {activeStep === 1 && <ContactData $currentStepper={stepperOrientation} />}
                  {activeStep === 2 && <SoftSkills $currentStepper={stepperOrientation} />}
                  {activeStep === 3 && <HardSkills $currentStepper={stepperOrientation} />}
                </StepContent>
              )}
            </Step>
          ))}
        </Stepper>
        {stepperOrientation === 'horizontal' && (
          <>
            {activeStep === 0 && <PersonalData />}
            {activeStep === 1 && <ContactData />}
            {activeStep === 2 && <SoftSkills />}
            {activeStep === 3 && <HardSkills />}
          </>
        )}

        <ButtonWrapper>
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
