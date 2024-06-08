import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Onboarding from "./screens/Onboarding";
import Location from "./screens/Location";
import AddAddress from "./screens/AddAddress";
import Signin from "./screens/Signin";
import { useFonts } from "expo-font";
import SingUp from "./screens/SignUp";
import AppLoading from "expo-app-loading";
import CommonBackground from "./components/CommonBackground/CommonBackground";
import ForgotPassword from "./screens/ForgotPassword";
import OTP from "./screens/OTP";
import Home from "./screens/Home";
import { GlobalStyles } from "./constents/styles";
import { Ionicons } from "@expo/vector-icons";
import StoreList from "./screens/StoreList";
import Fav from "./screens/Fav";
import Orders from "./screens/Orders";
import Profile from "./screens/Profile";
import ItemList from "./screens/ItemLists";
import store, { AppProvider } from "./store/AppContext";
import MyCart from "./screens/MyCart";
import PaymentMethod from "./screens/PaymentMethod";
import CheckOut from "./screens/CheckOut";
import { Provider } from "react-redux";
import EditProfile from "./screens/EditProfile";
import TrackYourOrder from "./screens/TrackYourOrder";
import RiderReview from "./screens/RiderReview";
import WriteAReview from "./screens/WriteAReview";
import Notification from "./screens/Notification";
import Reviews from "./screens/Reviews";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MyCartStack = createNativeStackNavigator();
const MyOrdersStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./font/Poppins (1)/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./font/Poppins (1)/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function HomePage() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="StoreList"
          component={StoreList}
          options={{ headerShown: false, headerTitle: "" }}
        />
        <HomeStack.Screen
          name="ItemList"
          component={ItemList}
          options={{ headerShown: false, headerTitle: "" }}
        />
      </HomeStack.Navigator>
    );
  }

  function MyCartScreen() {
    return (
      <MyCartStack.Navigator>
        <MyCartStack.Screen
          name="MyCartScreen"
          component={MyCart}
          options={{ headerShown: false }}
        />
        <MyCartStack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{ headerShown: false }}
        />
        <MyCartStack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{ headerShown: false }}
        />
      </MyCartStack.Navigator>
    );
  }

  function ProfileScreen() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </ProfileStack.Navigator>
    );
  }

  // function myOrdersScreen() {
  //   <MyOrdersStack.Navigator>
  //     <MyOrdersStack.Screen
  //       name="myOrder"
  //       component={MyCart}
  //       options={{ headerShown: false }}
  //     />
  //   </MyOrdersStack.Navigator>;
  // }

  function HomeScreen() {
    return (
      <>
        <StatusBar style="light" />
        <BottomTabs.Navigator
          screenOptions={({ navigation }) => ({
            tabBarStyle: {
              backgroundColor: GlobalStyles.colors.tabBarColor,
              height: 85,
            },
          })}
        >
          <BottomTabs.Screen
            name="HomeScreen"
            component={HomePage}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/home/homeIcon.png")}
                  style={styles.iconImage}
                />
              ),
            }}
          />

          <BottomTabs.Screen
            name="Favorite"
            component={Fav}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/favorite/fav.png")}
                  style={styles.iconImage}
                />
              ),
            }}
          />
          {/* <BottomTabs.Screen
            name="MyCart"
            component={MyCartScreen}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/Mycart/MyCart.png")}
                  style={styles.iconImage}
                />
              ),
            }}
          /> */}
          <BottomTabs.Screen
            name="Bookings"
            component={Orders}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/bookings/bookIcon.png")}
                  style={styles.iconImage}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("./assets/profile/profile.png")}
                  style={styles.iconImage}
                />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </>
    );
  }

  return (
    <>
      <Provider store={store}>
        {/* <AppProvider> */}
        <StatusBar style="auto" />
        <NavigationContainer>
          <CommonBackground>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Location" component={Location} />
              <Stack.Screen name="AddAddress" component={AddAddress} />
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="SignUp" component={SingUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="OTP" component={OTP} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="storeList" component={StoreList} />
              <Stack.Screen name="MyCart" component={MyCart} />
              <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
              <Stack.Screen name="CheckOut" component={CheckOut} />
              <Stack.Screen name='EditProfile' component={EditProfile} />
              <Stack.Screen name="TrackYourOrder" component={TrackYourOrder} />
              <Stack.Screen name="RiderReview" component={RiderReview} />
              <Stack.Screen name="WriteAReview" component={WriteAReview} />
              <Stack.Screen name="Notification" component={Notification} />
              <Stack.Screen name="Reviews" component={Reviews} />
            </Stack.Navigator>
          </CommonBackground>
        </NavigationContainer>
        {/* </AppProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  iconImage: {
    width: 24,
    height: 24,
    tintColor: GlobalStyles.colors.iconColor,
  },
});
