import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form } from "react-bootstrap";
// import "./App.css";
import './Emp1.css';


const handleSalary = () => {
    // console.log("Hello I am Salary")
    var des = document.getElementById('Designation').value
    var dept = document.getElementById('Department').value
    console.log(des)
    console.log(dept)

    if ((dept === "IT & MIS" && des === "MTO") || (dept === "HR" && des === "MTO") || (dept === "Finance" && des === "MTO")){
        document.getElementById('salary').value = 50000
    }else if ((dept ==="HR"&& des === "General Manager")) {
        document.getElementById('salary').value = 550000
    }else if ((dept ==="Finance"&& des === "Senior Manager") || (dept ==="HR" && des === "Senior Manager")) {
        document.getElementById('salary').value = 250000
    }else if ((dept ==="IT & MIS" && des === "Senior Manager")){
        document.getElementById('salary').value = 300000
    }else if ((dept ==="IT & MIS" && des === "General Manager")){
        document.getElementById('salary').value = 600000
    }else if ((dept ==="IT & MIS" && des === "Assistant Manager")){
        document.getElementById('salary').value = 130000
    }else if((dept ==="HR" && des === "Assistant Manager") || (dept ==="Finance" && des === "Assistant Manager")){
        document.getElementById('salary').value = 120000
    }else if (des ==="-" || dept ==="-"){
        document.getElementById('salary').value = " "
    }
}
const Emp1 = () => {
    return (
    <>
     <Container className="Container formemployee">
        <div className="headingemp">Employee Form</div>
       
        <Form>
            <Row>
            <Col>
                <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <select className="form-control" id="Title">
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                </select>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formFirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="Firstname" placeholder="First Name" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formLastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Lastname" placeholder="Last Name" />
                </Form.Group>
            </Col>
            </Row>
            <br></br>
            <Row>
            <Col>
                <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <select className="form-control" id="Gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
            </Col>
            </Row>
            <br></br>
            <Row>
            <Col>
                <Form.Group controlId="formphone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="xxxx-xxxxxxx"  pattern = "^\d{4}-\d{7}$"/>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formCNIC">
                <Form.Label>CNIC</Form.Label>
                <Form.Control type="CNIC" placeholder="xxxxx-xxxxxxx-x" pattern="^\d{5}-\d{7}-\d{1}$" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formdateofbirth">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" placeholder="Date of birth" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formaddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" placeholder="Address" />
                </Form.Group>
            </Col>
            </Row>
            <br></br>
            <Row>
            <Col>
                <Form.Group controlId="formQualification">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Qualification" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formdateofhire">
                <Form.Label>Date of hire</Form.Label>
                <Form.Control type="date" placeholder="Date of hire" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formbranch">
                <Form.Label>Branch hire to</Form.Label>
                <Form.Control type="date" placeholder="Branch hire to" />
                </Form.Group>
            </Col>
            </Row>
            <br></br>
            <Row>
            <Col>
                <Form.Group controlId="formDesignation">
                <Form.Label>Designation</Form.Label>
                {/* <Form.Control type="text" placeholder="Designation" name="Designation" id="Designation" /> */}
                <select className="form-control" name="Designation" id="Designation" onChange={handleSalary}  >
                    <option>-</option>
                    <option>General Manager</option>
                    <option>Senior Manager</option>
                    <option>Assistant Manager</option>
                    <option>MTO</option>
                </select>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                {/* <Form.Control type="text" placeholder="Department" name="Department" id ="Department"/> */}
                <select className="form-control" name="Department" id="Department" onChange={handleSalary}  >
                    <option>-</option>
                    <option>IT & MIS</option>
                    <option>HR</option>
                    <option>Finance</option>
                </select>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control className="randsalary" type="text" placeholder="Salary" id="salary"  name="salary" readOnly />
                </Form.Group>
            </Col>
            </Row>
            <br></br>
            <Row>
            <Col>
                <Form.Group controlId="formButton">
                <Form.Label></Form.Label>
                <div className="text-center">
                    <Button type="submit"> Add Employee</Button>
                </div>
                </Form.Group>
            </Col>
            </Row>
            <br></br>
        </Form>
        </Container>
</>
);
}

export default Emp1;