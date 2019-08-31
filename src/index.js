import React from 'react';
import ReactDOM from 'react-dom';



const luckyNumber = () => {

    const num = Math.floor((Math.random() * 1000) +1);

    return num;
    console.log("num: ", num);

    // function myFunction() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     document.getElementById("demo").innerHTML = x;
//}  
}

const Greeting = (parameter) => {
    
    return (
        <div className="container">
            <h1>
                Welcome {parameter.name}
            </h1>

            <h2 className="text-muted">
               Your lucky number is: {parameter.luckyNumber} 
            </h2>

        </div>
    )

        
}

// export default Greeting. //No need to export here, nothing was chained.


const user = {
    name: "", 
    luckyNumber: luckyNumber()
}



ReactDOM.render(
    <Greeting {...user} />, //this tells to RENDER the component Greeting
    
    document.getElementById('root')
);


