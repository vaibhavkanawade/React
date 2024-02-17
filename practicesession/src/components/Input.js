import React, { useState } from "react";

function Input(props) {
    function check(e) {
        console.log(e);
        if (e.target.id === "firstname") {
            props.setInput(e.target.value);
        } else if (e.target.id === "surname") {
            props.setInput2(e.target.value);
        } else if (e.target.id === "No") {
            props.setNum(e.target.value);
        }

    }

    return (
        <>
            <div className="form">
                <input type="text" id="firstname" placeholder="enter name" onChange={check} />
                <input type="text" id="surname" placeholder="enter surname" onChange={check} />
                <input type="number" id="No" placeholder="enter number" onChange={check} />

            </div>

        </>
    );
}
export default Input;
