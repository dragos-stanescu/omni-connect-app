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

export default function AccommodationScreen() {
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
        <Text style={styles.headerTitle}>Accommodation</Text>
        <View style={styles.rightPlaceholder} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Available Places</Text>
          <View style={styles.accommodationList}>
            <View style={styles.accommodationCard}>
              <Text style={styles.accommodationTitle}>Studio Apartment</Text>
              <Text style={styles.locationName}>Downtown Area</Text>
              <Text style={styles.accommodationDetails}>
                $1200/month • 40m² • Furnished
              </Text>
            </View>

            <View style={styles.accommodationCard}>
              <Text style={styles.accommodationTitle}>Shared Room</Text>
              <Text style={styles.locationName}>Student District</Text>
              <Text style={styles.accommodationDetails}>
                $600/month • All Utilities Included
              </Text>
            </View>

            <View style={styles.accommodationCard}>
              <Text style={styles.accommodationTitle}>Family House</Text>
              <Text style={styles.locationName}>Suburban Area</Text>
              <Text style={styles.accommodationDetails}>
                $2500/month • 120m² • Garden
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
  accommodationList: {
    gap: 16,
  },
  accommodationCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  accommodationTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  locationName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  accommodationDetails: {
    fontSize: 14,
    color: "#888",
  },
});
