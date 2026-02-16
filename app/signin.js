import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../utilities/mainstyles";
import { Link } from "expo-router";

export default function SignUp() {
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 180 }}>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>
            Sign in Account
          </Text>
          <View style={{}}>
            <TouchableOpacity style={appStyles.google}>
              <Image
                source={require("../assets/images/mygoogle.png")}
                style={{ height: 30, width: 30, backgroundColor: "purple" }}
              />
              <Text>Google</Text>
            </TouchableOpacity>
          </View>
          {/* or section */}
          <View style={appStyles.orsection}>
            <View style={appStyles.line}></View>
            <Text style={appStyles.ortext}>OR</Text>
            <View style={appStyles.line}></View>
          </View>
          {/* input forms */}
          <View style={appStyles.inputform}>
            <TextInput
              placeholder="email"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
            />

            <TextInput
              placeholder="password"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
            />

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={appStyles.ctabtn}>
                <Text>Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Link href={"/signup"}>
                <Text>New here? Sign up</Text>
              </Link>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
