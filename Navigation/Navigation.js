import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import MapScreen from "../Screens/MapScreen";
import { KeyboardAvoidingView, Platform } from "react-native";
import tailwind from "twrnc";

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <KeyboardAvoidingView enabled style={tailwind`flex-1`} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0 } >
            <Stack.Navigator>
                <Stack.Screen component={HomeScreen} options={{headerShown:false}} name="Homescreen" />
                <Stack.Screen component={MapScreen} options={{headerShown:false}} name="MapScreen" />
            </Stack.Navigator>
            </KeyboardAvoidingView>
        </NavigationContainer>
    )
}

export default Navigation;