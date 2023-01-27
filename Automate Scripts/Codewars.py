# 8 Kyu Kata: Convert number to reversed array of digits


num = input("input a number: ")

def reverseNum(num: int()) -> list():
    res = [int(i) for i in str(num)]
    res.reverse()
    return res



print(reverseNum(int(num)))
