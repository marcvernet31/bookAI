import React, { useState, useEffect } from "react";

const DEFAULT_QUESTION = "What is your definition of community?"

export default () => {
  const [question, setQuestion] = useState(DEFAULT_QUESTION)
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function getAnswer(question) {
    return await fetch("http://localhost:3000/api/answer", 
      {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"question": question})
      }
    )
      .then(response => response.json())
      .then(data => data.answer)
  }

  async function handleAsk() {
    setIsLoading(true)
    setAnswer(await getAnswer(question))
    setIsLoading(false)
  }

  const handleAskAnotherQuestion = () => {
    setQuestion(DEFAULT_QUESTION)
    setAnswer('')
  }

  const handleQuestion = (event) => {
    setQuestion(event.target.value)
  }

  return (
    <main>
      <div class="header">
        <div class="logo">
          <a href="https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397">
            <img src={'book.png'} loading="lazy" />
          </a>
          <h1>Ask My Book</h1>
        </div>
      </div>

      <div class="main">
        <p class="credits">This is an experiment in using AI to make a book content more accessible. The book used for this demo is <b> Minimalist Entrepreneur by Sahil Lavingia </b>.</p>
        <p class="credits">Ask a question and AI'll answer it in real-time:</p>
        {isLoading && 
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        }
        <form>
          {answer.length > 0 ? (
            <div>
              <p> {question} </p>
              <p className="text-justify"> <b>Answer: </b> {answer} </p>
              <button type="button" className="btn btn-primary" onClick={handleAskAnotherQuestion}>
                Ask another question
              </button>
            </div>
          ) : (
            <div>
              <div>
                <textarea 
                  className="form-control" id="questionTextArea"
                  value={question}
                  onChange={handleQuestion}
                  rows="3"
                >
                </textarea>
              </div>
              <button type="button" className="btn btn-primary" onClick={handleAsk}>
                Ask          
              </button>
            </div>
          )}
        </form>
      </div>

      <footer>
        <p class="credits"> Project by <a href="https://www.linkedin.com/in/marc-vernet/"> Marc Vernet</a> • <a href="https://github.com/marcvernet31/askmybook.git"> Github </a> • <a href="https://github.com/slavingia/askmybook"> Original source code</a> </p>
      </footer>
    </main>
  ) 
};