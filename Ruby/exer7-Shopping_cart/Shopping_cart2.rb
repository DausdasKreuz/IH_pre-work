class ShoppingCart
  def initialize
    @items = []
  end

  def add_item(item)
      @items.push(item)
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

puts banana.price
puts orange_juice.price
puts rice.price
puts vacuum_cleaner.price
puts anchovies.price
