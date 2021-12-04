import React, { useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import Card from "../Card";
import Input from "../Input/Input";

export default function List() {
  const [list, setList] = useState([]);
  const [addItem, setAddItem] = useState("");

  const rendertoDoList = ({ item }) => (
    <Card toDo={item} remove={() => removeList(item)} />
  );

  const addList = (text) => {
    setList([...list, (text = text)]);
    setAddItem("");
  };

  const removeList = (item) => {
    setList(list.filter((i) => i !== item));
    Alert.alert("To-do Deleted Successfully");
  };

  return (
    <View style={{ flex: 1, paddingVertical: 30, backgroundColor: "#2f4f4f" }}>
      <FlatList
        keyExtractor={(item) => item}
        data={list}
        renderItem={rendertoDoList}
      />
      <Text
        style={{
          color: "#B9CFCF",
          fontSize: 22,
          fontStyle: "italic",
          textAlign: "center",
          padding: 10,
        }}
      >
        Long Press{"\n"} to {"\n"} Delete
      </Text>
      <Input addItem={addItem} setAddItem={setAddItem} addList={addList} />
    </View>
  );
}
