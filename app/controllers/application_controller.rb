class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= Session.find_user(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login_user!(user)
    @current_user = user
    @session = user.sessions.create()
    session[:session_token] = @session.token
  end

  def require_user!
    redirect_to new_session_url unless logged_in?
  end
end
