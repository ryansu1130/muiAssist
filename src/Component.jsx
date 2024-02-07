import "./Component.css";
import Button from "@mui/material/Button";

export default function Component({ array }) {
  return (
    <>
      <hr style={{ marginTop: "2vw", marginBottom: "2vw" }} />

      <div id="componentContainer">
        <div id="title">
          <p>{array.name}</p>
        </div>

        <div id="showComponent">{array.pre}</div>

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
                      <input type="radio" name={value.type} id={value.type} />
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
