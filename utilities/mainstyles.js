import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { appColors } from "../utilities/apptheme";

const screenWidth = Dimensions.get("window");

export const appStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 40,
    height: StatusBar.currentHeight,
  },
  headerView: {},
  HeaderText: {
    fontSize: 54,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "beige",
  },
  img: {
    resizeMode: "cover",
  },
  imgView: {
    height: 350,
    width: screenWidth.width,
    justifyContent: "center",
    alignItems: "center",
  },
  imgtext: {
    textAlign: "center",
    fontSize: 16,
    // marginTop:15,
    fontWeight: "400",
    color: "beige",
  },
  getstartedView: {
    width: 400,
    height: 60,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderText2: {
    fontSize: 32,
    fontWeight: "400",
    letterSpacing: 3.5,
    fontFamily: "Relyne-Regular",
  },

  card: {
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: appColors.purple,
  },
  headerText3: {
    fontSize: 24,
    fontFamily: "Chubsy-Snack",
  },
  flatimg: {
    width: screenWidth.width,
    height: 290,
    // paddingBottom:50,
  },
  flatimgView: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  propView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  roomtype: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "",
  },
  desc: {
    fontSize: 13,
    fontWeight: "800",
    fontFamily: "Relyne-Regular",
    textAlign: "justify",
  },
  cardView: {
    flex: 1,
    backgroundColor: appColors.lielac,
    borderRadius: 15,
    height: 420,
    overflow: "hidden",
  },
  ctaView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 70,
  },
  ctabtn: {
    width: 100,
    height: 30,
    backgroundColor: appColors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  // form styles
  topviewC: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "Relyne-Regular",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Chubsy-Snack",
    color: appColors.darkgray,
  },
  form: {
    backgroundColor: appColors.white,
    paddingHorizontal: 20,
  },
  formInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: appColors.darkgray,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
  guestImg: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: appColors.purple,
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  ctaAdd: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    width: "50%",
    backgroundColor: appColors.purple,
    borderRadius: 8,
    marginTop: 10,
  },
  priceView: {
    width: 90,
    height: 20,
    backgroundColor: appColors.purple,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 17,
  },
  priceText: {
    color: "white",
    fontSize: 12,
    fontWeight: "800",
  },
  Date: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    gap: 10,
  },
  checkin: {
    fontSize: 13,
    fontFamily: "Chubsy-Snack",
    textAlign: "center",
    marginTop: 12,
  },
  datetext: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Relyne-Regular",
    fontWeight: "800",
  },
  // settings
  namecard: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    height: 80,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.darkgray,
    marginTop: 10,
    borderRadius: 20,
  },
  namecard2: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    height: 50,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.darkgray,
    marginTop: 10,
    borderRadius: 14,
  },
  setsec: {
    backgroundColor: appColors.pink,
    width: "100%",
    height: 400,
    justifyContent: "space-between",
  },
  // guest list\
  container: {
    flex: 1,
    backgroundColor: appColors.lielac,
   
  },
  card: {
    padddinghorizontal: 20,
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  GuestListText: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Relyne-Regular",
    letterSpacing: 2,
  },
  guestCountView: {
    backgroundColor: appColors.blue,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  count: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: "400",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: appColors.white,
    paddingHorizontal: 15,
    marginTop: 20,
    borderColor: appColors.blue,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },

  // guestlist render items
  guestCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  nameSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  guestname: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  Infosection: {
    gap: 8,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  roomsection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  roomBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  roomtype2: {
    fontSize: 14,
    fontWeight: "600",
    color: appColors.purple,
  },
  roomPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  datesection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  datecolumn: {
    flex: 1,
  },
  checklabel: {
    fontSize: 11,
    color: appColors.gray,
    marginBottom: 4,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  dateValue: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },
  noksection: {
    backgroundColor: "#fff9e6",
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: appColors.purple,
  },
  noklabel: {
    fontSize: 11,
    color: "#666",
    marginBottom: 4,
    fontWeight: "600",
  },
  noktext: {
    fontSize: 13,
    color: "#333",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
    gap: 15,
  },
  emptyStateText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  listitems:{
     padding: 15,
     paddingBottom: 100,
  },
  // call to action
  actionsection:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:10
  },

  // signup
  signupView:{
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
    marginTop:  30
  },
  google:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
   
  },
  orsection:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"

  },
  line:{
    width:"30%",
    borderTopWidth:1,
    borderTopColor:appColors.purple
  },
  ortext:{
    fontSize:16,
    color:appColors.purple,
    fontWeight:"500"

  },
  inputform:{
    paddingHorizontal:20,
    gap:20
  },
  signupinput:{
    borderWidth:1,
    width:400,
    height:40,
    borderRadius:15,
    borderColor:appColors.purple

  }
});
