import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from '../../components/AddToDo';
import TodoList from '../../components/ToDoList';
import { styles } from './style';
import { completedTasks } from '../../data/tasks';
const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, key: Date.now().toString() }]);
  };

  const deleteTodo = (key) => {
    const todo = todos.find(todo => todo.key === key);
    completedTasks.push(todo);
    setTodos(todos.filter(todo => todo.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </View>
  );
};

export default HomeScreen;
