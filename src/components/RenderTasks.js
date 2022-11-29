import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RenderTasks = ({ item, deleteTask }) => {
  return (
    <View style={styles.taskTextContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteTask(item)}
        style={({ pressed }) => pressed && styles.pressedTask}
      >
        <Text style={styles.taskText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default RenderTasks;

const styles = StyleSheet.create({
  taskTextContainer: {
    backgroundColor: "#5e0acc",
    margin: 8,
    // padding: 6,
    borderRadius: 6,
  },
  taskText: { color: "#fff", fontSize: 15, padding: 8 },
  pressedTask: {
    opacity: 0.5,
  },
});
