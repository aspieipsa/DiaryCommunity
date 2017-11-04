`<Page>` Component for the top-level layout.

### `<Page>`

Creates the wrapper for the Page:

    <Page>Whatever</Page>

#### `<Page.Header>` element

Creates a Header element of our Page:

    <Page.Header>Hello, world!</Page.Header>

#### `<Page.Content>` element

Creates a Content element of our Page:

    <Page.Content>Hello, world!</Page.Content>


### Complex example:

We can put there all the different compositions of elements on Pages like this:

    <Page>
      <Page.Header>
        <Button href="#Foo">Foo</Button>
        <Button href="#Bar">Bar</Button>
        <Button href="#Baz">Baz</Button>
      </Page.Header>
      <Page.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, repellendus. Praesentium facilis commodi ut voluptatum nulla, laudantium quidem cupiditate quia pariatur impedit est omnis illum, optio fuga voluptatibus velit odio?
      </Page.Content>
    </Page>
