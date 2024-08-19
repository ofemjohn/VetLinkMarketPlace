import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, Easing } from 'react-native-reanimated';

const FadingScalingAppName = () => {
  // Shared values for scale and opacity
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  // Animate scale and opacity
  useEffect(() => {
    scale.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
  }, []);

  // Animated styles for scale and opacity
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1b3340' }}>
      <Animated.Text style={[{ fontSize: 32, color: '#32b5a4', fontFamily: 'BarlowExtraBold' }, animatedStyle]}>
        VetLink
      </Animated.Text>
      <Animated.Text style={[{ fontSize: 32, color: '#5ddced', fontFamily: 'BarlowExtraBold', marginTop: 10 }, animatedStyle]}>
        Marketplace
      </Animated.Text>
    </View>
  );
};

export default FadingScalingAppName;
