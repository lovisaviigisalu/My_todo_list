import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './style';

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="Delete" onPress={() => deleteTodo(item.key)} />
    </View>
  );
};

export default TodoItem;
