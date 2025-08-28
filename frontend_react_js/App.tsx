import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

// PUBLIC_INTERFACE
export default function App() {
  /** Root of the Expo app with a Stack navigator. */
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerTintColor: "#111827",
          contentStyle: { backgroundColor: "#f8fafc" }
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
