import React from "react";
const SearchSelect = ({
    selectData,
    value,
    handleSelect,
    classNamees,
    required,
}) => {
    const { lable, options, icon } = selectData;

    return (
        <div
            className={`flex justify-between w-full md:block md:py-[5px] md:px-[8px] md:flex-1 md:min-w-[170px] ${classNamees} border-solid border-red-300 dark:border-white`}
        >
            <p className="basis-[40%] dark:text-gray-400 text-gray-500 mb-2 text-lg relative ">
                {required && (
                    <span className="text-red-600 absolute top-[-10px] left-0">
                        *
                    </span>
                )}{" "}
                {lable}
            </p>

            <div className="flex flex-row basis-[60%] items-center">
                <img className="dark:invert" src={icon} alt="" width="26px" />
                <select
                    value={value}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="outline-none px-2 py-2 w-full dark:bg-gray-800 dark:text-white"
                    required={required}
                >
                    <option value="" hidden>
                        Please SearchSelect
                    </option>
                    {options.map((option) => (
                        <option key={option.id}>{option.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SearchSelect;
