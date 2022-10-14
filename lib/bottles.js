import { capitalize, downTo } from './helpers';
// page 145
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
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());

    return (
      `${capitalize(bottleNumber.quantity(number))} ${bottleNumber.container(number)} of beer on the wall, ` +
      `${bottleNumber.quantity(number)} ${bottleNumber.container(number)} of beer.\n` +
      `${bottleNumber.action(number)}, ` +
      `${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of beer on the wall.\n`
    );
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
