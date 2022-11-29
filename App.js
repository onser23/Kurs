import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import RenderTasks from "./src/components/RenderTasks";
import AddTask from "./src/components/AddTask";
export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (taskInput) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: taskInput, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.main}>
      <AddTask addButton={addTasks} />
      <View style={styles.taskContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <RenderTasks item={item} />}
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

  taskContainer: {
    flex: 4,
    marginTop: 10,
  },
});
