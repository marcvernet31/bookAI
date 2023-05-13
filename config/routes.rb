Rails.application.routes.draw do
	root 'homepage#index'
	get '/questions', to: 'questions#index'
	get 'api/questions', to: 'questions#questions'
	match 'api/answer', to: 'questions#answer', via: :post
end
