 import React from 'react';

 const Table = (props) => { //Was data inside the parenthesis 

    const tableRows = props.data.map(function(item, index) {
        //console.log("item: ", item);
        
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });

    return (
    <table className="table">
        <thead className="thead-inverse">
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
        </thead>

        <tbody>
            {tableRows}
            {/* <tr>
                <td>Ben</td>
                <td>Physics</td>
                <td>95</td>
            </tr>

            <tr>
                <td>Anne</td>
                <td>Math</td>
                <td>98</td>
            </tr>

            <tr>
                <td>Allen</td>
                <td>AP Physics</td>
                <td>97</td>
            </tr> */}
        </tbody>
    </table>        
    )


    
    // OR:
        // const tableRows = props.data.map((item, index) => {
        //     console.log(item);
        //     return;
        // });

    
 }

 

 export default Table;
