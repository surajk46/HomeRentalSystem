import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router";

const OwnerInfo = () => {
 
  const [owner, setOwner] = useState({});
  const [property, setProperty] = useState(JSON.parse(localStorage.getItem("property")));
  const { ownerId } =useParams();

  useEffect(() => {
    // Fetch owner data based on ownerId from your API
    fetch(`http://localhost:8080/getownerbyid/${JSON.parse(localStorage.getItem("property")).owner_id.id}`)
      .then((response) => response.json())
      .then((data) => setOwner(data));
  }, [ownerId]);

  return (
    <div class="container mt-5">
  <h2 class="text-center mb-4">Owner Information</h2>
  <table class="table table-bordered">
    <tbody>
      <tr>
        <th>Name</th>
        <td colspan="3">{owner.fname} {owner.lname}</td>
      </tr>
      <tr>
        <th>Contact No</th>
        <td colspan="3">{owner.contact_no}</td>
      </tr>
      <tr>
        <th>Owner Email</th>
        <td colspan="3">{owner.login_id?.email || "N/A"}</td>
      </tr>
      <tr>
        <th>Address</th>
        <td colspan="3">{owner.address}</td>
      </tr>
      <tr>
        <th>Area Name</th>
        <td colspan="3">{owner.area_id?.name || "N/A"}</td>
      </tr>
      <tr>
        <th>City Name</th>
        <td colspan="3">{owner.area_id?.city_id?.name || "N/A"}</td>
      </tr>
    </tbody>
  </table>
  <button className="btn btn-success" onClick={(e) => { window.history.back() }}>Go Back</button>
</div>


  );
};

export default OwnerInfo;
