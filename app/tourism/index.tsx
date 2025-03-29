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

export default function TourismScreen() {
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
        <Text style={styles.headerTitle}>Tourist Attractions</Text>
        <View style={styles.rightPlaceholder} />
      </View>
      <ScrollView style={styles.container}>
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
