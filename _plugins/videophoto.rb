require 'nokogiri'

module Jekyll
  module VideoPhotoFilter

    def videophoto(input)
      doc = Nokogiri::HTML(input)
      iframe = doc.xpath('//iframe')

      iframe[0].to_s
    end
  end
end

Liquid::Template.register_filter(Jekyll::VideoPhotoFilter)
