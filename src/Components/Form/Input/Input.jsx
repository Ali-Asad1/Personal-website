import React from "react";

export default function Input({ element, type, placeholder, className, disable }) {
  const input =
    element === "input" ? (
      <input className={className} type={type} placeholder={placeholder} spellCheck={false} disabled={disable} />
    ) : (
      <textarea className={className} placeholder={placeholder} spellCheck={false} disabled={disable}></textarea>
    );

  return <div>{input}</div>;
}
