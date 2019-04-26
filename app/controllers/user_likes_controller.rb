class UserLikesController < ActionController::API
  before_action :set_user_like, only: [:show, :edit, :update, :destroy]

  # GET /user_likes
  # GET /user_likes.json
  def index
    @user_likes = UserLike.all
  end

  # GET /user_likes/1
  # GET /user_likes/1.json
  def show
  end

  # GET /user_likes/new
  def new
    @user_like = UserLike.new
  end

  # GET /user_likes/1/edit
  def edit
  end

  # POST /user_likes
  # POST /user_likes.json
  def create
    user_like = UserLike.create(user_like_params)
    if user_like.valid?
      render json: user_like
     else
       render json: user_like.errors, status: :unprocessable_entity
     end
  end

  # PATCH/PUT /user_likes/1
  # PATCH/PUT /user_likes/1.json
  def update
    respond_to do |format|
      if @user_like.update(user_like_params)
        format.html { redirect_to @user_like, notice: 'User like was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_like }
      else
        format.html { render :edit }
        format.json { render json: @user_like.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_likes/1
  # DELETE /user_likes/1.json
  def destroy
    @user_like.destroy
    respond_to do |format|
      format.html { redirect_to user_likes_url, notice: 'User like was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_like_params
      params.require(:lul).permit(:user_id, :library_id, :value)
    end
end
