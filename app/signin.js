import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appStyles } from "../utilities/mainstyles";
import { Link } from "expo-router";
import { useFormik } from "formik";
import { useState ,useContext} from "react";
import { AuthContext } from "../config/authcontext";

export default function SignIn() {
  const [isLoading,setIsLoading] = useState(false)
  const authstate = useContext(AuthContext)

const {handleChange,handleBlur,handleSubmit,errors,values} = useFormik({
  initialValues:{email:"",password:""},
  onSubmit:async (values) => {
    setIsLoading(true)
    try {
      await authstate.LogIn(values.email,values.password)
    } catch (error) {
      Alert.alert("Error","an error occured,failed to login",error)
      
    }finally{
      setIsLoading(false)
    }
  }

})

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView >
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
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <Text>{errors.email}</Text>
            <TextInput
              placeholder="password"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("email")}
            />
            <Text>{errors.password}</Text>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={appStyles.ctabtn} onPress={handleSubmit}>
                {isLoading ? "Loging in" :<Text>Log In</Text>}
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
