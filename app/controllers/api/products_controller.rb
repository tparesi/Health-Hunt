module Api
  class ProductsController < ApplicationController
    before_action :require_user!, only: [:create, :update, :destroy, :vote]

    def create
      @product = current_user.products.new(product_params)

      if @product.save
        render :show
      else
        render json: @product.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @products = Product.all
      render :index
    end

    def show
      @product = Product.find(params[:id])
      render :show
    end

    def update
      @product = Product.find(params[:id])

      if @product.update(product_params)
        render :show
      else
        render json: @product.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @product = Product.find(params[:id])
      @product.try(:destroy)
      render json: {}
    end

    def vote
      @product = Product.find(params[:id])
      @vote = Vote.find_by(product_id: @product.id, user_id: current_user.id)

      if @vote
        @vote.destroy!
        render :show
      else
        current_user.votes.create!(product_id: @product.id)
        render :show
      end
    end

    private

    def product_params
      params.require(:product).permit(:title, :url, :description, :voter_ids, collection_ids: [])
    end
  end
end
