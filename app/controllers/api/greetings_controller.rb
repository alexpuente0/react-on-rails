class Api::GreetingsController < ApplicationController
  def index
    greeting = Greeting.all.sample.message
    render json: { greeting: }, status: :ok
  end
end