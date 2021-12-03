import React, { useState } from "react";

const Learning = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 100,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <p>
          You Clicked <span style={{ color: "red" }}>{count}</span> times.{" "}
        </p>
        <button onClick={() => setCount(count + 1)}>INCREMENT</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default Learning;
