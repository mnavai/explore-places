import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { UserLocationContext } from "./App/Context/UserLocationContext";
import { useFonts } from "expo-font";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded] = useFonts({
    "Raleway-Regular": require("./assets/Fonts/Raleway-Regular.ttf"),
    "Raleway-Semibold": require("./assets/Fonts/Raleway-SemiBold.ttf"),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
    })();
  }, []);
  return (
    <UserLocationContext.Provider value={{location, setLocation}}> 
      <View style={styles.container}>
        <NavigationContainer>
          <TabNavigation></TabNavigation>
        </NavigationContainer>
      </View>
    </UserLocationContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
  },
});
