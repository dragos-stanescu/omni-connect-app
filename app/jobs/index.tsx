import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function JobsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Job Opportunities</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Available Positions</Text>
          <View style={styles.jobList}>
            {/* Example job listings */}
            <View style={styles.jobCard}>
              <Text style={styles.jobTitle}>Software Developer</Text>
              <Text style={styles.companyName}>Tech Company Inc.</Text>
              <Text style={styles.jobDetails}>
                Full-time • Remote • $80k-$120k
              </Text>
            </View>

            <View style={styles.jobCard}>
              <Text style={styles.jobTitle}>Product Manager</Text>
              <Text style={styles.companyName}>StartupX</Text>
              <Text style={styles.jobDetails}>
                Full-time • Hybrid • $90k-$130k
              </Text>
            </View>

            <View style={styles.jobCard}>
              <Text style={styles.jobTitle}>UX Designer</Text>
              <Text style={styles.companyName}>Design Studio</Text>
              <Text style={styles.jobDetails}>
                Contract • Remote • $70k-$100k
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
  jobList: {
    gap: 16,
  },
  jobCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  jobDetails: {
    fontSize: 14,
    color: "#888",
  },
});
