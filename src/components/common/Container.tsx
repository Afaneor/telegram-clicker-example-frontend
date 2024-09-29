// src/components/common/Container.tsx
import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export default Container;
