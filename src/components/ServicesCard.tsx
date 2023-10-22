import * as React from 'react'
import { StyleSheet, FlatList } from "react-native";
import { Card, Title } from "react-native-paper";

import ListServiceItem from './ListServiceItem';

import { useSelector } from "react-redux";
import { AppStore } from "../../store/store";

const MainCard:React.FC = () => {
  const { availableServices } = useSelector(
    (state: AppStore) => state.services
  );

  const { name } = useSelector(
    (state: AppStore) => state.user
  );

  return (
    <Card style={style.container}>
      <Card.Content>
        <Title style={style.centerText}>
          Hola {name}, ¿que quieres hacer hoy?
        </Title>
        <FlatList
          data={availableServices}
          scrollEnabled={false}
          renderItem={({ item }) => (<ListServiceItem item={item} /> )}
          numColumns={3}
        />
      </Card.Content>
    </Card>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  centerText: {
    textAlign: "center",
  },
});

export default MainCard;
