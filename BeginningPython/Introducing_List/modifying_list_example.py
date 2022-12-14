all_restaurants = [
    "Taco City",
    "Burgertown",
    "Tacovilla",
    "Hotdog station",
    "House of tacos",
]

def tacos_only(restaurants):
    taco_joints = restaurants.copy()
    for taco_joint in taco_joints.copy():
        if "taco" not in taco_joint.lower():
            taco_joints.remove(taco_joint)
    return taco_joints

dinner_options = tacos_only(all_restaurants)

# we use the following method below
# for taco_joint in taco_joints.copy():
# because---Modifying a list while looping through it is discouraged as it will produce unexpected results.
# This code is looping through a copy and then modifying the original
#  it's a little clumsy, but i'll see this used
# Results will be very strange if it is forgotten. 