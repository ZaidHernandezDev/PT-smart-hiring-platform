import { Controller, useFormContext } from 'react-hook-form';
import { TextField, MenuItem, Grid, Autocomplete } from '@mui/material';

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

const opcionesSiNo = ['Sí', 'No'];

export default function PersonalData() {
  const { control } = useFormContext();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField fullWidth label="Nombre completo" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Controller
          name="age"
          control={control}
          render={({ field, fieldState }) => (
            <TextField fullWidth type="number" label="Edad" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Controller
          name="state"
          control={control}
          render={({ field: { onChange, value }, fieldState }) => (
            <Autocomplete
              options={estadosMexico}
              value={value || ''}
              onChange={(_, newValue) => onChange(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Estado de residencia" error={!!fieldState.error} helperText={fieldState.error?.message} />
              )}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Controller
          name="fullTime"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              select
              label="¿Disponibilidad tiempo completo?"
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

      <Grid item xs={12} sm={3}>
        <Controller
          name="startNow"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              select
              label="¿Puedes comenzar de inmediato?"
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
    </>
  );
}
