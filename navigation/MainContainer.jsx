import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./ParentScreens/HomeScreen";
import ChildrenScreen from "./ParentScreens/ChildrenScreen";
import AwardsScreen from "./ParentScreens/AwardsScreen";
import CustomStatusBar from "../components/CustomStatusBar";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <SafeAreaProvider>
            <CustomStatusBar backgroundColor="#fff" />
            <View style={styles.container}>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'Home') focused ? iconName = 'home' : iconName = 'home-outline';
                                else if (route.name === 'Children') focused ? iconName = 'happy' : iconName = 'happy-outline';
                                else if (route.name === 'Awards') focused ? iconName = 'trophy' : iconName = 'trophy-outline';
                                return <Ionicons name={iconName} size={size * 1.2} color={color} />;
                            },
                            tabBarStyle: {
                                paddingTop: 5
                            }
                        })}>

                        <Tab.Screen name='Home' component={HomeScreen} />
                        <Tab.Screen name='Children' component={ChildrenScreen} />
                        <Tab.Screen name='Awards' component={AwardsScreen} />

                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default MainContainer;