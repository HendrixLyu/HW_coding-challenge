import { useEffect, useState } from "react";
import styled from "styled-components";
import EachRow from "./EachRow/EachRow";
import TableHeader from "./TableHeader";
import request from "../../js";

const MaiTableStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

const MainTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const resArray = [];
  useEffect(() => {
    request.getLocations().then(res =>
      res.map(async item => {
        const res = await request.getIncidentsByLocationId(item.id);
        res.map(i => {
          resArray.push(i);
          console.log("Array", resArray);
        });
        setLoading(false);
        setData(resArray);
      })
    );
  }, []);

  return (
    <>
      {!loading && (
        <MaiTableStyle>
          <TableHeader />
          {/* {console.log("==========--render--==========")} */}
          {data.map((item, index) => (
            <EachRow
              key={index}
              priority_icon={item.priority}
              DateAndTime={item.datetime}
              _id={item.id}
              locationName={item.locationId}
              incidentName={item.name}
              description={item.description}
            />
          ))}
        </MaiTableStyle>
      )}
    </>
  );
};

export default MainTable;
