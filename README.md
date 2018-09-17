# React Flexbox Component

React Flexbox Component is a library to use flexbox css style to your components with real gutter and xRay option.

### Installing

```
npm install react-flexbox-component
```

## Getting started

```jsx
import React, { Component } from 'react'
import { Row, Column, Item } from 'react-flexbox-component'

class MyComponent extends Component {
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

export default MyComponent;
```

## Usage

```jsx
{/* Direction : Row */}
<Row>...</Row>

{/* Direction : Column */}
<Column>...</Column>

{/* Flex item */}
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
  {/* Auto width for all props xs sm md lg xl */}
  <Item xs>Item 1</Item>

  {/* @media (min-width: 0) flex-grow: 2; */}
  <Item xs={2}>Item 2</Item>

  {/* @media (min-width: 960) {flex-grow: 2}; */}
  {/* @media (min-width: 1280) {flex-grow: 4}; */}
  <Item md={2} lg={4}>Item 3</Item>
</Row>
```

#### Flex Grow

Change `flex-grow` attribute.
Prop : `grow`
Value : number
Default : null

```jsx
<Row>
  <Item grow={1}>Item 1</Item>
  <Item grow={8}>Item 2</Item>
</Row>
```

#### Gutter

Add a `margin` between boxes in pixel. Allowed for `Row` and `Column` and applied on direct children.

```jsx
{/* Margin of 8px between Item 1 and Item 2 */}
<Row gutter={8}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
</Row>
{/* Margin of 16px between Item 3, Row and Div 1 */}
<Column gutter={16}>
  <Item>Item 3</Item>
  <Row>
    <Item>Item 4</Item>
    <Item>Item 5</Item>
  </Row>
  <div>Div 1</div>
</Column>
```

#### Align items

Change `align-items` attribute.
Value : `start` | `flex-start` | `end` | `flex-end` | `center` | `baseline` | `stretch`
Default : `flex-start`

```jsx
<Row align="start">
  <Item>Item 1</Item>
  <Item>Item 2</Item>
</Row>
```


#### Align content

Change `align-content` attribute.
Prop : `content`
Value : `start` | `flex-start` | `end` | `flex-end` | `center` | `space-between` | `space-around` | `stretch`
Default : `flex-start`

```jsx
<Row content="start">
  <Item>Item 1</Item>
  <Item>Item 2</Item>
</Row>
```

#### Flex wrap

Change `flex-wrap` attribute.
You can use the prop alone.
Prop : `wrap`
Value : `no-wrap` | `wrap` | `wrap-reverse`
Default : null

```jsx
{/* flex-wrap: wrap-reverse */}
<Row wrap="wrap-reverse">
  <Item>Item 1</Item>
  <Item>Item 2</Item>
</Row>
{/* flex-wrap: wrap */}
<Row wrap>
  <Item>Item 3</Item>
  <Item>Item 4</Item>
</Row>
```

#### Justify content

Change `justify-content` attribute.
Prop: `justify`
Value : `start` | `flex-start` | `end` | `flex-end` | `space-between` | `space-around` | `space-evenly`
Default : `flex-start`

```jsx
<Row justify="start" xRay>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
</Row>
```

#### xRay

Display 1px border and background color to help you to visualize your layout and their childs

```jsx
<Row xRay>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
</Row>
```
