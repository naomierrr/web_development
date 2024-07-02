"""
Naomi Chen
Tuesday, June 25
"""

# ------------------- FUNCTION -------------------
# define a function that takes two numbers and return the sum of them
def addition(x,y):
    return x+y
#calling function addition()
result = addition(2,5)
print(result)
print(addition(8,-10))

#define a function to calculate the atra of a rectangle using the length and the width
def arearectangle(length,width):
    area=length*width
    return area

#calling function arearectangle
print(f"The area of a rectangle is {arearectangle(3,5)}")

# define a function to chekc if a number is positive, negative or zero
def ifpositive(number):
    if number > 0:
        return "positive"
    elif number < 0:
        return "negative"
    else:
        return "zero"
#calling function ifpositive
n = -10
print(f"The number is {ifpositive(n)}")
#define a function and check if a number is even number
def ifeven(num):
    try:
        if num%2 == 0:
             return "EVEN"
        else:
             return "ODD"
    except: 
        return "ERROR"
x = "peter"
print (f"The number is {ifeven(x)}")

# ------------------- classes -------------------
class myClass:
    i = 12345  # attributes(variable)
    def testing(self): # method
        return "Hello World!"
    
# calling class myClass
#step1: create the instance of class
newclass = myClass()
#step2: call the instance class property
instanceproperty = newclass.i 
#stop3: calling the instance class method 
instancemethod = newclass.testing()
#print result
print(f"Instance class property {instanceproperty}")
print(f"Instance class method {instancemethod}")

print("\n ========== car class example ============")

class Car: 
    #instantiation object 
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    # method to return the information of the car
    def get_descriptive_car(self):
        return (f"{self.year}, {self.make} {self.model}")
    
#create an instance of the class car
newcar = Car("Audi", "a4", 2020)

#access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)

