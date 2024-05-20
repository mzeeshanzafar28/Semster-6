from colorama import Fore, Back, Style
import openai 
openai.api_key = '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'
messages = [ {"role": "system", "content": 
			"You are a intelligent assistant."} ] 
while True: 
	message = input(f"{Fore.RED}User : ") 
	if message: 
		messages.append( 
			{"role": "user", "content": message}, 
		) 
		chat = openai.ChatCompletion.create( 
			model="gpt-3.5-turbo", messages=messages 
		) 
	reply = chat.choices[0].message.content 
	print(f"{Fore.GREEN}Zod: {reply}") 
	messages.append({"role": "assistant", "content": reply}) 
