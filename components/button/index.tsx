import React from "react";
import { Unless, When } from "react-if";

interface ButtonProps {
    title: string;
    background: string;
    color: string;
    OnClick: () => void;
    btnDisable: boolean;
}

const Button:React.FC<ButtonProps> = ({ title, background, color, OnClick, btnDisable = true}) => {
    return (
        <>
            <When condition={btnDisable}>
                <button disabled={btnDisable} onClick={OnClick} style={{ color}} className="px-4 py-2 rounded font-bold mt-4 bg-gray-500">{title}</button>
            </When>
            <Unless condition={btnDisable}>
                <button disabled={btnDisable} onClick={OnClick} style={{ background, color}} className="px-4 py-2 rounded font-bold mt-4">{title}</button>
            </Unless>
        </>
    )
}

export default Button;