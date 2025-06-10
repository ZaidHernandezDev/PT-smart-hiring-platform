import { Controller, useFormContext } from 'react-hook-form';
import { TextField, MenuItem, Grid } from '@mui/material';

const opcionesSiNo = ['Sí', 'No'];

export default function ContactData() {
  const { control } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Controller
          name="mail"
          control={control}
          render={({ field, fieldState }) => (
            <TextField fullWidth label="Correo electrónico" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState }) => (
            <TextField fullWidth label="Número telefónico" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Controller
          name="remoteExperience"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              select
              label="¿Tienes experiencia en remoto?"
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            >
              {opcionesSiNo.map((opcion) => (
                <MenuItem key={opcion} value={opcion}>
                  {opcion}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Controller
          name="portFolioLink"
          control={control}
          render={({ field, fieldState }) => (
            <TextField fullWidth label="Link a portafolio" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Controller
          name="salario"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              type="number"
              label="Salario mensual deseado ($ MXN)"
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
