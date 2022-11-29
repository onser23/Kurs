import { StyleSheet, Text, View } from "react-native";

const RenderTasks = ({ item }) => {
  return (
    <View style={styles.taskTextContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );
};

export default RenderTasks;

const styles = StyleSheet.create({
  taskTextContainer: {
    backgroundColor: "#6d1ea3",
    margin: 10,
    padding: 6,
    borderRadius: 5,
  },
  taskText: { color: "#fff", fontSize: 15 },
});