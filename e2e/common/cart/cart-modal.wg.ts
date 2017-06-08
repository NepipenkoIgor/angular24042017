import { by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class CartModalWidget {
  public cards: ElementArrayFinder;
  public cartModal: ElementFinder;

  public constructor() {
    this.cards = element.all(by.css('course-cart-list md-card'));
    this.cartModal = element(by.css('course-cart-list'));
  }

  public removeFromCart(index: number):void {
    this.cards.get(index)
      .element(by.css('.remove'))
      .click();
  }
}