import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

const AddTask = ({ addButton }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTaskHandler = () => {
    addButton(taskInput);
    setTaskInput("");
  };

  return (
    <View style={styles.header}>
      <TextInput
        onChangeText={(text) => setTaskInput(text)}
        style={styles.inpitStyle}
        placeholder="Task əlavə et"
        value={taskInput}
      />
      <Button onPress={addTaskHandler} title="Əlavə et" />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
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
});
