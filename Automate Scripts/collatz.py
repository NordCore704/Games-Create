userInput: int = int(input('Input a number: '))

def collatz(number) -> int:
    for i in range(1, number):
         if i % 2 == 0:
             print(i // 2)
         elif i % 2 == 1:
             print(3 * i + 1)
    return 1

print(collatz(userInput))


def newList(items : list) -> str():
    last_item = items[-1]
    return last_item     

print(newList(['orange, yellow, black']))



birthdays = {'Alice': 'Apr 1', 'Bob': 'Dec 12', 'Carol': 'Mar 4'}
while True:
    print('Enter a name: (blank to quit)')
    name = input()
    if name == '':
        break
    if name in birthdays:
     print(birthdays[name] + ' is the birthday of ' + name)
    else:
        print('I do not have birthday information for ' + name)
        print('What is their birthday?')
        bday = input()
        birthdays[name] = bday
        print('Birthday database updated.')

def addToInventory(inventory: dict(), addItems: list()) -> dict():
    newDict = {key:addItems.count(key) for key in addItems}
    inventoryCopy = inventory.copy()
    newDict2 = {}
    for i in inventoryCopy:
        if i in newDict:
            inventoryCopy[i] += newDict[i]
            newDict2 = {**newDict, **inventoryCopy} 
        elif i not in newDict:
            inventory.update(newDict)

    return newDict2


def displayInventory(inv: dict) -> str():
    print("Inventory: ")
    itemTotal = 0
    for key, value in inv.items():
        print(F'{key}: {str(value)}')
        itemTotal += value
    print(f'Total number of items: {str(itemTotal)}')

inventory1 = {
    'rope': 1,
    # 'torch': 6,
    'gold coin': 42,
    # 'dagger': 1,
    # 'arrow': 12
}
dragonLoot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

inv = addToInventory(inventory1, dragonLoot)
print(displayInventory(inv))