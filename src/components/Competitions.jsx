import React from "react";
import "./CSS/Competition.css";

const CompetitionTables = () => {
  // Event handlers for button clicks
  const handleRulesClick = () => {
    alert('You clicked the "Rules" button');
  };

  const handleStandingsClick = () => {
    alert('You clicked the "Standings" button');
  };

  return (
    <div className="competition-tables">
      {/* Table 1: August Competition */}
      <table border="1" className="competition-table">
        <caption>August Competition</caption>
        <tbody>
          <tr>
            <td>Status</td>
            <td>
            June competition <span className="finished">Finished</span>
            </td>
          </tr>
          <tr>
            <td>Prize Pool</td>
            <td>Funded Account Challenges</td>
          </tr>
          <tr>
            <td>Contestants</td>
            <td>12747</td>
          </tr>
          <tr>
            <td>Finished At</td>
            <td>August 29th, 2024</td>
          </tr>
          <tr>
            <td>Actions</td>
            <td>
              <button className="rules" onClick={handleRulesClick}>Rules</button>
              <button className="standings" onClick={handleStandingsClick}>Standings</button>
            </td>
          </tr>
          <tr>
            <td>Registration</td>
            <td>Registration Finished</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2: July Competition */}
      <table border="1" className="competition-table">
        <caption>July Competition</caption>
        <tbody>
          <tr>
            <td>Status</td>
            <td>
             July competition <span className="finished">Finished</span>
            </td>
          </tr>
          <tr>
            <td>Prize Pool</td>
            <td>1st Prize: $200K Regular Challenge</td>
          </tr>
          <tr>
            <td>Contestants</td>
            <td>8772</td>
          </tr>
          <tr>
            <td>Finished At</td>
            <td>July 31st, 2024</td>
          </tr>
          <tr>
            <td>Actions</td>
            <td>
              <button className="rules" onClick={handleRulesClick}>Rules</button>
              <button className="standings" onClick={handleStandingsClick}>Standings</button>
            </td>
          </tr>
          <tr>
            <td>Registration</td>
            <td>Registration Finished</td>
          </tr>
        </tbody>
      </table>

      {/* Table 3: June Competition */}
      <table border="1" className="competition-table">
        <caption>June Competition</caption>
        <tbody>
          <tr>
            <td>Status</td>
            <td>
              August competition <span className="finished">Finished</span>
            </td>
          </tr>
          <tr>
            <td>Prize Pool</td>
            <td>1st Prize: $200K Regular Challenge</td>
          </tr>
          <tr>
            <td>Contestants</td>
            <td>6312</td>
          </tr>
          <tr>
            <td>Finished At</td>
            <td>June 30th, 2024</td>
          </tr>
          <tr>
            <td>Actions</td>
            <td>
              <button className="rules" onClick={handleRulesClick}>Rules</button>
              <button className="standings" onClick={handleStandingsClick}>Standings</button>
            </td>
          </tr>
          <tr>
            <td>Registration</td>
            <td>Registration Finished</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompetitionTables;
