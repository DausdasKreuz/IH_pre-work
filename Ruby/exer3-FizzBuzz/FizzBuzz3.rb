(1..100).each do |i|
my_output = ""
	if (i % 3) == 0
		my_output = "Fizz"
	elsif (i % 5) == 0
		my_output = "Buzz"
	end

	if i.to_s.include?'1'
		my_output = my_output + "Bang"
	elsif my_output ==""
		my_output = i
	end

	puts my_output
end