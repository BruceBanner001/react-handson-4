import React from "react";

const Students = () => {
    return (
        <div className="studentsDataPage">
            <div className="main">
                <div className="left">
                    <span className="studentsDetails">Student Details</span>
                </div>
                <div className="right">
                    <button className="buttonControl">Add New Student</button>
                </div>
            </div>
            <div className="bottomS">
                <table className="tableBox">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Course</th>
                            <th scope="col">Batch</th>
                            <th scope="col">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Bruce Banner</th>
                            <td>22</td>
                            <td>MERN</td>
                            <td>May</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">Naveen T R</th>
                            <td>22</td>
                            <td>MERN</td>
                            <td>August</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">Pradeep</th>
                            <td>22</td>
                            <td>MERN</td>
                            <td>April</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">Harry</th>
                            <td>22</td>
                            <td>MERN</td>
                            <td>November</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">Divagar</th>
                            <td>22</td>
                            <td>MERN</td>
                            <td>July</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Students;