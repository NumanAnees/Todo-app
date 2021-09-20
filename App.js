import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "make an app", key: "2" },
    { text: "play piano", key: "3" },
  ]);
  const handlingDelete = (key) => {
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.key != key;
      });
    });
  };
  const handlingSubmit = (text) => {
    let check = false;
    todos.forEach((e) => {
      if (e.text === text) {
        check = true;
      }
    });
    if (text.length > 3) {
      if (check) {
        return Alert.alert("OOPS!", "You can not add the same item", [
          {
            text: "ok",
            onPress: () => console.log("alert done"),
          },
        ]);
      } else {
        setTodos((prev) => {
          return [{ text: text, key: Math.random().toString() }, ...prev];
        });
      }
    } else {
      Alert.alert("OOPS!", "Todos must be 4 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form handlingSubmit={handlingSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return <TodoItem item={item} handlingDelete={handlingDelete} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
