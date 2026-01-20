import { StyleSheet,Dimensions,StatusBar } from 'react-native';
import {appColors} from "../utilities/apptheme"
 


const screenWidth = Dimensions.get("window");


export const appStyles = StyleSheet.create({

    wrapper:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:40,
        height:StatusBar.currentHeight
       
    },
    headerView:{

    },
    HeaderText:{
        fontSize:54,
        fontWeight:"800",
        letterSpacing:1.5,
        color:"beige"
    },
    img:{
        resizeMode:"cover",
       
    },
    imgView:{
        height:350,
        width:screenWidth.width,
        justifyContent:"center",
        alignItems:"center"
    },
    imgtext:{
        textAlign:"center",
        fontSize:16,
        // marginTop:15,
        fontWeight:"400",
        color:"beige",
    },
    getstartedView:{
        width:400,
        height:60,
        backgroundColor:"purple",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16
    },
    headerView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    HeaderText2:{
        fontSize:32,
        fontWeight:"400",
        letterSpacing:3.5,
        fontFamily:"Relyne-Regular"
    },

    card:{
        paddingHorizontal:20,
        
    },
    input:{
        flex:1,
        borderWidth:2,
        borderRadius:50,
        borderColor:appColors.purple

    },
  headerText3:{
        fontSize:24,
        fontFamily:"Chubsy Snack"

    },
    flatimg:{
        width:screenWidth.width,
        height:290,
        paddingBottom:50,
      
       

    },
    flatimgView:{
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        overflow:"hidden"

    },
    propView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20
    },
    roomtype:{
        fontSize:18,
        fontWeight:"600",
        fontFamily:""

    },
    price:{
        fontSize:18,
        fontWeight:"600",
        fontFamily:""

    },
    desc:{
        fontSize:18,
        fontWeight:"600",
        fontFamily:""

        
    },
    cardView:{
        flex:1,
        backgroundColor:appColors.lielac,
        borderRadius:15,
        height:420,
        overflow:"hidden"
     
    }
   

})

