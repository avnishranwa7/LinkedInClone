import { NavigationContainer } from "@react-navigation/native";

// local imports
import TabNavigator from "./TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
