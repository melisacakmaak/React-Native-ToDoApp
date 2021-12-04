import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./Input.style";

const Input = ({ addItem, setAddItem, addList }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          color: "#FFF",
          borderBottomWidth: 1,
          borderColor: "#FFF",
          fontSize:18
        }}
        placeholder="Add To Do..."
        placeholderTextColor="#96E6E6"
        onChangeText={(text) => setAddItem(text)}
        value={addItem}
      />
      <TouchableOpacity style={styles.button} onPress={() => addList(addItem)}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
