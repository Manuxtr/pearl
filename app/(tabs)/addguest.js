import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../utilities/mainstyles";
import { appColors } from "../../utilities/apptheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { myEvents } from "../../assets/localdata/hotelevents";
import { userGender } from "../../components/gender";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select"
import { useLocalSearchParams } from "expo-router";

export default function AddGuest() {

  const [firstname,setFirstName] = useState("")
  const [lastname,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAdress] = useState("")
  const [nok,setNok] = useState("")
  const [nokphone,setNokPhone] = useState("")
  const [gender,setGender] = useState("")
    const {roomType} = useLocalSearchParams()
  const [rooms,setRooms] = useState(roomType || "")
  const [date,setDate] = useState(new Date())
  const [showpicker,setShowPicker] = useState(false)

  


  

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView>
            {/* TOP VIEW */}
            <View style={appStyles.topviewC}>
              <Text style={appStyles.title}>ADD GUESTS</Text>
              <Text style={appStyles.subtitle}>PLEASE ENTER GUEST BIODATA</Text>
            </View>
            {/* guest image */}
            <View style={appStyles.guestImg}>
              <TouchableOpacity>
                <FontAwesome name="user-circle" size={90} color="black" />
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
                onChangeText={(value) => setNok(value)}
              />

              <TouchableOpacity>
                <View style={appStyles.ctaAdd}>
                  <Text style={{fontSize:18,color:"white",fontFamily:"Chubsy Snack"}}>Add Guest</Text>
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
