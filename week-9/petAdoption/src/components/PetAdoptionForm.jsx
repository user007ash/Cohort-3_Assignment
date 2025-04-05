import React, { useState } from "react";
import AdopterData from "./AdopterData";
import { validation } from "../utils/validation";

const PetAdoptionForm = () => {
    const [formData, setFormData] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const [values, setValues] = useState({
        petName: "",
        petType: "Dog",
        breed: "",
        adopterName: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        petName: "",
        petType: "",
        breed: "",
        adopterName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        const updatedErrors = validation(name, value, { ...errors });
        setErrors(updatedErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedErrors = { ...errors };
        Object.entries(values).forEach(([key, val]) => {
            updatedErrors = validation(key, val, updatedErrors);
        });
        setErrors(updatedErrors);

        const hasErrors = Object.values(updatedErrors).some((err) => err);
        const hasEmptyFields = Object.values(values).some((val) => val.trim() === "");

        if (hasErrors || hasEmptyFields) {
            alert("Please fix the errors and fill out all fields.");
            return;
        }

        setFormData((prev) => [...prev, values]);
        setShowTable(true);
        setValues({
            petName: "",
            petType: "Dog",
            breed: "",
            adopterName: "",
            email: "",
            phone: "",
        });
        setErrors({
            petName: "",
            petType: "",
            breed: "",
            adopterName: "",
            email: "",
            phone: "",
        });
    };

    const handleGoBack = () => {
        setShowTable(false);
    };

    if (!showTable) {
        const { petName, petType, breed, adopterName, email, phone } = values;

        return (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Pet Name</label>
                        <input
                            type="text"
                            name="petName"
                            value={petName}
                            onChange={handleChange}
                        />
                        <small>{errors.petName}</small>
                    </div>

                    <div>
                        <label>Pet Type</label>
                        <select name="petType" value={petType} onChange={handleChange}>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Rabbit">Rabbit</option>
                            <option value="Bird">Bird</option>
                        </select>
                    </div>

                    <div>
                        <label>Breed</label>
                        <input
                            type="text"
                            name="breed"
                            value={breed}
                            onChange={handleChange}
                        />
                        <small>{errors.breed}</small>
                    </div>

                    <div>
                        <label>Your Name</label>
                        <input
                            type="text"
                            name="adopterName"
                            value={adopterName}
                            onChange={handleChange}
                        />
                        <small>{errors.adopterName}</small>
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <small>{errors.email}</small>
                    </div>

                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                        />
                        <small>{errors.phone}</small>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    return <AdopterData formData={formData} handleGoBack={handleGoBack} />;
};

export default PetAdoptionForm;
