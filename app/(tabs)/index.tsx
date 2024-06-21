import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import ThemedDivider from '@/components/ThemedDivider';
import { temporarilyData } from '@/constants/temporarilyData';
import { ThemedSection } from '@/components/ThemedSection';
import ThemedButton from '@/components/ThemedButton';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContent}>
                    <ThemedText style={styles.headerText}>
                        Bem vindo, {userName}!
                    </ThemedText>
                    <TouchableOpacity>
                        <ThemedText>
                            <MaterialIcons name="notifications" size={24}/>
                        </ThemedText>
                    </TouchableOpacity>
                </View>

                <ThemedDivider />

                <View style={styles.workTeams}>
                    <ThemedText style={styles.bold}>
                        Equipes de trabalho
                    </ThemedText>
                    <View style={styles.workTeamsList}>
                        {temporarilyData.workTeams.map((workTeam, index) => 
                        <TouchableOpacity key={index}>
                            <Image source={require('@/assets/images/noImageTeam.png')} style={styles.teamImage}/>
                            <ThemedText style={styles.teamName}> {workTeam.name} </ThemedText>
                        </TouchableOpacity>
                        )}
                        <TouchableOpacity >
                            <MaterialIcons name="add" size={75} color="black" style={styles.addButton}/>
                            <ThemedText style={styles.teamName}> Adicionar </ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>

                <ThemedSection style={styles.section}>
                    <View style={styles.sectionName}>
                        <ThemedText>
                            <MaterialIcons name="calendar-month" size={20}/>
                        </ThemedText>
                        
                        <ThemedText>
                         Escalas de trabalho
                        </ThemedText>
                    </View>
                    

                    <ThemedButton style={styles.detailsButton}>
                        <ThemedText>+ Detalhes</ThemedText>
                    </ThemedButton>
                </ThemedSection>

                <ThemedSection style={styles.section}>
                    <View style={styles.sectionName}>
                        <ThemedText>
                            <MaterialIcons name="task" size={20}/>
                        </ThemedText>
                        
                        <ThemedText>
                         Próximas Tarefas
                        </ThemedText>
                    </View>
                    

                    <ThemedButton style={styles.detailsButton}>
                        <ThemedText>+ Detalhes</ThemedText>
                    </ThemedButton>
                </ThemedSection>
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
    bold: {
        fontWeight: "bold",
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    workTeams: {
        marginTop: 25
    },
    workTeamsList: {
        flexDirection: 'row',
        gap: 20,
    },
    teamImage: {
        width: 75,
        height: 75
    },
    teamName: {
        textAlign: 'center',
        fontSize: 15
    },
    addButton: {
        backgroundColor: '#FFFFFF',
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderWidth: 1
    },
    section: {
        marginTop: 25,
        borderRadius: 25,
        padding: 15,
        width: '100%',
        height: 250,
        marginBottom: 25
    },
    sectionName: {
        flexDirection: 'row'
    },
    detailsButton: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -45 }],
        paddingVertical: 10,
        paddingHorizontal: 25
    }
})