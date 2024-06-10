import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './style';
import { completedTasks } from '../../data/tasks';

const DoneScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      <FlatList
        data={completedTasks}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default DoneScreen;
