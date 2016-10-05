def encrypt_word(letters)
	enc_letters = []
	(0..letters.length-1).each do |i|
		enc_letters[i] = letters[i].ord+1
		if enc_letters[i] == 91 || enc_letters[i] == 123
			enc_letters[i] = enc_letters[i] - 26
		end
		enc_letters[i] = enc_letters[i].chr
	end
	enc_word = enc_letters.join
	enc_word
end


puts "Word to encrypt"
word = gets.chomp
letters = word.split(//)
enc_word = encrypt_word(letters)
puts enc_word