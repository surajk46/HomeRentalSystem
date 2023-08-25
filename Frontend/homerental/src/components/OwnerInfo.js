import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router";

const OwnerInfo = () => {
 
  const [owner, setOwner] = useState({});
  const { ownerId } =useParams();

  useEffect(() => {
    // Fetch owner data based on ownerId from your API
    fetch(`http://localhost:8080/getownerbyid/${JSON.parse(localStorage.getItem("property")).owner_id.id}`)
      .then((response) => response.json())
      .then((data) => setOwner(data));
  }, [ownerId]);

  return (
    <div className="owner-info">
      {/* <h2>{JSON.parse(localStorage.getItem("property")).owner_id.id} hi</h2> */}
      <h2>Owner Information</h2>
      <p>Name: {`${owner.fname} ${owner.lname}`}</p>
      <p>Contact No: {owner.contact_no}</p>
      <p>Address: {owner.address}</p>
      {/* Add more owner information fields here */}

     <p> <button className="btn-success" onClick={(e)=>{window.history.back()}}>Go Back </button></p>
    </div>

  );
};

export default OwnerInfo;
