import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

export default function Expenses({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('AddExpenses')}>
        <Text>Abrir</Text>
      </TouchableOpacity>
    </Container>
  );
}

Expenses.navigationOptions = {
  title: 'Despesas',
}   