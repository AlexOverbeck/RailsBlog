Rails.application.routes.draw do
    root "welcome#home"
    get 'signup' => "users#new"
    get 'login' => 'sessions#new'
    resources :users
    resources :articles
end
