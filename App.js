import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Unit Conveter</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'write a task'}></TextInput>


        <TouchableOpacity >
          <View >
          </View>
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



});
