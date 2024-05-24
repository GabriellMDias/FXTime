import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
      height: '100%', 
  },
  scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
  },
  leftHeader: {
      alignSelf: 'flex-start',
      flexDirection: 'row', 
      borderBottomRightRadius: 50,
  },
  leftHeaderTextContent: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomRightRadius: 50,
  },
  firstTextLoginScreen: {
      fontWeight: 'bold',
      textAlign: "left"
  },
  secondTextLoginScreen: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10
  },
  firstTextSignupScreen: {
      fontWeight: 'bold',
      textAlign: "right"
  },
  secondTextSignupScreen: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10
  },
  textUnderline: {
      textDecorationLine: "underline"
  },
  logo: {
      width: 120,
      height: 120,
      alignSelf: 'center', // Center the logo horizontally
      marginTop: 20
  },
  form: {
      marginTop: 20,
      paddingBottom: 50, // Ensure there's space at the bottom for better visibility
      width: '100%',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      paddingTop: 50,
  },
  formInput: {
      paddingHorizontal: 40
  },
  textInputStyle: {
      padding: 5
  },
  button: {
      marginHorizontal: 80,
      marginTop: 20
  }
})