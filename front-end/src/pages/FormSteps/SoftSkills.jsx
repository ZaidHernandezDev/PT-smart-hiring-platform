import { Controller, useFormContext } from 'react-hook-form';
import { Grid, Typography, Slider } from '@mui/material';

const softSkills = [
  { name: 'trabajoRemoto', label: 'Trabajo remoto' },
  { name: 'gestionTiempo', label: 'Gestion de tiempo' },
  { name: 'resolverProblemas', label: 'Resolver problemas' },
  { name: 'usoHerramientas', label: 'usoHerramientas' },
  { name: 'comunicacion', label: 'comunicacion' },
  { name: 'autonomia', label: 'autonomia' },
];

export default function SoftSkills() {
  const { control } = useFormContext();

  return (
    <>
      {softSkills.map(({ name, label }) => (
        <Grid item xs={12} key={name}>
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
        </Grid>
      ))}
    </>
  );
}
