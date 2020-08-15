import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";
import {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
} from "../Action/EmpAction";
import { connect } from "react-redux";

class Employent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: 0,
      empname: "",
      address: "",
      mobile: "",
      age: 0,
    };
  }

  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEmployee();
  }

  submitData = () => {
    if (this.state.empname && this.state.address && !this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        empname: this.state.empname,
        address: this.state.address,
      };

      this.props.addEmployee(newEmployee);
    } else {
      alert("Enter Employee Details.");
    }
  };

  updateData = (id) => {
    alert(
      this.state.empname + " " + this.state.address + " " + this.state.empid
    );
    if (this.state.empname && this.state.address && this.state.empid) {
      const updatedDetails = {
        empid: this.state.empid,
        empname: this.state.empname,
        address: this.state.address,
      };

      this.props.editEmployee(this.state.empid, updatedDetails);
    } else {
      alert("Enter Employee Details.");
    }
  };

  editDetails = (data) => {
    this.setState({
      empid: data.empid,
      empname: data.empname,
      address: data.address,
    });
  };

  deleteEmployee = (id) => {
    if (window.confirm("Are you sure?" + id)) {
      this.props.deleteEmployee(id);
    }
    this.clearData();
  };

  handleNameChange = (e) => {
    this.setState({
      empname: e.target.value,
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  clearData = () => {
    this.setState({
      empid: 0,
      empname: "",
      address: "",
      mobile: "",
      age: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CRUD opeartions for Employee Module</h1>
        </header>
        <p className="App-intro">
          <div className="leftsection">
            Employee Name :{" "}
            <input
              onChange={this.handleNameChange}
              value={this.state.empname}
              type="text"
              placeholder="Employee Name"
            />{" "}
            <br />
            Address :{" "}
            <input
              onChange={this.handleDepartmentChange}
              value={this.state.address}
              type="text"
              placeholder="Employee Address"
            />
            <br />
            {this.state.empid ? (
              <button onClick={this.updateData}>UPDATE</button>
            ) : (
              <button onClick={this.submitData}>ADD</button>
            )}{" "}
            <button onClick={this.clearData}>CLEAR</button>
          </div>
          <div className="rightsection">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>

                  <th>Action(s)</th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees &&
                  this.props.employees.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{data.empname}</td>
                        <td>{data.address}</td>

                        <td>
                          <button onClick={() => this.editDetails(data)}>
                            EDIT
                          </button>{" "}
                          <button
                            onClick={() => this.deleteEmployee(data.empid)}
                          >
                            DELETE
                          </button>{" "}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

/* const mapActionToProps = {
  fetchemployee: action.getEmployee,
}; */

export default connect(mapStateToProps, {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
})(Employent);
