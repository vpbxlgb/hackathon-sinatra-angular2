require("sinatra")
require("sinatra/namespace")

require("json")

class API < Sinatra::Base
  register Sinatra::Namespace

  frontend_dir = File.join(File.dirname(__FILE__), "../frontend/dist")
  set :public_folder, frontend_dir

  get "/" do
    File.read(File.join(frontend_dir, "index.html"))
  end

  namespace "/api" do
    before do
      content_type :json
    end

    get "/version" do
      {
        version: "0.0.1"
      }.to_json
    end
  end
end
