import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
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
  buttonStop: {
    borderColor: "#ffa889",
  },
  buttonStopText: {
    color: "#ffa889",
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
  const [timer, setTimer] = useState(10);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = padTime(Math.floor(timer / 60));
  const seconds = padTime(timer - Number(minutes) * 60);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer: number) => prevTimer - 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.timerText}>
        {minutes} : {seconds}
      </Text>
      {isRunning ? (
        <TouchableOpacity
          onPress={stopTimer}
          style={[styles.button, styles.buttonStop]}
        >
          <Text style={[styles.buttonText, styles.buttonStopText]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startTimer} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
