class Api::SellersController < ApplicationController

    def index
        render json: Seller.all
    end

    def show
        render json: Seller.find(params[:id]).products
    end

    def seller_categories
        render json: Seller.with_category
    end
end
