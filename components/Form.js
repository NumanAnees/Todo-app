import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Form({ handlingSubmit }) {
  const [text, settext] = useState("");
  const changeHandler = (val) => {
    settext(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          handlingSubmit(text);
        }}
        title="Add todo"
        color="#34ebb4"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
