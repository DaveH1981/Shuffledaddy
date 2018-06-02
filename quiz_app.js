
 myFunction() {
 	var questions = [{
 	   question: "What color is the sky?",
 	   choices: ["Red", "Black", "Blue"],
 	   correctAnswer: "Blue"
 	}, {
 	   question: "What is the answer to life, the universe and everything?",
 	   choices: [42, "Who Knows?", 88],
 	   correctAnswer: 42
 	}, {
 	   question: "Who discovered the theory of Relativity?",
 	   choices: ["Thomas Edison", "Albert Einstein", "Sir Isaac Newton"],
 	   correctAnswer: "Albert Einstein"
 	}, {
 	   question:  "Which British rock group was known as The Fab Four?",
 	   choices: ["The Rolling Stones", "Pink Floyd", "The Beatles"],
 	   correctAnswer: "The Beatles"
 	}, {
 	   question: "Which U.S. President was the first Roman Catholic to hold the office?",
 	   choices: ["Dwight Eisenhower", "John F. Kennedy", "Jimmy Carter"],
 	   correctAnswer: "John F. Kennedy"
 	}];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
 
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
 }
 function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
();