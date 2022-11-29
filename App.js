import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
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

  const deleteHandler = (item) => {
    // console.log("jjj", item.key);
    setTasks((currentTasks) => {
      return currentTasks.filter((tasks) => tasks.key !== item.key);
    });
  };

  return (
    <View style={styles.main}>
      <AddTask addButton={addTasks} />
      <View style={styles.taskContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <RenderTasks deleteTask={deleteHandler} item={item} />
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

  taskContainer: {
    flex: 4,
    marginTop: 10,
  },
});
