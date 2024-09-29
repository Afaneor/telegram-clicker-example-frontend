// src/components/Peacock/ClickEffect.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface ClickEffectProps {
    x: number;
    y: number;
    amount: number;
}

const FloatingText = styled(motion.div)`
  position: absolute;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  user-select: none;
  pointer-events: none;
  z-index: 999;
`;

const ClickEffect: React.FC<ClickEffectProps> = ({ x, y, amount }) => {
    return (
        <FloatingText
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            style={{ left: x, top: y }}
        >
            +{amount}
        </FloatingText>
    );
};

export default ClickEffect;
