import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

// PUBLIC_INTERFACE
export default function Dashboard() {
  /**
   * Dashboard screen - landing page of the app.
   * Tailwind-like classes via Nativewind.
   */
  return (
    <View className="flex-1 bg-white px-6 py-8">
      <Text className="text-3xl font-bold text-gray-900 mb-2">
        Welcome 👋
      </Text>
      <Text className="text-gray-600 mb-6">
        This is your AI Smart Finance Buddy dashboard. Get insights, track
        budgets, and plan smarter.
      </Text>

      <View className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <Text className="text-blue-900 font-semibold">Quick Stats</Text>
        <Text className="text-blue-700 mt-1">Balance: $0.00</Text>
        <Text className="text-blue-700">Monthly Spend: $0.00</Text>
      </View>

      <Link href="/login" asChild>
        <TouchableOpacity className="bg-primary rounded-xl p-4 mb-3">
          <Text className="text-white text-center font-semibold">
            Sign in
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/register" asChild>
        <TouchableOpacity className="border border-primary rounded-xl p-4">
          <Text className="text-primary text-center font-semibold">
            Create account
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
