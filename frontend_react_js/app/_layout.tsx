import { Stack } from "expo-router";
import { View, Text } from "react-native";

// PUBLIC_INTERFACE
export default function RootLayout() {
  /** Configures the main stack layout for the app routes. */
  return (
    <Stack
      screenOptions={{
        headerTitle: "AI Smart Finance Buddy",
        headerShadowVisible: false
      }}
    />
  );
}
