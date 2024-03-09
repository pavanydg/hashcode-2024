import { BottomWarning } from "../components/BottomWarning"
import  Button  from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"

export const Signin = () => {
    return <div className="h-screen  flex justify-center"> 
    <div className="flex flex-col justify-center">
      <div className="rounded-lg text-center bg-white p-2 px-4 h-max w-80">
        <Heading label={'Sign In'}/>
        <Subheading label={'Enter your credentials to access your account'}/>
        <InputBox label={'Email'} placeholder={"xyz@gmail.com"}/>
        <InputBox label={'Password'} placeholder={"123456"}/>
        <div className="pt-4">
          <Button but={"Sign In"}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={'Sign Up'} to={'/signup'}/>
      </div>
    </div>
  </div>
}