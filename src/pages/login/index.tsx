import { useFormik } from "formik"
import * as yup from 'yup';
import TextInput from "@/components/textinput"
import Button from "@/components/button";
import Image from "next/image";
import Checkbox from "@/components/checkbox";

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
})

const Login = () => {
    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('submit');
            console.log(values);
            
        }
    })
    return(
        <main className="grid grid-cols-12 min-h-screen">
            <div className="col-span-12 md:col-span-6 bg-white text-gray-950 grid grid-row justify-items-center content-center">
                <h1 className="font-bold text-4xl">Sign In</h1>
                <p className="text-grey-500">Sign in to stay connected</p>
                <form className="w-3/5 flex flex-col">
                    <TextInput 
                        name="email"
                        label="Email"
                        type="text"
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.email}
                    />
                    {loginForm.touched.email && loginForm.errors.email ? (
                        <p className="text-sm text-rose-500 text-left justify-self-start">{loginForm.errors.email}</p>
                    ) : null}
                    <TextInput 
                        name="password"
                        label="Password"
                        type="password"
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.password}
                    />
                    {loginForm.touched.password && loginForm.errors.password ? (
                        <p className="text-sm text-rose-500 text-left justify-self-start">{loginForm.errors.password}</p>
                    ) : null}
                    <div className="flex flex-row justify-between items-center">
                        <Checkbox 
                            label="Remember me?"
                            checked={loginForm.values.rememberMe}
                            onChange={loginForm.handleChange}
                            name="rememberMe"
                        />
                        <span>Forgot Password</span>
                    </div>
                    <Button 
                        label="Sign in"
                        onClick={loginForm.handleSubmit}
                        type="submit"
                        className="mt-3 w-1/2 self-center"
                    />
                    <div className="flex flex-col items-center my-4">
                        <span>or sign in with other accounts?</span>
                        <span>Don’t have an account? Click here to sign up.</span>
                    </div>
                </form>
            </div>
            <div className="bg-indigo-200 md:col-span-6 relative">
                <Image 
                    src="/background-side.png"
                    alt="background-side"
                    fill
                    className="object-cover relative"
                />
            </div>
        </main>
    )
}

export default Login