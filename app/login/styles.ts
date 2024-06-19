import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
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
      alignSelf: 'center',
      
  },
  form: {
      flex: 1,
      marginTop: 20,
      paddingBottom: 50,
      width: '100%',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      paddingTop: 50,
      bottom: 0
  },
  formInput: {
      paddingHorizontal: 40
  },
  textInputStyle: {
      padding: 5
  },
  button: {
      marginHorizontal: 80,
      paddingVertical: 10
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    gap: 25
  }
})