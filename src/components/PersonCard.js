import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [stateAge, setState] = useState(age);
    return (
        <div>
            <h1> {lastName}, {firstName}</h1>
            <p>Age: {stateAge} </p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ ()=> setState(stateAge + 1) }>Make {firstName} {lastName} Older!</button>
        </div>
    );
}
export default PersonCard; 