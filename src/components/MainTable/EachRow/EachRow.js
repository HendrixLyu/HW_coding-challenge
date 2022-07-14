import styled from "styled-components";
import PriorityIcon from "./PriorityIcon";
import EachRowStyle from "../EachRowStyle"

const EachRow = ({
  priority_icon,
  DateAndTime,
  _id,
  locationName,
  incidentName,
  description,
}) => {
  
  const formatDateTimeForHMS = obj => {
    if (obj == null) {
      return null;
    }
    let date = new Date(obj);
    let y = 1900 + date.getYear();
    let m = "0" + (date.getMonth() + 1);
    let d = "0" + date.getDate();
    let h = "0" + date.getHours();
    let mm = "0" + date.getMinutes();
    let s = date.getSeconds();
    if (s.toString().length < 2) {
      s = "0" + s;
    }
    return (
      m.substring(m.length - 2, m.length) +
      "/" +
      d.substring(d.length - 2, d.length) +
      "/" +
      y +
      " " +
      h.substring(h.length - 2, h.length) +
      ":" +
      mm.substring(mm.length - 2, mm.length) +
      ":" +
      s
    );
  };

  const NameIdMap = {
    "airport": "Airport",
    "airport/t1": "T1",
    "airport/taxi_zone": "Taxi Zone",
    "airport/carpark": "Carpark",
    "airport/t1/lobby": "T1 Lobby",
    "airport/t2": "T2",
    "airport/t2/lobby": "T2 Lobby",
  };

  return (
    <EachRowStyle>
      <li>
        <PriorityIcon priority_icon={priority_icon} />
        <p>{formatDateTimeForHMS(DateAndTime)}</p>
      </li>
      <li>
        <p>{_id}</p>
      </li>
      <li>
        <p>{NameIdMap[locationName]}</p>
      </li>
      <li>
        <p>{incidentName}</p>
      </li>
      <li>
        <p>{description || "This is a default description."}</p>
      </li>
    </EachRowStyle>
  );
};

export default EachRow;
