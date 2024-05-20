num1 = int(input("Enter First Number: "))
num2 = int(input("Enter Second Number: "))
op = input("Enter opearation (+, -, x, /): ")
answers = {
	"+" : num1 + num2 ,
	"-" : num1 - num2 ,  
	"x" : num1 * num2 ,
	"/" : num1 / num2 
}
if op not in answers:
	exit("Invalid Operation")
else:
	print("Answer = ", answers[op])
