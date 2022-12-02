import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const AddTask = ({ addButton, visible, modalIsVisibleHandlerProp }) => {
  const [taskInput, setTaskInput] = useState("");

  const addTaskHandler = () => {
    addButton(taskInput);
    setTaskInput("");
  };

  const cancelTaskButton = () => {
    modalIsVisibleHandlerProp(false);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.header}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.goalImage}
        />
        <TextInput
          onChangeText={(text) => setTaskInput(text)}
          style={styles.inpitStyle}
          placeholder="Task əlavə et"
          value={taskInput}
          // placeholderTextColor="#fff"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button color="#b180f0" onPress={addTaskHandler} title="Əlavə et" />
          </View>
          <View style={styles.button}>
            <Button
              color="#f31282"
              onPress={cancelTaskButton}
              title="Ləğv et"
            />
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
    backgroundColor: "#311b6b",
  },
  goalImage: {
    width: 120,
    height: 120,
    margin: 17,
  },
  inpitStyle: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "25%",
    marginHorizontal: 8,
  },
});
