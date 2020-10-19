Rails.application.routes.draw do
  resources :devices, only: [:index, :show]
  resources :hospitals, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
