class ProductsController < ApplicationController
  def new
    @product = Product.new
  end

  def create
    @product = current_user.products.new(product_params)

    if @product.save
      redirect_to product_url(@product)
    else
      flash.now[:errors] = @product.errors.full_messages
      render :new
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

  def edit
    @product = Product.find(params[:id])
    render :edit
  end

  def update
    @product = Product.find(params[:id])

    if @product.update(product_params)
      redirect_to product_url(@product)
    else
      flash.now[:errors] = @product.errors.full_messages
      render :edit
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.try(:destroy)
    redirect_to products_url
  end

  private

  def product_params
    params.require(:product).permit(:title, :url, :description)
  end
end
