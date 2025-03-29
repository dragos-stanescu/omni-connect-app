import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function TourismScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Tourist Attractions</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
          <View style={styles.attractionList}>
            <View style={styles.attractionCard}>
              <Text style={styles.attractionTitle}>Historic City Center</Text>
              <Text style={styles.locationName}>Downtown Area</Text>
              <Text style={styles.attractionDetails}>
                Free Entry • Guided Tours Available
              </Text>
            </View>

            <View style={styles.attractionCard}>
              <Text style={styles.attractionTitle}>Mountain View Park</Text>
              <Text style={styles.locationName}>North District</Text>
              <Text style={styles.attractionDetails}>
                Hiking Trails • Scenic Views
              </Text>
            </View>

            <View style={styles.attractionCard}>
              <Text style={styles.attractionTitle}>Local Museum</Text>
              <Text style={styles.locationName}>Cultural District</Text>
              <Text style={styles.attractionDetails}>
                $10 Entry • Audio Guide Available
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
  attractionList: {
    gap: 16,
  },
  attractionCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  attractionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  locationName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  attractionDetails: {
    fontSize: 14,
    color: "#888",
  },
});
