import React from "react";
import Inner from "../components/layouts/Inner";
import NumberIncrementer from "../components/NumberIncrementer";

const handleChange = value => {
  console.log(value);
};

const HomePage = () => {
  return (
    <Inner>
      <h1>React Number Input Field Incrementer</h1>
      <div>
        Default Setup (no settings)<br />
        <NumberIncrementer />
      </div>
      <div>
        With min and max limits (1 to 10)
        <br />
        <NumberIncrementer minValue={1} maxValue={10} />
      </div>
      <div>
        With min and max limits (1 to 10) and default value (5)
        <br />
        <NumberIncrementer minValue={1} maxValue={10} value={5} />
      </div>
      <div>
        With added on change event (view console log)
        <br />
        <NumberIncrementer minValue={1} maxValue={10} onChange={handleChange} />
      </div>
    </Inner>
  );
};

export default HomePage;
