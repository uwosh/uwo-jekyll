require 'nokogiri'

module Jekyll
  module VideoPhotoFilter

    def videophoto(input)
      doc = Nokogiri::HTML(input)
      iframe = doc.xpath('//iframe/@src')

      if iframe[0].to_s != ''
        # This regex pulls youtube video ID from various styles of youtube URLs
        # Taken from http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url/4811367#4811367
        re = /^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/
        yt = iframe[0].to_s

        src = yt.match re

        # 3rd match from regex contains the youtubeID
        src[3]
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::VideoPhotoFilter)
