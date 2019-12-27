import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';

import colors from '~/styles/colors';
import { CheckInButton, List } from './styles';

import Container from '~/components/Container';
import Check from '~/components/Check';

export default function CheckIns() {
  const userId = useSelector(state => state.auth.userId);
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadCheckIns() {
      const response = await api.get(`/students/${userId}/checkins`);

      const countData = response.data.map((checkIn, index) => {
        return {
          ...checkIn,
          count: response.data.length - index,
        };
      });

      setCheckIns(countData);
    }

    setLoading(false);
    loadCheckIns();
  }, [userId]);

  async function handleSubmit() {
    try {
      setLoading(true);

      await api.post(`/students/${userId}/checkins`);

      setLoading(false);
      Alert.alert('Check!', 'Check-in realizado com sucesso');
    } catch (err) {
      setLoading(false);
      Alert.alert(
        'Ooops.. ',
        'Confira se já fez checkin hoje ou se já fez 5 checkins essa semana, e em último caso, cheque se sua matrícula é válida'
      );
    }
  }

  return (
    <>
      <Header />
      <Container>
        <CheckInButton onPress={handleSubmit} loading={loading}>
          Novo Check-in
        </CheckInButton>

        {!checkIns && <ActivityIndicator color={colors.primary} size="large" />}

        <List
          data={checkIns}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Check data={item} />}
        />
      </Container>
    </>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: (
    { tintColor } // eslint-disable-line
  ) => <Icon name="beenhere" color={tintColor} size={28} />,
};
