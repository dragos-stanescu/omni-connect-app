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

export default function DatingScreen() {
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
        <Text style={styles.headerTitle}>Dating</Text>
        <View style={styles.rightPlaceholder} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Suggested Matches</Text>
          <View style={styles.profileList}>
            <View style={styles.profileCard}>
              <Text style={styles.profileName}>Sarah, 28</Text>
              <Text style={styles.profession}>Software Engineer</Text>
              <Text style={styles.profileDetails}>
                Interests: Travel, Photography, Music
              </Text>
            </View>

            <View style={styles.profileCard}>
              <Text style={styles.profileName}>Mike, 31</Text>
              <Text style={styles.profession}>Marketing Manager</Text>
              <Text style={styles.profileDetails}>
                Interests: Sports, Cooking, Art
              </Text>
            </View>

            <View style={styles.profileCard}>
              <Text style={styles.profileName}>Emma, 26</Text>
              <Text style={styles.profession}>Graphic Designer</Text>
              <Text style={styles.profileDetails}>
                Interests: Design, Nature, Yoga
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
  profileList: {
    gap: 16,
  },
  profileCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  profession: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  profileDetails: {
    fontSize: 14,
    color: "#888",
  },
});
