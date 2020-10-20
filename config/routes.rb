Rails.application.routes.draw do
  resources :medications
  resources :devices, only: [:index, :show] do
    resources :medications
  end
  resources :hospitals, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
