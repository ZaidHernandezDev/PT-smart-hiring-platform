import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  username: yup.string().required('El usuario es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria').min(6, 'Mínimo 6 caracteres'),
});

const LoginWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div``;

const Title = styled.h2``;

const SubTitle = styled.h3``;

const FormWrapper = styled.form``;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

export default function () {
  const redirect = useNavigate();

  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitter = (data) => {
    console.log('Datos enviados:', data);
    login(data.username);
    redirect('/');
  };

  return (
    <LoginWrapper>
      <TitleWrapper>
        <Title>RECURSOS HUMANOS</Title>
        <SubTitle>RECLUTAMIENTO</SubTitle>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit(submitter)}>
        <Label>Username</Label>
        <Input type="text" {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>} {/* Muestra error si aplica */}
        <Label>Password</Label>
        <Input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>} {/* Muestra error si aplica */}
        <Button type="submit">Iniciar sesión</Button>
      </FormWrapper>
    </LoginWrapper>
  );
}
