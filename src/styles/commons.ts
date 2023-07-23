import { css } from 'styled-components';
import { Device } from './device';

export const imageDisplayRule = css`
  .desktop {
    display: none;
  }

  @media ${Device.Desktop} {
    border-top: none;

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
`;
