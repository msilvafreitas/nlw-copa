import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

