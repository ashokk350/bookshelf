class Api::V1::BooksController < ApplicationController
  def index
    books = Book.all #Book.search(params[:search])
    # if $redis.get(params[:search]).present?
    #   books = $redis.get(params[:search])
    # else
    #   books = Book.search(params[:search]).to_json
    #   $redis.set(params[:search], books)
    #   $redis.expire(params[:search], 1.week)
    # end

    # books = JSON.load books
    render json: books
  end

  def create
    binding.pry
    book = Book.create(book_params)

    render json: book
  end

  def update 
    book = Book.find(params[:id])
    book.update(book_params)

    render json: book
  end 

  def destroy
    book = Book.find(params[:id]).delete

    render json: book
  end

  private 

    def book_params
      params.permit(:title, :author, :isbn, :description, :language, :cover_image)
    end
end