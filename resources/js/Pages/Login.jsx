/*
    Responsible for rendering Login page and it's components

    - Passes props to the Input component
    
    - responsible for useForm state
    - responsible for handleSubmit.
    - responsible for usePage. Recieve flash data
    - responsible for the Login page styles
*/

import React from "react";
import Input from "../components/form-element/Input";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";

const Login = () => {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const { flash } = usePage().props;

    const { email, password } = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login", { email, password });
    };

    return (
        <section className="bg-gray-50 py-8 dark:bg-gray-900 h-[100vh]">
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto  lg:py-0">
                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <h1 className="text-red-600  font-bold text-3xl">
                        LifeSyncer{" "}
                        <Link href="/" className="text-blue-500">
                            Go to Home
                        </Link>
                    </h1>
                </div>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login Into Your Account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                label="Your Email"
                                type="email"
                                name="email"
                                placeholder="yourmail@gmail.com"
                                value={email}
                                handleChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                errors={errors || {}}
                            />
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={password}
                                handleChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                errors={errors || {}}
                            />

                            <button className="w-full text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Login
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Are you new user?{" "}
                                <Link
                                    href="/register"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Register here
                                </Link>
                            </p>
                        </form>
                        {flash.message && (
                            <div className="text-red-600">{flash.message}</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
