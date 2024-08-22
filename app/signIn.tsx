import { Platform, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const SignIn = () => {
  return (
    <View style={[styles.container, Platform.OS === 'web' && styles.webContainer]}>
      <Text style={styles.title}>Sign-In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <Pressable style={styles.signInButton} onPress={() => console.log('Sign-In pressed')}>
        <Text style={styles.signInButtonText}>Sign-In</Text>
      </Pressable>

      <Text style={styles.orText}>OR</Text>

      <Pressable style={styles.socialButton} onPress={() => console.log('Google Sign-In pressed')}>
        <AntDesign name="google" size={24} color="white" />
        <Text style={styles.socialButtonText}>Sign-In with Google</Text>
      </Pressable>

      <Pressable
        style={[styles.socialButton, { backgroundColor: '#3b5998' }]}
        onPress={() => console.log('Facebook Sign-In pressed')}
      >
        <FontAwesome name="facebook" size={24} color="white" />
        <Text style={styles.socialButtonText}>Sign-In with Facebook</Text>
      </Pressable>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <Pressable onPress={() => router.push('/signUp')}>
          <Text style={styles.signUpLink}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1b3340',
  },
  webContainer: {
    flex: 1,
    maxWidth: 400, // Increased the max width slightly
    width: '100%', // Ensures the container takes the full width up to the maxWidth
    marginVertical: 10, // Removes margin between the top and bottom
    marginHorizontal: 'auto', // Centers the container horizontally
    paddingVertical: 10, // Removes padding at the top and bottom
    paddingHorizontal: 20, // Maintains the padding on the sides
    backgroundColor: '#1b3340',
    justifyContent: 'center',
    borderRadius: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5ddced',
    marginBottom: 20,
    fontFamily: 'BarlowExtraBold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2a3b47',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#fcfefd',
    fontFamily: 'RobotoRegular',
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#32b5a4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fcfefd',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'BarlowBold',
  },
  orText: {
    color: '#fcfefd',
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'RobotoRegular',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#db4437', // Google button color
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
  },
  socialButtonText: {
    color: '#fcfefd',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'RobotoMedium',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: '#fcfefd',
    fontSize: 16,
    fontFamily: 'RobotoRegular',
  },
  signUpLink: {
    color: '#5ddced',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'RobotoBold',
  },
});
