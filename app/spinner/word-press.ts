import {Component, Input, OnDestroy} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'sk-word-press',
  styles: [`
    .word-press-spinner {
      position: relative;
      margin: 25px auto;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      background-color: #333;
    
      -webkit-animation: inner-circle 1s linear infinite;
      animation: inner-circle 1s linear infinite;
    }
    
    .inner-circle {
      position: absolute;
      top: 5px;
      left: 5px;
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background: #fff;
    }
    
    @-webkit-keyframes inner-circle {
      0% {
        -webkit-transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    
    @keyframes inner-circle {
      0% {
        transform: rotate(0);
        -webkit-transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
      }
    }
  `],
  template: `
    <div [hidden]="!visible" class="word-press-spinner">
      <span class="inner-circle"></span>
    </div>
  `
})

export class WordPressComponent implements OnDestroy {
  private visible:boolean = true;
  private timeout:any;

  @Input()
  public delay:number = 0;

  @Input()
  public set isRunning(value:boolean) {
    if (!value) {
      this.cancel();
      this.visible = false;
    }
    else {
      this.timeout = setTimeout(() => {
        this.visible = true;
        this.cancel();
      }, this.delay);
    }

    if (this.timeout) {
      return;
    }
  }

  private cancel():void {
    clearTimeout(this.timeout);
    this.timeout = undefined;
  }

  ngOnDestroy():any {
    this.cancel();
  }
}
