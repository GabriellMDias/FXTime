import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemedDivider from "@/components/ThemedDivider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { router } from 'expo-router';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function Profile() {
    const logOff = async () => {
        await AsyncStorage.removeItem('authToken');
        router.navigate('/login');
    }

    const [userName, setUserName] = useState('')

    const getName = async () => {
        const name = await AsyncStorage.getItem('userName')
        setUserName(name || '')
    }

    useEffect(()=>{
        getName()
    }, [])

    return(
        <ThemedView style={styles.container}>
            <ScrollView >
                <View style={styles.optionsGroup}>
                <FontAwesome6 name="circle-user" size={80} color="gray" />
                <ThemedText style={{justifyContent: 'center', alignContent: 'center'}}>{userName}</ThemedText>

                <ThemedDivider />

                <TouchableOpacity style={styles.option}>
                    <ThemedText>
                        Editar Informações
                    </ThemedText>
                    <MaterialIcons name="edit" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ThemedText>
                        Tema
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <ThemedText>
                        Configurações
                    </ThemedText>
                    <Ionicons name="settings-sharp" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={logOff}>
                    <Text style={{color: 'red'}}>
                        Sair
                    </Text>
                </TouchableOpacity>
                </View>
                
            </ScrollView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionsGroup:{
        justifyContent: 'center',
        flex:1, 
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 200
    }
})