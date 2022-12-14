class Car:
    # Class attributes
    wheels = 4
    doors = 2
    engine = True

    def __init__(self, model, year, make="Ford"): #make default Ford
        self.make = make
        self.model = model
        self.year = year
        self.gas = 100
        self.is_moving = False

    def stop(self):
        if self.is_moving:
            print('The car has stopped')
            self.is_moving = False
        else:
            print('The car has already stopped')
            

    def go(self, speed):
        if self.use_gas():
            if not self.is_moving:
                print('The cart starts moving')
                self.is_moving = True
            print(f'The car is going {speed}')
        else:
            print('You have run out of gas')
            self.stop

    def use_gas(self):
        self.gas -= 50
        if self.gas <= 0:
            return False
        else:
            return True

car_one = Car("F350", 2019)
car_two = Car("Phantom", 2020, "Rolls Royce")
print(car_one.make)
print(car_two.make)
car_one.year = 2015
print(car_one.year)
print(car_two.year)

car_one.stop()
car_one.go(55)