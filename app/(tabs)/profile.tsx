import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemedDivider from "@/components/ThemedDivider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { router } from 'expo-router';

export default function Profile() {
    const logOff = async () => {
        await AsyncStorage.removeItem('authToken');
        router.navigate('/login');
    }

    return(
        <ThemedView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContent}>
                    <ThemedText style={styles.headerText} onPress={logOff}>
                        Perfil
                    </ThemedText>
                </View>

                <ThemedDivider />

                <TouchableOpacity onPress={async () => await AsyncStorage.removeItem('authToken')}>
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