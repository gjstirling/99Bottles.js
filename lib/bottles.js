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
    const bottleNumber = this.bottleNumberFor(number);
    const nextBottleNumber = this.bottleNumberFor(bottleNumber.successor());

    return (
      capitalize(`${bottleNumber} `) + 'of beer on the wall, ' +
      `${bottleNumber} of beer.\n` +
      `${bottleNumber.action(number)}, ` +
      `${nextBottleNumber} of beer on the wall.\n`
    );
  }

  bottleNumberFor(number) {
    let bottleNumberClass;
    if (number === 0) {
      bottleNumberClass = BottleNumber0;
    } else {
      bottleNumberClass = BottleNumber;
    }

    return new bottleNumberClass(number);
  }

}

class BottleNumber {

  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  container(){
    return this.number === 1 ? 'bottle' : 'bottles';
  }

  pronoun() {
    return this.number === 1 ? 'it' : 'one'
  }

  quantity() {
    return this.number.toString()
  }

  action() {
    return this.number === 0 ? 'Go to the store and buy some more' : `Take ${this.pronoun()} down and pass it around`
  }

  successor() {
    return this.number === 0 ? 99 : this.number-1
  }

}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return 'no more';
  }
}



export { Bottles };
