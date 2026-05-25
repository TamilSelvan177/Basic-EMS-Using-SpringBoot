import React, { useEffect, useState} from "react";
import EmployeeService from "../Services/EmployeeService";

function Employee(){

    const [employees, setEmployees] = useState([]);

    const [emp, setEmp] = useState({
        name: "",
        department: "",
        salary: ""
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        EmployeeService.getAll().then(res => {
            setEmployees(res.data);
        })
    };

    const handleChange = (e) => {
        setEmp({  ...emp, [e.target.name]: e.target.value });
    };

    const save = (e) => {
        e.preventDefault();

        if(editId){
            EmployeeService.update(editId, emp).then(() => {
                loadEmployees();
            })
        } else {
            EmployeeService.create(emp).then(() => {
                loadEmployees();
                reset();
            });
        }
    };

    const edit = (e) => {
        setEmp(e);
        setEditId(e.id);
    };

    const remove = (id) => {
        EmployeeService.delete(id).then(() => loadEmployees());
    };

    const reset = () => {
        setEmp({ name: "", department: "", salary: ""});
        setEditId(null);
    };

    return (  
    <div className="container mt-5">

        {/* FORM CARD */}
        <div className="card shadow p-4 mb-4">

            <h2 className="text-center mb-4">
                Employee Form
            </h2>

            <form onSubmit={save}>

                <div className="row">

                    <div className="col-md-4 mb-3">
                        <input
                            name="name"
                            placeholder="Name"
                            value={emp.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <input
                            name="department"
                            placeholder="Department"
                            value={emp.department}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <input
                            name="salary"
                            placeholder="Salary"
                            value={emp.salary}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>

                </div>

                <div className="d-flex gap-2">

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        {editId ? "Update" : "Add"}
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={reset}
                    >
                        Clear
                    </button>

                </div>

            </form>

        </div>

        {/* TABLE CARD */}
        <div className="card shadow p-4">

            <h2 className="mb-4 text-center">
                Employee List
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {employees.map(e => (

                            <tr key={e.id}>

                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.department}</td>
                                <td>{e.salary}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => edit(e)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => remove(e.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    </div>
);
}


export default Employee;