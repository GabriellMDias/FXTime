import { View, StyleSheet, StyleProp, TextStyle, ViewStyle } from "react-native";
import { TextInput, type TextInputProps} from "react-native";
import { ThemedText } from "./ThemedText";

export type FormInputProps = TextInputProps & {
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    viewStyle?: StyleProp<ViewStyle>
}

export default function FormInput({style, label, labelStyle, viewStyle, ...otherProps}: FormInputProps) {
    return (
        <View style={viewStyle}>
            <ThemedText style={labelStyle}>
                {label}
            </ThemedText>
            <TextInput style={[styles.textInput, style]} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    }
})