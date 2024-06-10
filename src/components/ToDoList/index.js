import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from '../ToDoItem';
import { styles } from './style';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem item={item} deleteTodo={deleteTodo} />
      )}
    />
  );
};

export default TodoList;

