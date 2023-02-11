import React from "react";

export default function Button({ className, type, onClick, disabled, children }) {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
