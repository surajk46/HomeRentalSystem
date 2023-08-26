import React, { useState, useEffect } from 'react';

const PropertyRequestedTenant = () => {
  
  
 
  
const [tenants, setTenants] = useState([]);

const[tenantIds,setTenantIds]=useState([]); 
useEffect(()=>{
    fetch("http://localhost:8080/getallproperty")
    .then(res => res.json())
    .then(data => {setProperty(data)})
    //return()=>{cont.abort()};
 },[]);


  useEffect(() => {
    const fetchTenants = async () => {
      const fetchedTenants = [];

      for (const tenantId of tenantIds) {
        try {
          const response = await fetch(`YOUR_API_URL_HERE/${tenantId}`);
          const tenantData = await response.json();
          fetchedTenants.push(tenantData);
        } catch (error) {
          console.error(`Error fetching data for tenant ${tenantId}:`, error);
        }
      }

      setTenants(fetchedTenants);
    };

    fetchTenants();
  }, [tenantIds]);

  return (
    <div>
      <h1>Tenant Information</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Area ID</th>
            <th>Login ID</th>
            <th>Address</th>
            <th>Contact No</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map(tenant => (
            <tr key={tenant.id}>
              <td>{tenant.id}</td>
              <td>{tenant.fname}</td>
              <td>{tenant.lname}</td>
              <td>{tenant.area_id}</td>
              <td>{tenant.login_id}</td>
              <td>{tenant.address}</td>
              <td>{tenant.contact_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyRequestedTenant;
