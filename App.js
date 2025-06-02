import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const answerText = () => {
    const [text, setText] = React.useState("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textIntro}>Guessing Game</Text>
      <TextInput
        label="Enter number here"
        value={Text}
        onChangeText={(Text) => setText(Text)}
        style={styles.input}
      ></TextInput>
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textIntro: {
    fontsize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
