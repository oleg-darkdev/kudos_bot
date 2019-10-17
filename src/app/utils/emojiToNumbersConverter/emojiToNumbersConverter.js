import switchFirstSymbolCounter from './switchFirstSymbol'
import switchSecondSymbolCounter from './switchSecondSymbol'



export default function (emodjiSymbols) {

  // temp = numbers.toString(),
  let temp = emodjiSymbols,
      numbers = [];

  numbers = switchFirstSymbolCounter(temp)
  if (temp.length > 1) {
    numbers.push(switchSecondSymbolCounter(temp))
  }

  return numbers
}