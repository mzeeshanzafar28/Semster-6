number = int(input("Enter number: "))

def checkPrime(num):
	if num < 2:
		return "Enter Num >= 2"
	for i in range (2, num):
		if (num%i == 0):
			return str(num) + " is Prime"
	return str(num) + " is Composite"
	
print(checkPrime(number))
