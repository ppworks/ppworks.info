require 'rubygems'
require 'sinatra'

before do
  @assets_version = '1.0'
end

get '/' do
  erb :index
end
