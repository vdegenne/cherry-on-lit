type Constructor<T> = new (...args: any[]) => T;

export function CherryOnLit<T extends Constructor<HTMLElement>>(baseClass: T) {
  return class extends baseClass {
    get $() {
      const ids: { [id: string]: any } = {};
      const elements = this.shadowRoot!.querySelectorAll('[id]')!;
      for (const element of [...elements]) {
        ids[element.getAttribute('id')!] = element;
      }
      return ids;
    }
  };
}
