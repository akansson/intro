import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const num = parseInt(text);
    if (isNaN(num)) {
      setMessage("Please enter a valid number.");

      return;
    }
    if (num < targetNumber) {
      setMessage("⬇️ Too low! Try again.");
    } else if (num > targetNumber) {
      setMessage("⬆️ Too high! Try again.");
    } else {
      setMessage("🎉 Correct! You win! 🏆");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textIntro}>Guessing Game</Text>
      <TextInput
        placeholder="Pick a number between 1 - 100"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={handleGuess}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "center",
            padding: 12,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c7a7b",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  textIntro: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    height: 50,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
  },
  message: {
    fontSize: 22,
    marginTop: 20,
    color: "white",
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    width: "60%",
    backgroundColor: "#50C878",
    borderRadius: 8,
  },
});
