export async function getPhonewords(term: string): Promise<string[]> {

  const inputArray: number[] = Array.from(term).map(i => parseInt(i, 10))
  
  const words: string[] = compileWords(inputArray)

  return words
}


const digitToCharsMap: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

function compileWords(inputDigits: number[]) : string[]
{
  const output: string[] = new Array<string>(inputDigits.length);

  const words:string[] = [];

  prepareWords(inputDigits, 0, output, inputDigits.length, words)
  
  return words
}

function prepareWords(
  inputDigits: number[], 
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
 
  for(const ch of digitToCharsMap[inputDigits[currDigit]]) {

    output[currDigit] = ch
    
    prepareWords(inputDigits, currDigit + 1, output, inputDigitsArrayLength, words)
    
		if (inputDigits[currDigit] === 0 || inputDigits[currDigit] === 1)
		{
      return
		}
  }
}
