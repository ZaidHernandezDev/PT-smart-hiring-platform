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

const softSkills = [
  { name: 'teamwork', label: 'Capacidad de trabajar en equipo remotamente.' },
  { name: 'time_management', label: 'Gestionar tiempos y cumplir plazos.' },
  { name: 'problem_solving', label: 'Capacidad para resolver problemas.' },
  { name: 'adaptability', label: 'Adaptabilidad de uso de herramientas.' },
  { name: 'communication', label: 'Nivel de comunicación con el equipo.' },
  { name: 'autonomy', label: 'Grado de autonomía.' },
  { name: 'english_level', label: 'Nivel de inglés' },
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

export default function SoftSkills({ $currentStepper }) {
  const cols = useResponsiveValues([{ width: 900, value: 1 }], 2);
  const { control } = useFormContext();

  return (
    <FormWrapper $stepper={$currentStepper} $cols={cols} variants={containerVariants} initial="initial" animate="animate">
      {softSkills.map(({ name, label }) => (
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
