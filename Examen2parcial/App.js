import React from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', name: 'Groceries', rating: '4.7', time: '15-20 min', type: 'burger, dessert' },
  { id: '2', name: 'Groceries', rating: '4.7', time: '15-20 min', type: 'burger, dessert' },
  { id: '3', name: 'Groceries', rating: '4.7', time: '15-20 min', type: 'burger, dessert' },
];

const specialsData = [
  { id: '1', title: 'winestory' },
  { id: '2', title: 'winestory' },
  { id: '3', title: 'winestory' },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="location-outline" size={20} color="black" />
        <Text style={styles.locationText}>9185 Mayflower Drive Atlanta</Text>
      </View>

      {/* Main Image */}
      <Image
        source={{ uri: 'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/767f991e-a7c5-4c72-a88e-5023afa3ccc8.jpg' }}
        style={styles.mainImage}
      />

      {/* Section: All Restaurants */}
      <Section title="All restaurants">
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RestaurantCard item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Section>

      {/* Section: All Groceries */}
      <Section title="All Groceries">
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GroceryCard item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Section>

      {/* Section: Specials */}
      <Section title="Specials">
        <FlatList
          horizontal
          data={specialsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SpecialCard title={item.title} width={150} />}
          showsHorizontalScrollIndicator={false}
        />
      </Section>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="search-outline" size={24} color="black" />
        <Ionicons name="bookmark-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    </ScrollView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function RestaurantCard({ item }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: 'https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-master768.jpg?quality=75&auto=webp' }}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.type}</Text>
      <Text style={styles.cardRating}>⭐ {item.rating}  {item.time}</Text>
    </TouchableOpacity>
  );
}

function GroceryCard({ item }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: 'https://anchorridge.org/wp-content/uploads/2020/05/Bag-Of-Groceries-1.png' }}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardRating}>⭐ {item.rating}  {item.time}</Text>
    </TouchableOpacity>
  );
}

function SpecialCard({ title, width }) {
  return (
    <ImageBackground
      source={{ uri: 'https://elaltavoz.mx/wp-content/uploads/2023/09/red-wine-pouring-from-bottle-glass.width-1920-1170x779.jpg' }}
      style={[styles.specialCard, { width: width }]}
      imageStyle={{ borderRadius: 8, resizeMode: 'cover' }}
    >
      <Text style={styles.specialTitle}>{title}</Text>
      <Text style={styles.specialSubtitle}>Special Offer</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',
    paddingHorizontal: 16, // Espaciado a la izquierda y derecha
    paddingTop: 50, // Espaciado en la parte superior
  },
  header: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16 },
  locationText: { marginLeft: 8, fontSize: 16, color: 'black' },
  mainImage: { width: '100%', height: 200, resizeMode: 'cover' },
  section: { paddingVertical: 8 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  card: { marginRight: 16, width: 120 },
  cardImage: { width: '100%', height: 80, borderRadius: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSubtitle: { color: 'gray' },
  cardRating: { color: 'gray' },
  specialsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  specialCard: {
    padding: 16,
    borderRadius: 8,
    justifyContent: 'flex-end',
    height: 120,
    marginRight: 16,
  },
  specialTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  specialSubtitle: { color: '#fff', fontSize: 14 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, borderTopWidth: 1, borderColor: '#ddd' },
});
