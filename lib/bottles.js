import { capitalize, downTo } from './helpers';
// page 137
class Bottles {

  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    return (
      `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
      `${this.quantity(number)} ${this.container(number)} of beer.\n` +
      `${this.action(number)}, ` +
      `${this.quantity(this.successor(number))} ${this.container(number-1)} of beer on the wall.\n`
    );
  }

  container(number){
    return new BottleNumber(number).container();
  }

  pronoun(number) {
    return new BottleNumber(number).pronoun();
  }

  quantity(number) {
    return new BottleNumber(number).quantity();
  }

  action(number) {
    return new BottleNumber(number).action();
  }

  successor(number) {
    return new BottleNumber(number).successor();
  }

}

class BottleNumber {

  constructor(number) {
    this.number = number;
  }

  container(){
    return this.number === 1 ? 'bottle' : 'bottles';
  }

  pronoun() {
    return this.number === 1 ? 'it' : 'one'
  }

  quantity() {
    return this.number === 0 ? 'no more' : this.number.toString()
  }

  action() {
    return this.number === 0 ? 'Go to the store and buy some more' : `Take ${this.pronoun()} down and pass it around`
  }

  successor() {
    return this.number === 0 ? 99 : this.number-1
  }

}

export { Bottles };
