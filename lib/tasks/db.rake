namespace :db do
  desc 'Drop the database and refresh it with mock data'
  task refresh: %w(do_not_run_in_production! db:drop db:create db:migrate db:seed db:mock db:test:prepare)

  desc 'Populate database with mock data'
  task mock: :environment do
    user = User.new username: 'admin', email: 'admin@user.com', password: 'asdfasdf'
    if user.save
      puts 'Mock admin user created!'
      puts "username: #{user.username}\nemail: #{user.email},\npassword: asdfasdf"
      puts '---------------------------'
      10.times do
        title = Faker::Book.title
        description = Faker::Hipster.sentences(rand(1..2), true).join(' ')
        article = user.articles.new title: title, description: description
        if article.save
          puts 'Mock article created!'
          puts "name: #{title}\ndescription: #{description}"
          puts '---------------------------'
        else
          puts article.errors.full_messages.to_sentence
          puts '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^'
        end
      end
    end
  end

  task :do_not_run_in_production! do
    raise "You don't want to run this in production. Trust me. I'm a doctor." if Rails.env.production?
  end
end
