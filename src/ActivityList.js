import React from "react";
import "./ActivityList.css";

function ActivityList({ activities }) {



  const list = activities.map(({ time,description }, index) => {

    return (
      <tr key={index}>
        <td style={{textAligh: "right"}} >{time}</td>
        <td style={{textAligh: "left"}} >{description}</td>
      </tr>
           )
  });

    return (
      <div style={{ border: "1px solid #000", borderRadius: "4px" }}>
      <table>
      <tbody>
        {list}
      </tbody>
    </table>
    </div>
      );
}

export default ActivityList;
