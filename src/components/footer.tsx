import * as React from "react";
import styled from "styled-components";
import Logo from "./logo";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterCredit>
        <div className="left-icon">
          <a href="https://illlustrations.co?ref=fig-plugin" target="_blank">
            <Logo width={80} height={16} />
          </a>
          <span>v1.0</span>
        </div>
        <div className="right-link">
          by{" "}
          <a href="https://twitter.com/realvjy" target="_blank">
            @realvjy
          </a>
        </div>
      </FooterCredit>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterCredit = styled.div`
  display: flex;
  padding: 4px 12px 8px 12px;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  background: var(--figma-color-bg-hover);
  border-top: 0.5px solid var(--figma-color-border);
  p {
    margin: 0;
    font-size: 14px;
    color: var(--figma-color-icon-secondary);
  }
  a {
    font-weight: 800;
    color: var(--figma-color-icon-brand);
    text-decoration: none;
    opacity: 0.8;
    svg {
      filter: var(--image-filter);
    }
  }
  .left-icon {
    span {
      color: var(--figma-color-icon-disabled);
      margin-left: 8px;
      font-size: var(--font-size-xsmall);
      font-weight: 600;
      margin-top: 5px;
    }
  }
  .right-link {
    font-size: 12px;
    padding: 4px;
    border: 1px solid transparent;
    border-radius: var(--border-radius-med);
    display: inline-flex;
    align-items: center;
    color: var(--figma-color-icon-disabled);
    a {
      margin-left: 2px;
      font-weight: 600;
      color: var(--figma-color-icon-disabled);
      :hover {
        opacity: 1;
      }
    }
    :hover {
      border: 1px solid var(--figma-color-border);
      color: var(--figma-color-icon-disabled);
      text-decoration: none;
    }
  }
`;
