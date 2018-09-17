import React from "react";
import PropTypes from "prop-types";
import { ColumnStyled } from "../styles/FlexBox";

const propTypes = {
  xRay: PropTypes.bool
};

const defaultProps = {
  xRay: null
};

const Column = (props) => {
  const renderChildren = () => {
    const { children } = props;
    if (children)
      // 👇 The <Parent /> renders it's children, but passes in props.gutter as the gutter to each child
      return React.Children.map(children, (child) =>
        React.cloneElement(child, {
          xRay: props.xRay
        })
      );
    return null;
  };

  return (
    <ColumnStyled {...props}>
      {props.xRay ? renderChildren() : props.children}
    </ColumnStyled>
  );
};

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
