import styled, { css } from "styled-components";
import { media } from "./MediaQuery";

const getAlignItem = (props) => {
  // console.warn('[getAlignItem]');
  switch (props.align) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "flex-start":
    case "flex-end":
    case "center":
    case "baseline":
    case "stretch":
      return props.align;
    default:
      return "flex-start";
  }
};

const getJustifyContent = (props) => {
  // console.warn('[getJustifyContent]');
  switch (props.justify) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "flex-start":
    case "flex-end":
    case "space-between":
    case "space-around":
    case "space-evenly":
      return props.justify;
    default:
      return "flex-start";
  }
};

const getAlignContent = (props) => {
  // console.warn('[getAlignContent]');
  switch (props.content) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "flex-start":
    case "flex-end":
    case "center":
    case "space-between":
    case "space-around":
    case "stretch":
      return props.content;
    default:
      return "flex-start";
  }
};

const getFlexWrap = (props) => {
  if (
    props.wrap === "no-wrap" ||
    props.wrap === "wrap" ||
    props.wrap === "wrap-reverse"
  )
    return props.wrap;
  if (props.wrap === true) return "wrap";
  return null;
};

const getFlexGrow = (props) => {
  if (props.grow >= 0) return props.grow;
  return null;
};

const Flex = styled.div`
  border: ${(props) => (props.xRay ? "1px solid blue" : null)};
  display: flex;
  box-sizing: border-box;
  flex-wrap: ${getFlexWrap};
  flex: 0 1 auto;
  align-content: ${getAlignContent};
  justify-content: ${getJustifyContent};
  align-items: ${getAlignItem};
  flex-grow: ${getFlexGrow};
  ${(props) => props.auto && media.xs`flex-grow: 1;`};
  ${(props) => props.xl && media.xl`flex-grow: ${+props.xl};`};
  ${(props) => props.lg && media.lg`flex-grow: ${+props.lg};`};
  ${(props) => props.md && media.md`flex-grow: ${+props.md};`};
  ${(props) => props.sm && media.sm`flex-grow: ${+props.sm};`};
  ${(props) => props.xs && media.xs`flex-grow: ${+props.xs};`};
`;

export const ItemStyled = styled(Flex)`
  background-color: ${(props) => (props.xRay ? "lightgreen" : null)};
  align-self: ${(props) => props.align};
`;

export const ColumnStyled = styled(Flex)`
  background-color: ${(props) => (props.xRay ? "lightblue" : null)};
  flex-direction: column;
  > div {
    margin-top: ${(props) => props.gutter / 2}px;
    margin-bottom: ${(props) => props.gutter / 2}px;
    &:first-child {
      margin-top: 0px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const RowStyled = styled(Flex)`
  background-color: ${(props) => (props.xRay ? "salmon" : null)};
  > div {
    margin-left: ${(props) => props.gutter}px;
    margin-right: ${(props) => props.gutter}px;
    &:first-child {
      margin-left: 0px;
    }
    &:last-child {
      margin-right: 0px;
    }
  }
  flex-direction: row;
`;
