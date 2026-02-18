import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  ActivityIndicator,
  Image
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../utilities/mainstyles";
import { appColors } from "../../utilities/apptheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { myEvents } from "../../assets/localdata/hotelevents";
import { userGender } from "../../components/gender";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select"
import { useLocalSearchParams,useRouter  } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import {db} from "../../config/firebase_config"
import { doc,getDoc,updateDoc } from "firebase/firestore";



export default function UpdateGuest() {

  const [firstname,setFirstName] = useState("")
  const [lastname,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAdress] = useState("")
  const [nok,setNok] = useState("")
  const [nokphone,setNokPhone] = useState("")
  const [gender,setGender] = useState("")
    const {roomType,uid} = useLocalSearchParams()
  const [rooms,setRooms] = useState(roomType || "")
  const [profileImage,setProfileImage] = useState(null)
const [checkInDate,setCheckInDate] = useState(new Date())
const [checkOutDate,setCheckOutDate] = useState(new Date())
const [isLoading,setIsLoading] = useState(false)
const router = useRouter()





// date picker

const showDatepicker = (isCheckIn) => {
    DateTimePickerAndroid.open({
      value: isCheckIn ? checkInDate : checkOutDate,
      onChange: (event, selectedDate) => {
        if (event.type === 'set') {
          const currentDate = selectedDate || (isCheckIn ? checkInDate : checkOutDate);
          if (isCheckIn) setCheckInDate(currentDate);
          else setCheckOutDate(currentDate);
          showTimepicker(isCheckIn, currentDate);
        }
      },
      mode: 'date',
      is24Hour: true,
    });
  };

  //timpicker
 const showTimepicker = (isCheckIn, dateFromDatePicker) => {
    DateTimePickerAndroid.open({
      value: dateFromDatePicker, // Use the date we just picked!
      onChange: (event, selectedTime) => {
        if (event.type === 'set') {
          const finalDate = selectedTime || dateFromDatePicker;
          // Update state with the final DATE + TIME
          if (isCheckIn) setCheckInDate(finalDate);
          else setCheckOutDate(finalDate);
        }
      },
      mode: 'time',
      is24Hour: true,
    });
  };


  // guest image selection
  const pickImage = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResult.granted === false) {
                Alert.alert("Permission to access gallery is required!");
                return;
            }
            const pickerResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ["images"],
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });
            if (!pickerResult.canceled) {
                setProfileImage(pickerResult.assets[0].uri);
                Alert.alert("PROFILE IMAGE UPLOAD SUCCESSFUL");
            };
        } catch (error) {
            Alert.alert("Error", "An error occurred while uploading the image.","try again",error);
        }
    };

