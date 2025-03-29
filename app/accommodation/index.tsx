import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function AccommodationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Accommodation</Text>
        </View>

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
