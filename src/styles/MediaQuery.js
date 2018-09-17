import styled, { css } from 'styled-components';

// const sizes = {
//   xl: 10000,
//   lg: 1919,
//   md: 1279,
//   sm: 959,
//   xs: 599
// };

const sizes = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 0
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${props => props.xl && media.xl`background: red;`}
  ${props => props.lg && media.lg`background: orange;`}
  ${props => props.md && media.md`background: yellow;`}
  ${props => props.sm && media.sm`background: blue;`}
  ${props => props.xs && media.xs`background: green;`}
`;
