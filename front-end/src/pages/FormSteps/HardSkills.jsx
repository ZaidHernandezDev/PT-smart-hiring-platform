import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Controller, useFormContext } from 'react-hook-form';
import { Typography, Slider } from '@mui/material';

const FormWrapper = styled(motion.div)`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 5rem;
  gap: 1rem 2rem;
`;

const hardSkills = [
  { name: 'HTML', label: 'Conocimiento en HTML y CSS' },
  { name: 'javaScript', label: 'Uso de javascript en el front end' },
  { name: 'Frameworks', label: 'Nivel de React, Layouting o Vue.js' },
  { name: 'responsive', label: 'Desarrollo responsive.' },
  { name: 'git', label: 'Git y sistema de control de versiones.' },
  { name: 'rendimientoFront', label: 'Optimización de rendimiento en front end.' },
  { name: 'uxui', label: 'Interfaces en (UI) y experiencia en (UX)' },
  { name: 'APIREST', label: 'Experiencia integrando APIs RESTful' },
  { name: 'depurar', label: '¿Hábil depurando y resolviendo problemas?' },
  { name: 'testing', label: 'Testing front-end (unitario, integración, end to end )' },
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

export default function HardSkills() {
  const { control } = useFormContext();

  return (
    <FormWrapper variants={containerVariants} initial="initial" animate="animate">
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
