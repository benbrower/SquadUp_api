# frozen_string_literal: true

ActiveAdmin.register Drink do
  permit_params :title, :description, :steps, :sourc

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :title, :description, :steps, :source
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :description, :steps, :source]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
