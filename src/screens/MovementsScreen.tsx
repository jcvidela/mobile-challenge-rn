import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';

const FlatListBasics = () => {
  const movements = [{
    amount:"+ $200",
    date:"15 de abril",
    title:"recibiste dinero"
 },
 {
    amount:"+ $500",
    date:"12 de abril",
    title:"recibiste dinero"
 },
 {
    amount:"+ $2500",
    date:"1 de abril",
    title:"beneficio nubiers"
 }];

  return (
    <View style={styles.container}>
      <FlatList
        data={movements}
        renderItem={({item}) => (
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.item}>{item.title}</Text>
                    <Text style={styles.item}>{item.amount}</Text>
                </View>
                <Text style={styles.subitem}>{item.date}</Text>
            </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    subitem: {
        padding: 10,
        fontSize: 18,
        height: 44,
        opacity: 0.4
      },
  });

export default FlatListBasics;