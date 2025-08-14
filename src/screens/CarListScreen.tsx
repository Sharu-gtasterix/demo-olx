import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the Car type to keep it clean
type Car = {
  id: string;
  title: string;
  price: string;
  specs: string;
  location: string;
  image: any;
  timer: string;
};

// Define your navigation param list
type HomeStackParamList = {
  HomeScreen: undefined;
  CarListScreen: undefined;
  ProductDetail: { car: Car };
};

const cars: Car[] = [
  {
    id: '1',
    title: 'Maruti Suzuki Dzire 2009',
    price: '₹2,50,000',
    specs: '2009 • 150,000 km',
    location: 'Baner, Pune',
    image: require('../assets/icons/Hyundai.png'),
    timer: '00:02:45',
  },
  {
    id: '2',
    title: 'Maruti Suzuki Dzire 2009',
    price: '₹2,50,000',
    specs: '2009 • 150,000 km',
    location: 'Baner, Pune',
    image: require('../assets/icons/Hyundai.png'),
    timer: '00:02:45',
  },
  {
    id: '3',
    title: 'Maruti Suzuki Dzire 2009',
    price: '₹2,50,000',
    specs: '2009 • 150,000 km',
    location: 'Baner, Pune',
    image: require('../assets/icons/Hyundai.png'),
    timer: '00:02:45',
  },

  {
    id: '4',
    title: 'Maruti Suzuki Dzire 2009',
    price: '₹2,50,000',
    specs: '2009 • 150,000 km',
    location: 'Baner, Pune',
    image: require('../assets/icons/Hyundai.png'),
    timer: '00:02:45',
  },
  {
    id: '5',
    title: 'Maruti Suzuki Dzire 2009',
    price: '₹2,50,000',
    specs: '2009 • 150,000 km',
    location: 'Baner, Pune',
    image: require('../assets/icons/Hyundai.png'),
    timer: '00:02:45',
  },
  {
    id: '6',
    title: 'Maruti Suzuki Dzire 2009',
    price: '₹2,50,000',
    specs: '2009 • 150,000 km',
    location: 'Baner, Pune',
    image: require('../assets/icons/Hyundai.png'),
    timer: '00:02:45',
  },

  // Add more cars as needed, make sure ids are unique
];

const CarListScreen = () => {
  // Properly type navigation to use param list
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Car List</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Upcoming Car</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Live Car</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.carGrid}>
        {cars.map(car => (
          <TouchableOpacity
            key={car.id}
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetail', { car })}
          >
            <Image source={car.image} style={styles.carImage} />
            <View style={styles.timerBadge}>
              <Icon name="time-outline" size={12} color="#fff" />
              <Text style={styles.timerText}>{car.timer}</Text>
            </View>
            <Text style={styles.price}>{car.price}</Text>
            <Text style={styles.carTitle}>{car.title}</Text>
            <Text style={styles.specs}>{car.specs}</Text>
            <View style={styles.locationRow}>
              <Icon name="location-outline" size={14} color="#888" />
              <Text style={styles.locationText}>{car.location}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 10,
  },
  title: { fontSize: 18, fontWeight: '600' },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  tabText: {
    color: '#555',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '500',
  },
  carGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  carImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  timerBadge: {
    flexDirection: 'row',
    backgroundColor: '#FFCB05',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    position: 'absolute',
    top: 99,
    left: 10,
    alignItems: 'center',
    gap: 4,
  },
  timerText: {
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  price: { marginTop: 6, fontWeight: '700', fontSize: 14 },
  carTitle: { fontSize: 13, color: '#333' },
  specs: { fontSize: 12, color: '#777' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  locationText: { fontSize: 12, color: '#888', marginLeft: 4 },
});

export default CarListScreen;
