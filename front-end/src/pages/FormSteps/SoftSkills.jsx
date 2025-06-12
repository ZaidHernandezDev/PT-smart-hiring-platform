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

const softSkills = [
  { name: 'trabajoRemoto', label: 'Capacidad de trabajar en equipo remotamente.' },
  { name: 'gestionTiempo', label: 'Gestionar tiempos y cumplir plazos.' },
  { name: 'resolverProblemas', label: 'Capacidad para resolver problemas.' },
  { name: 'usoHerramientas', label: 'Adaptabilidad de uso de herramientas.' },
  { name: 'comunicacion', label: 'Nivel de comunicación con el equipo.' },
  { name: 'autonomia', label: 'Grado de autonomía.' },
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

export default function SoftSkills() {
  const { control } = useFormContext();

  return (
    <FormWrapper variants={containerVariants} initial="initial" animate="animate">
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
