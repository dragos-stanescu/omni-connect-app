import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AutoMotoScreen() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Auto-Moto Rent</Text>
        <View style={styles.rightPlaceholder} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Available Vehicles</Text>
          <View style={styles.vehicleList}>
            <View style={styles.vehicleCard}>
              <Text style={styles.vehicleTitle}>Compact Car</Text>
              <Text style={styles.providerName}>Rent-A-Car Service</Text>
              <Text style={styles.vehicleDetails}>
                $50/day • Automatic • 4 Seats
              </Text>
            </View>

            <View style={styles.vehicleCard}>
              <Text style={styles.vehicleTitle}>Mountain Bike</Text>
              <Text style={styles.providerName}>Bike Rentals</Text>
              <Text style={styles.vehicleDetails}>
                $25/day • Electric • Helmet Included
              </Text>
            </View>

            <View style={styles.vehicleCard}>
              <Text style={styles.vehicleTitle}>Scooter</Text>
              <Text style={styles.providerName}>Scoot & Go</Text>
              <Text style={styles.vehicleDetails}>
                $35/day • Electric • 2 Seats
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingTop: Platform.OS === "android" ? 16 : 12,
  },
  backButton: {
    paddingVertical: 4,
    paddingRight: 8,
    width: 40,
  },
  backButtonText: {
    fontSize: 24,
    color: "#007AFF",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  rightPlaceholder: {
    width: 40,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  vehicleList: {
    gap: 16,
  },
  vehicleCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  providerName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  vehicleDetails: {
    fontSize: 14,
    color: "#888",
  },
});
