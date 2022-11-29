import styled from "styled-components";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search () {

    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0 20rem;
    position: relative;
    div {
        width: 100%;
        position: relative;
    }
    input {
        border: none;
        border-radius: 1rem;
        outline: none;
        padding: 1rem 3rem;
        font-size: 1.5rem;
        color: #fff;
        background: linear-gradient(35deg, #494949, #313131);
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search