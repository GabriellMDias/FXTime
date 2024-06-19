import ThemedDivider from "@/components/ThemedDivider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Profile() {
    return(
        <ThemedView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContent}>
                    <ThemedText style={styles.headerText}>
                        Perfil
                    </ThemedText>
                </View>

                <ThemedDivider />
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