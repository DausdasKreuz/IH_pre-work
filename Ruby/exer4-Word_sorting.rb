require 'pry'
def sort_insensitive(uns_bunch, uns_bunch_original)
    #uns_bunch_original = uns_bunch    # sentencia a emplear si no existiese comportamiento anómalo
#puts uns_bunch_original    # sentencia para verificar comportamiento anómalo
    for n in (0..uns_bunch.length-1)
        uns_bunch[n] = uns_bunch[n].downcase
    end
#puts uns_bunch_original    # sentencia para verificar comportamiento anómalo
    s_bunch = []
    (0..uns_bunch.length-1).each do |p|
        word = "ç"
        n = 0
        m = 0
        while word == "ç"
            word = uns_bunch[n]
            m = n
            n += 1
        end

        for i in (0..uns_bunch.length-1)
            if word > uns_bunch[i]
                word = uns_bunch[i]
                m = i
            end
        end
        s_bunch[p] = uns_bunch_original[m]
        uns_bunch[m] = "ç"
    end

    s_bunch
end

def clean_punctuation(sentence)
    c_sentence = []
    s_sentence = sentence.split('')
    for character in s_sentence
        if character >= "A" && character <= "Z" || character >= "a" && character <= "z" || character == " "
            c_sentence << character
        end
    end
    c_sentence = c_sentence.join 
end

puts "Give me a sentence to sort."
in_sentence = gets.chomp
clean_sentence = clean_punctuation(in_sentence)
words = clean_sentence.split(" ")
words2 = clean_sentence.split(" ")
sort_bunch = sort_insensitive(words, words)
puts "#{in_sentence} => #{sort_bunch.join(", ")}"