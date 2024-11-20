import styled from "styled-components";

function ListItem({ during, text }) {
  return (
    <DuringListItem>
      <DuringListItemHeader>{during}</DuringListItemHeader>
      <DuringListItemText>{text}</DuringListItemText>
    </DuringListItem>
  );
}

export default ListItem;

const DuringListItem = styled.li`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: ;
`;

const DuringListItemHeader = styled.h3`
  font-size: 25px;
  font-weight: 700;
  line-height: 32.5px;
`;

const DuringListItemText = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 23.4px;
`;
