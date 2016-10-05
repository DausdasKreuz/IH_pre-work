(1..100).each do |i|
result = ""
	if (i % 3) == 0
		result << "Fizz"
	elsif (i % 5) == 0
		result << "Buzz"
	end

	if i.to_s.include?'1'
		result << result + "Bang"
	elsif result ==""
		result = i
	end

	puts result
end