import ThemedDivider from "@/components/ThemedDivider";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, ScrollView, View, Button, Text, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import FormInput from "@/components/FormInput";
import ThemedButton from "@/components/ThemedButton";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Add() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);

  const descriptionBgColor = useThemeColor({}, 'sectionBackground');
  const descriptionTextColor = useThemeColor({}, 'text');

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    if(mode === 'date') {
        setMode('time')
    } else {
        showTimepicker()
        setShow(false);
    }
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    return(
        <ThemedView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContent}>
                    <ThemedText style={styles.headerText}>
                        Adicionar Tarefa
                    </ThemedText>
                </View>

                <ThemedDivider />

                <View style={styles.options}>
                    <View style={styles.parameter}>
                        <View style={styles.row}>
                            <ThemedText>
                                <Ionicons name="calendar" size={24} />
                            </ThemedText>
                            <ThemedText>
                                Data:
                            </ThemedText>
                        </View>
                        <View style={styles.row}>
                            <ThemedText>
                                {date?.toLocaleString('pt-br', 
                                    {
                                        day: '2-digit', 
                                        month: '2-digit', 
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'    
                                    })}
                            </ThemedText>
                            <TouchableOpacity onPress={showDatepicker}>
                                <ThemedText>
                                    <Ionicons name="chevron-down" size={24}/>
                                </ThemedText>
                            </ TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.parameter}>
                        <View style={styles.row}>
                            <ThemedText>
                                <Ionicons name="people" size={24} />
                            </ThemedText>
                            <ThemedText>
                                Responsável:
                            </ThemedText>
                        </View>
                        
                    </View>
                    <View style={styles.parameter}>
                        <View style={styles.row}>
                            <ThemedText>
                                <Ionicons name="checkbox" size={24} />
                            </ThemedText>
                            <ThemedText>
                                Feito:
                            </ThemedText>
                        </View>
                    </View>
                </View>
                
                <ThemedDivider />

                <FormInput 
                    placeholder="Descrição" 
                    style={[styles.description, {backgroundColor: descriptionBgColor, color: descriptionTextColor}]} 
                    placeholderTextColor='#C0C0C0'
                    multiline={true}
                    textAlignVertical="top"/>

                <ThemedButton style={styles.button}>
                    <ThemedText> Adicionar </ThemedText>
                </ThemedButton>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date ?? new Date()}
                    mode={mode}
                    is24Hour={true}
                    onChange={(event, selectedDate) => onChange(event,selectedDate)}
                  />
                )}
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
    row: {
        flexDirection: 'row',
        gap: 10
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    options: {
        rowGap: 20,
        paddingVertical: 20,
    },
    parameter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        borderWidth: 0,
        padding: 10,
        marginBottom: 10,
        height: 450
      },
    button: {
        marginHorizontal: 25,
    }
})