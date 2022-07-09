import { useState } from "react";
import { gen } from "./platte";

const Bases = [
  "#FB042E",
  "#FF4201",
  "#FF9809",
  "#FCBC0B",
  "#F3F901",
  "#36E200",
  "#16F58B",
  "#11E9F2",
  "#07BAFD",
  "#0066FA",
  "#5906FB",
  "#8403F3",
  "#FE09C5",
];

const PlatteCount = 30;

export default function HomePage() {
  const [bases, setBases] = useState(Bases);
  const [platteCount, setPlatteCount] = useState(PlatteCount);
  const plattes = bases?.map((b) => gen(b, platteCount));

  return (
    <div>
      <div style={{ display: "flex", padding: 4 }}>
        <label style={{ marginRight: 8 }}>base color: </label>
        <input
          style={{ flex: 1 }}
          value={bases.join(" ")}
          onChange={(v) => {
            setBases(v.target.value.split(" "));
          }}
        ></input>
        <label style={{ marginLeft: 12, marginRight: 8 }}>platte count:</label>
        <input
          value={platteCount}
          onChange={(v) => {
            setPlatteCount(Number(v.target.value));
          }}
        ></input>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {plattes?.map((s) => {
          return (
            <div style={{ width: "100%", height: 100, display: "flex" }}>
              {s.map((c) => {
                return (
                  <div
                    style={{
                      width: `${100 / platteCount}vw`,
                      height: "100%",
                      background: c,
                    }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
