import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import RenderTasks from "./src/components/RenderTasks";
import AddTask from "./src/components/AddTask";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addTasks = (taskInput) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: taskInput, key: Math.random().toString() },
    ]);
    modalIsVisibleHandler();
  };

  const deleteHandler = (item) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((tasks) => tasks.key !== item.key);
    });
  };

  const startAddTaskHandler = () => {
    setModalIsVisible(true);
  };

  const modalIsVisibleHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.main}>
      <Button
        title="Task əlavə et"
        color="#5e0acc"
        onPress={startAddTaskHandler}
      />
      <AddTask
        modalIsVisibleHandlerProp={modalIsVisibleHandler}
        visible={modalIsVisible}
        addButton={addTasks}
      />

      <View style={styles.taskContainer}>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <RenderTasks deleteTask={deleteHandler} item={item} />
            )}
          />
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Task əlavə edilməyib</Text>
          </View>
        )}
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
