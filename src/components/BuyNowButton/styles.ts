"use client";

import styled from "styled-components";

export const Button = styled.button`
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.green500};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1.25rem;
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.md};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;
