import "./Component.css";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Component({ array }) {

  const [copy, setCopy] = useState(array.pre);

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <>
      <hr style={{ marginTop: "2vw", marginBottom: "2vw" }} />

      <div id="componentContainer">
        <div id="title">
          <p>{array.name}</p>
        </div>

        <div id="showComponent">{copy}</div>

        <div id="showCode">
          <p>
            {`import`} {array.name} {`from "@mui/material/`}
            {array.name}
            {`";`}
          </p>
          <br />
          <p>
            {`<`}
            {array.name} {array.style.prop1} {array.style.prop2} {">"}Click Me{" "}
            {"</" + array.name + ">"}
          </p>
        </div>

        <div id="showSelection">
          {array.secltion.map((value, idx) => {
            return (
              <div key={value.id} className="selection">
                <h2>{value.type}</h2>
                {value.label.map((k, i) => {
                  return (
                    <>
                      <label htmlFor={value.type}>{k}</label>
                      <input
                        onChange={handleChange}
                        type="radio"
                        value={k}
                        name={value.type}
                        id={value.type}
                      />
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
