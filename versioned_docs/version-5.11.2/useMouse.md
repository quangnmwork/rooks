---
id: useMouse
title: useMouse
sidebar_label: useMouse
---

## About

Mouse position hook for React.

## Installation

    npm install --save rooks

## Importing the hook

```javascript
import { useMouse } from "rooks";
```

## Usage

```jsx
function Demo() {
  const { x, y } = useMouse();
  return (
    <>
      <p> Move mouse here to see changes to position </p>
      <p>X position is {x || "null"}</p>
      <p>X position is {y || "null"}</p>
    </>
  );
}

render(<Demo />);
```

### Returned Object

| Returned object attributes | Type | Description         |
| -------------------------- | ---- | ------------------- |
| x                          | int  | X position of mouse |
| y                          | int  | Y position of mouse |

---

## Codesandbox Examples

### Basic Usage

<iframe 
    src="https://codesandbox.io/embed/relaxed-satoshi-bo3g0?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
    style={{
        width: "100%",
        height: 500,
        border: 0,
        borderRadius: 4,
        overflow: "hidden"
    }}
    title="useMouse"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" 
/>

## Join Bhargav's discord server

You can click on the floating discord icon at the bottom right of the screen and talk to us in our server.
