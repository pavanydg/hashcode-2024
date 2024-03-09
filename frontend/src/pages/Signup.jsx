import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import  Button  from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import {Subheading} from "../components/Subheading"
import { useNavigate } from "react-router-dom"
import supabase from "../supabase"
import cors from 'cors'

export const Signup = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try{
      const {user, error} = await supabase.auth.signUp({
        email,
        password,
      });
      if(error){
        throw error;
      }
      else{
        console.log("User signed up successfully:", user);
      }
    }
      // navigate("/");
    catch (error) {
      console.error("Sign up error:", error.message);
    }
  }
  return <div className="h-screen flex justify-center"> 
    <div className="flex flex-col justify-center">
      <div className="rounded-lg text-center bg-white p-2 px-4 h-max w-80">
        <Heading label={'Sign Up'}/>
        <Subheading label={'Enter your information to create an account'}/>
        <InputBox onChange={e => {
          setEmail(e.target.value)
        }} label={'Email'} placeholder={"xyz@gmail.com"}/>
        <InputBox onChange={e => {
          setPassword(e.target.value)
        }} label={'Password'} placeholder={"123456"}/>
        <div className="pt-4" onClick={handleSignUp}>
        <div className='hover:cursor-pointer
                bg-purple-500 rounded-md p-1.5 
            ' onClick={handleSignUp}>SignUp</div>
          {/* <Button but={"Signup"}/> */}
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={'Sign in'} to={'/signin'}/>
      </div>
    </div>
  </div>
}