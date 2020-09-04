import sys

line = sys.stdin.readline()

def Reverser(nested_list):
  nested_inverted = []
  
  for phrase in nested_list:
    phrase = phrase.split()
    phrase.reverse()
    nested_inverted.append(phrase)
    
  for list in nested_inverted:
    return_string = ""
    return_string = ' '.join([word for word in list])
    print(return_string)
  
values_to_list = line.split("\n")
values_to_list.pop(0)

Reverser(values_to_list)