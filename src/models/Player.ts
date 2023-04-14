import {Colors} from "./Colors";
// класс игрока Один цвет - один игрок
export class Player {
  color: Colors;


  constructor(color: Colors) {
    this.color = color;
  }
}
