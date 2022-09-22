import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ListGroup = styled.div`
  width: 100%;
  padding-right: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 18px;
`;

export const ListBtn = styled.button`
  padding: 7px 7px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  min-width: 100px;
  border: 1px solid black;
  &:hover,
  &:focus {
    background: transparent;
  }
`;

// .list__item {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid black;
// }
// .list__item:not(:last-child) {
//   margin-bottom: 5px;
// }

// .list__group {
//   width: 100%;
//   padding-right: 25px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   font-size: 18px;
// }

// .list__text {
//   font-size: 18px;
// }

// .list__btn {
//   padding: 7px 7px;
//   font-size: 18px;
//   border-radius: 5px;
//   cursor: pointer;
//   text-align: center;
//   min-width: 100px;
// }

// .list__btn:hover,
// .list__btn:focus {
//   background: transparent;
// }
