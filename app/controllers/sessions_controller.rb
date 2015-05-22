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

  def destroy
    logout!
    redirect_to new_session_url
  end

  def omniauth
    # do something with the auth_hash
    user = User.find_or_create_by_auth_hash(auth_hash)
    login_user!(user)
    redirect_to root_url
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
