import React from "react";
import {useNavigate} from "react-router-dom";

const Employee = ({employee, deleteEmployee}) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }
    return (
        <tr key={employee.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div>{employee.firstName}</div>
            </td>
            <td>
                <div>{employee.lastName}</div>
            </td>
            <td>
                <div>{employee.emailId}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap">

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded"
                    onClick={(e, id) => editEmployee(e, employee.id)}>Edit</button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e, id) => deleteEmployee(e, employee.id)}>Delete</button>
            </td>
        </tr>
    )
};

export default Employee;