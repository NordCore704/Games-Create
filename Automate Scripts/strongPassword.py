import re

password = re.compile(r'%\+\-?|[a-zA-Z0-9]\w+')

mo = password.search('Simon1228%')
print(mo.group())



