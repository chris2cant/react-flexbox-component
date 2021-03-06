import styled, { css } from 'styled-components';

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n    @media (min-width: ', 'em) {\n      ', ';\n    }\n  '], ['\n    @media (min-width: ', 'em) {\n      ', ';\n    }\n  ']),
    _templateObject2 = taggedTemplateLiteral(['\n  height: 3em;\n  width: 3em;\n  background: papayawhip;\n\n  /* Now we have our methods on media and can use them instead of raw queries */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  height: 3em;\n  width: 3em;\n  background: papayawhip;\n\n  /* Now we have our methods on media and can use them instead of raw queries */\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject3 = taggedTemplateLiteral(['background: red;'], ['background: red;']),
    _templateObject4 = taggedTemplateLiteral(['background: orange;'], ['background: orange;']),
    _templateObject5 = taggedTemplateLiteral(['background: yellow;'], ['background: yellow;']),
    _templateObject6 = taggedTemplateLiteral(['background: blue;'], ['background: blue;']),
    _templateObject7 = taggedTemplateLiteral(['background: green;'], ['background: green;']);

// const sizes = {
//   xl: 10000,
//   lg: 1919,
//   md: 1279,
//   sm: 959,
//   xs: 599
// };

var sizes = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 0
};

// Iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return css(_templateObject, sizes[label] / 16, css.apply(undefined, arguments));
  };

  return acc;
}, {});

var Content = styled.div(_templateObject2, function (props) {
  return props.xl && media.xl(_templateObject3);
}, function (props) {
  return props.lg && media.lg(_templateObject4);
}, function (props) {
  return props.md && media.md(_templateObject5);
}, function (props) {
  return props.sm && media.sm(_templateObject6);
}, function (props) {
  return props.xs && media.xs(_templateObject7);
});

var _templateObject$1 = taggedTemplateLiteral(['\n  border: ', ';\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: ', ';\n  flex: 0 1 auto;\n  align-content: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n  flex-grow: ', ';\n  flex-basis: ', ';\n  align-self: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  border: ', ';\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: ', ';\n  flex: 0 1 auto;\n  align-content: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n  flex-grow: ', ';\n  flex-basis: ', ';\n  align-self: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2$1 = taggedTemplateLiteral(['flex-grow: 1; flex-basis: 0'], ['flex-grow: 1; flex-basis: 0']),
    _templateObject3$1 = taggedTemplateLiteral(['flex-grow: ', '; flex-basis: 0'], ['flex-grow: ', '; flex-basis: 0']),
    _templateObject4$1 = taggedTemplateLiteral(['\n  border: 0;\n  background-color: rgba(0, 0, 0, 0.12);\n  align-self: stretch;\n'], ['\n  border: 0;\n  background-color: rgba(0, 0, 0, 0.12);\n  align-self: stretch;\n']),
    _templateObject5$1 = taggedTemplateLiteral(['\n  background-color: ', ';\n  align-self: ', ';\n'], ['\n  background-color: ', ';\n  align-self: ', ';\n']),
    _templateObject6$1 = taggedTemplateLiteral(['\n  background-color: ', ';\n  flex-direction: column;\n  > div {\n    margin-top: ', 'px;\n    margin-bottom: ', 'px;\n    &:first-child {\n      margin-top: 0px;\n    }\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n  > ', ' {\n    height: 1px;\n    margin: 0;\n  }\n'], ['\n  background-color: ', ';\n  flex-direction: column;\n  > div {\n    margin-top: ', 'px;\n    margin-bottom: ', 'px;\n    &:first-child {\n      margin-top: 0px;\n    }\n    &:last-child {\n      margin-bottom: 0px;\n    }\n  }\n  > ', ' {\n    height: 1px;\n    margin: 0;\n  }\n']),
    _templateObject7$1 = taggedTemplateLiteral(['\n  background-color: ', ';\n  > div {\n    margin-left: ', 'px;\n    margin-right: ', 'px;\n    &:first-child {\n      margin-left: 0px;\n    }\n    &:last-child {\n      margin-right: 0px;\n    }\n  }\n  > ', ' {\n    width: 1px;\n    margin: 0;\n  }\n  flex-direction: row;\n'], ['\n  background-color: ', ';\n  > div {\n    margin-left: ', 'px;\n    margin-right: ', 'px;\n    &:first-child {\n      margin-left: 0px;\n    }\n    &:last-child {\n      margin-right: 0px;\n    }\n  }\n  > ', ' {\n    width: 1px;\n    margin: 0;\n  }\n  flex-direction: row;\n']);

var getAlignItem = function getAlignItem(props) {
  // console.warn('[getAlignItem]');
  switch (props.align) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'flex-start':
    case 'flex-end':
    case 'center':
    case 'baseline':
    case 'stretch':
      return props.align;
    default:
      return 'flex-start';
  }
};

var getJustifyContent = function getJustifyContent(props) {
  // console.warn('[getJustifyContent]');
  switch (props.justify) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'flex-start':
    case 'center':
    case 'flex-end':
    case 'space-between':
    case 'space-around':
    case 'space-evenly':
      return props.justify;
    default:
      return 'flex-start';
  }
};

var getAlignContent = function getAlignContent(props) {
  // console.warn('[getAlignContent]');
  switch (props.content) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'flex-start':
    case 'flex-end':
    case 'center':
    case 'space-between':
    case 'space-around':
    case 'stretch':
      return props.content;
    default:
      return 'flex-start';
  }
};

var getFlexWrap = function getFlexWrap(props) {
  if (props.wrap === 'no-wrap' || props.wrap === 'wrap' || props.wrap === 'wrap-reverse') {
    return props.wrap;
  }
  if (props.wrap === true) return 'wrap';
  return null;
};

var getFlexGrow = function getFlexGrow(props) {
  if (props.grow >= 0) return props.grow;
  return null;
};

var Flex = styled.div(_templateObject$1, function (props) {
  return props.xRay ? '1px solid blue' : null;
}, getFlexWrap, getAlignContent, getJustifyContent, getAlignItem, getFlexGrow, function (props) {
  return getFlexGrow(props) !== null ? 0 : 'auto';
}, function (props) {
  return props.alignSelf;
}, function (props) {
  return props.auto && media.xs(_templateObject2$1);
}, function (props) {
  return props.xl && media.xl(_templateObject3$1, +props.xl);
}, function (props) {
  return props.lg && media.lg(_templateObject3$1, +props.lg);
}, function (props) {
  return props.md && media.md(_templateObject3$1, +props.md);
}, function (props) {
  return props.sm && media.sm(_templateObject3$1, +props.sm);
}, function (props) {
  return props.xs && media.xs(_templateObject3$1, +props.xs);
});

var Divider = styled.div(_templateObject4$1);

var ItemStyled = styled(Flex)(_templateObject5$1, function (props) {
  return props.xRay ? 'lightgreen' : null;
}, function (props) {
  return props.align;
});

var ColumnStyled = styled(Flex)(_templateObject6$1, function (props) {
  return props.xRay ? 'lightblue' : null;
}, function (props) {
  return props.gutter / 2;
}, function (props) {
  return props.gutter / 2;
}, Divider);

var RowStyled = styled(Flex)(_templateObject7$1, function (props) {
  return props.xRay ? 'salmon' : null;
}, function (props) {
  return props.gutter / 2 || 0;
}, function (props) {
  return props.gutter / 2 || 0;
}, Divider);

export { Divider, RowStyled as Row, ColumnStyled as Column, ItemStyled as Item };
//# sourceMappingURL=index.es.js.map
