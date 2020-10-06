import React from "react";
import "./NumberTreatment.css";

export default function NumberTreatment() {
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
            <input value="0.0000000075626916" />
          </td>
          <td>
            <span className="result" id="exponential-result"></span>
          </td>
          <td>7.56 e-09</td>
        </tr>
        <tr>
          <td>
            <input value="1234567.89" />
          </td>
          <td>
            <span className="result" id="point-comma-result"></span>
          </td>
          <td>1,234,567.89</td>
        </tr>
      </table>
    </div>
  );
}
