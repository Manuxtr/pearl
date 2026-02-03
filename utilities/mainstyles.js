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
        // paddingBottom:50,
      
       

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
        paddingHorizontal:12
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
        fontSize:13,
        fontWeight:"800",
        fontFamily:"Relyne-Regular",
        textAlign:"justify"

        
    },
    cardView:{
        flex:1,
        backgroundColor:appColors.lielac,
        borderRadius:15,
        height:420,
        overflow:"hidden"
     
    },
    ctaView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:12,
        marginBottom:70       

    },
    ctabtn:{
        width:100,
        height:30,
        backgroundColor:appColors.blue,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
      
    },
    // form styles
    topviewC:{
        padding:20
    },
    title:{
        fontSize:26,
        fontWeight:"700",
        fontFamily:"Relyne-Regular"
    },
    subtitle:{
        fontSize:18,
        fontFamily:"Chubsy Snack",
        color:appColors.darkgray
    },
    form:{
        backgroundColor:appColors.white,
        paddingHorizontal:20

    },
    formInput:{
        flex:1,
        height:50,
        borderWidth:1,
        borderColor:appColors.darkgray,
        width:"100%",
        borderRadius:10,
        marginTop:20


    },
    guestImg:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:appColors.purple,
        height:100,
        width:100,
        borderRadius:50,
        marginBottom:10
    },
    ctaAdd:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        height:50,
        width:"50%",
        backgroundColor:appColors.purple,
        borderRadius:8,
        marginTop:10
    },
    priceView:{
        width:90,
        height:20,
        backgroundColor:appColors.purple,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:17

    },
    priceText:{
        color:"white",
        fontSize:12,
        fontWeight:"800"
    },
    Date:{display:"flex",
        flexDirection:"row",
        marginBottom:10,
        marginTop:10,
        gap:10
     
    },
    checkin:{
        fontSize:13,
        fontFamily:"Chubsy Snack",
        textAlign:"center",
        marginTop:12
    },
    datetext:{
        textAlign:"center",
        fontSize:14,
        fontFamily:"Relyne-Regular",
        fontWeight:"800",
        
    }
    

   

})

