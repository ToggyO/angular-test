import { Directive, ElementRef, Renderer2, HostListener, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[bold]',
    // host: {
    //     '(mouseenter)': 'onMouseEnter()',
    //     '(mouseleave)': 'onMouseLeave()',
    // },
})
export class BoldDirective implements OnInit
{
    @Input() public selectedSize = '18px';
    @Input() public defaultSize = '16px';

    private _fontSize : string;
    private _fontWeight = 'normal';

    public ngOnInit() {
        this._fontSize = this.defaultSize;
    }

    @HostBinding('style.fontSize') get getFontSize()
    {
        return this._fontSize;
    }

    @HostBinding('style.fontWeight') get getFontWeight()
    {
        return this._fontWeight;
    }

    @HostBinding('style.cursor') get getCursor()
    {
        return 'pointer';
    }

    @HostListener('mouseenter') public onMouseEnter()
    {
        this._fontWeight = 'bold';
        this._fontSize = this.selectedSize;
    }

    @HostListener('mouseleave') public onMouseLeave()
    {
        this._fontWeight = 'normal';
        this._fontSize = this.defaultSize;
    }

    // private fontWeight = 'normal';

    // constructor(private _elRef: ElementRef, private _renderer: Renderer2) {
    //     this._renderer.setStyle(this._elRef.nativeElement, 'cursor', 'pointer');
    // }

    // @HostBinding('style.fontWeight') get getFontWeight(){
    //     return this.fontWeight;
    // }
    //
    // @HostBinding('style.cursor') get getCursor(){
    //     return 'pointer';
    // }
    //
    // @HostListener('mouseenter') onMouseEnter() {
    //     this.fontWeight ='bold';
    // }
    //
    // @HostListener('mouseleave') onMouseLeave() {
    //     this.fontWeight = 'normal';
    // }
    //
    // @HostListener('mouseenter') onMouseEnter() {
    //     this.setFontWeight('bold');
    // }
    //
    // @HostListener('mouseleave') onMouseLeave() {
    //     this.setFontWeight('normal');
    // }
    //
    // private setFontWeight(val: string) {
    //     this._renderer.setStyle(this._elRef.nativeElement, 'font-weight', val);
    // }
}
