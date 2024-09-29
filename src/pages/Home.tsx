// src/pages/Home.tsx
import React from "react";
import styled from "styled-components";
import Peacock from "../components/Peacock";
import Container from "../components/common/Container";
import { useUserData } from "../hooks/useUserData";
import api from "../api";

const BalanceDisplay = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Home: React.FC = () => {
  const { data, refetch } = useUserData();

  const handlePeacockClick = () => {
    api.post("/user/users/clicks/", { clicks: 1 }).then(() => {
      refetch().then((r) => console.log(r));
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <Container>
      <BalanceDisplay>Баланс: {data?.balance}</BalanceDisplay>
      <BalanceDisplay>
        Получаем монет в час: {Math.floor(data?.income_per_hour || 0)}
      </BalanceDisplay>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Peacock onClick={handlePeacockClick} />
      </div>
    </Container>
  );
};

export default Home;
