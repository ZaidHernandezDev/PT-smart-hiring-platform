import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, MenuItem, Autocomplete } from '@mui/material';
import StyledField from '../../styledElements/StyledField';

const FormWrapper = styled(motion.div)`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 5rem;
  gap: 1rem 2rem;
`;

const estadosMexico = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'Ciudad de México',
  'Coahuila',
  'Colima',
  'Durango',
  'Estado de México',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas',
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

const opcionesSiNo = ['Sí', 'No'];

export default function PersonalData() {
  const { control } = useFormContext();

  return (
    <FormWrapper variants={containerVariants} initial="initial" animate="animate">
      <motion.div variants={itemVariants}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => <StyledField field={field} fieldState={fieldState} label="Nombre completo" name="name" />}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          name="age"
          control={control}
          render={({ field, fieldState }) => (
            <StyledField
              field={field}
              fieldState={fieldState}
              label="Edad"
              name="age"
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
                  e.preventDefault();
                }
              }}
            />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          name="state"
          control={control}
          render={({ field: { onChange, value }, fieldState }) => (
            <Autocomplete
              options={estadosMexico}
              noOptionsText="No se encontraron resultados"
              value={value || ''}
              onChange={(_, newValue) => onChange(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Estado de residencia" error={!!fieldState.error} helperText={fieldState.error?.message} />
              )}
            />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          name="fullTime"
          control={control}
          render={({ field, fieldState }) => (
            <StyledField select field={field} fieldState={fieldState} label="¿Disponibilidad tiempo completo?" name="fullTime">
              {opcionesSiNo.map((opcion) => (
                <MenuItem key={opcion} value={opcion}>
                  {opcion}
                </MenuItem>
              ))}
            </StyledField>
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          name="startNow"
          control={control}
          render={({ field, fieldState }) => (
            <StyledField select field={field} fieldState={fieldState} label="¿Puedes comenzar de inmediato?" name="startNow">
              {opcionesSiNo.map((opcion) => (
                <MenuItem key={opcion} value={opcion}>
                  {opcion}
                </MenuItem>
              ))}
            </StyledField>
          )}
        />
      </motion.div>
    </FormWrapper>
  );
}
