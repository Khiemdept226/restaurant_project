import {AfterViewInit, EventEmitter, HostListener} from '@angular/core';
import {Output} from '@angular/core';
import {ElementRef} from '@angular/core';
import {Input} from '@angular/core';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tech-modal',
  templateUrl: './tech-modal.component.html',
  styleUrls: ['./tech-modal.component.scss']
})
export class TechModalComponent implements OnInit, AfterViewInit {

  public isShow = false;

  @Input() title!: string;
  @Input() width: string = '40%';
  @Output() afterHide: EventEmitter<any> = new EventEmitter();
  @Input() isClick: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.querySelector('.tech-panel').style.width = this.width;
  }

  ngOnInit(): void {
  }

  show() {
    this.isShow = true;
  }

  hide() {
    this.isShow = false;
    this.afterHide.emit();
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    if (this.isClick) {
      const techModal = this.elementRef.nativeElement.querySelector('.tech-panel');
      // console.log(target);
      // console.log('aaa',techModal.contains(target), techModal, target);
      if (target.contains(techModal)) {
        this.hide();
      }
    }
  }
}
