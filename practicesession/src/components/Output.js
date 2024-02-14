import React from 'react';

function Output(props) {
    return (
        <>
            <p>
                {props.input}
            </p>
            <p>
                {props.input2}
            </p>
            <p>
                {props.num}
            </p>
        </>
    );
}
export default Output;