// ProductDetailsScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute, RouteProp } from '@react-navigation/native';

type Car = {
  id: string;
  title: string;
  price: string;
  specs: string;
  location: string;
  image: any;
  timer: string;
};

type RootStackParamList = {
  ProductDetail: { car: Car };
};

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

export default function ProductDetailsScreen() {
  const route = useRoute<ProductDetailRouteProp>();
  const { car } = route.params;
  const [activeTab, setActiveTab] = useState<'product' | 'owner'>('product');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Header */}
        <View style={styles.imageContainer}>
          <Image source={car.image} style={styles.productImage} />
          <View style={styles.imageOverlay}>
            <TouchableOpacity style={styles.arrowBtn}>
              <Icon name="chevron-back" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowBtn}>
              <Icon name="chevron-forward" size={22} color="#fff" />
            </TouchableOpacity>
            <View style={styles.timerBadge}>
              <Text style={styles.timerText}>{car.timer}</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'product' && styles.activeTab]}
            onPress={() => setActiveTab('product')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'product' && styles.activeTabText,
              ]}
            >
              Product Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'owner' && styles.activeTab]}
            onPress={() => setActiveTab('owner')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'owner' && styles.activeTabText,
              ]}
            >
              Owner Details
            </Text>
          </TouchableOpacity>
        </View>

        {/* Price Card */}
        <View style={styles.card}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Text style={styles.price}>{car.price}</Text>
              <Text style={styles.subtitle}>{car.title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 2,
                }}
              >
                <MaterialIcons name="location-on" size={16} color="#888" />
                <Text style={styles.location}>{car.location}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.3 ⭐</Text>
            </View>
          </View>
        </View>

        {/* Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailsRow}>
            <Text style={styles.detailItem}>Brand - Hero Honda</Text>
            <Text style={styles.detailItem}>Model - Optima CX</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailItem}>Year - 2025</Text>
            <Text style={styles.detailItem}>Fuel - Electric</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailItem}>KM driven - 0 km</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Congue justo facilisi quis
            non malesuada aliquet nisi tincidunt tellus. Gravida cursus lacus
            incididunt ipsum aenean.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.buttonText}>💬 Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bidButton}>
          <Text style={styles.buttonText}>🚀 Start Bidding</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { position: 'relative' },
  productImage: { width: '100%', height: 220 },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'flex-start',
  },
  arrowBtn: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 20,
    marginTop: 80,
  },
  timerBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#facc15',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  timerText: { fontSize: 12, fontWeight: 'bold', color: '#000' },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 8,
  },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#0ea5e9' },
  tabText: { fontSize: 14, color: '#555' },
  activeTabText: { color: '#0ea5e9', fontWeight: 'bold' },
  card: {
    backgroundColor: '#f0f9ff',
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 8,
    padding: 12,
  },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  subtitle: { fontSize: 14, color: '#555', marginTop: 2 },
  location: { fontSize: 13, color: '#555' },
  ratingContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    alignSelf: 'flex-start',
    elevation: 2,
  },
  rating: { fontSize: 14, fontWeight: 'bold' },
  detailsSection: { marginHorizontal: 12, marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  detailItem: {
    fontSize: 14,
    color: '#444',
    backgroundColor: '#f0f9ff',
    padding: 8,
    borderRadius: 6,
    flex: 1,
    marginRight: 6,
  },
  description: { fontSize: 14, color: '#444', lineHeight: 20 },
  bottomButtons: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  chatButton: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 6,
  },
  bidButton: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 6,
  },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});
