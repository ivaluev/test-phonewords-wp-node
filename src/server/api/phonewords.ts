export async function getPhonewords(term: string): Promise<string[]> {

  const inputArray: number[] = Array.from(term).map(i => parseInt(i, 10))
  
  const words: string[] = compileWords(inputArray)

  return words
}


const digitToCharsMap: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

function compileWords(inputDigitsArray: number[]) : string[]
{
  const output: string[] = new Array<string>(inputDigitsArray.length);

  const words:string[] = [];

  prepareWords(inputDigitsArray, 0, output, inputDigitsArray.length, words)
  
  return words
}

function prepareWords(
  inputDigitsArray: number[], 
  currDigit: number, 
  output: string[], 
  inputDigitsArrayLength: number, 
  words: string[])
{
	// if current word is prepared 
	if (currDigit === inputDigitsArrayLength)
	{
    words.push(output.join(""))
		return
	}
 
  // iterating over digit chars
  for(const ch of digitToCharsMap[inputDigitsArray[currDigit]]) {

    output[currDigit] = ch
    
    prepareWords(inputDigitsArray, currDigit + 1, output, inputDigitsArrayLength, words)
    
		if (inputDigitsArray[currDigit] === 0 || inputDigitsArray[currDigit] === 1)
		{
      return
		}
  }
}
