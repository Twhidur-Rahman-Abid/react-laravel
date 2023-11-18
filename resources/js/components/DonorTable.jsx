/*
    Responsible for rendering DonorTable

    - Recive donor as porps
*/

import React from "react";
import moment from "moment/moment";

const DonorTable = ({ donors }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Blood Group
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            District
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Upazila
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Available
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {donors?.map((user) => {
                        const {
                            id,
                            name,
                            blood_group,
                            district,
                            upazila,
                            number,
                            last_date_of_donation,
                        } = user;

                        const isAvaileable = new Date() < last_date_of_donation;

                        return (
                            <tr
                                key={id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4">{blood_group}</td>
                                <td className="px-6 py-4">{name}</td>
                                <td className="px-6 py-4">{district}</td>
                                <td className="px-6 py-4">{upazila}</td>
                                <td className="px-6 py-4">
                                    {moment(last_date_of_donation).format(
                                        "MMM Do YY"
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {isAvaileable ? "yes" : "no"}
                                </td>

                                <td className="px-6 py-4">{number}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DonorTable;
