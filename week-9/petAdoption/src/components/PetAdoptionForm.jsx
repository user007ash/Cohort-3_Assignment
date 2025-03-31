import React, { useState } from "react";

function PetAdoptionForm() {
    const [formData, setFormData] = useState([]);
    const [values, setValues] = useState({
        petName: "",
        petType: "",
        breed: "",
        name: "",
        email: "",
        phone: "",
    });

    const [showTable, setShowTable] = useState(false);
    const [errors, setErrors] = useState({
        petName: "",
        petType: "",
        breed: "",
        name: "",
        email: "",
        phone: "",
    });

    return (
        <div className="form">
            <div>
                <label htmlFor="petName">Pet Name</label>
                <input
                    type="text"
                    name="petName"
                    placeholder="Enter Pet Name"
                />
                <small></small>
            </div>
            <div>
                <label htmlFor="petType">Pet type</label>
                <select name="petType">
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Bird">Bird</option>
                    <option value="Hamster">Hamster</option>
                </select>
                <small></small>
            </div>
            <div>
                <label htmlFor="petBreed">Pet Breed</label>
                <input
                    type="text"
                    name="petBreed"
                    placeholder="Enter Pet Breed"
                />
                <small></small>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your Name" />
                <small></small>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Enter Email" />
                <small></small>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                />
                <small></small>
            </div>
            <div>
                <button type="submit" >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default PetAdoptionForm;
