puts "What is the source file?"
source = gets.chomp
content = IO.read(source)
puts "What is the destination file?"
destination = gets.chomp
IO.write(destination, content)