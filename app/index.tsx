import { Platform } from 'react-native';
import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import SplashScreenButton from '../components/SplashScreenButton';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';


let Player: React.ComponentType<any> | undefined;

if (Platform.OS === 'web') {
  // Only import Player for web
  Player = require('@lottiefiles/react-lottie-player').Player;
}

import { HelloWave } from '@/components/HelloWave';

const Welcome = () => {
  const animation = useRef(null);

  return (
    <View style={{ backgroundColor: '#1b3340', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 6 }}>
      
      {/* Conditional Lottie Animation Section */}
      <Animated.View 
        style={{ width: '100%', alignItems: 'center' }}
        entering={FadeInDown.duration(400).springify()}
      >
        {Platform.OS === 'web' ? (
          Player && (
            <Player
              autoplay
              loop
              src="/assets/animation/animal-lover.json"  // Web path to Lottie JSON file
              style={{ height: 250, width: '100%' }}
            />
          )
        ) : (
          <LottieView
            ref={animation}
            source={require('../assets/animation/animal-lover.json')}  // Mobile path to Lottie JSON file
            autoPlay
            loop
            style={{ height: 400, width: '100%' }}
          />
        )}
      </Animated.View>

      {/* Animated Text Section */}
      <Animated.View 
        style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
        entering={FadeInDown.duration(400).delay(400).springify()}
      >
        <Text 
          style={{ fontSize: 24, fontWeight: 'bold', color: '#5ddced', textAlign: 'center', fontFamily: 'BarlowExtraBold' }}
        >
          Connecting Pet Owners with Trusted Veterinarians & Pet Sellers
        </Text>

        <Text 
          style={{ fontSize: 18, color: '#fcfefd', marginTop: 8, textAlign: 'center', lineHeight: 24, fontFamily: 'BarlowSemiBold' }}
        >
          Welcome to VetLink!<HelloWave /> Your one-stop platform for all your pet care needs. 🐶
        </Text>
      </Animated.View>

      {/* Animated Button Section */}
      <Animated.View 
        style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
        entering={FadeInDown.duration(300).delay(600).springify()}
      >
        <SplashScreenButton
          title="Get Started"
          action={() => router.push('/(tabs)')}
        />
      </Animated.View>
    </View>
  );
};

export default Welcome;
