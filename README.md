# cherry-on-lit

This package offers a mixin (`CherryOnLit`) you can use to aggregate elements with an `id` attribute in your `LitElement` template.

## Usage

```javascript
import { LitElement, html } from 'lit-element';
import { CherryOnLit } from 'cherry-on-lit';

class MyApp extends CherryOnLit(LitElement) {
  render () {
    return html`
    <div id="myElement">loading</div>
    `
  }

  firstUpdate() {
    this.$.myElement.innerText = 'hello anonymous';
  }
}
```

(it also works with `typescript`)


## Installation

```
npm install cherry-on-lit
```

## Notes

Pros: 

- It's easy to install
- You don't need to write all the query functions.
- Even if your dom changes (e.g. add a new element with an id) the element will be available because `$` scans the dom everytime it's used.

Cons:

- Everytime you request `$` it scans the dom, it may affect the performance of your code if your template is massive and you overuse it.
- Your IDE will lose track of the typings because the `$` aggregator is naively querying the elements in the dom without any cast. For this reason I recommand using `typescript` and casting the elements as you request them:

```typescript
const i = this.$.importantInput as HTMLInputElement;
i.value = 'new value';
```
