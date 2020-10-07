import React, { useRef } from "react";
import "./NumberTreatment.css";

export default function NumberTreatment() {

  const userInputOne = useRef();
  const userInputTwo = useRef();
  const userInputThree = useRef();

  const dealToExponential = () => {

  }

  const valueAesthetics = () => {

  }

  return (
    <div className="number-treatment">
      <table>
        <tr>
          <th>Value input</th>
          <th>Value treatment</th>
          <th>Expected result</th>
        </tr>
        <tr>
          <td>
            <input ref={userInputOne} value="0.0000000075626916" />
          </td>
          <td>
            <span className="result" id="exponential-result"></span>
          </td>
          <td>7.56 e-09</td>
        </tr>
        <tr>
          <td>
            <input ref={userInputTwo} value="1234567.89" />
          </td>
          <td>
            <span className="result" id="point-comma-result"></span>
          </td>
          <td>1,234,567.89</td>
        </tr>
        <tr>
          <td>
            <input ref={userInputThree} value="0.00726" />
          </td>
          <td>
            <span className="result" id="point-comma-result"></span>
          </td>
          <td>0.00726</td>
        </tr>
      </table>
    </div>
  );
}
