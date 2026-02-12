import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { appColors } from "../../utilities/apptheme";
import { appStyles } from "../../utilities/mainstyles";

export default function Settings() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={appStyles.setsec}>
          {/* CARD */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={appStyles.namecard}>
              <TouchableOpacity style={{ position: "absolute", left: 30 }}>
                <FontAwesome
                  name="user-circle"
                  size={50}
                  color={appColors.purple}
                />
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Hi Boma
              </Text>
            </View>
            <View style={appStyles.namecard2}>
              <TouchableOpacity style={{display:"flex",flexDirection:"row",gap:12}}>
                <Text style={{color: "white", fontSize: 20, fontWeight: "600"}}>LogOut</Text>
                <Entypo name="log-out" size={32} color={appColors.purple} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
