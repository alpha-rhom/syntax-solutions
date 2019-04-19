class LibrariesController < ActionController::API
  before_action :set_library, only: [:show, :edit, :update, :destroy]

  # GET /libraries
  # GET /libraries.json
  def index
    @user = User.all
    @libraries = Library.all.order(:created_at)

    render :json => @libraries, :include => :user
  end

  # GET /libraries/1
  # GET /libraries/1.json
  def show
  end

  # GET /libraries/new
  def new
    @library = Library.new
  end

  # GET /libraries/1/edit
  def edit
  end

  # POST /libraries
  # POST /libraries.json
  def create
    @library = current_user.libraries.create(library_params)
    render json: @library
  end

  # PATCH/PUT /libraries/1
  # PATCH/PUT /libraries/1.json
  def update
    library = Library.find(params[:id])
    library.update_attributes(library_params)
    render json: library
  end

  # DELETE /libraries/1
  # DELETE /libraries/1.json
  def destroy
    @library = Library.find(params[:id])
    @library.destroy
    render json: @library
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_library
      @library = Library.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def library_params
      params.require(:library).permit(:title, :markdown, :desc)
    end
end
