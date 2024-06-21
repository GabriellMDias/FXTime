import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemedDivider from "@/components/ThemedDivider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { router } from 'expo-router';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
    const logOff = async () => {
        await AsyncStorage.removeItem('authToken');
        router.navigate('/login');
    }

    return(
        <ThemedView style={styles.container}>
            <ScrollView>
                <FontAwesome6 name="circle-user" size={24} color="gray" />
                <ThemedText>Usuário</ThemedText>

                <ThemedDivider />

                <TouchableOpacity>
                    <ThemedText>
                        Editar Informações
                    </ThemedText>
                    <MaterialIcons name="edit" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ThemedText>
                        Tema
                    </ThemedText>
                </TouchableOpacity>

                <TouchableOpacity>
                    <ThemedText>
                        Configurações
                    </ThemedText>
                    <Ionicons name="settings-sharp" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={logOff}>
                    <Text>
                        Sair
                    </Text>
                </TouchableOpacity>
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
})