import { useFormik } from "formik"
import * as yup from 'yup';
import TextInput from "@/components/textinput"
import Button from "@/components/button";
import Image from "next/image";

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
})

const Login = () => {
    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('submit');
            console.log(values);
            // login(values)
            //     .then(res => {
            //         console.log(res.data);
            //         localStorage.setItem('login', res.data.token)
            //         Cookies.set('loginToken', res.data.token)
            //         navigate('/users')
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
        }
    })
    return(
        <main className="grid grid-cols-12 min-h-screen">
            <div className="col-span-12 md:col-span-6 bg-white text-gray-950 grid grid-row justify-items-center content-center">
                <h1 className="font-bold text-4xl">Sign In</h1>
                <p className="text-grey-500">Sign in to stay connected</p>
                <form>
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

                    <Button 
                        label="Sign in"
                        onClick={loginForm.handleSubmit}
                        type="submit"
                        className="mt-3"
                    />
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