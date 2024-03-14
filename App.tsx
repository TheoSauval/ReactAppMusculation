import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
