userInput = int(input('Input a number: '))

def collatz(number):
    for i in range(1, number):
         if i % 2 == 0:
             print(i // 2)
         elif i % 2 == 1:
             print(3 * i + 1)
    return 1

print(collatz(userInput))
