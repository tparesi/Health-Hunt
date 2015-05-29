module Api
  class SessionsController < ApplicationController
    def show
      @user = current_user
      render :show
    end
  end
end
