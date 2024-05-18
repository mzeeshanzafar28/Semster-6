import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import AboutZeeshan from "@screens/AboutZeeshan";
import SitePage from "@screens/SitePage";
import ExplorePage from "@screens/ExplorePage";
import PostDetails from "@screens/PostDetails";
import { RootStackParamList } from "@navigation/navigationTypes"; // Adjust the import path based on your project structure

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Explore" component={ExplorePage} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  const tabBarIcon = ({ route, focused, color, size }) => {
    let iconName;

    if (route.name === "ExploreStack") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "Site") {
      iconName = focused ? "globe-outline" : "globe-outline";
    } else if (route.name === "Zeeshan") {
      iconName = focused ? "person-circle" : "person-circle-outline";
    }
    return <Ionicons name={iconName} size={size} color="crimson" />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIcon({ route, focused, color, size }),
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "crimson",
      })}
    >
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{ headerShown: false, title: "Explore" }}
      />
      <Tab.Screen name="Site" component={SitePage} />
      <Tab.Screen name="Zeeshan" component={AboutZeeshan} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
