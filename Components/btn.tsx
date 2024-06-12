import { MouseEventHandler, ReactNode } from "react";

const Btn = (props: {
    className: string;
    text: string;
    icon?: ReactNode;
    onclick?: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
        onClick={props.onclick}
        className={`${props.className}`}
        >
        {props.text}
        {props.icon}
        </button>
    );
};

export default Btn;