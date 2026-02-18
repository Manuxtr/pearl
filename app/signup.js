import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appStyles } from "../utilities/mainstyles";
import { Link } from "expo-router";
import { useFormik } from "formik";
import { useState,useContext } from "react";
import { AuthContext } from "../config/authcontext";
import {signUpValidation} from "../components/signupschema"

export default function SignUp() {
  const [isLoading,setIsLoading] = useState(false)
  const authstate = useContext(AuthContext)


  const {handleChange,handleSubmit,handleBlur,errors,values} = useFormik({
    initialValues: {fullname:"",staffId:"",email:"",password:"",passwordcomfirmation:""},
    onSubmit:async (values) => {
      setIsLoading(true)
      try {
        await authstate.SignUp(values.fullname,values.staffId,values.email,values.password)
      } catch (error) {
        console.log("signup error",error)
      }finally{
        setIsLoading(false)
      }
    },
    validationSchema:signUpValidation
  })

  
  



  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 100 }}>
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
              value={values.fullname}
              onChangeText={handleChange("fullname")}
              onBlur={handleBlur("fullname")}
            />
            <Text>{errors.fullname}</Text>
            <TextInput
              placeholder="staff id"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
              value={values.staffId}
              onChangeText={handleChange("staffId")}
              onBlur={handleBlur("staffId")}
            />
             <Text>{errors.staffId}</Text>
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
              onBlur={handleBlur("password")}
            />
             <Text>{errors.password}</Text>
            <TextInput
              placeholder="comfirm password"
              placeholderTextColor={"grey"}
              style={appStyles.signupinput}
              value={values.passwordcomfirmation}
              onChangeText={handleChange("passwordcomfirmation")}
              onBlur={handleBlur("passwordcomfirmation")}
            />
             <Text>{errors.passwordcomfirmation}</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity style={appStyles.ctabtn} onPress={handleSubmit}>
               {isLoading ? "Siging up" : <Text>SIGN UP</Text>}
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
