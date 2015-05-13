module Api
  class CollectionsController < ApiController
    def create
      @collection = current_user.collections.new(collection_params)

      if @collection.save
        render json: @collection
      else
        render json: @collection.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @collections = Collection.all
      render json: @collections
    end

    def show
      @collection = Collection.find(params[:id])
      render json: @collection
    end

    def update
      @collection = Collection.find(params[:id])

      if @collection.update(collection_params)
        render json: @collection
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
      params.require(:collection).permit(:title, :description)
    end

  end
end
