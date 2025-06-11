import { Controller, useFormContext } from 'react-hook-form';
import { Grid, Typography, Slider } from '@mui/material';

const hardSkills = [
  { name: 'HTML', label: 'HTML' },
  { name: 'javaScript', label: 'javaScript' },
  { name: 'Frameworks', label: 'Frameworks' },
  { name: 'responsive', label: 'responsive' },
  { name: 'git', label: 'git' },
  { name: 'rendimientoFront', label: 'rendimientoFront' },
  { name: 'uxui', label: 'uxui' },
  { name: 'APIREST', label: 'APIREST' },
  { name: 'depurar', label: 'depurar' },
  { name: 'testing', label: 'testing' },
];

export default function HardSkills() {
  const { control } = useFormContext();

  return (
    <>
      {hardSkills.map(({ name, label }) => (
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
