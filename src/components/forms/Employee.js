import React from 'react'
import './Employee.css'

const Employee = () => {
    return (
        <>
        <article class="container formemployee">
            <div class="headingemp">
                Employee Form
            </div>
            <form action="" method="">
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <label for="Title">Title</label>
                        <select class="form-control" id="Title">
                            <option>Mr</option>
                            <option>Ms</option>
                            <option>Mrs</option>
                        </select>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="First_Name">First Name</label>
                        <input type="text" class="form-control" id="First_Name" placeholder="First Name"/>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="Last_Name">Last Name</label>
                        <input type="text" class="form-control" id="Last_Name" placeholder="Last Name"/>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group col-md-2">
                            <label for="Gender">Gender</label>
                            <select class="form-control" id="Gender">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="Age">Age</label>
                            <input type="number" class="form-control" id="Age" placeholder="Age"/>
                        </div>
                    <div class="form-group col-md-4">
                        <label for="Email_Address">Email</label>
                        <input type="email" class="form-control" id="Email_Address" placeholder="abcd@xyz.com"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="Phone_Number">Mobile Number</label>
                        <input type="text" class="form-control" id="Phone_Number" placeholder="xxxx-xxxxxxx" pattern="^\d{4}-\d{7}$"/>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="CNIC">CNIC</label>
                        <input type="text" class="form-control" id="CNIC" max="13" name="CNIC" placeholder="xxxxx-xxxxxxx-x" pattern="^\d{5}-\d{7}-\d{1}$"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="Date_of_Birth">Date of Birth</label>
                        <input type="date" class="form-control" id="Date_of_Birth" placeholder="Date of Birth"/>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="Address">Address</label>
                        <input type="text" class="form-control" id="Address" placeholder="Address"/>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Qualification">Qualification</label>
                        <input type="text" class="form-control" id="Qualification" placeholder="Qualification"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Date_of_Hire">Date of Hire</label>
                        <input type="date" class="form-control" id="Date_of_Hire" placeholder="Date of Hire"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Date_of_Hire">Branch Hired To</label>
                        <input type="text" class="form-control" id="Branch_Hired_To" placeholder="Branch"/>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Department">Department</label>
                        <input type="text" class="form-control" id="Department" placeholder="Department"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Department">Designation</label>
                        <input type="text" class="form-control" id="Designation" placeholder="Designation"/>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Salary">Salary</label>
                        <input type="text" class="form-control" id="Salary" placeholder="Salary"/>
                    </div>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-md btn-primary mt-4 mb-2">Add Employee</button>
                </div>
            </form>
        </article>
        </>
    )
}

export default Employee