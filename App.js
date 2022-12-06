import {useState} from "react"
function App(){
  const questions=[
    {
      questionText:"Which is the webserver among these options ?",
      answerOption:[
        {answerText:"React JS",isCorrect:false},
        {answerText:"Node JS", isCorrect:true},
        {answerText:"Express JS",isCorrect:false},
        {answerText:"Mongo DB",isCorrect:false}
      ]
    },
    {
      questionText:"In which language is Node.js written?",
      answerOption:[
        {answerText:"JavaScript",isCorrect:true},
        {answerText:"C", isCorrect:false},
        {answerText:"C++",isCorrect:false},
        {answerText:"CoffeeScript",isCorrect:false}
      ] 
    },
    {
      questionText:"Which of the following command is used to install the Node.js express module?",
      answerOption:[
        {answerText:"$ npm install express",isCorrect:true},
        {answerText:"$ node install express", isCorrect:false},
        {answerText:"$ install express",isCorrect:false},
        {answerText:"None of the Above",isCorrect:false}
      ]
    },
    {
      questionText:"The Node.js modules can be exposed using:",
      answerOption:[
        {answerText:"expose",isCorrect:false},
        {answerText:"module", isCorrect:false},
        {answerText:"exports",isCorrect:true},
        {answerText:"All if the above",isCorrect:false}
      ]
    },
    {
      questionText:"What does the fs module stand for?",
      answerOption:[
        {answerText:"File Service",isCorrect:false},
        {answerText:"File System", isCorrect:true},
        {answerText:"File Store",isCorrect:false},
        {answerText:"File Sharing",isCorrect:false}
      ]
    },
    {
      questionText:"What is the meaning of M in MERN STACK ?",
      answerOption:[
        {answerText:"Mongo DB",isCorrect:true},
        {answerText:"Monset DB", isCorrect:false},
        {answerText:"Mean Stack",isCorrect:false},
        {answerText:"All if the above",isCorrect:false}
      ]
    },
    {
      questionText:"In which of the mentioned language, Date Science is done ?",
      answerOption:[
        {answerText:"C++",isCorrect:false},
        {answerText:"Swift", isCorrect:false},
        {answerText:"Python",isCorrect:true},
        {answerText:"Java",isCorrect:false}
      ]
    },
    {
      questionText:"Which of the mentioned language is used for making Android App ?",
      answerOption:[
        {answerText:"C++",isCorrect:false},
        {answerText:"Java", isCorrect:true},
        {answerText:"Python",isCorrect:false},
        {answerText:"PHP",isCorrect:false}
      ]
    },
    {
      questionText:"Which framework is based on Python ?",
      answerOption:[
        {answerText:"Spring",isCorrect:false},
        {answerText:"Express", isCorrect:false},
        {answerText:"Angular",isCorrect:false},
        {answerText:"Django",isCorrect:true}
      ]
    },
    {
      questionText:"Which of the following library was created by facebook employee Jordan Walke ?",
      answerOption:[
        {answerText:"React JS",isCorrect:true},
        {answerText:"Node Js", isCorrect:false},
        {answerText:"Angular",isCorrect:false},
        {answerText:"Bootstrap",isCorrect:false}
      ],
    }
  ]
  const[currentQuestion, setCurrentQuestion]=useState(0)
  const[showScore, setShowScore]=useState(false)
  const[score,setScore]=useState(0)
  const handle=(isCorrect)=>{
    if (isCorrect){
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion)
    }
    else{
      setShowScore(true)
    }
  }
  return(
    <div className="quiz">
      {showScore ?(
        <div className="score-section">
          YOU SCORED {score} OUT OF {questions.length}
        </div>
      ):(
        <>
        <div className="question-section">
          <span>Question {currentQuestion+1}</span>/{questions.length}
          <div className="question-text">{questions[currentQuestion].questionText}</div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOption.map((answerOption) =>(
            <button onClick={() => handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
        
        </>
      
      )}
    </div>
  )
}
export default App