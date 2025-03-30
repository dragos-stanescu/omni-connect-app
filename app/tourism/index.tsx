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
  ImageBackground,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

// Sample attractions data
const attractions = [
  {
    id: 1,
    name: "Historic City Center",
    category: "Cultural",
    priceLevel: "$$",
    distance: "1.2 miles away",
    description:
      "Beautiful historic district with architecture dating back to the 18th century.",
    rating: 5,
    isFavorite: false,
    image: require("../../assets/images/tourism.jpg"),
  },
  {
    id: 2,
    name: "National Art Museum",
    category: "Arts",
    priceLevel: "$$$",
    distance: "0.8 miles away",
    description:
      "World-class collection of contemporary and classical art from renowned artists.",
    rating: 4,
    isFavorite: true,
    image: require("../../assets/images/tourism.jpg"),
  },
  {
    id: 3,
    name: "Riverside Park",
    category: "Outdoors",
    priceLevel: "Free",
    distance: "2.4 miles away",
    description:
      "Scenic walking paths along the river with beautiful views and picnic areas.",
    rating: 5,
    isFavorite: false,
    image: require("../../assets/images/tourism.jpg"),
  },
  {
    id: 4,
    name: "Science Discovery Center",
    category: "Educational",
    priceLevel: "$$",
    distance: "3.1 miles away",
    description:
      "Interactive exhibits and demonstrations for all ages about science and technology.",
    rating: 4,
    isFavorite: false,
    image: require("../../assets/images/tourism.jpg"),
  },
];

export default function TourismScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Attractions");
  const [attractionsList, setAttractionsList] = useState(attractions);

  const goBack = () => {
    router.back();
  };

  const toggleFavorite = (id: number) => {
    setAttractionsList(
      attractionsList.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const filteredAttractions =
    activeTab === "Attractions"
      ? attractionsList.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : attractionsList.filter(
          (item) =>
            item.isFavorite &&
            (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.category.toLowerCase().includes(searchQuery.toLowerCase()))
        );

  // Render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text key={i} style={styles.star}>
          {i <= rating ? "★" : "☆"}
        </Text>
      );
    }
    return <View style={styles.starContainer}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      {/* Hero Header with Image */}
      <View style={styles.heroContainer}>
        <ImageBackground
          source={require("../../assets/images/tourism.jpg")}
          style={styles.heroBackground}
        >
          <View style={styles.heroOverlay}>
            <TouchableOpacity style={styles.backButtonHero} onPress={goBack}>
              <Text style={styles.backButtonTextHero}>←</Text>
            </TouchableOpacity>

            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Tourist Attractions</Text>
              <Text style={styles.heroSubtitle}>Subtitle</Text>

              <View style={styles.heroButtonsContainer}>
                <TouchableOpacity style={styles.heroButton}>
                  <Text style={styles.heroButtonText}>
                    <Text style={styles.heroButtonIcon}>📅 </Text>
                    Add to my attractions
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.heroButton}>
                  <Text style={styles.heroButtonText}>
                    <Text style={styles.heroButtonIcon}>👤 </Text>
                    12 mins from hotel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search description"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Tab Switcher */}
        <View style={styles.tabContainer}>
          <Pressable
            style={[
              styles.tabButton,
              activeTab === "Attractions" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("Attractions")}
          >
            <Text style={styles.tabButtonText}>
              {activeTab === "Attractions" && "✓ "}Attractions
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.tabButton,
              activeTab === "My Attractions" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("My Attractions")}
          >
            <Text style={styles.tabButtonText}>
              {activeTab === "My Attractions" && "✓ "}My Attractions
            </Text>
          </Pressable>
        </View>

        {/* Attractions List */}
        <ScrollView>
          {filteredAttractions.map((item) => (
            <View key={item.id} style={styles.attractionItem}>
              <View style={styles.attractionRow}>
                <Image
                  source={item.image}
                  style={styles.attractionImage}
                  resizeMode="cover"
                />

                <View style={styles.attractionDetails}>
                  <Text style={styles.attractionName}>{item.name}</Text>
                  <View style={styles.ratingContainer}>
                    {renderStars(item.rating)}
                  </View>
                  <Text style={styles.attractionInfo}>
                    {item.category} • {item.priceLevel} • {item.distance}
                  </Text>
                  <Text style={styles.attractionDescription} numberOfLines={2}>
                    {item.description}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.favoriteButton}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Text style={styles.favoriteIcon}>
                    {item.isFavorite ? "❤️" : "🤍"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
            </View>
          ))}

          {filteredAttractions.length === 0 && (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>
                No attractions found. Try a different search.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heroContainer: {
    height: 280,
  },
  heroBackground: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "space-between",
    padding: 16,
  },
  backButtonHero: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonTextHero: {
    fontSize: 20,
    color: "#333",
  },
  heroContent: {
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#eee",
    marginBottom: 16,
  },
  heroButtonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  heroButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  heroButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  heroButtonIcon: {
    fontSize: 14,
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#7760be",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    justifyContent: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activeTabButton: {
    backgroundColor: "#e8e0f4",
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  attractionItem: {
    paddingHorizontal: 16,
  },
  attractionRow: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  attractionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  attractionDetails: {
    flex: 1,
  },
  attractionName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  starContainer: {
    flexDirection: "row",
  },
  star: {
    color: "#FFC107",
    fontSize: 16,
    marginRight: 2,
  },
  attractionInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  attractionDescription: {
    fontSize: 14,
    color: "#666",
  },
  favoriteButton: {
    padding: 8,
    justifyContent: "center",
  },
  favoriteIcon: {
    fontSize: 24,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
  },
  noResultsContainer: {
    padding: 32,
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
