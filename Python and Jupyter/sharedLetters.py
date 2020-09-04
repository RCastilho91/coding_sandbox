def evaluate(input):
    if input < 10:
        x = 24
    if input < 20:
        x += 2
    if input < 40:
        x *= x/2
    
    print(x)
    
if __name__ == '__main__':
    x = 50
    evaluate(1)