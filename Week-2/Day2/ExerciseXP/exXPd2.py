#Exercise 1 : Pets

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.
# cat1 = Bengal('Marta',5)
# cat2 = Chartreux('Steve',4)
# cat3 = Siamese('Maria',2)
# all_cats = [cat1,cat2,cat3]
# sara_pets = Pets(all_cats)
# sara_pets.walk()


# Exercise 2 : Dogs
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.


# class Dog():
#     def __init__(self,name,age,weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         print(f'{self.name} is barking')

#     def run_speed(self):
#         return (self.weight/self.age*10)

#     def fight(self,other_dog):
#         power = self.run_speed() * self.weight
#         other_dog_power = other_dog.run_speed()*other_dog.weight
#         if power > other_dog_power:
#             return f'{self.name} winner!'
#         elif power < other_dog_power:
#             return f'{other_dog.name} winner'
#         else:
#             return "No winner this time"

# dog1 = Dog('Cody',3,15)
# dog2 = Dog('Tata',4,10)
# dog3 = Dog('Kashtan',3,20)

# dog1.bark()
# dog2.bark()
# dog3.bark()

# print(dog2.run_speed())
# print(dog1.fight(dog2))
# print(dog1.fight(dog3))
# print(dog3.fight(dog2))

#Exercise 4 : Family

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        found = False
        for member in self.members:
            if member.first_name == first_name:
                found = True
                if member.is_18():
                    print(f"You are over 18, your parents Sarah and John accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                break
        if not found:
            print(f"No member named {first_name} found in the family.")

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        print("Members:")
        for member in self.members:
            print(f"- {member.first_name} {member.last_name}, Age: {member.age}")

goldberg_family = Family("Goldberg")

goldberg_family.born("Rivka", 17)
goldberg_family.born("Shlomo", 20)

goldberg_family.family_presentation()

goldberg_family.check_majority("Rivka")

goldberg_family.check_majority("Shlomo")

goldberg_family.check_majority("Jack")
