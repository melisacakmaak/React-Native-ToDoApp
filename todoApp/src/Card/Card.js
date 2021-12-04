import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Card.style";

const Card = ({ toDo, remove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textCard}>
        <TouchableOpacity onLongPress={remove}>
          <Text style={styles.title}> {toDo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
