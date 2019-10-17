import switchFirstSymbolCounter from './switchFirstSymbolCounter'
import switchSecondSymbolCounter from './switchSecondSymbolCounter'



export default function (numbers) {
  let temp = numbers.toString(),
       emodjiSymbols = [];

  emodjiSymbols = switchFirstSymbolCounter(temp)
  if (temp.length > 1) {
    emodjiSymbols.push(switchSecondSymbolCounter(temp))
  }

  return emodjiSymbols = emodjiSymbols.join("")
}