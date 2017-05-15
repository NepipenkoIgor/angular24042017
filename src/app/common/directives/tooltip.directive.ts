import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[courseTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  @HostBinding('class.tooltip-container')
  public tooltipContainer: boolean = true;

  @Input()
  public set courseTooltip(value: string) {
    this._tooltipElement.textContent = (Number(value) * 57).toFixed();
  }

  private _tooltipElement: HTMLDivElement = document.createElement('div');

  public constructor(
    private _elementRef: ElementRef
  ) { }

  public ngOnInit(): void {
    this._tooltipElement.className = 'tooltip';
    this._elementRef.nativeElement.appendChild(this._tooltipElement);
  }

  public hide(): void {
    this._tooltipElement.classList.remove('tooltip-active');
  }

  public show(): void {
    this._tooltipElement.classList.add('tooltip-active');
  }

}
