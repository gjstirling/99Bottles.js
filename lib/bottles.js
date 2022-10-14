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
    return new BottleNumber(number).container(number);
  }

  pronoun(number) {
    return new BottleNumber(number).pronoun(number);
  }

  quantity(number) {
    return new BottleNumber(number).quantity(number);
  }

  action(number) {
    return new BottleNumber(number).action(number);
  }

  successor(number) {
    return new BottleNumber(number).successor(number);
  }

}

class BottleNumber {

  constructor(number) {
    this.number = number;
  }

  container(number){
    return number === 1 ? 'bottle' : 'bottles';
  }

  pronoun(number) {
    return number === 1 ? 'it' : 'one'
  }

  quantity(number) {
    return number === 0 ? 'no more' : number.toString()
  }

  action(number) {
    return number === 0 ? 'Go to the store and buy some more' : `Take ${this.pronoun(number)} down and pass it around`
  }

  successor(number) {
    return number === 0 ? 99 : number-1
  }

}

export { Bottles };
