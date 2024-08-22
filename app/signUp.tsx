import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Platform, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons'; // Icon for Google
import { FontAwesome } from '@expo/vector-icons'; // Icon for Facebook

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    // Navigate to the home page or dashboard after successful signup
    router.push('/(tabs)');
  };

  return (
    <View style={[styles.container, Platform.OS === 'web' && styles.webContainer]}>
      <Text style={styles.title}>Create an Account</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#8a8a8a"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#8a8a8a"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8a8a8a"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Signup Button */}
      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      {/* Sign Up with Google */}
      <Pressable style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
        <AntDesign name="google" size={24} color="#fcfefd" style={styles.icon} />
        <Text style={styles.socialButtonText}>Sign Up with Google</Text>
      </Pressable>

      {/* Sign Up with Facebook */}
      <Pressable style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
        <FontAwesome name="facebook" size={24} color="#fcfefd" style={styles.icon} />
        <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
      </Pressable>

      {/* Already have an account */}
      <Pressable style={styles.link} onPress={() => router.push('/signIn')}>
        <Text style={styles.linkText}>Already have an account? Sign In</Text>
      </Pressable>
    </View>
  );
};

// Styles for the Signup page
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
    maxWidth: 400,
    width: '100%',
    marginVertical: 10,
    marginHorizontal: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1b3340',
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5ddced',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#5ddced',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    color: '#fcfefd',
    backgroundColor: '#2c3e50',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#32b5a4',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fcfefd',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  socialButtonText: {
    color: '#fcfefd',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#5ddced',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default SignUp;
