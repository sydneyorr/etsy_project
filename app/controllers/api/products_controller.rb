class Api::ProductsController < ApplicationController

  def index
    render json: Product.available
  end

  def categories
    render json: Product.categories
  end

  def category
    render json: Product.by_category(params[:category])
  end

end
