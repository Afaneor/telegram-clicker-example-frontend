// src/components/Peacock/Peacock.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import peacockImage from '../assets/images/peacock.png';
import ClickEffect, {ClickEffectProps} from "./ClickEffect";

interface PeacockProps {
    onClick: () => void;
}

const PeacockImage = styled(motion.img)`
  width: 50vw;
  max-width: 300px;
  cursor: pointer;
  user-select: none;
`;

const Peacock: React.FC<PeacockProps> = ({ onClick }) => {
    const [effects, setEffects] = React.useState<ClickEffectProps[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setEffects([...effects, { x, y, amount: 1 }]);
        onClick();

        // Удаляем эффект после анимации
        setTimeout(() => {
            setEffects([]);
        }, 1000);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {effects.map((effect, index) => (
                <ClickEffect key={index} x={effect.x} y={effect.y} amount={effect.amount} />
            ))}
            <PeacockImage
                src={peacockImage}
                alt="Peacock"
                onClick={handleClick}
                whileTap={{
                    scale: 0.9,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                }}
            />
        </div>
    );
};

export default
Peacock;
