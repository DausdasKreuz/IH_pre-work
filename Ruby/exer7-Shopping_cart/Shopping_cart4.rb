class ShoppingCart
  def initialize
    @items = []
  end

  def add_item(item)
    @items.push(item)
  end

  def checkout
  	total_price = 0

  	@items.each do |item|
  	  total_price += item.price
  	end

  	if @items.length > 5
  		total_price = total_price * 0.9
  	end

  	total_price
  end
end

class Item 
  def initialize(name, price)
      @name = name
      @price = price
  end

  def price
      @price
  end
end

class Houseware < Item
  def price
      if @price > 100
      	@price = @price * 0.95
      end
      @price
  end
end

class Fruit < Item
  def price
      if Time.now.strftime("%A") == "Saturday" || Time.now.strftime("%A") == "Sunday"
      	@price = @price * 0.9
      end
      @price
  end
end

banana = Fruit.new("Banana", 10)
orange_juice = Item.new("Orange juice", 10)
rice = Item.new("Rice", 1)
vacuum_cleaner = Houseware.new("Vacuum cleaner", 150)
anchovies = Item.new("Anchovies", 2)

my_cart = ShoppingCart.new
my_cart.add_item(orange_juice)
my_cart.add_item(rice)
my_cart.add_item(rice)
my_cart.add_item(rice)
my_cart.add_item(rice)
my_cart.add_item(rice)
puts my_cart.checkout