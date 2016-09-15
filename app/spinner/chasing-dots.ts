import {Component, Input, OnDestroy} from "@angular/core";

@Component({
  selector: 'sk-chasing-dots',
  styles: [`
    .chasing-dots-spinner {
      position: relative;
      margin: 25px auto;
      width: 40px;
      height: 40px;
    
      -webkit-animation: sk-rotate 2.0s infinite linear;
      animation: sk-rotate 2.0s infinite linear;
    }
    
    .dot1,
    .dot2 {
      position: absolute;
      top: 0;
      display: inline-block;
      width: 60%;
      height: 60%;
      border-radius: 100%;
      background-color: #333;
    
      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }
    
    .dot2 {
      top: auto;
      bottom: 0;
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    
    @-webkit-keyframes sk-rotate {
      100% {
        -webkit-transform: rotate(360deg)
      }
    }
    
    @keyframes sk-rotate {
      100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg)
      }
    }
    
    @-webkit-keyframes sk-bounce {
      0%, 100% {
        -webkit-transform: scale(0.0)
      }
      50% {
        -webkit-transform: scale(1.0)
      }
    }
    
    @keyframes sk-bounce {
      0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      }
      50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  `],
  template: `
    <div [hidden]="!visible" class="chasing-dots-spinner">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
  `
})

export class ChasingDotsComponent implements OnDestroy {
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
