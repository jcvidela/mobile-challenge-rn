import {View, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux';
import MainCard from '../components/MainCard';
import ServicesCard from '../components/ServicesCard';
import { AppStore } from '../../store/store';

const DashboardScreen = () => {
    return (
        <View style={style.container}>
            <MainCard />
            <View style={{ marginVertical: 15 }} />
            <ServicesCard />
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex', 
        justifyContent: 'center', 
    }
})

export default DashboardScreen;
