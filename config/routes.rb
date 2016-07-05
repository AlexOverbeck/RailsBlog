Rails.application.routes.draw do
  root "welcome#home"
  get "about" => "welcome#about"

  resources :articles
end
