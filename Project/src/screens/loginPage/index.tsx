import React from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { Iconsvg, xml } from "../../assets/svgIcons";
import styles from "./styles";


const LoginPage =() =>{
      return(
        <SafeAreaView>
            <View style={styles.container}>
                <Iconsvg 
                  xml={xml.logo}
                  height={180}
                  width={180}
                  style={styles.logo}
                />
                <Iconsvg 
                xml={xml.login.loginLogo}
                  height={300}
                  width={300}
                  style={styles.loginLogo}
                />
                <Text style={styles.text}>Welcome to My Account</Text>
                <TouchableOpacity style={styles.textView}>
                    <Text style={styles.login}>Login</Text>
                      <Iconsvg 
                        xml={xml.greaterthan}
                        height={12}
                        width={12}
                        style={styles.greaterthan}
                      />
                </TouchableOpacity>
                <Iconsvg 
                  xml={xml.footer}
                  style={styles.footer}
                />
            </View>
        </SafeAreaView>
  );
};

export default LoginPage;