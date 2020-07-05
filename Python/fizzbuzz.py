# -*- coding: utf-8 -*-
"""

Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its 
own as shown in the examples below.

The output should always be a string even if it is not a multiple of 3 or 5

"""

def fizz_buzz(val):
    
    fizz = False
    buzz = False
    
    if (val % 3) == 0:
        fizz = True
    
    if (val % 5) == 0:
        buzz = True
        
    result(fizz, buzz, val)

def result(fizz, buzz, val):
    
    if fizz == False and buzz == False:
        print("Value: " + str(val))
        print("Fizz: " + str(fizz) + " | Buzz: " + str(buzz))
        print("Result: " + str(val))
        print("------")
    elif fizz == True and buzz == True:
        print("Value: " + str(val))
        print("Fizz: " + str(fizz) + " | Buzz: " + str(buzz))
        print("Result: FizzBuzz")
        print("------")
    elif fizz == True and buzz == False:
        print("Value: " + str(val))
        print("Fizz: " + str(fizz) + " | Buzz: " + str(buzz))
        print("Result: Fizz")
        print("------")
    else:
        print("Value: " + str(val))
        print("Fizz: " + str(fizz) + " | Buzz: " + str(buzz))
        print("Result: Buzz")
        print("------")
        
fizz_buzz(3)
fizz_buzz(5)
fizz_buzz(15)
fizz_buzz(4)