class BookSerializer < ActiveModel::Serializer
    attributes :id, :title, :author, :isbn, :description, :language, :image_url

    def image_url
      "#{Rails.root}/public#{self.object.cover_image.url}"
    end
  end