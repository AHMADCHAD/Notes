import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddNote = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});