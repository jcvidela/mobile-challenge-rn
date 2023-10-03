import * as React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-native-paper";

import { DismissKeyboardView } from '../components/DismissKeyboard';

import { useNavigation } from "@react-navigation/native";
import { setBalance } from "../../features/user/UserSlice";
import { setAddMovement } from "../../features/movements/MovementsSlice";
import { AppStore } from "../../store/store";
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

        setAddToBalance(undefined);
        setDescription(undefined);
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
                            <View style={style.keyboardContent}>
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

                <TouchableOpacity style={style.continueBtn}>
                    <Text style={style.continueBtnText} onPress={onPressNext}>Continuar</Text>
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
        keyboardContent: {
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center'
        },
        centerText: {
          textAlign: 'center',
        },
        balanceText: {
          fontSize: 50,
        },
        descriptionText: {
            fontSize: 30,
        },
        continueBtn: {
            backgroundColor: '#423df6',
                    width: 300,
                    height: 50,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 300
        },
        continueBtnText: {
            fontSize: 25, 
            color: 'white'
        }
      })
    
    export default UpdateBalanceScreen;
    