import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Load all fonts
  const [loaded] = useFonts({
    BarlowBlack: require('../assets/fonts/Barlow-Black.ttf'),
    BarlowBlackItalic: require('../assets/fonts/Barlow-BlackItalic.ttf'),
    BarlowBold: require('../assets/fonts/Barlow-Bold.ttf'),
    BarlowBoldItalic: require('../assets/fonts/Barlow-BoldItalic.ttf'),
    BarlowExtraBold: require('../assets/fonts/Barlow-ExtraBold.ttf'),
    BarlowExtraBoldItalic: require('../assets/fonts/Barlow-ExtraBoldItalic.ttf'),
    BarlowExtraLight: require('../assets/fonts/Barlow-ExtraLight.ttf'),
    BarlowExtraLightItalic: require('../assets/fonts/Barlow-ExtraLightItalic.ttf'),
    BarlowItalic: require('../assets/fonts/Barlow-Italic.ttf'),
    BarlowLight: require('../assets/fonts/Barlow-Light.ttf'),
    BarlowLightItalic: require('../assets/fonts/Barlow-LightItalic.ttf'),
    BarlowMedium: require('../assets/fonts/Barlow-Medium.ttf'),
    BarlowMediumItalic: require('../assets/fonts/Barlow-MediumItalic.ttf'),
    BarlowRegular: require('../assets/fonts/Barlow-Regular.ttf'),
    BarlowSemiBold: require('../assets/fonts/Barlow-SemiBold.ttf'),
    BarlowSemiBoldItalic: require('../assets/fonts/Barlow-SemiBoldItalic.ttf'),
    BarlowThin: require('../assets/fonts/Barlow-Thin.ttf'),
    BarlowThinItalic: require('../assets/fonts/Barlow-ThinItalic.ttf'),
    RobotoBlack: require('../assets/fonts/Roboto-Black.ttf'),
    RobotoBlackItalic: require('../assets/fonts/Roboto-BlackItalic.ttf'),
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    RobotoBoldItalic: require('../assets/fonts/Roboto-BoldItalic.ttf'),
    RobotoItalic: require('../assets/fonts/Roboto-Italic.ttf'),
    RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
    RobotoLightItalic: require('../assets/fonts/Roboto-LightItalic.ttf'),
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoMediumItalic: require('../assets/fonts/Roboto-MediumItalic.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    RobotoThin: require('../assets/fonts/Roboto-Thin.ttf'),
    RobotoThinItalic: require('../assets/fonts/Roboto-ThinItalic.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
