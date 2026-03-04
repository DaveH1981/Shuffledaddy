class Dog:

    def __init__(self, name="Odin", age=3, furcolor="brown"):
        self.name = name
        self.age = age
        self.furcolor = furcolor

    def bark(self, str):
        print("BARK!" + str)
        
mydog = Dog()

print(mydog.name)
print(mydog.age)
