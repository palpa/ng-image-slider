import { ChangeDetectorRef, OnInit, OnChanges, DoCheck, SimpleChanges, AfterViewInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
import { NgImageSliderService } from './ng-image-slider.service';
import * as i0 from "@angular/core";
export declare class NgImageSliderComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, OnDestroy {
    private cdRef;
    private platformId;
    imageSliderService: NgImageSliderService;
    private elRef;
    sliderMainDivWidth: number;
    imageParentDivWidth: number;
    imageObj: Array<object>;
    ligthboxImageObj: Array<object>;
    totalImages: number;
    leftPos: number;
    effectStyle: string;
    speed: number;
    sliderPrevDisable: boolean;
    sliderNextDisable: boolean;
    slideImageCount: number;
    sliderImageWidth: number;
    sliderImageReceivedWidth: number | string;
    sliderImageHeight: number;
    sliderImageReceivedHeight: number | string;
    sliderImageSizeWithPadding: number;
    autoSlideCount: number;
    stopSlideOnHover: boolean;
    autoSlideInterval: any;
    showArrowButton: boolean;
    textDirection: string;
    imageMargin: number;
    sliderOrderType: string;
    fallbackMainImage: string;
    fallbackThumbImage: string;
    private swipeCoord?;
    private swipeTime?;
    ligthboxShow: boolean;
    activeImageIndex: number;
    visiableImageIndex: number;
    sliderMain: any;
    imageDiv: any;
    set imageSize(data: any);
    infinite: boolean;
    imagePopup: boolean;
    set direction(dir: string);
    set animationSpeed(data: number);
    images: Array<object>;
    set fallbackImage(images: object);
    set slideImage(count: any);
    set autoSlide(count: any);
    set showArrow(flag: any);
    set orderType(data: string);
    videoAutoPlay: boolean;
    paginationShow: boolean;
    arrowKeyMove: boolean;
    manageImageRatio: boolean;
    showVideoControls: boolean;
    set defaultActiveImage(activeIndex: number);
    lazyLoading: boolean;
    imageClick: EventEmitter<number>;
    arrowClick: EventEmitter<object>;
    lightboxArrowClick: EventEmitter<object>;
    lightboxClose: EventEmitter<object>;
    onResize(event: any): void;
    handleKeyboardEvent(event: KeyboardEvent): void;
    constructor(cdRef: ChangeDetectorRef, platformId: Object, imageSliderService: NgImageSliderService, elRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    setSliderImages(imgObj: any): void;
    setSliderWidth(): void;
    imageOnClick(index: any): void;
    imageAutoSlide(): void;
    imageMouseEnterHandler(): void;
    prev(): void;
    next(): void;
    prevImg(): void;
    nextImg(): void;
    infinitePrevImg(): void;
    infiniteNextImg(): void;
    getVisiableIndex(): void;
    /**
     * Disable slider left/right arrow when image moving
     */
    sliderArrowDisableTeam(msg: any): void;
    nextPrevSliderButtonDisable(msg?: any): void;
    showLightbox(): void;
    close(): void;
    lightboxArrowClickHandler(event: any): void;
    /**
     * Swipe event handler
     * Reference from https://stackoverflow.com/a/44511007/2067646
     */
    swipe(e: TouchEvent, when: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgImageSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgImageSliderComponent, "ng-image-slider", never, { "imageSize": { "alias": "imageSize"; "required": false; }; "infinite": { "alias": "infinite"; "required": false; }; "imagePopup": { "alias": "imagePopup"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "animationSpeed": { "alias": "animationSpeed"; "required": false; }; "images": { "alias": "images"; "required": false; }; "fallbackImage": { "alias": "fallbackImage"; "required": false; }; "slideImage": { "alias": "slideImage"; "required": false; }; "autoSlide": { "alias": "autoSlide"; "required": false; }; "showArrow": { "alias": "showArrow"; "required": false; }; "orderType": { "alias": "orderType"; "required": false; }; "videoAutoPlay": { "alias": "videoAutoPlay"; "required": false; }; "paginationShow": { "alias": "paginationShow"; "required": false; }; "arrowKeyMove": { "alias": "arrowKeyMove"; "required": false; }; "manageImageRatio": { "alias": "manageImageRatio"; "required": false; }; "showVideoControls": { "alias": "showVideoControls"; "required": false; }; "defaultActiveImage": { "alias": "defaultActiveImage"; "required": false; }; "lazyLoading": { "alias": "lazyLoading"; "required": false; }; }, { "imageClick": "imageClick"; "arrowClick": "arrowClick"; "lightboxArrowClick": "lightboxArrowClick"; "lightboxClose": "lightboxClose"; }, never, never, false, never>;
}
