import React, { Component } from "react";

class AdopterData extends Component {
    render() {
        const { formData, handleGoBack } = this.props;
        return (
            <div style={{height:"100vh"}}>
                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "80%",
                        border: "1px solid #ddd",
                        fontSize: "18px",
                        textAlign: "left",
                        padding: "8px",
                        backgroundColor: "#f2f2f2",
                        color: "#333",
                        textTransform: "capitalize",
                        fontFamily: "Arial, sans-serif",
                        marginTop: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Type</th>
                            <th>Breed</th>
                            <th>Adopter Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((value, index) => (
                            <tr key={index}>
                                <td>{value.petName}</td>
                                <td>{value.breed}</td>
                                <td>{value.name}</td>
                                <td>{value.petType}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <button
                        onClick={handleGoBack}
                        style={{
                            padding: "10px 20px",
                            boxSizing: "border-box",
                            width: "auto",
                            display: "inline-block",
                        }}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }
}

export default AdopterData;
