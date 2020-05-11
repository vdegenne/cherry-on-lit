# cherry-on-lit

This package offers a mixin (`CherryOnLit`) you can use to aggregate elements with an `id` attribute in your `LitElement` template.

## Usage

```javascript
import {LitElement, html} from 'lit-element';
import {CherryOnLit} from 'cherry-on-lit';

class MyApp extends CherryOnLit(LitElement) {
  render () {
    return html`
    <div id="myElement">loading</div>
    `
  }

  firstUpdate() {
    // this.$.myElement points to the div in the template
    setTimeout(() => this.$.myElement.innerText = 'that was a fake loading', 2000);
  }
}
```

(it also works with `typescript`)


## Installation

```
npm install cherry-on-lit
```