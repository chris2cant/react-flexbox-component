# React Flexbox Component

React Flexbox Component is a library to use flexbox css style to your components with real gutter and xRay option.

### Installing

```
npm install react-flexbox-component
```

## Getting started

```jsx
import React, { Component } from 'react'
import { Row, Item } from 'react-flexbox-component'

class Component extends Component {
  render() {
    return (
      <div>
        <Row gutter={8}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Row>
        <Column>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Column>
      </div>
    )
  }
}
```

## Usage

```jsx
// Direction : Row
<Row>...</Row>

// Direction : Column
<Column>...</Column>

// Flex item
<Item>...</Item>
```

### Props

#### Column width

```
xs >= 0
sm >= 600
md >= 960
lg >= 1280
xl >= 1920
```

Example
```jsx
<Row>
  // Auto width for all props xs sm md lg xl
  <Item xs>...</Item>

  // @media (min-width: 0) flex-grow: 2;
  <Item xs={2}>...</Item>

  // @media (min-width: 960) {flex-grow: 2};
  // @media (min-width: 1280) {flex-grow: 4};
  <Item md={2} lg={4}>...</Item>
</Row>
```

#### Flex Grow

Change `flex-grow` attribute.
Prop : `grow`
Value : number
Default : null

```jsx
<Row>
  <Item grow={1}>...</Item>
  <Item grow={8}>...</Item>
<Row>
```

#### Gutter

Add a `margin` between boxes in pixel. Allowed for `Row` and `Column`

```jsx
<Row gutter={8}>
  <Item>...</Item>
  <Item>...</Item>
<Row>
<Column gutter={16}>
  <Item>...</Item>
  <Item>...</Item>
<Column>
```

#### Align items

Change `align-items` attribute.
Value : `start` | `flex-start` | `end` | `flex-end` | `center` | `baseline` | `stretch`
Default : `flex-start`

```jsx
<Row align="start">
  <Item>...</Item>
  <Item>...</Item>
<Row>
```


#### Align content

Change `align-content` attribute.
Prop : `content`
Value : `start` | `flex-start` | `end` | `flex-end` | `center` | `space-between` | `space-around` | `stretch`
Default : `flex-start`

```jsx
<Row content="start">
  <Item>...</Item>
  <Item>...</Item>
<Row>
```

#### Flex wrap

Change `flex-wrap` attribute.
You can the prop alone.
Prop : `wrap`
Value : `no-wrap` | `wrap` | `wrap-reverse`
Default : null

```jsx
<Row wrap="wrap-reverse">
  <Item>...</Item>
  <Item>...</Item>
<Row>

<Row wrap>
  <Item>...</Item>
  <Item>...</Item>
<Row>
```

#### Justify content

Change `justify-content` attribute.
Value : `start` | `flex-start` | `end` | `flex-end` | `space-between` | `space-around` | `space-evenly`
Default : `flex-start`

```jsx
<Row align="start" xRay>
  <Item>...</Item>
  <Item>...</Item>
<Row>
```

#### xRay
```jsx
xRay : Display border and color to visualize your divs and theire childs
<Row xRay>
  <Item>...</Item>
<Row>
```
