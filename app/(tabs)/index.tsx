import { View,Text ,StyleSheet} from "react-native";





export default function Index(){
  return(
    // parent
    <View style ={{ flex:1,justifyContent:"space-evenly",alignItems:"center"}} >
      {/* top */}
        <View style={{marginTop:40}}>
            <Text style={{color:"green",fontSize:40}}>ABOUT MY FIRST APP</Text>
        </View>
        {/* body */}
        <View>
          <Text>THIS IS A HOSPITALITY MANAGEGMENT APP</Text>
          {/* body content */}
          <View style ={indexStyles.bodyContentView}>
            <Text style={indexStyles.bodycontentText}>The best app for hotels and appartments</Text>
          </View>
        </View>
        {/* BOTTOM */}
        <View style = {indexStyles.getstratedView}>
          <Text>GET STARTED</Text>
        </View>
    </View>
  )
}


export const indexStyles = StyleSheet.create({
  bodyContentView:{
    width:"100%",
    height:90,
    backgroundColor:"orange",
    marginTop:50,
    borderRadius:10,
    borderWidth:10,
    justifyContent:"center",
    alignItems:"center"
  },
  bodycontentText:{
    fontSize:20,
    color:"purple",
    fontWeight:"800",
    padding:10
  },
  getstratedView:{
    width:100,
    height:30,
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:420,
    height:400,
    justifyContent:"center",
    alignItems:"center"
  }

})