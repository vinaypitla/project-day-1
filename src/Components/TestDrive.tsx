import NavBar from "./NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles

export default function AddStudent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("Select the car to drive");
  const [date, setDate] = useState(null); // Default value should be `null` for DatePicker

  const saveStu = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Submit button clicked!!!!");
    console.log("Name --->", name);
    console.log("Phone --->", phone);
    console.log("Email --->", email);
    console.log("Selected Car Model --->", model);
    console.log("Selected Date --->", date);

    const Customer = { name, phone, email, model, date };
    console.log("Customer Data:", Customer);

    // Navigate to another page after submission
    navigate("/submitted");
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={saveStu} className="stu-add-mar">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone no</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Enter Phone Number"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
              
            required
          />
        </div>

        {/* Car Model Dropdown */}
        <div className="form-group mt-3">
          <Dropdown onSelect={(eventKey) => setModel(eventKey)}>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="form-control text-left dropdown-toggle-custom"
            >
              {model}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown">
              <Dropdown.Item eventKey="Audi">Audi</Dropdown.Item>
              <Dropdown.Item eventKey="BMW">BMW</Dropdown.Item>
              <Dropdown.Item eventKey="Tesla">Tesla</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Date Picker */}
        <div className="form-group mt-3">
          
          <DatePicker
            selected={date} 
            onChange={(newDate) => setDate(newDate)}
            className="form-control"
            placeholderText="Select a Date"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()} 
          />
        </div>

        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
