import calendar

y = int(input("ENTER THE YEAR : "))
m = int(input("ENTER THE MONTH : "))
cal = calendar.month(y, m)

print("\n",cal)
