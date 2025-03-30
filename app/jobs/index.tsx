import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

// Sample job categories with mock data
const jobCategories = [
  {
    id: 1,
    name: "IT & Software",
    lastUpdate: "Updated today",
    image: require("../../assets/images/jobs.webp"),
    jobTypes: ["Full-Time", "On-Site", "Remote", "Freelance"],
  },
  {
    id: 2,
    name: "Construction",
    lastUpdate: "Updated yesterday",
    image: require("../../assets/images/jobs.webp"),
    jobTypes: ["Full-Time", "Contract", "On-Site"],
  },
  {
    id: 3,
    name: "Healthcare",
    lastUpdate: "Updated 2 days ago",
    image: require("../../assets/images/jobs.webp"),
    jobTypes: ["Part-Time", "Temporary", "On-Site"],
  },
  {
    id: 4,
    name: "Education",
    lastUpdate: "Updated today",
    image: require("../../assets/images/jobs.webp"),
    jobTypes: ["Full-Time", "Part-Time", "Volunteer"],
  },
];

export default function JobsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(jobCategories);
  const [activeFilters, setActiveFilters] = useState({
    location: "On-Site", // Default selected: On-Site
    types: ["Full-Time"], // Default selected: Full-Time
  });

  // Filter types available
  const jobTypeFilters = [
    "Full-Time",
    "Part-Time",
    "Freelance",
    "Contract",
    "Temporary",
    "Volunteer",
  ];

  const goBack = () => {
    router.back();
  };

  // Apply filters when they change
  useEffect(() => {
    filterJobs();
  }, [searchQuery, activeFilters]);

  // Filter jobs based on search query and selected filters
  const filterJobs = () => {
    let result = jobCategories;

    // Apply search filter
    if (searchQuery) {
      result = result.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply location filter
    if (activeFilters.location) {
      result = result.filter((category) => {
        const hasMatchingJobs = category.jobTypes.some((jobType) => {
          return activeFilters.location === "Remote"
            ? jobType.includes("Remote")
            : jobType.includes("On-Site");
        });
        return (
          hasMatchingJobs || category.jobTypes.includes(activeFilters.location)
        );
      });
    }

    // Apply job type filters
    if (activeFilters.types.length > 0) {
      result = result.filter((category) => {
        return category.jobTypes.some((jobType) =>
          activeFilters.types.includes(jobType)
        );
      });
    }

    setFilteredCategories(result);
  };

  // Toggle location filter
  const toggleLocationFilter = (location: string) => {
    setActiveFilters({
      ...activeFilters,
      location,
    });
  };

  // Toggle job type filter
  const toggleJobTypeFilter = (type: string) => {
    const types = [...activeFilters.types];
    const typeIndex = types.indexOf(type);

    if (typeIndex >= 0) {
      types.splice(typeIndex, 1);
    } else {
      types.push(type);
    }

    setActiveFilters({
      ...activeFilters,
      types,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jobs Opportunities</Text>
        <View style={styles.rightPlaceholder} />
      </View>

      <ScrollView style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search job categories..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Location Filter (Remote/On-Site) */}
        <View style={styles.locationFilterContainer}>
          <Pressable
            style={[
              styles.locationFilterOption,
              activeFilters.location === "On-Site" &&
                styles.activeLocationFilter,
            ]}
            onPress={() => toggleLocationFilter("On-Site")}
          >
            <Text style={styles.locationFilterText}>
              {activeFilters.location === "On-Site" && "✓ "}On-Site
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.locationFilterOption,
              activeFilters.location === "Remote" &&
                styles.activeLocationFilter,
            ]}
            onPress={() => toggleLocationFilter("Remote")}
          >
            <Text style={styles.locationFilterText}>
              {activeFilters.location === "Remote" && "✓ "}Remote
            </Text>
          </Pressable>
        </View>

        {/* Job Type Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.jobTypeFilterContainer}
          contentContainerStyle={styles.jobTypeFilterContent}
        >
          {jobTypeFilters.map((type) => (
            <Pressable
              key={type}
              style={[
                styles.jobTypeFilterOption,
                activeFilters.types.includes(type) &&
                  styles.activeJobTypeFilter,
              ]}
              onPress={() => toggleJobTypeFilter(type)}
            >
              <Text style={styles.jobTypeFilterText}>
                {activeFilters.types.includes(type) && "✓ "}
                {type}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Filter Label */}
        <View style={styles.filterLabelContainer}>
          <Text style={styles.filterLabelText}>Label</Text>
          <TouchableOpacity style={styles.filterIcon}>
            <Text style={styles.filterIconText}>≡</Text>
          </TouchableOpacity>
        </View>

        {/* Job Categories Grid */}
        <View style={styles.grid}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.gridItem}
                onPress={() =>
                  console.log(`Selected category: ${category.name}`)
                }
              >
                <View style={styles.itemContent}>
                  <Image
                    source={category.image}
                    style={styles.categoryImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.itemTitle}>{category.name}</Text>
                  <Text style={styles.updateText}>{category.lastUpdate}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>
                No matching job categories found.
              </Text>
            </View>
          )}
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
  searchContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  locationFilterContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    marginBottom: 12,
  },
  locationFilterOption: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activeLocationFilter: {
    backgroundColor: "#e8e0f4",
  },
  locationFilterText: {
    fontSize: 16,
    fontWeight: "500",
  },
  jobTypeFilterContainer: {
    marginBottom: 16,
  },
  jobTypeFilterContent: {
    paddingHorizontal: 12,
    gap: 8,
  },
  jobTypeFilterOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 4,
  },
  activeJobTypeFilter: {
    backgroundColor: "#e8e0f4",
  },
  jobTypeFilterText: {
    fontSize: 14,
    fontWeight: "500",
  },
  filterLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterLabelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#5f43b2",
  },
  filterIcon: {
    padding: 4,
  },
  filterIconText: {
    fontSize: 20,
    color: "#555",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  gridItem: {
    width: "50%",
    padding: 8,
  },
  itemContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryImage: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  updateText: {
    fontSize: 12,
    color: "#666",
  },
  noResultsContainer: {
    width: "100%",
    padding: 32,
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
