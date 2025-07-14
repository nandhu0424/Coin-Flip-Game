let score = JSON.parse(localStorage.getItem('score')) || 
    {
      wins : 0,
      losses:0
    };
    updateScore();

    function choose(playerMove){
      const computerMove = pickComputerMove();
      if(playerMove === computerMove){
        document.querySelector('.js-result').innerHTML='YOU WIN!!';
        document.querySelector('.js-result').style.color='green';
        score.wins += 1;
        updateScore();
      }
      else{
        document.querySelector('.js-result').innerHTML='YOU LOSE!!';
        document.querySelector('.js-result').style.color='red';
        score.losses += 1;
        updateScore();
      }
      
      localStorage.setItem('score', JSON.stringify(
      score));

      document.querySelector('.js-pick').innerHTML=`You choose ${playerMove} - Computer choose ${computerMove}`;

      updateScore();
    }

    function updateScore(){
      document.querySelector('.js-score').innerHTML=`Wins: ${score.wins} , Losses: ${score.losses}`
    }

    function resetScore(){
      score.wins = 0;
      score.losses = 0;
      localStorage.removeItem('score');
      updateScore();
      document.querySelector('.js-result').innerHTML='';
      document.querySelector('.js-pick').innerHTML='';
    }

    function pickComputerMove(){
      let result = ''
      const computerMove = Math.random();
      if (computerMove <= (1/2)){
        result = 'Heads';
      }
      else{
        result = 'Tails';
      }
      return result;
    }