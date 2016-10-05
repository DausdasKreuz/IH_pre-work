def solve_cipher(input)
	letters = input.split(//)
	sol_letters = []

	(0..letters.length-1).each do |i|
		sol_letters[i] = letters[i].ord-1
		if sol_letters[i] == 64 || sol_letters[i] == 96
			sol_letters[i] = sol_letters[i] + 26
		end
		sol_letters[i] = sol_letters[i].chr
	end

	sol_word = sol_letters.join
	sol_word
end


puts "Word to unencrypt"
word = gets.chomp
sol_word = solve_cipher(word)
puts sol_word