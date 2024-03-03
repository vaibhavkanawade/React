import React, { useState } from "react";

function Input(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit() {

        props.setInput(title);
        props.setInput2(description);


        setTitle("");
        setDescription("");
    }

    return (
        <>
            <div className="form">

                <input
                    type="text"
                    id="title"
                    placeholder="enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    id="des"
                    placeholder="enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}

export default Input;
