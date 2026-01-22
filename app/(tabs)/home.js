import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { appStyles } from "../../utilities/mainstyles";
import { appColors } from "../../utilities/apptheme";
import { myEvents } from "../../assets/localdata/hotelevents";
import { Seperator } from "../../components/seperator";
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* header */}
        <View style={appStyles.card}>
          <View style={{ gap: 30 }}>
            <View style={appStyles.headerView}>
              <Text style={appStyles.HeaderText2}>Pearl</Text>

              <TouchableOpacity>
                <Ionicons
                  name="notifications-circle-outline"
                  size={44}
                  color={appColors.purple}
                />
              </TouchableOpacity>
            </View>
            
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TextInput placeholder="SEARCH ROOMS" style={appStyles.input} />
                <TouchableOpacity>
                  <Ionicons
                    name="filter-circle"
                    size={44}
                    color={appColors.purple}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={appStyles.headerText3}>Accomdations</Text>
          </View>
          <View style={{ marginTop: 20, marginBottom: 550 }}>
            <FlatList
            keyExtractor={(item) => item.id }
              data={myEvents}
              ItemSeparatorComponent={Seperator}
              renderItem={({ item }) => {
                return (
                  <Link href={"(tabs)/addguest"}>
                    <View style={appStyles.cardView}>
                      {/* IMAGE VIEW */}
                      <View style={appStyles.flatimgView} >
                        <Image source={item.imgUrl} style={appStyles.flatimg} />
                      </View>
                      {/* ROOM PROP */}
                      <View>
                        <View style={appStyles.propView}>
                          <View>
                            <Text style={appStyles.roomtype}>
                            {item.roomtype}
                           </Text>
                          </View>
                          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:5}}>
                              <FontAwesome name="star-o" size={24} color="black" />
                              <Text>{item.rating}</Text>
                          </View>
                        </View>
                          <Text style={appStyles.desc}>{item.description}</Text>
                         <Text style={appStyles.price}>{item.price}</Text>
                      
                      </View>
                    </View>
                  </Link>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
