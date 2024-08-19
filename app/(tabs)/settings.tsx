import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'teal'
  },
});
