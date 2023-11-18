/*
    Responsible for rendering Register page and it's components

    - Passes props to the Input and Select components
    
    - responsible for useForm state
    - responsible for handleSubmit.
    - responsible for find districtUpazila.
    - responsible for usePage. Recieve flash data
    - responsible for the Login page styles
*/

import React from "react";
import Input from "../components/form-element/Input";
import Select from "../components/form-element/Select";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

import { districtOptions, bloodGroups } from "../constent/options";
import useFindDistrictUpazila from "../hooks/useFindDistrictUpazila";

const Register = () => {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        number: "",
        last_date_of_donation: "",
        blood_group: "",
        district: "",
        upazila: "",
    });

    // Distacture data
    const {
        name,
        email,
        password,
        number,
        last_date_of_donation,
        blood_group,
        district,
        upazila,
    } = data;

    // Find district upazila
    const districtUpzila = useFindDistrictUpazila(district);

    // Hnadle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register", {
            name,
            email,
            password,
            number,
            last_date_of_donation,
            blood_group,
            district,
            upazila,
        });
    };

    return (
        <section className="bg-gray-50 py-8 dark:bg-gray-900">
            <Head>
                <title>Register</title>
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
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex justify-between md:gap-8 flex-wrap md:flex-nowrap">
                                <div className="basis-full md:basis-2/4">
                                    <Input
                                        label="Your Name"
                                        type="text"
                                        name="name"
                                        placeholder="Towhidur Rahman"
                                        value={name}
                                        handleChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        errors={errors || {}}
                                    />

                                    <Input
                                        label="Your Email"
                                        type="email"
                                        name="email"
                                        placeholder="yourmail@gmail.com"
                                        value={email}
                                        handleChange={(e) =>
                                            // setEmail(e.target.value)
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
                                            // setPassword(e.target.value)
                                            setData("password", e.target.value)
                                        }
                                        errors={errors || {}}
                                    />
                                    <Input
                                        label="Number"
                                        type="text"
                                        name="number"
                                        placeholder="0180000000"
                                        value={number}
                                        handleChange={(e) =>
                                            setData("number", e.target.value)
                                        }
                                        errors={errors || {}}
                                    />
                                </div>
                                <div className="basis-full md:basis-2/4">
                                    <Input
                                        label="Last Date of Donation"
                                        type="date"
                                        name="last_date_of_donation"
                                        value={last_date_of_donation}
                                        handleChange={(e) =>
                                            setData(
                                                "last_date_of_donation",
                                                e.target.value
                                            )
                                        }
                                        errors={errors || {}}
                                    />
                                    <Select
                                        label="Blood Groups"
                                        value={blood_group}
                                        handleChange={(e) =>
                                            // setBlood_group(e.target.value)
                                            setData(
                                                "blood_group",
                                                e.target.value
                                            )
                                        }
                                        options={bloodGroups}
                                        choosen="Choose a blood blood_group"
                                    />

                                    <Select
                                        label="District"
                                        value={district}
                                        handleChange={(e) =>
                                            // setDistrict(e.target.value)
                                            setData("district", e.target.value)
                                        }
                                        options={districtOptions}
                                        choosen="Choose a district"
                                    />
                                    <Select
                                        label="upazila"
                                        value={upazila}
                                        handleChange={(e) =>
                                            // setUpazila(e.target.value)
                                            setData("upazila", e.target.value)
                                        }
                                        options={districtUpzila}
                                        choosen="Choose a upazila"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Register
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
