import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      
      <Text>Hello, World!</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});