import React, { useState } from "react";

function Input(props) {
    function check(e) {
        props.setInput(e.target.value);
    }

    return (
        <>
            <div className="form">
                <input type="text" placeholder="enter name" onChange={check} />
                <input type="text" placeholder="enter surname" onChange={check} />
                <input type="number" placeholder="enter number" onChange={check} />

            </div>

        </>
    );
}
export default Input;
