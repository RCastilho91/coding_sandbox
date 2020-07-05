line = "5 \n 8 8 2 4 8"
values_to_list = line.split("\n ")
values_to_list.pop(0)
new_list = []

for element in values_to_list:
    new_list = element.split(' ')

check_list = list(set(new_list))

for value in check_list:
    counter = 0

    for checker in new_list:
        if value == checker:
            counter += 1
    
    print("Value: " + str(value) + " Incidence: " + str(counter))
    print("Div: " + str(counter /len(new_list)))

    if float((counter / len(new_list))) >= 0.5:
        print(value)
        exit

print(-1)