import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from './src/screens/FormScreen';

export type RootStackParamList = {
  Form: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#001f3f' }, // navy blue
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#f9f9f9' },
        }}
      >
        <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Contact Form' }} />
      {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

