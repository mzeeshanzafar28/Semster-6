sentence = input("Enter Punctuated Sentence: ")
punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
cleaned = ''
for char in sentence:
	if char not in punctuations:
		cleaned += char
print("Cleaned Sentence = ", cleaned)
