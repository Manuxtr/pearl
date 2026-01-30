import { Text, View,ImageBackground } from "react-native";
import { appStyles } from "../utilities/mainstyles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={appStyles.wrapper}>
      {/* header */}
      <ImageBackground source={require("../assets/images/homepage.jpg")}
      style={appStyles.imgView}>

       <View>
       <Text style={appStyles.HeaderText}>Pearl Hospitality</Text>
      </View>
      <View>
        <Text style={appStyles.imgtext}>At Pearl Hospitality Your comfort is our priority. Enjoy a luxurious stay with us.</Text>
      </View>
      </ImageBackground>
      {/* bottom */}
     
        <Link href="/(tabs)/home">
           <View style={appStyles.getstartedView}>
            <Text style={appStyles.imgtext}>Get Started</Text>
           </View>
        </Link>
     
    </View>
  );
}
