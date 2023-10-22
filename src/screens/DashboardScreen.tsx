import { View, StyleSheet } from "react-native";
import MainCard from "../components/MainCard";
import ServicesCard from "../components/ServicesCard";

const DashboardScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <MainCard />
      <View style={style.separator} />
      <ServicesCard />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 15
  }
});

export default DashboardScreen;
