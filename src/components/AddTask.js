import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

const AddTask = ({ addButton, visible }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTaskHandler = () => {
    addButton(taskInput);
    setTaskInput("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.header}>
        <TextInput
          onChangeText={(text) => setTaskInput(text)}
          style={styles.inpitStyle}
          placeholder="Task əlavə et"
          value={taskInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button onPress={addTaskHandler} title="Əlavə et" />
          </View>
          <View style={styles.button}>
            <Button onPress={addTaskHandler} title="Ləğv et" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    paddingBottom: 24,
  },
  inpitStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonsContainer: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "25%",
    marginHorizontal: 8,
  },
});
