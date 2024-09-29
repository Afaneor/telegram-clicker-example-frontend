// src/components/ShopItem/ShopItem.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Item } from "../pages/Shop";

interface ShopItemProps {
  item: Item;
  onBuy: (itemId: number) => void;
  onUpgrade: (itemId: number) => void;
}

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(1)};
  width: calc(100% - ${({ theme }) => theme.spacing(2)});
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
`;

const ItemName = styled.h2`
  font-size: 1.5rem;
  margin: ${({ theme }) => theme.spacing(1)} 0;
`;

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing(1)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ShopItem: React.FC<ShopItemProps> = ({ item, onBuy, onUpgrade }) => {
  const isPurchased = item.user_item && Object.keys(item.user_item).length > 0;

  return (
    <Card
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ItemImage src={item.icon} alt={item.name} />
      <ItemName>{item.name}</ItemName>
      {isPurchased && item.user_item ? (
        <>
          <p>Уровень: {item.user_item?.level}</p>
          <p>
            Получаем:
            {Math.floor(
              item.base_income * item.income_multiplier ** item.user_item.level,
            )}
          </p>
          <p>
            На следюущем увроне:
            {Math.floor(
              item.base_income *
                item.income_multiplier ** (item.user_item.level + 1),
            )}
          </p>
          <ActionButton onClick={() => onUpgrade(item.id)}>
            Улучшить ($
            {item.base_price * item.price_multiplier ** item.user_item.level})
          </ActionButton>
        </>
      ) : (
        <>
          <p>Цена: ${item.base_price}</p>
          <ActionButton onClick={() => onBuy(item.id)}>Купить</ActionButton>
        </>
      )}
    </Card>
  );
};

export default ShopItem;
