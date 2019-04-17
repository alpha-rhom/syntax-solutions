class PagesController < ApplicationController
    before_action :authenticate_user!, only: :protected
    
    def unportected
    end

    def protected
    end
end
