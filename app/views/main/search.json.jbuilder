json.libraries do
  json.array!(@libraries) do |library|
    json.title library.title
    json.desc library.desc
  end
end