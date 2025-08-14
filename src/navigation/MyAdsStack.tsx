// navigation/MyAdsStack.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyAdsScreen from '../screens/MyAdsScreen';
import MyAdsListScreen from '../screens/MyAdsListScreen';
import AdDetailsScreen from '../screens/AdDetailsScreen';
import { ImageSourcePropType } from 'react-native';
import CarListScreen from "../screens/CarListScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

// 1. Define the Product type for passing to AdDetailsScreen
export type Product = {
  image: ImageSourcePropType;
  price: string;
  title: string;
  km: string;
  location: string;
  timeLeft: string;
  description: string;
  brand: string;
  model: string;
  fuel: string;
  year: string;
  rating: number;
};

// 2. Define the stack param list
export type MyAdsStackParamList = {
  MyAdsScreen: undefined;
  MyAdsListScreen: { category: string };
  AdDetailsScreen: { product: Product };
  CarListScreen: undefined;
  ProductDetail: { car: Car };
};

// 3. Create the navigator with types
const Stack = createNativeStackNavigator<MyAdsStackParamList>();

const MyAdsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyAdsScreen" component={MyAdsScreen} />
      <Stack.Screen name="MyAdsListScreen" component={MyAdsListScreen} />
      <Stack.Screen name="AdDetailsScreen" component={AdDetailsScreen} />
      <Stack.Screen name="CarListScreen" component={CarListScreen} />
      <Stack.Screen name="ProductDetail"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MyAdsStack;
