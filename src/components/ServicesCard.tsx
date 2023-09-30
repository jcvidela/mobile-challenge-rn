import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';

const serviciosConIconos = {
    "Pedir Plata": "money-bill-alt",
    "Mandar plata": "wallet",
    "Cargar la SUBE": "money-check",
    "Recargar un celular": "mobile-alt",
    "Pagar tus servicios": "receipt",
    "Administrar mi tarjeta": 'credit-card'
  };

const MainCard = () => {

const { availableServices } = useSelector((state: AppStore) => state.services);

  return (
    <Card style={style.container}>
    <Card.Content>
      <Title style={style.centerText}>Hola Julie, que quieres hacer hoy?</Title>
      <FlatList
      data={availableServices}
      scrollEnabled={false}
      renderItem={({item}) => (
        <TouchableOpacity style={style.serviceButton}>
          <Icon name={serviciosConIconos[item]} size={30} />
          <Text numberOfLines={2} style={style.serviceButtonText}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      numColumns={3}
    />
    </Card.Content>
  </Card>
  )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    centerText: {
        textAlign: 'center'
    },
    serviceButton: {
        padding: 10,
        margin: 10,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    serviceButtonText: {
        maxWidth: 120,
        textAlign: 'center',
        flexWrap: 'wrap'
    }
})

export default MainCard;