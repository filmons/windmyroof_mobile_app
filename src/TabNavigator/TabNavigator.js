import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SiteDetailScreen from "../screens/SiteDetailScreen/SiteDetailScreen";
import SiteScreen from "../screens/SiteScreen/SiteScreen";

import { MaterialIcons } from '@expo/vector-icons';

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { View } from "react-native-web";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator >
			<Stack.Screen
				name="WindMyRoof"
				component={HomeScreen}
				options={{
					headerStyle: {
				  	backgroundColor: "#66BFF1",
						},
					headerShown: true ,
					headerTintColor: "#fff",
					headerTitleStyle: {
					  fontWeight: "bold",
					  fontSize: "40px",
					  padding: "0 20px",
					},
					headerTitleAlign: "center",
				}}
			
			/>
            <Stack.Screen
				name="SiteScreen"
				component={SiteScreen}
				
				options={{
					headerStyle: {
				  	backgroundColor: "#66BFF1",
						},
					headerShown: true ,
					headerTintColor: "#fff",
					headerTitleStyle: {
					  fontWeight: "bold",
					  fontSize: "40px",
					  padding: "0 20px",
					},
					headerTitleAlign: "center",
				}}
			/>
            <Stack.Screen
				name="SiteDetailScreen"
				component={SiteDetailScreen}
				options={{
					headerStyle: {
				  	backgroundColor: "#66BFF1",
						},
					headerShown: true ,
					headerTintColor: "#fff",
					headerTitleStyle: {
					  fontWeight: "bold",
					  fontSize: "40px",
					  padding: "0 20px",
					},
					headerTitleAlign: "center",
				}}
			/>


		</Stack.Navigator>
	);
};

const TabNavigator = () => {
	return (
		<Tab.Navigator
		name="WindMyRoof" component={HomeScreen}
        initialRouteName="Feed"
        screenOptions={{
        //   tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: "blue",

        }} >
           
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={({ route }) => ({
					tabBarStyle: {
						display: getTabBarVisibility(route),
						backgroundColor: "#AD40AF",
					},
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home-outline" color={color} size={size} />
					),
				})}
			/>

        <Tab.Screen
        name="Site"
        component={SiteScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Feather   name="shopping-bag" color={color} size={size} />
          ),
        }}
      />

<Tab.Screen
        name="SiteDetailScreen"
        component={SiteDetailScreen}
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
        }}
      />
	  
		</Tab.Navigator>
	);
};

const getTabBarVisibility = (route) => {
	// console.log(route);
	const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
	// console.log(routeName);

	if (routeName == "GameDetails") {
		return "none";
	}
	return "flex";
};

export default TabNavigator;
