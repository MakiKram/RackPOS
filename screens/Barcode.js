import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState, useReducer, useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import { FONTS, COLORS, SIZES } from '../constants'
import Input from '../components/Input'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'
import Button from "../components/Button"



const Barcode = ({
  id,
  placeholder,
  placeholderTextColor,
  keyboardType,
  textAlign,
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setFocused(true);
    if (value === placeholder) {
      setValue('');
    }
  };

  const handleBlur = () => {
    setFocused(false);
    if (value === '') {
      setValue(placeholder);
    }
  };

  return (
    

    
    
<SafeAreaView style={styles.container}>

<View style={styles.background}>
        

        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { fontFamily: 'Roboto', fontWeight: 'bold' }]}>Rack<Text style={{ color: '#4CB525' }}>POS</Text>
          </Text>
          <View>
          <Text style={styles.subHeaderTitle}><Text style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: COLORS.black }}>Price Inquiry</Text>
          </Text>
          <Text style={[styles.welcome, { color: '#4CB525', marginTop: 120,} ]}>Scan your product</Text>
          </View>
          <Text style={[styles.reference, { color: 'black', marginTop: 30,} ]}>Barcode Reference Number</Text>
          
         

        </View>
        <View style={styles.sectionstyle}>
                <TextInput
                    id="Store ID"
                    placeholder="B-ABC1234"
                    placeholderTextColor={COLORS.black}
                    keyboardType="default"
                    
                    textAlign='center'
                /> 
          </View>

             <View style={styles.forgotpassword}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              </View>
    
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
    paddingHorizontal: 22,
    paddingVertical: 10,
  },
  header: {
    
    alignItems: 'center',
    paddingHorizontal: 20,
    
   
  },
  headerTitle: {
    marginTop: 10,
    fontSize: 30,
    color: COLORS.black,
  },
  subHeaderTitle: {
    fontSize: 25,
    color: COLORS.black,
    marginTop: -10,
    paddingVertical: -140,
    textAlign: 'center'
  },
  welcome: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 200,
      textAlign: 'center',
  },
  reference:{
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 200,
    textAlign: 'center',
  },
  Rack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 180,
  },

  make: {
    marginTop: 290,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    margin: 10,
    borderBottomColor: 'RED',
    borderBottomWidth: 1.3,
    
  },

})

export default Barcode