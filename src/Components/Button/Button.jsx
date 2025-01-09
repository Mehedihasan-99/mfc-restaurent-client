import React from 'react';

const Button = ({ text, color }) => {
    return (
        <div>
            <button
                className={`btn 
                    btn-outline 
                    border-0 
                    border-b-4 
                    uppercase 
                    ${color === "default" && "text-slate-700 border-slate-700 hover:bg-slate-700 hover:text-white"}
                    ${color === "yellow" && "text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white hover:border-yellow-600"}
                    ${color === "white" && "text-white border-white hover:bg-white hover:text-slate-700 hover:border-white"}`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;