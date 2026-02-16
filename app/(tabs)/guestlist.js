import { MaterialCommunityIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { collection, onSnapshot, orderBy, query,deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList, RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Seperator } from "../../components/seperator";
import { db } from "../../config/firebase_config";
import { appColors } from "../../utilities/apptheme";
import { appStyles } from "../../utilities/mainstyles";

export default function GuestList() {
  const [guests, setGuests] = useState([]);
  const [filteredGuests, setFilteredGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // to fecth guests data from firebase firestore
  useEffect(() => {
    const q = query(collection(db, "guests"), orderBy("createdAt", "desc"));
    let unsubscribe;

    try {
      unsubscribe = onSnapshot(q, (querrySnapshot) => {
        const guessListData = [];
        querrySnapshot.forEach((doc) => {
          guessListData.push({
            id: doc.id,
            ...doc.data(),
          });
          
          setGuests(guessListData);
          setFilteredGuests(guessListData);
          setIsLoading(false);
          setRefreshing(false);
        });
        console.log(">>>>>",guessListData)
      });
    } catch (error) {
      Alert.alert("Error fetching guests data", error.message);
      setIsLoading(false);
      setRefreshing(false);
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);


  // handling delete on firebase

  const HandleDelete = async (booking) => {
    setIsLoading(true)
    try {
      await deleteDoc(doc(db,"guests",booking))
      Alert.alert("success","document deleted")
    } catch (error) {
      Alert.alert("error","unable to delete documents,try agin",[{text:"Dismiss"}],error)
    }
    setIsLoading(false)
  }

  // to handle search query and filter guests list
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredGuests(guests);
    } else {
      const filtered = guests.filter(
        (guest) =>
          guest.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guest.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guest.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guest.roomType.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredGuests(filtered);
    }
  }, [searchQuery, guests]);

  // to handle pull to refresh
  const onRefresh = () => {
    setRefreshing(true);
  };

  // date and time formatting function
  const formatDateTime = (datestring) => {
    const date = new Date(datestring);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // for gender icon
  const getGenderIcon = (gender) => {
    if (gender === "male" || gender === "Male") return "gender-male";
    if (gender === "female" || gender === "Female") return "gender-female";
  };

  // to render each guest item in the list
  const renderGuestcard = ({ item }) => {
    const checkInDate = new Date(item.checkInDate);
    const checkOutDate = new Date(item.checkOutDate);
    const now = new Date();
    const isCheckedIn = now >= checkInDate && now <= checkOutDate;
    const isUpcoming = now < checkInDate;

    return (
      // parent card
      <View style={appStyles.guestCard}>
        {/* CARD HEADER */}
        <View style={appStyles.cardHeader}>
          {/* header for name and gender barge */}
          <View style={appStyles.nameSection}>
            <MaterialCommunityIcons
              name={getGenderIcon(item.gender)}
              size={24}
              color={appColors.purple}
            />
            <Text style={appStyles.guestname}>
              {item.firstname} {item.lastname}
            </Text>
          </View>
          {/* guest status */}
          <View
            style={[
              appStyles.statusBadge,
              {
                backgroundColor: isCheckedIn
                  ? "green"
                  : isUpcoming
                    ? "yellow"
                    : "red",
              },
            ]}
          >
            <Text>
              {isCheckedIn ? "Active" : isUpcoming ? "upcoming" : "checked Out"}
            </Text>
          </View>
        </View>
        {/* contact info */}
        <View style={appStyles.Infosection}>
          <View style={appStyles.infoRow}>
            <Entypo name="mail" size={24} color="black" />
            <Text style={appStyles.infoText}>{item.email}</Text>
          </View>
          <View style={appStyles.infoRow}>
            <Entypo name="phone" size={24} color="black" />
            <Text style={appStyles.infoText}>{item.phone}</Text>
          </View>
          {item.address ? (
            <View style={{flexDirection:"row",gap:8}}>
              <Entypo name="address" size={24} color="black" />
              <Text style={appStyles.infoText} numberOfLines={1}>
                {item.address}
              </Text>
            </View>
          ) : null}
        </View>
        {/* room info */}
        <View style={appStyles.roomsection}>
          <View style={appStyles.roomBadge}>
            <MaterialCommunityIcons
              name="bed-outline"
              size={24}
              color="black"
            />
            <Text style={appStyles.roomtype2}>{item.roomType}</Text>
          </View>
          <Text style={appStyles.roomPrice}>{item.roomPrice}</Text>
        </View>
        {/* date */}
        <View style={appStyles.datesection}>
          <View style={appStyles.datecolumn}>
            <Text style={appStyles.checklabel}>Check in</Text>
            <Text style={appStyles.dateValue}>{formatDateTime(item.checkInDate)}</Text>
          </View>
          <View style={{paddingRight:40}}><FontAwesome name="arrow-circle-o-right" size={24} color="black" /></View>
          <View style={appStyles.datecolumn}>
            <Text style={appStyles.checklabel}>Check Out</Text>
            <Text style= {appStyles.dateValue}>{formatDateTime(item.checkOutDate)}</Text>
          </View>
        </View>
        {/* nok */}
        {item.nok ? (
          <View style={appStyles.noksection}>
            <Text style={appStyles.noklabel}>Next of Kin</Text>
            <Text style={appStyles.noktext}>
              {item.nok} - {item.nokphone}
            </Text>
          </View>
        ) : null}
        {/* delete and edit */}
        <View style={appStyles.actionsection}>
          <TouchableOpacity onPress={() => HandleDelete(item.id) }>
            {isLoading ? <ActivityIndicator size={24} color={"red"}/> 
            
            :<MaterialCommunityIcons
              name="delete-sweep"
              color={"black"}
              size={24}
            />}
          </TouchableOpacity>
          <Link href={{
            pathname:"(updateguests)/[uid]",
            params:{uid:item.id}

          }}>
            <MaterialCommunityIcons
              name="account-box-edit-outline"
              color={"black"}
              size={24}
            />
          </Link>
        </View>
      </View>
    );
  };

  // render empty state when there is no guest data
  const renderEmptyState = () => {
    <View style={appStyles.emptyState}>
      <Text style={appStyles.emptyStateText}>No guests found</Text>
      <Link href={"/addguest"}>
        <Text>ADD GUEST HERE</Text>
      </Link>
    </View>;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyles.container}>
        {/* parent card */}
        <View style={appStyles.card}>
          {/* headerView */}
          <View style={appStyles.headerView}>
            <Text style={appStyles.GuestListText}>Guest List</Text>
            <View style={appStyles.guestCountView}>
              <Text style={appStyles.count}>Guest count : {guests.length}</Text>
            </View>
          </View>
          {/* search bar */}
          <View style={appStyles.searchBar}>
            <EvilIcons
              name="search"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Search Guests list"
              style={appStyles.searchInput}
              value={searchQuery}
              onChangeText={(value) => setSearchQuery(value)}
            />
          </View>
          {/* guestlist */}
          {isLoading ? (
            <View>
              <ActivityIndicator size="large" color={appColors.purple} />
              <Text>Loading Guests...</Text>
            </View>
          ) : (
            <FlatList
              data={filteredGuests}
              keyExtractor={(item) => item.id}
              renderItem={renderGuestcard}
              ItemSeparatorComponent={Seperator}
              ListEmptyComponent={renderEmptyState}
              contentContainerStyle={appStyles.listitems}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={[appColors.purple]}
                />
              }
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
