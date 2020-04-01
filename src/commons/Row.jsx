import React from "react";
import styled from "styled-components";

export const Row = ({ children, columns = 4, gutter = 15 }) => {
  return (
    <RowContainer gutter={gutter}>
      {React.Children.map(children, item => (
        <Column columns={columns} gutter={gutter}>
          {item}
        </Column>
      ))}
    </RowContainer>
  );
};

const RowContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  margin: 0 -${p => p.gutter}px;
`;

const Column = styled.div`
  width: calc(100% / ${p => p.columns});
  padding: 0 ${p => p.gutter}px ${p => p.gutter * 2}px;
`;
