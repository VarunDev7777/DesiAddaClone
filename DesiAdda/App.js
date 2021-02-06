import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import IndexScreen from "./screens/Index.screen";
import MatchesScreen from "./screens/Matches.screen";
import ResultsScreen from "./screens/Resutls.screen";
import ProfileScreen from "./screens/Profile.screen";
import Ionicons from "react-native-vector-icons/Ionicons";

import appstyles from "./styles/config";
import { useFonts } from "expo-font";
import { Text, Platform } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: appstyles.primaryColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Fonts not Loaded</Text>
      </SafeAreaView>
    );
  } else
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Statistics"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "My Matches") {
                  iconName = focused ? "trophy" : "trophy-outline";
                } else if (route.name === "Statistics") {
                  iconName = focused ? "cellular" : "cellular-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: appstyles.fontColoractive,
              inactiveTintColor: appstyles.fontColorInactive,
              tabStyle: {
                backgroundColor: appstyles.secondaryColor,
              },
              style: {
                height: Platform.OS === "android" ? 65 : 90,
                borderTopColor: appstyles.secondaryColor,
              },
              labelStyle: {
                marginBottom: 5,
                fontFamily: "Poppins-Medium",
                fontSize: 13,
              },
              iconStyle: {
                marginTop: 5,
              },
            }}
          >
            <Tab.Screen name="Home" component={IndexScreen} />
            <Tab.Screen name="My Matches" component={MatchesScreen} />
            <Tab.Screen name="Statistics" component={ResultsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}
