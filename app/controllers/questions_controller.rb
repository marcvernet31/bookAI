require_relative 'functions/functions.rb'

class QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def questions 
    @questions = Question.all 
    render json: @questions
  end

  def answer  
    question = JSON.parse(request.body.read)['question']
    cache = Question.where(question: question).to_a

    if cache.length == 0
      generatedAnswer = ask(question)
      @answer = {"answer": generatedAnswer}
      @newQuestion = Question.new(question: question, answer: generatedAnswer)
      @newQuestion.save()
    else
      @answer = {"answer": cache[0]['answer']}
    end
    render json: @answer
  end
end
