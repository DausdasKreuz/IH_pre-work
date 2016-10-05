def solve_cipher_word(word, shift)
	letters = word.split(//)
	sol_letters = []

	(0..letters.length-1).each do |i|
		sol_letters[i] = letters[i].ord + shift
		
		if !((65..90) === sol_letters[i] || (97..122) === sol_letters[i])

			if shift > 0
				sol_letters[i] = sol_letters[i] - 25 - shift
			else
				sol_letters[i] = sol_letters[i] + 25 - shift
			end

		end

		sol_letters[i] = sol_letters[i].chr
	end

	sol_word = sol_letters.join
	sol_word
end

def solve_cipher(phrase, shift)
	words = phrase.split(' ')

	if shift == 0
		shift = 3
	end

	(0..words.length-1).each do |i|
		words[i] = solve_cipher_word(words[i], shift)
	end

	sol_phrase = words.join(" ")
	sol_phrase
end


print "Phrase to unencrypt: "
phrase = gets.chomp
print "What's the shift? (by default 3): "
shift = gets.chomp.to_i
sol_phrase = solve_cipher(phrase, shift)
puts sol_phrase