json.extract! user, :id, :email

if current_user
  json.is_current_user user.id == current_user.id
end
