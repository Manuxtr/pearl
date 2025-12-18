import { View,Text,Image,ImageBackground } from "react-native";
import { indexStyles } from "../(tabs)/index";


export default function Explore(){
    return(
      <View style={{justifyContent:"center",alignItems:"center",marginTop:30,gap:50}}>
        <Text>my image</Text>
        <Image
        source={require("../../assets/images/manu1.jpg")}
        style={indexStyles.img}
        
        />
        {/* 1st child */}
        <ImageBackground source={require("../../assets/images//manu1.jpg")}
        style={{height:400,width:600}}
        
        >
        <View>
          <Text>BACKGROUND</Text>
        </View>

        </ImageBackground>

      </View>
    )
}

