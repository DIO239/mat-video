import { Component, Input } from "@angular/core";

@Component({
  selector: "mat-speed-control",
  templateUrl: "./mat-speed-control.component.html",
  styleUrls: ["./mat-speed-control.component.scss"]
})
export class MatSpeedControlComponent {
  @Input() video: HTMLVideoElement;

  constructor() {}

  speedControl(speed) {
    this.video.playbackRate = speed;
  }
}
