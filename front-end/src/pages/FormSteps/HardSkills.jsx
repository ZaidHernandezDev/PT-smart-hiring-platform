import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Controller, useFormContext } from 'react-hook-form';
import { Typography, Slider } from '@mui/material';
import useResponsiveValues from '../../Hooks/useResponsiveValues';

const FormWrapper = styled(motion.div)`
  width: ${({ $stepper }) => ($stepper === 'vertical' ? '100%' : '80%')};
  margin: 2rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  grid-auto-rows: 5rem;
  gap: 1rem 2rem;
`;

const hardSkills = [
  { name: 'html_css', label: 'Conocimiento en HTML y CSS' },
  { name: 'javascript', label: 'Uso de javascript en el front end' },
  { name: 'frameworks', label: 'Nivel de React, Layouting o Vue.js' },
  { name: 'responsive_design', label: 'Desarrollo responsive.' },
  { name: 'git', label: 'Git y sistema de control de versiones.' },
  { name: 'performance_optimization', label: 'Optimización de rendimiento en front end.' },
  { name: 'ui_ux', label: 'Interfaces en (UI) y experiencia en (UX)' },
  { name: 'api_integration', label: 'Experiencia integrando APIs RESTful' },
  { name: 'debugging', label: '¿Hábil depurando y resolviendo problemas?' },
  { name: 'testing', label: 'Testing front-end (unitario, integración, end to end)' },
];

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HardSkills({ $currentStepper }) {
  const cols = useResponsiveValues([{ width: 960, value: 1 }], 2);
  const { control } = useFormContext();

  return (
    <FormWrapper $stepper={$currentStepper} $cols={cols} variants={containerVariants} initial="initial" animate="animate">
      {hardSkills.map(({ name, label }) => (
        <motion.div variants={itemVariants} key={name}>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <>
                <Typography gutterBottom>{label}</Typography>
                <Slider
                  {...field}
                  min={1}
                  max={10}
                  step={1}
                  defaultValue={5}
                  marks={Array.from({ length: 10 }, (_, i) => ({
                    value: i + 1,
                    label: String(i + 1),
                  }))}
                  valueLabelDisplay="auto"
                />
              </>
            )}
          />
        </motion.div>
      ))}
    </FormWrapper>
  );
}
