import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

import { useAuth } from "@/hooks/useAuth";

const categories = [
  {
    id: 1,
    title: "Job Opportunities",
    route: "/jobs",
    lastUpdate: "2 days ago",
  },
  {
    id: 2,
    title: "Courses",
    route: "/courses",
    lastUpdate: "Updated today",
  },
  {
    id: 3,
    title: "Tourist Attractions",
    route: "/tourism",
    lastUpdate: "2 days ago",
  },
  {
    id: 4,
    title: "Auto-Moto Rent",
    route: "/auto",
    lastUpdate: "Yesterday",
  },
  {
    id: 5,
    title: "Accommodation",
    route: "/accommodation",
    lastUpdate: "Yesterday",
  },
  { id: 6, title: "Dating", route: "/dating", lastUpdate: "Yesterday" },
];

export default function HomeScreen() {
  const { signOut } = useAuth();
  const router = useRouter();

  const navigateToCategory = (route: any) => {
    router.push(route);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Omni Connect</Text>
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchBar}>
            <Text style={styles.searchText}>Search description</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.gridItem}
              onPress={() => navigateToCategory(category.route)}
            >
              <View style={styles.itemContent}>
                <View style={styles.placeholder} />
                <Text style={styles.itemTitle}>{category.title}</Text>
                <Text style={styles.updateText}>{category.lastUpdate}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutText: {
    color: "#007AFF",
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchText: {
    color: "#666",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  gridItem: {
    width: "33.33%",
    padding: 8,
  },
  itemContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  placeholder: {
    width: 60,
    height: 60,
    backgroundColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 4,
  },
  updateText: {
    fontSize: 12,
    color: "#666",
  },
});
