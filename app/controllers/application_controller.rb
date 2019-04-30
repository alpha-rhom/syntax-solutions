class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?

  def authenticate_user!
    if user_signed_in?
      super
    else
      redirect_to root_path
    end
  end

  def after_sign_in_path_for(resource)
    '/cards'
  end

  def after_sign_out_path_for(resource)
    root_path
  end

  def after_sign_up_path_for(resource)
    '/cards'
  end

  def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:user_name])
 end
end
