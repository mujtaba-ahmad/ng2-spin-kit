import {Component, Input, OnDestroy} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'sk-wandering-cubes',
  styles: [`
    .wandering-cubes-spinner {
      position: relative;
      margin: 25px auto;
      width: 40px;
      height: 40px;
    }
    
    .cube1,
    .cube2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      background-color: #333;
    
      -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
      animation: sk-cubemove 1.8s infinite ease-in-out;
    }
    
    .cube2 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    
    @-webkit-keyframes sk-cubemove {
      25% {
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5)
      }
      50% {
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg)
      }
      75% {
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5)
      }
      100% {
        -webkit-transform: rotate(-360deg)
      }
    }
    
    @keyframes sk-cubemove {
      25% {
        transform: translateX(42px) rotate(-90deg) scale(0.5);
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
      }
      50% {
        transform: translateX(42px) translateY(42px) rotate(-179deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
      }
      50.1% {
        transform: translateX(42px) translateY(42px) rotate(-180deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
      }
      75% {
        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
      }
      100% {
        transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
      }
    }
  `],
  template: `
    <div [hidden]="!visible" class="wandering-cubes-spinner">
      <div class="cube1"></div>
      <div class="cube2"></div>
    </div>
  `
})

export class WanderingCubesComponent implements OnDestroy {
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
