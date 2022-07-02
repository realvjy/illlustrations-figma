// img-grid.tsx
// Create view and setup canvas/image reference to add on figma canvas
// 30-Jun, 2022
import * as React from "react";
import styled from "styled-components";
import { addToFigma, getSVG } from "./helpers";

interface ImgGridProps {
  name: string;
  keyword: string;
  color: string;
  angle: string;
  imgRef: any;
  canRef: any;
}

function ImgGrid({
  name,
  keyword,
  color,
  angle,
  imgRef,
  canRef,
}: ImgGridProps) {
  const url = "https://illlustrations-api.netlify.app/v1/vault.svg";
  return (
    <Button key={name} onClick={() => addToFigma(url)}>
      <img src="https://illlustrations-api.netlify.app/v1/vault.svg" />
    </Button>
  );
}

export default ImgGrid;

// Styling button as image
const Button = styled.button`
  margin: 0;
  padding: 0;
  background: var(--figma-color-bg-secondary);
  border: 0;
  box-shadow: none;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  :hover {
    border: 1px solid var(--figma-color-border-brand);
  }
  img {
    width: 100%;
    border-radius: 6px;
  }
`;
