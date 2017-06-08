import { by, element, ElementFinder } from 'protractor';

export class CartWidget {
  public counter: ElementFinder;
  public cart: ElementFinder;

  public constructor() {
    this.counter = element(by.css('course-cart .counter'));
    this.cart = element(by.css('course-cart '));
  }

  public openCart(): void {
    this.cart.click();
  }
}