import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { setBalance, setShowBalance } from '../../features/user/UserSlice';
import { AppStore } from '../../store/store';
import { formatARS } from '../helpers';

const MainCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { balance, showBalance } = useSelector((state: AppStore) => state.user);
  
  return (
    <Card style={style.container}>
    <Card.Content>
      <Title style={style.centerText}>Hola Julie, tu saldo es</Title>
      <View style={style.containerCard}>
        <Text style={[style.centerText, style.balanceText]}>{showBalance? formatARS(balance) : '-----'}</Text>
        <Icon 
          name={ showBalance ? 'eye' : 'eye-slash' }
          size={30} 
          onPress={() => dispatch(setShowBalance(!showBalance))}
        />
      </View>
    </Card.Content>

    <Card.Actions>
      <Button onPress={() => navigation.navigate('UpdateBalance')}>Cargá plata</Button>
      <Button onPress={() => navigation.navigate('UpdateBalance')}>Retirá plata</Button>
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