class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email].downcase,
      params[:user][:password]
    )

    if @user
      login_user!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email and/or password"]
      render :new
    end
  end

  def demo
   @user = User.find_by_credentials("DemoUser", "password")
   login_user!(@user)
   redirect_to root_url
  end

  def destroy
    @session = Session.find_by(token: session[:session_token])
    @session.destroy!
    @current_user = nil
    redirect_to root_url
  end

  def omniauth
    user = User.find_or_create_by_auth_hash(auth_hash)
    login_user!(user)
    redirect_to root_url
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
