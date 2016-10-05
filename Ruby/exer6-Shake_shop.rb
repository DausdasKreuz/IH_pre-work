class Shake_shop

    def initialize
        @milkshakes = []
    end

    def add_milkshake(milkshake)
        @milkshakes.push(milkshake)
    end

    def show_milkshakes
        
        @milkshakes.each do |milkshake|
            puts "Flavor" + milkshake.flavor + " => #{milkshake.price_of_milkshake} €"
        end

    end

end


class MilkShake
    attr_reader :flavor

  def initialize(flavor)
    @flavor = flavor
    @base_price = 3
    @ingredients = [ ]    
  end


  def add_ingredient(ingredient)
    @ingredients.push(ingredient)
  end

  def price_of_milkshake
    total_price_of_milkshake = @base_price
  
    @ingredients.each do |ingredient|
      total_price_of_milkshake += ingredient.price
    end

    total_price_of_milkshake
  end
end


class Ingredient
  attr_reader :name, :price

  def initialize(name, price)
      @name = name
      @price = price
  end

end


nizars_milkshake = MilkShake.new("Nizars")
banana = Ingredient.new("Banana", 2)
chocolate_chips = Ingredient.new("Chocolate Chips", 1)
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)

my_shop = Shake_shop.new
my_shop.add_milkshake(nizars_milkshake)
my_shop.show_milkshakes