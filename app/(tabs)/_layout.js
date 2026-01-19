import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { appColors } from "../../utilities/apptheme";

export default function _Layouts(){
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor:appColors.lielac
        }}>
           <Tabs.Screen
           name="home"
           options={{
            title:"Feeds",
            headerShown: false,
            tabBarIcon:() => <MaterialCommunityIcons name="home-minus-outline" size={24} color={appColors.purple} />
           }}
           
           /> 
           <Tabs.Screen
           name="addguest"
           options={{
            title:"Add Guest",
            headerShown:false,
            tabBarIcon:() => <Octicons name="person-add" size={24} color={appColors.purple} />

           }}
           />
           <Tabs.Screen
           name="guestlist"
           options={{
            title:"Guest List",
            headerShown:false,
            tabBarIcon:() => <MaterialCommunityIcons name="view-list" size={24} color={appColors.purple} />


           }}
           />
           <Tabs.Screen
           name="setting"
           options={{
            title:"Settings",
            headerShown:false,
            tabBarIcon:() => <SimpleLineIcons name="settings" size={24}  color={appColors.purple}/>
           }}
           />
        </Tabs>
    )
}