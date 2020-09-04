import math

line = "2080"
first_top_index = (len(line) - 1) / 2
last_top_index = (len(line) - 1)

counter = 0
first_element = ""
second_element = ""

while counter <= first_top_index:
    first_element = first_element + line[counter]
    counter += 1

counter = first_top_index + 1

while counter <= last_top_index:
    second_element = second_element + line[counter]
    counter += 1

first_element = float(first_element)
second_element = float(second_element)

complete_percentage = math.floor((first_element / (first_element + second_element)) * 100)
complete_percentage = int(complete_percentage)

print(complete_percentage)