import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  action?: () => void;
}

const SplashScreenButton: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <Pressable onPress={action} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#32b5a4',
    borderRadius: 9999, // Fully rounded
    paddingVertical: 12, // py-3 equivalent
    paddingHorizontal: 32, // px-8 equivalent
    marginTop: 48, // mt-12 equivalent
  },
  buttonText: {
    color: '#fcfefd',
    fontSize: 18, // text-lg equivalent
    textAlign: 'center',
    fontFamily: 'BarlowBold',
  },
});

export default SplashScreenButton;
