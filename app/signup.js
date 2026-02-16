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
            Create Account
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
              placeholder="fullname"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
            />
            <TextInput
              placeholder="staff id"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
            />

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

            <TextInput
              placeholder="comfirm password"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={appStyles.ctabtn}>
                <Text>SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Link href={"/signin"}>
                <Text>Already have an account? Sign in</Text>
              </Link>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
