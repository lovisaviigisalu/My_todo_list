import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './style';
const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (text) => {
    setText(text);
  };

  const handleAddTodo = () => {
    addTodo(text);
    setText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new todo"
        onChangeText={handleChange}
        value={text}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodo;
