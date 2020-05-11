import { LitElement, html } from 'lit-element'
import { CherryOnLit } from '../../cherry-on-lit';

export class TestElement extends CherryOnLit(LitElement) {
  render() {
    return html`
    <div id="myElement">This element has an id (myElement). The id is accessible using this.$.myElement inside the LitElement class of this template (extended with the mixin CherryOnLit).</div>
    <div>check the console</div>
    `
  }

  firstUpdated() {
    console.log('this.$.myElement:', this.$.myElement)
  }
}

customElements.define('test-element', TestElement)