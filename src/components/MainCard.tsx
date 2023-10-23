import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setShowBalance } from '../../features/user/UserSlice';
import { AppStore } from '../../store/store';
import { formatARS } from '../helpers/formatCurrency';

const MainCard:React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { name, balance, showBalance } = useSelector((state: AppStore) => state.user);

  const iconSlash = showBalance ? 'eye' : 'eye-slash';

  function onAddBalancePress () {
    navigation.navigate('UpdateBalance');
  }

  function onSubstractBalancePress () {
    Alert.alert('Coming soon...', 'Featuer in building');
  }

  function onIconSlashPress () {
    dispatch(setShowBalance(!showBalance));
  }
  
  return (
    <Card style={style.container}>
    <Card.Content>
      <Title style={style.centerText}>Hola {name}, tu saldo es</Title>
      <View style={style.containerCard}>
        <Text style={[style.centerText, style.balanceText]}>{showBalance? formatARS(balance) : '-----'}</Text>
        <Icon 
          name={iconSlash}
          size={30} 
          onPress={onIconSlashPress}
        />
      </View>
    </Card.Content>

    <Card.Actions>
      <Button onPress={onAddBalancePress}>Cargá plata</Button>
      <Button onPress={onSubstractBalancePress}>Retirá plata</Button>
    </Card.Actions>
  </Card>
  )
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 200
  },
  containerCard: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  centerText: {
    textAlign: 'center',
  },
  balanceText: {
    fontSize: 30,
    marginRight: 20,
  }
})

export default MainCard;