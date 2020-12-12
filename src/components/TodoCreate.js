import React, { useState } from 'react';
import styled, { css } from "styled-components";
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);

    font-size: 60px;
    color: white;
    border-radius: 40px;

    border: none;
    outline: none;

    ${props => props.open && css`
        background: #ff6b6b;
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate()(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
    );
}

export default TodoCreate;