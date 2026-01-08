import { Text, View,Image,TouchableOpacity } from "react-native";
import { appStyles } from "../utilities/mainstyles";

export default function Index() {
  return (
    <View style={appStyles.wrapper}>
      {/* header */}
      <View>
       <Text style={appStyles.HeaderText}>Pearl Hospitality</Text>
      </View>
      {/* middle content */}
      <View style={appStyles.imgView}>
        <Image
        source={require("../assets/images/homepage.jpg")}
        style={appStyles.img}
        />
        <Text>At Pearl Hospitality Your comfort is our priority. Enjoy a luxurious stay with us.</Text>
      </View>
      {/* bottom */}
      <View>
        <TouchableOpacity>
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
