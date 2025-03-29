import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function AutoMotoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Auto-Moto Rent</Text>
        </View>

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
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
