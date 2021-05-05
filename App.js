import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import Login from "./src/login";
import CountryCodePicker from "./src/Component/CountryCodePicker";
import MyCarousel from "./src/Component/MyCarousel";

export default function App() {
  const [eyeIcon, setEyeIcon] = useState(false);
  return <MyCarousel />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
