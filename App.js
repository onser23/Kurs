import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    // setTasks([...tasks, { text: taskInput, key: Math.random().toString() }]);
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: taskInput, key: Math.random().toString() },
    ]);
  };
  // console.log(tasks);
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TextInput
          onChangeText={(text) => setTaskInput(text)}
          style={styles.inpitStyle}
          placeholder="Task əlavə et"
        />
        <Button onPress={addTask} title="Əlavə et" />
      </View>
      <View style={styles.taskContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    paddingBottom: 24,
  },
  inpitStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
  taskContainer: {
    flex: 4,
    marginTop: 10,
  },
  taskTextContainer: {
    backgroundColor: "#6d1ea3",
    margin: 10,
    padding: 6,
    borderRadius: 5,
  },
  taskText: { color: "#fff", fontSize: 15 },
});
