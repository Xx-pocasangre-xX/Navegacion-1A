import { NavigationContainer } from "@react-navigation/native"; // Importa el contenedor de navegación
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa el creador de stack navigator
 
import Home from "../screens/Home.js"; // Importa la pantalla de Sesión
import ShowUser from "../screens/ShowUser.js"; // Importa la pantalla de Sesión
import AddUser from "../screens/AddUsers.js"; // Importa la pantalla de Sesión
import EditUser from "../screens/EditUser.js"; // Importa la pantalla de Editar Usuario
import TabNavigator from "./TabNavigator"; // Importa el navegador de pestañas
 
export default function Navigation() {
  const Stack = createNativeStackNavigator(); // Crea una instancia del stack navigator
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator" // Establece 'TabNavigator' como la ruta inicial
        screenOptions={{
          headerShown: false, // Oculta el header por defecto
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShowUser" component={ShowUser} />
        <Stack.Screen name="AddUsers" component={AddUser} />
        <Stack.Screen name="EditUser" component={EditUser} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}