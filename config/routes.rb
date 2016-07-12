Rails.application.routes.draw do
    root "welcome#home"
    get 'signup' => "users#new"
    resources :users
    resources :articles
end
