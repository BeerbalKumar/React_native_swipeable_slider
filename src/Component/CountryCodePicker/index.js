import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from "react-native-country-picker-modal";

export default class CountryCodePicker extends React.Component {
    constructor(){
        super();
        this.state={
            countryCode:"",
            countryName:""
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <CountryPicker
          withEmoji
          withCallingCode={true}
          onSelect={(country) => console.log(country)}
          withFlagButton
          withFlag={true}
          withAlphaFilter
          visible
          Text={<Text>hglklk</Text>}
        >kljhkljhk</CountryPicker>
        <Text>{getAllCountries !== undefined && "getAllCountries OK"}</Text>
        <Text>{getCallingCode !== undefined && "getCallingCode OK"}</Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
