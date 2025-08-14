import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Bottom tab screens
import LiveBiddingScreen from './src/screens/LiveBiddingScreen';
import SellProductStack from './src/navigation/SellProductStack';
import MyAdsStack from './src/navigation/MyAdsStack';
import ProfileScreen from './src/screens/ProfileScreen';

// Auth screens
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

// Custom tab bar
import CustomTabBar from './src/components/CustomTabBar';

// Home stack screens
import HomeScreen from './src/screens/HomeScreen';
import CarListScreen from './src/screens/CarListScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

// Types
type Car = {
  id: string;
  title: string;
  price: string;
  specs: string;
  location: string;
  image: any;
  timer: string;
};

type HomeStackParamList = {
  HomeScreen: undefined;
  CarListScreen: { categoryId: string; title: string };
  ProductDetail: { car: Car };
};

const HomeStackNav = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <HomeStackNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNav.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackNav.Screen name="CarListScreen" component={CarListScreen} />
      <HomeStackNav.Screen
        name="ProductDetail"
        component={ProductDetailsScreen}
      />
    </HomeStackNav.Navigator>
  );
}

// Auth context types
interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Root stack (auth/main switch)
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// Auth stack
const AuthStack = createNativeStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

// Bottom tabs for main app
const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Live Bidding" component={LiveBiddingScreen} />
      <Tab.Screen name="Sell Product" component={SellProductStack} />
      <Tab.Screen name="My Ads" component={MyAdsStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// App navigator
const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <RootStack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackScreen} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

// Root App
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
