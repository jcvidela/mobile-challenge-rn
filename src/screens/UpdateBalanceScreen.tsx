import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, } from "react-native";
import { Card } from "react-native-paper";
import { setBalance } from "../../features/user/UserSlice";
import {DismissKeyboardView} from '../components/DismissKeyboard';
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../store/store";
import { setAddMovement } from "../../features/movements/MovementsSlice";
import { getFormattedDate } from "../helpers";


const UpdateBalanceScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [addToBalance, setAddToBalance] = React.useState<string | undefined>();
    const [description, setDescription] = React.useState<string | undefined>();

    const { balance } = useSelector((state: AppStore) => state.user);

    function onPressNext () {
        dispatch(setBalance(balance + Number(addToBalance)));
        dispatch(setAddMovement({
            "amount": `+ $ ${String(addToBalance)}`,
            "date": getFormattedDate(Date.now()),
            "title": description || ''
         }))
        setAddToBalance(undefined); // reset value
        setDescription(undefined); // reset value
        Keyboard.dismiss();
        navigation.goBack();
    }

    function onChangeAmount (val: string) {
        setAddToBalance(val);
    }

    function onDescriptionChange (val: string) {
        setDescription(val);
    }

    return (
        <>
            <Text style={{ fontSize: 25, marginTop: 10, marginLeft: 10 }}>¿Cuánto querés ingresar?</Text>
            <View style={style.container}>
                <Card.Content>
                    <DismissKeyboardView>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={style.balanceText}>$</Text>
                                <TextInput
                                    value={addToBalance}
                                    placeholder="0"
                                    onChangeText={onChangeAmount}
                                    style={style.balanceText} 
                                    keyboardType="number-pad"
                                />
                            </View>
                    </DismissKeyboardView>
                </Card.Content>

                <TextInput
                        placeholder="Motivo(opcional)"
                        style={style.descriptionText}
                        onChangeText={onDescriptionChange}
                    />

                <TouchableOpacity style={{
                    backgroundColor: '#423df6',
                    width: 300,
                    height: 50,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 300
                }}>
                    <Text style={{ fontSize: 25, color: 'white' }} onPress={onPressNext}>Continuar</Text>
                </TouchableOpacity>
        </View>
        </>
        )
    }

    const style = StyleSheet.create({
        container: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 500
        },
        containerCard: {
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginTop: 60,
        },
        centerText: {
          textAlign: 'center',
        },
        balanceText: {
          fontSize: 50,
        },
        descriptionText: {
            fontSize: 30,
        }
      })
    
    export default UpdateBalanceScreen;
    