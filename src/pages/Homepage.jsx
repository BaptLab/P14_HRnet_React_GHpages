import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Outside components */
import Select from "react-select";
import DatePicker from "react-datepicker";

/* Events */
import { addEmployee } from "../redux/slices/employeesListSlice";

/* Data */
import stateList from "../data/localData/states";
import departmentList from "../data/localData/department";

/* Style */
import "react-datepicker/dist/react-datepicker.css";

/* Components */
import Header from "../components/layout/Header";
import Popup from "../components/layout/Popup";

const Homepage = () => {
  const dispatch = useDispatch();
  const employeesList = useSelector((state) => state.employeesList);

  //Popup state
  const [successPopup, setSuccessPopup] = useState(false);

  //State for datepicker and select menu
  const [startDate, setStartDate] = useState();
  const [birthDate, setBirthDate] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState(""); // State to store selected department
  const [selectedState, setSelectedState] = useState(""); // State to store selected department

  //event for select menus
  const handleDepartmentChange = (selectedOption) => {
    setSelectedDepartment(selectedOption); // Store the selected department
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption); // Store the selected department
  };

  //Submit action
  const handleSave = (e) => {
    e.preventDefault();

    //We get the data from the input
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const zipCode = document.getElementById("zip-code");
    const dateOfBirth = document.getElementById("birthDate");
    const dateOfStart = document.getElementById("startDate");

    //we create a new user with the data
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: dateOfStart.value,
      street: street.value,
      city: city.value,
      state: selectedState.value,
      zipCode: zipCode.value,
      department: selectedDepartment.value,
    };

    console.log("value being pushed inside the employees list", employee);
    //we push the new employee in the array via the dispatch
    dispatch(addEmployee(employee));
    //popup to indicate the creation of an employee
    setSuccessPopup(true);
    //We clean the form afterward
    cleanForm();
  };

  function cleanForm() {
    // Reset input fields
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("street").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zip-code").value = "";

    // Reset date pickers
    setStartDate();
    setBirthDate();

    // Reset Select components for department and state
    setSelectedDepartment("");
    setSelectedState("");
  }

  //redirection
  const navigate = useNavigate();

  const handleRedirectToEmployees = () => {
    navigate("/employees");
  };

  return (
    <>
      <Header />
      <main>
        <button
          id="btn-redirect-employees"
          className="btn redirect-btn"
          onClick={handleRedirectToEmployees}
        >
          View Current Employees
        </button>
        <section>
          <h2 id="create-employee">Create Employee</h2>
          <form id="create-employee-form" onSubmit={handleSave}>
            <div className="input">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>
            <div className="input">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>
            <div className="input">
              <label htmlFor="birth-date">Birth Date</label>
              <DatePicker
                id="birthDate"
                dateFormat="dd/MM/yyyy"
                selected={birthDate}
                onChange={(date) => {
                  console.log();
                  setBirthDate(date);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="start-date">Start Date</label>
              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
              />
            </div>
            <div id="adress-box">
              <div className="input">
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
              </div>
              <div className="input">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
              </div>
              <div className="input">
                <label htmlFor="state">State</label>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: "250px",
                    }),
                  }}
                  options={stateList}
                  id="state"
                  key={(option, index) => index}
                  value={selectedState} // Set the selected value
                  onChange={handleStateChange} // Handle the change event
                />
              </div>
              <div className="input">
                <label htmlFor="zip-code">Zip Code</label>
                <input type="number" id="zip-code" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="department">Department</label>
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "250px",
                  }),
                }}
                options={departmentList}
                id="department"
                key={(option, index) => index}
                value={selectedDepartment} // Set the selected value
                onChange={handleDepartmentChange} // Handle the change event
              />
            </div>
            <div id="submit-employee-btn-container">
              <input
                className="btn submit-btn"
                id="submit-employee-btn"
                type="submit"
                form="create-employee-form"
              ></input>
            </div>
          </form>
        </section>
        <Popup
          trigger={successPopup}
          setTrigger={setSuccessPopup}
          closingMsg="Close"
          popUpMsg="Nouvel employé enregistré !"
        />
      </main>
    </>
  );
};

export default Homepage;
