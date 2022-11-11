import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 10,
    borderColor: "#89AAFF",
    height: screen.width / 2,
    width: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 45,
    color: "#89AAFF",
  },
  timerText: {
    fontSize: 90,
    color: "#fff",
  },
});

function padTime(time: number) {
  return time.toString().padStart(2, "0");
}

export default function App() {
  const [timer, setTimer] = useState(90);

  // const minutes = padTime(Math.floor(timer / 60));
  // const seconds = padTime(timer - minutes * 60);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.timerText}>{timer}</Text>
      <TouchableOpacity onPress={() => null} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}
