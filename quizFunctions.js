

var myQuestions =[
  {question: "What was the name of Ariana Grande's 2019 breakup album",
      answers:{
          a: "Thank U, Next",
          b: "Sweetener",
          c: "NASA",
          d:"Break Up With Your Girlfriend, I'm Bored"
      },
      correctAnswer: "a"

  },
  {question: "Which Artist Released 'When We Are Asleep, Where Do We Go?'",
      answers:{
          a: "Justin Bieber",
          b: "Dua Lipa",
          c: "Billie Eilish",
          d:"John Legend"
      },
      correctAnswer: "c"
  },
  {question: "What movie featured the song 'Sunflower' by Post Malone ft. Swae Lee>",
      answers:{
          a: "Spider-man: Into THe Spiderverse",
          b: "Drive",
          c: "Us",
          d: "Toy Story 4"
      },
      correctAnswer: "a"
  },
  {question: "Finish the lyric: 'I've been dancing on top of cars and _____' (Sucker: The Jonas Brothers) ",
      answers:{
          a: "fumbling out of bars",
          b: "stumbling out of bars",
          c: "driving electric cars",
          d: "flying rockets to mars"
      },
      correctAnswer: "b"
  },
  {question: "Which artist was featured alongside Marshmallo in Happier?",
      answers:{
          a: "Justin Bieber",
          b: "John Mayer",
          c: "Ed Sheeren",
          d: "Bastille"
      },
      correctAnswer: "d"
  },
  {question: "Who is the lead singer of Maroon V?",
      answers:{
          a: "Blake Shelton",
          b: "Adam Levine",
          c: "Pete Davidson",
          d: "Sean Kingston"
      },
      correctAnswer: "b"
  },
  {question: "What is the name of Taylor Swift's 7th Studio Album?",
      answers:{
          a: "Seven",
          b: "1989",
          c: "Her",
          d: "Me!"
      },
      correctAnswer: "a"
  },
  {question: "Who wasconsidered one of 2019's Break Out Pop Artists?",
      answers:{
          a: "Lizzo",
          b: "Billie Eilish",
          c: "Charlie XCX",
          d: "Camilla Cabella"
      },
      correctAnswer: "a"
  },
]    

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
	  var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');

	}

	function showResults(questions, quizContainer, resultsContainer){	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
  }


}


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
