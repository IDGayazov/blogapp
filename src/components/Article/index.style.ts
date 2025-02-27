import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

// Стилизованные компоненты
export const StyledDescriptionText = styled.div`
    position: relative;
    line-height: 1.5;
    text-align: justify;
    overflow: hidden;
`;

export const VisibleText = styled.div`
    position: relative;
    text-align: justify;
    z-index: 1; // Чтобы текст был поверх размытой части
`;

export const BlurredText = styled.div`
    filter: blur(3px); // Размытие текста
    position: relative;
    text-align: justify;
    z-index: 0; // Чтобы размытый текст был под четким текстом
    margin-top: -1.5em; // Смещение вверх, чтобы перекрыть четкий текст
    pointer-events: none; // Чтобы текст под размытием не был кликабельным
`;

export const ReadMoreOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5em; // Высота блока
    background: linear-gradient(to bottom, transparent, ${colors.primary});
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 10px;
    cursor: pointer;
    color: ${colors.secondary};
    font-weight: bold;
    z-index: 2; // Чтобы блок был поверх всего
`;

export const StyledTitle = styled.h3`
    padding: 10px 0;
`;