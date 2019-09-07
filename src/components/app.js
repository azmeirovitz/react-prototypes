import React from 'react';
import Table from './table';


const App = () => {
    

// OR:
// export default () => {
//     return (
//         <h1>My first React functional component</h1>
//     )
// }

const students = [
{
    name: "Ted",
    course: "Science",
    grade: 92
},
{
    name: "Anny",
    course: "Math",
    grade: 98
},
{
    name: "Chris",
    course: "Ap Science",
    grade: 95
}
];

return (
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
)

}

export default App






