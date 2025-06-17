import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Controller, useFormContext } from 'react-hook-form';
import { MenuItem } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import StyledField from '../../styledElements/StyledField';
import useResponsiveValues from '../../Hooks/useResponsiveValues';

const FormWrapper = styled(motion.div)`
  width: ${({ $stepper }) => ($stepper === 'vertical' ? '100%' : '80%')};
  margin: 2rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  grid-auto-rows: 5rem;
  gap: 1rem 2rem;
`;

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

export default function ContactData({ $currentStepper }) {
  const cols = useResponsiveValues([{ width: 960, value: 1 }], 2);

  const { control } = useFormContext();

  return (
    <FormWrapper $stepper={$currentStepper} $cols={cols} variants={containerVariants} initial="initial" animate="animate">
      <motion.div variants={itemVariants}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => <StyledField field={field} fieldState={fieldState} label="Correo electrónico" name="email" />}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <StyledField
              type="number"
              field={field}
              fieldState={fieldState}
              label="Número telefónico"
              name="phone"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">+52</InputAdornment>,
                },
              }}
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
          name="remote_experience"
          control={control}
          render={({ field, fieldState }) => (
            <StyledField select field={field} fieldState={fieldState} label="¿Tienes experiencia en remoto?" name="remote_experience">
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
          name="portfolio_url"
          control={control}
          render={({ field, fieldState }) => (
            <StyledField field={field} fieldState={fieldState} label="Link a portafolio (Opcional)" name="portfolio_url" />
          )}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Controller
          name="salary_expectation"
          control={control}
          render={({ field, fieldState }) => (
            <StyledField
              type="number"
              field={field}
              fieldState={fieldState}
              label="Salario mensual deseado ($ MXN)"
              name="salary_expectation"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                },
              }}
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
                  e.preventDefault();
                }
              }}
            />
          )}
        />
      </motion.div>
    </FormWrapper>
  );
}
