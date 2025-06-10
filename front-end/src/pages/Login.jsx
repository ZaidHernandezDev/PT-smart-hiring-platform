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
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
`;

const TitleWrapper = styled.div``;

const Title = styled.h2`
  color: #6b6969;
`;

const SubTitle = styled.h3`
  font-size: 1.375rem;
  color: #294919;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 0.5rem;
`;

const Label = styled.label`
  align-self: center;
  font-size: 1.5rem;
  color: #294919;
`;

const Input = styled.input`
  height: 3rem;
  border: none;
  border-radius: 3rem;
  padding: 0 4%;
`;

const Button = styled.button`
  background-image: linear-gradient(90deg, #3a603f, #b3d168);
  margin: 1.5rem 2rem;
  padding: 0.25rem 0;
  border: none;
  border-radius: 3rem;
  color: white;
  font-size: 1.25rem;
`;

const ErrorMessage = styled.p`
  margin: 0 1rem;
  color: red;
`;

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
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
        <Label>Password</Label>
        <Input type="password" {...register('password')} />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Button type="submit">Iniciar sesión</Button>
      </FormWrapper>
    </LoginWrapper>
  );
}
