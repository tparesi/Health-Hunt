module Api
  class CollectionsController < ApiController

    def create
      @collection = current_user.collections.new(collection_params)

      if @collection.save
        render :show
      else
        render json: @collection.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @collections = Collection.all
      render :index
    end

    def show
      @collection = Collection.find(params[:id])
      render :show
    end

    def update
      @collection = Collection.find(params[:id])

      if @collection.update(collection_params)
        render :show
      else
        render json: @collection.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @collection = Collection.find(params[:id])
      @collection.try(:destroy)
      render json: {}
    end

    private

    def collection_params
      params.require(:collection).permit(:title, :description, :image)
    end

  end
end
