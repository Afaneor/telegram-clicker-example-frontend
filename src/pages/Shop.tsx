// src/pages/Shop.tsx
import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import api from "../api";
import Container from "../components/common/Container";
import ShopItem from "../components/ShopItem";

const ShopGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(4)};
`;

export interface Item {
  id: number;
  name: string;
  icon: string;
  base_price: number;
  base_income: number;
  user_item: UserItem | null;
  price_multiplier: number;
  income_multiplier: number;
}

interface UserItem {
  level: number;
}

const Shop: React.FC = () => {
  const { data: items, refetch } = useQuery<Item[]>("income-items", () =>
    api.get("/game/income-items/").then((res: { data: Item[] }) => res.data),
  );

  const handleBuy = (itemId: number) => {
    api
      .post(`/game/income-items/${itemId}/buy/`)
      .then(() => {
        refetch();
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

  const handleUpgrade = (itemId: number) => {
    api
      .post(`/game/income-items/${itemId}/upgrade/`)
      .then(() => {
        refetch();
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

  return (
    <Container>
      <h1>Магазин</h1>
      <ShopGrid>
        {items?.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
            onBuy={handleBuy}
            onUpgrade={handleUpgrade}
          />
        ))}
      </ShopGrid>
    </Container>
  );
};

export default Shop;
