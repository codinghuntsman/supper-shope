import React from 'react';
import "./Question.css";

const Question = () => {
    return (
        <div>
            <h2 className='headline'>Question and answer section</h2>
            <div className='question-part'>
                <h2>How react works?</h2>
                <h4>
                    We know about component. at first we create a component it can be function component or others. then we write JSX code in that function.
                    that code react convert into HTML code directly. also, that code compare with virtual document object model(DOM). if react looks any changes in main component of the JSX code it is change according to that code.then react display actual HTML page that we can see in the monitor.
                </h4>
                <h2>Difference between props versus state?</h2>
                <h6>Props:</h6>
                <h4>1.Props is called property.</h4>
                <h4>2.Props is used when receive another data with props.</h4>
                <h4>3.we can to use destructuring method using props. </h4>
                <h4>4.Easy to use another purpose.</h4>
                <h6>State:</h6>
                <h4>1.State is used change for state.</h4>
                <h4>2.state is called special function also called hook.</h4>
                <h4>3.To set a variable for changing a state.</h4>
                <h2>How useEffect works?</h2>
                <h4>1.We know useEffect is a special function.</h4>
                <h4>2.At first fetch the data using useEffect function.</h4>
                <h4>3.Then convert into json that data.</h4>
                <h4>4.Finally set the data for rendering in a page.</h4>
            </div>
        </div>
    );
};

export default Question;