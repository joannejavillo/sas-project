import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

function Drug() {
    // Setting our component's initial state
    const [drug, setDrug] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all drug and store them with setDrug
    useEffect(() => {
        loadDrug()
    }, [])

    // Loads all drugs and sets them to drugs
    function loadDrug() {
        API.getDrug()
            .then(res =>
                setDrug(res.data)
            )
            .catch(err => console.log(err));
    };

}

export default Drug;