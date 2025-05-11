print('Hello world\n'*4)

summary=(99**3)*8
print(summary)

5<3
#False
3 == 3
#True
3 == "3"
#False
"3" > 3
#Type error
"Hello" == "hello"
# False

computer_brand="MSI"
print(f'I have a {computer_brand} computer')


name='Kirill'
age=30
shoe_size=44
info=f'My name is {name}, i am {age}, my shoe size is {shoe_size} and a have a dog'
print(info)

a=int(input())
b=int(input())
if a>b:
    print('Hello world')
elif a<b or a==b:
    print('Not today')


number=int(input('Pick a number:'))
if number%2==0:
    print('Even')
else:
    print('Odd')


my_name='Kirill'
guest_name=input('What is your name?')
if guest_name==my_name:
    print('Whoa!Me too!Nice to meet you')
else:
    print(f'Nice to meet you {guest_name}')


height=int(input('Write your height in cm:'))
if height>145:
    print('You are tall enough to ride!')
if height<145:
    print('You need to grow some more to ride')