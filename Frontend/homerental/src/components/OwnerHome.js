import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import AddProperty from './AddProperty';

class OwnerHome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome, Property Owner!</h1>


                <ul class="ml-5 pl-5">
                    <div class="border 1px bg-primary mb-2 col-lg-2 bg-opacity-50">
                    <li class="nav-item pt-5; ">
                        <p class="text-light">Add to your Dream Property</p>
                            <Link to="/addproperty" class="nav-link;"><button class="mb-2" onClick={this.handleAddProperty}>Add Property</button></Link>
                    </li>
                    </div>

                    <div class="border 1px bg-primary mb-2 col-lg-2">
                        <li class="mt-5">
                            <p class="text-light">Show Your dream property, Where you want to live</p>
                                <Link to="/showproperty" class="nav-link"><button class="mb-2" onClick={this.handleShowProperty}>Show Property</button></Link>
                        </li>
                    </div>

                    <div class="border 1px bg-primary mb-2 col-lg-2">
                        <li class="mt-5">
                            <p class="text-light"></p>
                                <Link to="/logout" class="nav-link"><button class="mb-2" onClick={this.handleShowProperty}>logout</button></Link>
                        </li>
                    </div>

                </ul>
                <Routes>

                    <Route path='/addproperty' element={<AddProperty />} />
                </Routes>

            </div>
        );
    }


    handleAddProperty = () => {
        
    };

    handleShowProperty = () => {
        // Handle the action when the "Show Property" button is clicked
        // For example, you can navigate to a page that displays the properties
    };
}

export default OwnerHome;
