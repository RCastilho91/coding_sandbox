def factorial(number):
    
    fact = number

    while number > 1:
        fact *= (number - 1)
        number -= 1
        print("Current number: " + str(number))
        print("Current factorial: " + str(fact))
        print("-------------------")

    print(fact)

factorial(30)