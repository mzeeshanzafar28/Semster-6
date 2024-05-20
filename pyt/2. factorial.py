number  = int(input("Enter Number: "))

def factorial(num):
	if (num == 0):
		return 1
	else:
		return num * factorial(num - 1)

print("Factorial = ", factorial(number))
