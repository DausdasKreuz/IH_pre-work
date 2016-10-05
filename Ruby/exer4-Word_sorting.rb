require 'pry'
def sort_insensitive(uns_bunch, uns_bunch_original)
    #uns_bunch_original = uns_bunch
    for n in (0..uns_bunch.length-1)
        uns_bunch[n] = uns_bunch[n].downcase
        #uns_bunch_to_compare[n] = uns_bunch_to_compare[n].downcase
    end

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
            #binding.pry
            if word > uns_bunch[i]
                word = uns_bunch[i]
                m = i
                #binding.pry
            end
        end
        
        #binding.pry
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
sort_bunch = sort_insensitive(words, words2)
puts "#{in_sentence} => #{sort_bunch.join(", ")}"