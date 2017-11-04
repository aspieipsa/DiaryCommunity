`<Button>` component for our buttons.

### Examples

Simple button:

    <Button>Click me</Button>

Simple button, but as a link with href:

    <Button href="#x">Click me</Button>

A button with a onClick event that shows a browser alert:

    <Button onClick={() => alert('You have clicked me!')}>Click me</Button>

A bigger button, with a `_big` modifier.

    <Button _big>Click me</Button>

A button with rounded corners, with a `_rounded` modifier.

    <Button _rounded>Click me</Button>

A button with all the modifiers.

    <Button _big _rounded>Click me</Button>
