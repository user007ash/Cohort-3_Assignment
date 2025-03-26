import React, { useEffect, useState } from "react";

const PetAdoptionForm = () => {

  const [petName, setPetName] = useState('')
  const [petType, setPetType] = useState('')
  const [breed, setBreed] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submit, setSubmit] = useState(false)

  return (
    <>
    <div style={{
      padding:'12px',
      fophonentSize:'1rem',
      fontWeight:'bolder',
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:'86vh'
    }}>
      <form 
      style={{
        width:'400px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.1)',
        padding:'18px',
        textAlign:'left'
      }}>
        <label>
          Pet Name
          <input type="text" value={petName} onChange={(e)=>setPetName(e.target.value)} />
        </label>
        <label>
          Pet Type
          <input type="text" value={petType} onChange={(e)=>setPetType(e.target.value)} />
        </label>
        <label>
          Breed
          <input type="text" value={breed} onChange={(e)=>setBreed(e.target.value)} />
        </label>
        <label>
          Your Name
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <label>
          Email
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <label>
          Phone
          <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </label>
        <button type="submit" onClick={()=>setSubmit(currsubmit=>!currsubmit)}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default PetAdoptionForm;
