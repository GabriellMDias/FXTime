import { ThemedSection } from "@/components/ThemedSection";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import FormInput from "@/components/FormInput";
import ThemedButton from "@/components/ThemedButton";

export default function Signup() {
    const navigateToLogin = () => {
        router.replace("/login")
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ThemedSection style={styles.leftHeader}>
                    <ThemedSection style={styles.leftHeaderTextContent}>
                        <TouchableOpacity onPress={navigateToLogin}>
                            <ThemedText style={styles.firstTextSignupScreen}>
                                <ThemedText style={styles.textUnderline}>Login</ThemedText>
                                <Ionicons name="arrow-forward"/>
                            </ThemedText>
                        </TouchableOpacity> 
                        <ThemedText style={styles.secondTextSignupScreen}>Cadastro</ThemedText>
                    </ThemedSection>
                </ThemedSection>
        
                <Image source={require('@/assets/images/Logo.png')} style={styles.logo}/>
        
                <ThemedSection style={styles.form}>
                    <FormInput 
                        label='E-mail'
                        placeholder='E-mail' 
                        viewStyle={styles.formInput}
                        style={styles.textInputStyle}/>

                    <FormInput 
                        label='Número de telefone'
                        placeholder='Número de telefone' 
                        viewStyle={styles.formInput}
                        style={styles.textInputStyle}/>

                    <FormInput 
                        label='Senha'
                        placeholder='Senha'
                        secureTextEntry={true} 
                        viewStyle={styles.formInput}
                        style={styles.textInputStyle}/>   
    
                    <FormInput 
                        label='Confirmar Senha'
                        placeholder='Confirmar Senha'
                        secureTextEntry={true} 
                        viewStyle={styles.formInput}
                        style={styles.textInputStyle}/>  
    
                    <ThemedButton style={styles.button}>
                        <ThemedText> Cadastrar </ThemedText>
                    </ThemedButton>
                </ThemedSection>
            </ScrollView>
            
        </View>
    )
}