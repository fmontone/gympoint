import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import logoVertical from '~/assets/logo-vertical.png';
import { Container, Logo, Input, Button } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (!email) {
      Alert.alert('ERRO', 'DIGITE UM EMAIL VÁLIDO');
      return;
    }

    dispatch(signInRequest(email));
  }

  return (
    <Container>
      <Logo source={logoVertical} />
      <Input
        keyboradType="email-address"
        autoCapitalize="none"
        placeholder="Informe seu email cadastrado"
        onChangeText={setEmail}
        value={email}
      />
      <Button onPress={handleSubmit}>Entrar no Sistema</Button>
    </Container>
  );
}
