import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function App() {

  const [value, setValue] = useState('');

  // const handleValue = () => {
  //   setValue('hello Java')
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Unit Conveter</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={' Number'}></TextInput>
        <Picker style={styles.piker}
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) =>
            setValue(itemValue)
          }>
          <Picker.Item label="Kilometer" value="kilometer" />
          <Picker.Item label="Meter" value="meter" />
          <Picker.Item label="Sentimeter" value="sentimer" />
          <Picker.Item label="Millimetre" value="millimetre" />
          <Picker.Item label="Foot" value="foot" />
          <Picker.Item label="Inch" value="inch" />
        </Picker>
        <TextInput style={styles.input} placeholder={' Number'}></TextInput>
        <Picker style={styles.piker}
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) =>
            setValue(itemValue)
          }>
          <Picker.Item label="Kilometer" value="kilometer" />
          <Picker.Item label="Meter" value="meter" />
          <Picker.Item label="Sentimeter" value="sentimer" />
          <Picker.Item label="Millimetre" value="millimetre" />
          <Picker.Item label="Foot" value="foot" />
          <Picker.Item label="Inch" value="inch" />
        </Picker>
        <TouchableOpacity >
          <View style={styles.resultView}>{value}</View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0',
    color: "#fff"
  },
  header: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10

  },

  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff"
  },

  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'colomn',
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,

  },

  input: {
    paddingVertical: 15,
    display: "inline-block",
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: '#C0C0C0',
    width: 250
  },

  piker: {
    width: 250,
    borderRadius: 50,
    backgroundColor: "#fff",
    height: 40,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: '#C0C0C0',

  },

  resultView: {
    fontSize: 24,
    fontWeight: "700"
  }



});
