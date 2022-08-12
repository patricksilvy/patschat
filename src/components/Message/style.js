import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;
  text-align: left;
  &.me {
    > div {
      background-color: #5865F2;
    }
    justify-content: right;
    text-align: right;
  }
`;

export const Content = styled.div`
  background-color: #292B2F;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`;

export const MessageText = styled.span`
  font-size: 14px;
  margin: 5px 5px 5px 5px;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: #999;
  height: 15px;
  margin: -5px 5px 0;
`;