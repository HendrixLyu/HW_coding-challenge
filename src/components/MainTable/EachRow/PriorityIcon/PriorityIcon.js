import styled from "styled-components";
import High from "../../../../img_HW/alarm-high.svg";
import Mid from "../../../../img_HW/alarm-medium.svg";
import Low from "../../../../img_HW/alarm-low.svg";

const ImgStyle = styled.img`
  width: 1rem;
  margin-right: 0.8rem;
`;

const showIcon = {
  1: High,
  2: Mid,
  3: Low,
};
const PriorityIcon = ({ priority_icon }) => {
  return (
    <ImgStyle
      src={showIcon[priority_icon]}
      alt={`priority-level: ${priority_icon}`}
    />
  );
};

export default PriorityIcon;
