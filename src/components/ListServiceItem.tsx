import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

interface ListServiceItemProps {
    item: string;
}

const servicesIcons = {
    "Pedir Plata": "money-bill-alt",
    "Mandar plata": "wallet",
    "Cargar la SUBE": "money-check",
    "Recargar un celular": "mobile-alt",
    "Pagar tus servicios": "receipt",
    "Administrar mi tarjeta": "credit-card",
  };

const ListServiceItem: React.FC<ListServiceItemProps> = ({ item }) => {
  return (
    <TouchableOpacity style={style.serviceButton}>
      <Icon name={servicesIcons[item]} size={30} />
      <Text numberOfLines={2} style={style.serviceButtonText}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
    serviceButton: {
      padding: 10,
      margin: 10,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch",
    },
    serviceButtonText: {
      maxWidth: 120,
      textAlign: "center",
      flexWrap: "wrap",
    },
  });

export default ListServiceItem;
