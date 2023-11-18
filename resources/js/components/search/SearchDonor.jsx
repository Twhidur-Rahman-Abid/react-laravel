import React, { useEffect, useState } from "react";
import SearchSelect from "../form-element/SearchSelect";
import { districtOptions, bloodGroups } from "../../constent/options";

import { Link } from "@inertiajs/inertia-react";
import useFindDistrictUpazila from "../../hooks/useFindDistrictUpazila";

const selectData = [
    {
        lable: "Blood Group",
        options: bloodGroups,
        icon: "/images/blood.png",
    },
    {
        lable: "District",
        options: districtOptions,
        icon: "/images/location1.png",
    },
    {
        lable: "Upzila",
        options: [],
        icon: "/images/location1.png",
    },
    {
        lable: "Type",
        options: [
            { id: 1, name: "All" },
            { id: 2, name: "Available" },
        ],
        icon: "/images/type.png",
    },
];

const SearchDonor = () => {
    const [selectOptions, setSelectOpstions] = useState(selectData);
    const [bloodGroup, setBloodGroup] = useState("");
    const [district, setDistrict] = useState("");
    const [upazila, setUapzila] = useState("");
    const [type, setType] = useState("Available");

    const findDistrUpzila = useFindDistrictUpazila(district);

    // Search endpoint
    let href = `/?blood_group=${bloodGroup}&district=${district}&upazila=${upazila}`;

    const posativeBloodGroup = ["B+", "A+", "O+", "Ab+"];
    const isPositiveBloodGroup = posativeBloodGroup.includes(bloodGroup);
    if (isPositiveBloodGroup) {
        // Remove + icon from blood group for query string
        let subBloodGroup = bloodGroup.substring(0, bloodGroup.length - 1);

        // Search endpoint with + icon
        href = `/?blood_group=${subBloodGroup}%2B&district=${district}&upazila=${upazila}`;
    }

    //
    useEffect(() => {
        const filterSelectOptions = selectOptions.map((item) => {
            if (item.lable === "Upzila") {
                return { ...item, options: findDistrUpzila };
            }
            return item;
        });

        setSelectOpstions(filterSelectOptions);
    }, [findDistrUpzila]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const bloodGroupParam = urlParams.get("blood_group");
        const districtParam = urlParams.get("district");
        const upazilaParam = urlParams.get("upazila");

        setBloodGroup(bloodGroupParam);
        setDistrict(districtParam);
        setUapzila(upazilaParam);
    }, []);

    return (
        <form
            className="w-full p-5 bg-white dark:bg-gray-800 flex flex-wrap items-center rounded-md mt-8"
            action=""
        >
            <SearchSelect
                selectData={selectOptions[0]}
                value={bloodGroup}
                handleSelect={setBloodGroup}
                classNamees="md:border-r-[1px]"
                required={true}
            />

            <SearchSelect
                selectData={selectOptions[1]}
                value={district}
                handleSelect={setDistrict}
                classNamees="md:border-r-[1px]"
            />
            <SearchSelect
                selectData={selectOptions[2]}
                value={upazila}
                handleSelect={setUapzila}
                classNamees="md:border-r-[1px]"
            />
            <SearchSelect
                selectData={selectOptions[3]}
                value={type}
                handleSelect={setType}
            />

            <Link
                type="submit"
                as="button"
                href={href}
                disabled={!bloodGroup}
                className={`px-6 py-2 border-[1px] dark:text-white border-solid border-red-600 mr-2 ${
                    !bloodGroup && "cursor-not-allowed"
                }`}
            >
                + Add
            </Link>
        </form>
    );
};

export default SearchDonor;
