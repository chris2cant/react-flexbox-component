import React from "react";
import PropTypes from "prop-types";
import { RowStyled } from "../styles/FlexBox";

const propTypes = {
  xRay: PropTypes.bool
};

const defaultProps = {
  xRay: null
};

const Row = (props) => {
  const renderChildren = () => {
    const { children } = props;
    if (children)
      // 👇 The <Parent /> renders it's children, but passes in props.gutter as the gutter to each child
      return React.Children.map(children, (child) => {
        if (typeof child !== "string") {
          return React.cloneElement(child, {
            xRay: props.xRay
          });
        } else {
          return child;
        }
      });
    return null;
  };

  return <RowStyled {...props}>{renderChildren()}</RowStyled>;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
