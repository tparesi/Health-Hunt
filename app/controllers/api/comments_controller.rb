module Api
  class CommentsController < ApplicationController
    def create
      @comment = current_user.comments.new(comment_params)

      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @comment = current_user.find(params[:id])

      if @comment.update(comment_params)
        render :show
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @comment = current_user.comments.find(params[:id])
      @comment.try(:destroy)
      render json: {}
    end

    private

    def comment_params
      params.require(:comment).permit(:body, :product_id )
    end
  end
end
