
class gameService{
  constructor(){
  }

  oportunities(){

  }

  wordUser(wordUser: String){
    return this.compareWord(wordUser, this.selectWord())
  }

  selectWord(){
    const word = 'sumer';
    return word;
  }

  compareWord(wordFromUser: String, wordFromGame: String){
    const wordGame = wordFromGame.split('');
    const wordUser = wordFromUser.split('');
    let counter: number[] = [];
    let equalLetters: string[] = [];
    for(let i: number = 0; i < wordGame.length; i++){
      if(wordUser[i] in wordFromGame){
        console.log(wordUser[i])
      }
        if(wordUser[i] === wordGame[i]){
          counter.push(1);
        }else{
          counter.push(0);
        }
        for(let j: number = 0; j < wordGame.length; j++){
          if(wordUser[i] === wordGame[j]){
            equalLetters.push(wordUser[i]);
            console.log(wordUser[i])
            }
        }
    }

    if(wordFromUser == wordFromGame){
      return this.isMatch(wordFromGame);
    }
    if(equalLetters.length == 0){
      return this.notFoundInWord(wordUser)
   }
    console.log(counter);
    console.log(equalLetters);
  }

  samePlace(){
    return 'En el mismo lugar'
  }

  isInTheWordButNotInSamePlace(){
    return 'Si esta una palabra'
  }

  notFoundInWord(word: String[]){
   // const value: number = 3;

    return word;
  }

  isMatch(word: String){
    return `Todas Correctas: ${word}`;
  }

}


export default gameService;