// fetch user records 
useEffect(() => {
    const GetGuestRecords = async () => {
        try {
            setIsLoading(true)
            const docRef = doc(db,"guests",uid)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                const data = docSnap.data()
                setFirstName(data.firstname)
                setLastName(data.lastname)
                setEmail(data.email)
                setPhone(data.phone)
                setAdress(data.address)
                setNok(data.nok)
                setNokPhone(data.nokphone)
                setRooms(data.rooms)
                setProfileImage(data.profileImage)
                setCheckInDate(data.date ? new Date() : new Date())
                setCheckOutDate(data.date ? new Date() : new Date())

            }else{
                Alert.alert("error","no guest info found")
            }
        } catch (error) {
            Alert.alert("Error","an Error occured fetching data",error)
        }
        setIsLoading(false)
    }
    GetGuestRecords()
},[uid])

    // save to database

    const HandleUpdateguest = async () => {
      if(!firstname.trim() || !lastname.trim() || !gender || !rooms.trim() || !email.trim() || !phone.trim() || !address.trim() || !nok.trim() || !nokphone.trim()){
        Alert.alert("error","Please fill all the fields")
        return;
      }
     try {
      const selectedRoom = myEvents.find((event) => event.roomtype === rooms )
      const roomPrice = selectedRoom?.price || 0
      const imageUri = profileImage ? profileImage : ""

      const guestData = {
        profileImage:imageUri,
        firstname:firstname.trim(),
        lastname:lastname.trim(),
        gender:gender,
        roomType:rooms,
        roomPrice:roomPrice,
        email:email.trim().toLowerCase(),
        phone:phone.trim(),
        address:address.trim(),
        nok:nok.trim(),
        nokphone:nokphone.trim(),
        checkInDate:checkInDate.toISOString(),
        checkOutDate:checkOutDate.toISOString(),
        createdAt:new Date().getTime()
      }
      setIsLoading(true)
        const docRef = doc(db,"guests",uid)
        await updateDoc(docRef,guestData)
       Alert.alert("Success",`Guest ${firstname} ${lastname} has been updated sucessfully`)
        setIsLoading(false)
        router.back()
     } catch (error) {
      Alert.alert("error","error updating  guest ",error)
     } 

    }

  

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView>
            {/* TOP VIEW */}
            <View style={appStyles.topviewC}>
              <Text style={appStyles.title}>UPDATE GUESTS</Text>
              <Text style={appStyles.subtitle}>PLEASE ENTER GUEST BIODATA</Text>
            </View>
            {/* guest image */}
            <View style={appStyles.guestImg}>
              <TouchableOpacity onPress={pickImage}>
                { profileImage ?
                 ( <Image
                 source={{uri:profileImage}}
                 style={{width:100,height:100,borderRadius:50}}
                 />)
                : <FontAwesome name="user-circle" size={90} color="black" />}
              </TouchableOpacity>
            </View>
            {/* FORM VIEW */}
            <View style={appStyles.form}>
              <TextInput
                keyboardType="default"
                placeholder="First Name"
                placeholderTextColor={appColors.gray}
                style={appStyles.formInput}
                value={firstname}
                onChangeText={(value) => setFirstName(value)}
              />
              <TextInput
                keyboardType="default"
                placeholder="last Name"
                placeholderTextColor={appColors.gray}
                style={appStyles.formInput}
                value={lastname}
                onChangeText={(value) => setLastName(value)}
              />
              <View style={appStyles.formInput}>
                <RNPickerSelect
                value={gender}
                onValueChange={(value) => setGender(value) }
                placeholder={{label:"Select Gender",value:null}}
                items={userGender}
                />
              </View>
              <View style={appStyles.formInput}>
                <RNPickerSelect
                value={rooms}
                onValueChange={(value) => setRooms(value)}
                placeholder={{label:"select room",value:null}}
                items={myEvents.map((item) => ({
                  label:item.roomtype,
                  value:item.roomtype
                }))}
                />
              </View>
              <View style={appStyles.priceView}>
                  {rooms ? (
                  <Text style={appStyles.priceText}>Price:{myEvents.find((event) => event.roomtype === rooms)?.price}</Text>
                ):null}
              </View>
              <TextInput
                keyboardType="email-address"
                placeholder="email"
                placeholderTextColor={appColors.gray}
                style={appStyles.formInput}
                  value={email}
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                keyboardType="phone-pad"
                placeholder="phone"
                placeholderTextColor={appColors.gray}
                style={appStyles.formInput}
                value={phone}
                onChangeText={(value) => setPhone(value)}
              />
              <TextInput
                keyboardType="default"
                placeholder="address"
                multiline={true}
                placeholderTextColor={appColors.gray}
                style={appStyles.formInput}
                value={address}
                onChangeText={(value) => setAdress(value)}
              />
              <TextInput
                keyboardType="default"
                placeholder="next of kin "
                placeholderTextColor={appColors.gray}
                style={appStyles.formInput}
                value={nok}
                onChangeText={(value) => setNok(value)}
              />
              <TextInput
                keyboardType="phone-pad"
                placeholder="next of kin phone"
                placeholderTextColor={appColors.gray}
                style={appStyles.formInput}
                value={nokphone}
                onChangeText={(value) => setNokPhone(value)}
              />
              <View style={appStyles.Date}>
                <View style={{flex:1}}>
                  <Text style={appStyles.checkin}>Check in</Text>
                  <TouchableOpacity onPress={() => showDatepicker(true)}
                      style={[appStyles.formInput,{height:50,justifyContent:"center"}]}
                    >
                    <Text style={appStyles.datetext}>{checkInDate.toLocaleDateString()}  {checkInDate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                     <Text style={appStyles.checkin}>Check Out</Text>
                  <TouchableOpacity onPress={() => showDatepicker(false)}
                    style={[appStyles.formInput,{height:50,justifyContent:"center"}]}
                    >
                    <Text style={appStyles.datetext}>{checkOutDate.toLocaleDateString()}  {checkOutDate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity onPress={() => HandleUpdateguest()}>
                <View style={appStyles.ctaAdd}>
                  {isLoading ? <ActivityIndicator size={"small"} color={"white"}/>
                   : <Text style={{fontSize:18,color:"white",fontFamily:"Chubsy Snack"}}>Update Guest</Text>}
                </View>
              </TouchableOpacity>
            </View>
            {/* ctya */}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
