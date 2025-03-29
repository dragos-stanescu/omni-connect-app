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

export default function CoursesScreen() {
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
        <Text style={styles.headerTitle}>Courses</Text>
        <View style={styles.rightPlaceholder} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Featured Courses</Text>
          <View style={styles.courseList}>
            <View style={styles.courseCard}>
              <Text style={styles.courseTitle}>Web Development Bootcamp</Text>
              <Text style={styles.providerName}>Tech Academy</Text>
              <Text style={styles.courseDetails}>12 weeks • Online • $999</Text>
            </View>

            <View style={styles.courseCard}>
              <Text style={styles.courseTitle}>Digital Marketing Mastery</Text>
              <Text style={styles.providerName}>Marketing Institute</Text>
              <Text style={styles.courseDetails}>8 weeks • Hybrid • $799</Text>
            </View>

            <View style={styles.courseCard}>
              <Text style={styles.courseTitle}>Data Science Fundamentals</Text>
              <Text style={styles.providerName}>Data University</Text>
              <Text style={styles.courseDetails}>
                10 weeks • Online • $1299
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
  courseList: {
    gap: 16,
  },
  courseCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  providerName: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  courseDetails: {
    fontSize: 14,
    color: "#888",
  },
});
