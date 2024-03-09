import supabase from "../supabase"
import { BottomWarning } from "../components/BottomWarning"
import  Button  from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"

export const Signin = () => {

  const handleSignIn = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      console.log('User signed in:', user);
      navigate('/');
    } catch (error) {
      console.error('Sign-in error:', error.message);
    }
  };

    return <div className="h-screen  flex justify-center"> 
    <div className="flex flex-col justify-center">
      <div className="rounded-lg text-center bg-white p-2 px-4 h-max w-80">
        <Heading label={'Sign In'}/>
        <Subheading label={'Enter your credentials to access your account'}/>
        <InputBox label={'Email'} placeholder={"xyz@gmail.com"}/>
        <InputBox label={'Password'} placeholder={"123456"}/>
        <div className='hover:cursor-pointer
                bg-purple-500 rounded-md p-1.5 
            ' onClick={handleSignIn}>SignIn</div>
        <BottomWarning label={"Don't have an account?"} buttonText={'Sign Up'} to={'/signup'}/>
      </div>
    </div>
  </div>
}