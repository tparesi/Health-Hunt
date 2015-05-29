module Api
  class UsersController < ApplicationController
    before_action :require_user!, only: [:follow]

    def show
      @user = User.find(params[:id])
      render :show
    end

    def follow
      following = User.find(params[:id])
      follow = Following.find_by(follower_id: current_user.id, following_id: following.id)
      @user = current_user

      if follow
        follow.destroy!
        render :show
      else
        current_user.out_follows.create!(following_id: following.id)
        render :show
      end
    end
  end
end
