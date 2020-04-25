# frozen_string_literal: true

ActiveAdmin.register Ingredient do
  permit_params :description, :drink_id

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :drink_id, :description
  #
  # or
  #
  # permit_params do
  #   permitted = [:drink_id, :description]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
