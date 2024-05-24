import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from '@/components/ThemedView';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();


  const [loaded] = useFonts({
    InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
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
    <ThemedView style={{ paddingTop: insets.top, flex: 1 }}>
      <Slot />
    </ThemedView>
  );
}
