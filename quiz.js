(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
   
    const myQuestions =[
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
    ];    
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
