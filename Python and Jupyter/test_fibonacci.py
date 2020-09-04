import sys

line = sys.stdin.readline()

def Fibonacci(val):
  splitter = val.split()

  first_element = int(splitter[0])
  second_element = int(splitter[1])
  nth_element = int(splitter[2])

  fibo_list = [first_element, second_element]
  index = 1

  while len(fibo_list) < nth_element:
    latter_element = fibo_list[index]
    former_element = fibo_list[index - 1]
    next_element = former_element + latter_element
    fibo_list.append(next_element)
    index += 1

  print(fibo_list[len(fibo_list) - 1])

Fibonacci(line)