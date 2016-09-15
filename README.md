ng2-spin-kit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS v2.x

Inspired by angular-spinkit (https://github.com/Urigo/angular-spinkit)

![ng2-spin-kit](ng2-spin-kit.gif?raw=true "ng2-spin-kit")

## Usage
1. Install with NPM:
  ```bash
  npm install ng2-spin-kit --save
  ```

2. Import one component
  ```javascript
  import {RotatingPlaneComponent} from 'ng2-spin-kit/app/spinner/rotating-plane.component'
  ```

3. or all of them
  ```javascript
  import * as spinner from 'ng2-spin-kit/app/spinners'
  ```
  
4. Use as a directive:
  ```javascript
  import {Component} from 'angular2/core';
  import * as spinner from 'ng2-spin-kit/app/spinners';
  
  @Component({
    selector: 'app',
    directives: [
      spinner.RotatingPlaneComponent,
      spinner.DoubleBounceComponent,
      spinner.WaveComponent,
      spinner.WanderingCubesComponent,
      spinner.PulseComponent,
      spinner.ChasingDotsComponent,
      spinner.CircleComponent,
      spinner.ThreeBounceComponent,
      spinner.CubeGridComponent,
      spinner.WordPressComponent,
      spinner.FadingCircleComponent,
      spinner.FoldingCubeComponent
    ]
  })
  ```

  ```html
  <sk-rotating-plane [isRunning]="..." [delay]="..."></sk-rotating-plane>
  <sk-double-bounce [isRunning]="..." [delay]="..."></sk-double-bounce>
  <sk-wave [isRunning]="..." [delay]="..."></sk-wave>
  <sk-wandering-cubes [isRunning]="..." [delay]="..."></sk-wandering-cubes>
  <sk-pulse [isRunning]="..." [delay]="..."></sk-pulse>
  <sk-chasing-dots [isRunning]="..." [delay]="..."></sk-chasing-dots>
  <sk-circle [isRunning]="..." [delay]="..."></sk-circle>
  <sk-three-bounce [isRunning]="..." [delay]="..."></sk-three-bounce>
  <sk-cube-grid [isRunning]="..." [delay]="..."></sk-cube-grid>
  <sk-word-press [isRunning]="..." [delay]="..."></sk-word-press>
  <sk-fading-circle [isRunning]="..." [delay]="..."></sk-fading-circle>
  <sk-folding-cube [isRunning]="..." [delay]="..."></sk-folding-cube>
  ```

#### For every component you can set:
  ```
  [isRunning]: boolean - state of the spinner, true - visible, false - hidden, default: true
  ```
  
  ```
  [delay]: number - representing the milliseconds to wait, before showing the spinner, default: 0
  ```
  
#### You can generate JavaScript code based on TypeScript by:
  ```bash
  npm run tcs
  ```
  
#### To regenerate typings:
  ```bash
  npm run typings
  ```
  
#### To compile and run demo app in browser:
  ```bash
  npm start
  ```
  
## Add all your requests and ideas in the issues area or send us a pull request!
