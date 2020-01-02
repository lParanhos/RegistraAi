import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoIcon from 'react-native-vector-icons/Ionicons';


import api from '../../services/api';
import { currencyFormat } from '../../util/formatValue';
import { Container, Card, MonthSelector, MonthSelectorButton, Month, Info, InfoBlock, InfoText, IText, Values, ButtonList, Button, ButtonText } from './styles';
import { months, SelectMonth, BackMonth, NextMonth } from '../../util/monthsObject';
import Chart from '../../components/piechart';

export default function Main({ navigation }) {

  const [revenues, setRevenues] = useState({
    value: 0.0,
    formateddValue: 'R$0.0'
  });
  const [expenses, setExpenses] = useState({
    value: 0.0,
    formateddValue: 'R$0.0'
  });
  const [over, setOver] = useState({});
  const [currentMonth, setCurrentMonth] = useState({});

  async function getData(month, year) {
    const response = await api.get(`dash/${month}-${year}`);
    setRevenues({
      value: response.data.aReceber,
      formateddValue: currencyFormat(response.data.aReceber)
    });
    setExpenses({
      value: response.data.totalGastos,
      formateddValue: currencyFormat(response.data.totalGastos)

    });
    setOver(response.data.restou);
  }

  function handleBackMonth() {
    setCurrentMonth(BackMonth(currentMonth.value)[0]);
  }

  function handleNextMonth() {
    setCurrentMonth(NextMonth(currentMonth.value)[0]);
  }

  useEffect(() => {
    const month = new Date().toLocaleDateString().split('/')[0];
    const year = new Date().getFullYear();
    setCurrentMonth(SelectMonth(month)[0]);
    getData(month, year);
  }, []);


  return (
    <Container>
      <Card style={{ elevation: 1 }}>
        <MonthSelector>
          <MonthSelectorButton onPress={() => handleBackMonth()}>
            <IoIcon name="ios-arrow-back" size={15} />
          </MonthSelectorButton>
          <Month>{currentMonth.key}</Month>
          <MonthSelectorButton onPress={() => handleNextMonth()}>
            <IoIcon name="ios-arrow-forward" size={15} />
          </MonthSelectorButton>
        </MonthSelector>
        <Chart expenses={expenses.value} revenues={revenues.value} />
        <Info>
          <InfoBlock>
            <Icon name="arrow-up-circle" size={40} color="#10c951" />
            <InfoText>
              <IText>Receitas</IText>
              <Values received>{revenues.formateddValue}</Values>
            </InfoText>
          </InfoBlock>
          <InfoBlock>
            <Icon name="arrow-down-circle" size={40} color="#f70505" />
            <InfoText>
              <IText>Despesas</IText>
              <Values>{expenses.formateddValue}</Values>
            </InfoText>
          </InfoBlock>
        </Info>
      </Card>

      <ButtonList>
        <Button onPress={() => navigation.navigate('Expenses')}>
          <Icon name="cash-register" size={40} color="#FFF" />
          <ButtonText>Dispesas</ButtonText>
        </Button>
        <Button>
          <Icon name="square-inc-cash" size={35} color="#FFF" />
          <ButtonText>Receita</ButtonText>
        </Button>
      </ButtonList>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Home',
}   