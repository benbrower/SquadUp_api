# frozen_string_literal: true

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

breakfast_smoothie = Drink.create(
  title: 'Two-Minute Breakfast Boost',
  description: 'Whizz up a low-fat breakfast smoothie in no time. Use banana with other soft fruit, plus honey for a little sweetness and oats for slow-release fuel.',
  steps: 'Put all the ingredients in a blender and whizz for 1 min until smooth. Pour the mixture into two glasses to serve.',
  source: 'https://www.bbcgoodfood.com/recipes/two-minute-breakfast-smoothie'
)
breakfast_smoothie.ingredients.create(description: '1 banana')
breakfast_smoothie.ingredients.create(description: '1 tbsp porridge oats')
breakfast_smoothie.ingredients.create(description: '80g soft fruit (like mango or strawberries)')
breakfast_smoothie.ingredients.create(description: '150ml milk')
breakfast_smoothie.ingredients.create(description: '1 tsp honey')
breakfast_smoothie.ingredients.create(description: '1 tsp vanilla extract')

kale_smoothie = Drink.create(
  title: 'Kale And Hearty Smoothie',
  description: "Give yourself a dose of vitamin C in the morning with this vegan green smoothie. Along with kale and avocado, there's a hit of zesty lime and pineapple.",
  steps: 'Put all of the ingredients into a bullet or smoothie maker, add a large splash of water and blitz. Add more water until you have the desired consistency.',
  source: 'https://www.bbcgoodfood.com/recipes/kale-smoothie'
)
kale_smoothie.ingredients.create(description: '2 handfuls kale')
kale_smoothie.ingredients.create(description: '½ avocado')
kale_smoothie.ingredients.create(description: '½ lime, juice only')
kale_smoothie.ingredients.create(description: 'large handful frozen pineapple chunks')
kale_smoothie.ingredients.create(description: 'medium-sized chunk ginger')
kale_smoothie.ingredients.create(description: '1 tbsp cashew nuts')
kale_smoothie.ingredients.create(description: '1 banana, optional')

Game.create(title: 'Fortnite', api_url: 'https://fortnite-api.p.rapidapi.com/stats/')

i = 1
while i < 11
  user = User.create(username: 'user' + i.to_s, password: i.to_s, email: 'user' + i.to_s + '@gmail.com')

  follow = GamesFollowed.create(user: user, game: Game.all.first)

  xbl = Account.create(name: 'user' + i.to_s + 'XBL', platform: 'xbl', user: user)
  psn = Account.create(name: 'user' + i.to_s + 'PSN', platform: 'psn', user: user)
  pc = Account.create(name: 'user' + i.to_s + 'PC', platform: 'pc', user: user)

  xblStats = Stat.create(user: user, account: xbl, game: Game.all.first)
  psnStats = Stat.create(user: user, account: psn, game: Game.all.first)
  pcStats = Stat.create(user: user, account: pc, game: Game.all.first)

  i += 1
end

User.create(username: 'bb', password: 'bb', email: 'b@b.b')
Account.create(user: User.all.last, name: 'I o BB o I', platform: 'pc')
Stat.create(user: User.all.last, account: Account.all.last, game: Game.all.first)
GamesFollowed.create(user: User.all.last, game: Game.all.first)

User.create(username: 'Badly', password: 'badly', email: 'badly@b.b')
Account.create(user: User.all.last, name: 'MrBadly904', platform: 'pc')
GamesFollowed.create(user: User.all.last, game: Game.all.first)
Stat.create(user: User.all.last, account: Account.all.last, game: Game.all.first)

Friendship.create(user: User.all[User.all.length - 2], friend: User.all.last, confirmed: true)

User.create(username: 'Crass', password: 'c', email: 'c@c.c')
Account.create(user: User.all.last, name: 'LittyPatitty', platform: 'pc')
Stat.create(user: User.all.last, account: Account.all.last, game: Game.all.first)
GamesFollowed.create(user: User.all.last, game: Game.all.first)
Friendship.create(user: User.all[User.all.length - 3], friend: User.all.last, confirmed: true)

Friendship.create(user: friend: User.all.find_by(id: 11), friend: User.all.find_by(id: 11), confirmed: false)
