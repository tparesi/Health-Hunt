json.extract! user, :id, :email

json.is_current_user user.id == current_user.id
