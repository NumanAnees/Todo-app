import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#34ebb4",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
