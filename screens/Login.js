import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState, useReducer, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from "react-native-animatable"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import { FONTS, COLORS, SIZES, icons } from '../constants'
import Input from '../components/Input'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import Button from "../components/Button"
import SocialButton from '../components/SocialButton'



const isTestMode = true

const initialState = {
  inputValues: {
    ID: isTestMode ? '123456' : '',
    password: isTestMode ? '**********' : '',
  },
  inputValidities: {
    email: false,
    password: false,
    ID: false,
    Username: false,
  },
  formIsValid: false,
}

const Login = ({ navigation }) => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)
  const [isChecked, setChecked] = useState(false)

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState]
  )
  const facebookAuthHandler = () => {

  }
  const test = () => {
    // navigation.navigate('Barcode') 
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);

  }

  const googleAuthHandler = () => {
}

const twitterAuthHandler = () => {

  }

  return (
    

    
    
<SafeAreaView style={styles.container}>
<KeyboardAwareScrollView>
<View style={styles.background}>
        

        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { fontFamily: 'Roboto', fontWeight: 'bold' }]}>Rack<Text style={{ color: '#4CB525' }}>POS</Text>
          </Text>
          <View>
          <Text style={styles.subHeaderTitle}><Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: COLORS.black }}>Price Inquiry</Text>
          </Text>
          <Text style={[styles.welcome, { color: '#4CB525', marginTop: 70,} ]}>Hi, Welcome Back!</Text>
          </View>
        </View>
        
        <Animatable.View
          style={styles.footer}
        >
            <View style={styles.sectionstyle}>
                <Image
                    source={require("../theme/assets/icons/store.png")}
                    style={styles.store}
                />

                <Input
                    id="Store ID"
                    placeholder="Store ID"
                    placeholderTextColor={COLORS.black}
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities["Store ID"]}
                    keyboardType="email-address"
                /> 
            </View>

            <View style={styles.sectionstyle}>
                <Image
                    source={require("../theme/assets/icons/username.png")}
                    style={styles.store}
                />

                <Input
                    id="Username"
                    placeholder="Username"
                    placeholderTextColor={COLORS.black}
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities['Username']}
                    keyboardType="email-address"
                /> 
            </View>
            
            <View style={styles.sectionstyle}>

              <Image
                source={require("../theme/assets/icons/password.png")}
                style={styles.store}/>

            <Input
              onInputChanged={inputChangedHandler}
              errorText={formState.inputValidities['password']}
              autoCapitalize="none"
              id="password"
              placeholder="Password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={true}
            />
            </View>
            </Animatable.View>

           <TouchableOpacity
  onPress={() => navigation.navigate("Verification")}>
  <Text style={{ ...FONTS.body4, marginLeft: 15, marginTop: -20 }}>Forgot Password ?</Text>
</TouchableOpacity>

            <View style={styles.forgotpassword}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              </View>
    
            </View>

            <Button
              title="LOGIN"
              isLoading={isLoading}
              onPress={() => test()}
              />
              
            <View style={styles.Rack}>
                  
              <View style={styles.line} />
              <View style={styles.line} />
            </View>

            <View style={{
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: SIZES.padding2
                }}>
                <View style={styles.Rackapp}>
                </View>
                    

                <View style={styles.make}>
                    <Image
                        source={require('../theme/assets/img/BarcodeImg.png')}
                        style={{ width: 300, height: 50, marginTop: -115, }}
                    />
                    <Image
                        source={require('../theme/assets/img/RackApp.png')}
                        style={{ width: 200, height: 60, marginTop: 40, alignItems: 'center', }}
                    />
                        <Text style={styles.footerText}>www.rackappsolutions.com</Text>
                        <Text style={styles.footerText}>contact@rackappsolutions.com</Text>
                        <Text style={styles.footerText}>+63 9366590757</Text>
                </View>

            </View>
   
</View>
</KeyboardAwareScrollView>
</SafeAreaView>
  )
} 


const styles = StyleSheet.create({
  
  container: {
    flex: 1,

  },
  
  background: {
    flex: 1,
    backgroundColor: '#E4F3E3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 55,
  },
  header: {
    
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 4
  },
  headerTitle: {
    fontSize: 30,
    color: COLORS.black,
  },
  subHeaderTitle: {
    fontSize: 25,
    color: COLORS.black,
    marginTop: -10,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
      fontWeight: 'bold',
      marginTop: 90,
      marginRight: 150,
      textAlign: 'left',
  },
  footer: {
    flex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
inputHeader:{
    textTransform: 'uppercase',
    ...FONTS.body4,
    marginVertical: 4
  },
  forgotpassword: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginRight: 180,
  },
  
  Rack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 180,
  },

  make: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginBottom: 0,
    textAlign: 'left',
    fontFamily: 'Roboto',
  },
  sectionstyle: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    height: 40,
    margin: 20,
    borderBottomColor: 'RED',
    borderBottomWidth: 1,
  },
  store:{
    padding: 10,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  }
  
})
export default Login