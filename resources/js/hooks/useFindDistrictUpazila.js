import React, { useState, useEffect } from "react";
import { districtOptions, upzilaOptions } from "../constent/options";

const useFindDistrictUpazila = (district) => {
    const [districtUpzila, setDistrictUpzila] = useState([]);
    useEffect(() => {
        // Find district
        const districtId = districtOptions.find((d) => d.name === district);
        const findDistrictUpzila = upzilaOptions.filter(
            (u) => u.district_id == districtId?.id
        );

        setDistrictUpzila(findDistrictUpzila);
    }, [district]);

    return districtUpzila;
};

export default useFindDistrictUpazila;
