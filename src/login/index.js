import React, { useState } from "react";
import {
  Text,
  View,
  // Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import SvgUri from "expo-svg-uri";
import SvgComponent from "./../Component/SvgLogo";

import styles from "./styles";

export default function Login() {
  const [eyeIcon, setEyeIcon] = useState(false);
  return (
    <View style={styles.container}>
      {/* <<<<<<<<<<<<< HEADER >>>>>>>>>>>>> */}
      <LinearGradient
        style={styles.linearGradient}
        colors={["#2E3035", "#4A4D54", "#656972"]}
      >
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>Bejelentkezés</Text>
          <SvgComponent />
        </View>
      </LinearGradient>

      {/* <View
        style={{
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 40,
          elevation: 30,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "grey",
          height: 250,
        }}
      >
        <Text>Mine</Text>
        <Text>Mine</Text>
        <Text>Mine</Text>
        <Text>Mine</Text>
        <Text>Mine</Text>
      </View> */}

      {/* <<<<<<<<<<<<<<< INPUTS >>>>>>>>>>>>> */}
      <View style={styles.inputsView}>
        <TextInput style={styles.input} placeholder="E-mail:" />
      </View>
      <View style={styles.passwordInputView}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={eyeIcon}
        />
        {eyeIcon ? (
          <Entypo
            name="eye"
            size={24}
            color="#656972"
            onPress={() => setEyeIcon(!eyeIcon)}
          />
        ) : (
          <Entypo
            name="eye-with-line"
            size={24}
            color="#656972"
            onPress={() => setEyeIcon(!eyeIcon)}
          />
        )}
      </View>

      <Text style={styles.txt1}>Elfelejtetted jelszavad?</Text>

      {/* <<<<<<<<<<<<<<< LOGIN BUTTON >>>>>>>>>>>>> */}
      <TouchableOpacity>
        <LinearGradient
          style={styles.btn1}
          colors={["#60B45E", "#4FAE69", "#3CA874"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.txt2}>BEJELENTKEZÉS</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.txt4}>vagy</Text>

      {/* <<<<<<<<<<<<<<< SOCIAL BUTTONS >>>>>>>>>>>>> */}
      <View style={styles.socialBtnView}>
        <TouchableOpacity style={styles.socialBtn}>
          {/* <Image source={require("./../../assets/google.svg")} /> */}
          <Svg
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.585 7.35c0-.493-.044-.985-.13-1.47h-6.77v2.78h3.869a3.306 3.306 0 01-1.436 2.17v1.8h2.322c1.36-1.25 2.145-3.092 2.145-5.28z"
              fill="#4285F4"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.685 14.374a6.848 6.848 0 004.755-1.743l-2.322-1.802a4.328 4.328 0 01-2.433.685 4.283 4.283 0 01-4.02-2.962H1.261v1.862a7.184 7.184 0 006.423 3.96z"
              fill="#34A853"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.664 8.552a4.27 4.27 0 010-2.732V3.96H1.262a7.213 7.213 0 000 6.454l2.402-1.862z"
              fill="#FBBC05"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.685 2.857a3.875 3.875 0 012.746 1.076l2.062-2.062A6.91 6.91 0 007.685 0a7.184 7.184 0 00-6.423 3.96L3.664 5.82a4.287 4.287 0 014.021-2.963z"
              fill="#EA4335"
            />
          </Svg>

          <Text style={styles.txt6}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Svg
            width={7}
            height={11}
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.165 10.902V5.937h1.899l.284-1.944H4.165V2.755c0-.563.177-.945 1.09-.945h1.158V.076A17.759 17.759 0 004.717 0C3.038 0 1.89.903 1.89 2.562v1.431H0v1.944h1.89v4.965h2.275z"
              fill="#1877F2"
            />
          </Svg>
          {/* <Image source={require("./../../assets/facebook.svg")} /> */}
          <Text style={styles.txt3}>Facebbok</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.txt5}>Még új vagy? Regisztálj most!</Text>
    </View>
  );
}
