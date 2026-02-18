import { Stack ,SplashScreen} from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import {AuthProvider} from "../config/authcontext"


SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [myfonts] = useFonts({
    "Chiqueta-Regular": require("../assets/fonts/Chiqueta-Regular.ttf"),
    "Chubsy Snack": require("../assets/fonts/Chubsy Snack.otf"),
    LORINE: require("../assets/fonts/LORINE.ttf"),
    "Relyne-Regular": require("../assets/fonts/Relyne-Regular.ttf"),
    Scrakers: require("../assets/fonts/Scrakers.otf"),
  });
  console.log("my fonts", myfonts);
  if (!myfonts) {
    return (
      <ActivityIndicator
        size={"small"}
        color={"red"}
        style={{ justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "tabs",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="index"
          options={{
            title: "Landing screen",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="signin"
          options={{
            title: "sign in",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="signup"
          options={{
            title: "signup",
            headerShown: false,
          }}
        />
       <Stack.Screen
       name="(updateguests)/[uid]"
       options={{
        title:"update",
        headerShown:false
       }}
       />
      </Stack>
    </AuthProvider>
  );
}

