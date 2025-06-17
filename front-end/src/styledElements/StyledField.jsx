import { Controller, useFormContext } from 'react-hook-form';
import { TextField, MenuItem, Grid, Autocomplete } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

export default function StyledField({ children, field, fieldState, label, name, ...props }) {
  return (
    <>
      <TextField fullWidth label={label} {...field} error={!!fieldState.error} {...props}>
        {children}
      </TextField>
      <AnimatePresence mode="wait">
        {fieldState.error && (
          <motion.div
            key={`${name}-error`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', marginLeft: '14px' }} // estilo similar al de MUI
          >
            {fieldState.error.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
