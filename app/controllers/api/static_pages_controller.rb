module Api
  class Api::StaticPagesController < ApiController

    def search
      @search_results = Product
        .search_by_product(params[:query])
        .page(params[:page])

        # .includes(:searchable)
    end
  end
end
