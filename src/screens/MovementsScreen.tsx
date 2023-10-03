import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AppStore } from '../../store/store';
import { useSelector } from 'react-redux';

const FlatListBasics = () => {
  const { movements } = useSelector((state: AppStore) => state.movements);

  return (
    <View style={styles.container}>
      <FlatList
        data={movements}
        renderItem={({item}) => (
            <View>
                <View style={styles.containerView}>
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
    containerView: {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
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