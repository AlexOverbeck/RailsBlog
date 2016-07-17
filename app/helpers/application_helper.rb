module ApplicationHelper
  def gravatar_for(user)
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
    image_tag(gravatar_url, alt: user.username)
  end

  def flash_messages
    capture do
      flash.each do |type, message|
        concat content_tag(:div, message, class: "alert alert-#{type}", role: 'alert')
      end
    end
  end
end
