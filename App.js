import { StyleSheet } from 'react-native';
import { YourRecipes, CreateRecipe, MyRecipe, RecipeComplete, Settings } from './screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyRecipeSettings } from './components';
function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Recipes" component={YourRecipes} options={{
        tabBarLabel: 'My Recipes',
        headerRight: (props) => <MyRecipeSettings {...props} />,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Create Recipe" component={CreateRecipe} options={{
        tabBarLabel: 'Create Recipe',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
        <Stack.Screen name='My Recipe' options={({ route }) => ({ title: route.params.name })} component={MyRecipe} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='RecipeComplete' options={{ headerShown: false }} component={RecipeComplete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
