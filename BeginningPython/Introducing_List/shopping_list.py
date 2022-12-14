# Create a new empty list named shopping list
shopping_list = []

def show_help():
    print("What should we pick up a the store?")
    print("""
    Enter 'DONE' to stop adding items.
    Enter 'HELP' for this help
    Enter 'SHOW' to show your current list
    """)


# Create a function nammed add_to_list that declares a parameter named item
def add_to_list(item):
    # Add the item to the list
    shopping_list.append(item)
    # Notify user that the item was added, and state the number of items in the list currently
    print('Added: List has {} items.'.format(len(shopping_list)))


# Define a function named show_list that prints all the items in the list
def show_list():
    print("Here's your list:")
    for item in shopping_list:
        print(item)

show_help()

while True:
    new_item = input('> ')

    if new_item == 'DONE':
        break
    elif new_item == 'HELP':
        show_help()
        continue
    #Enable the SHOW command to show the list. Don't forget to update the HELP Documentation
    elif new_item == 'SHOW':
        show_list()
        continue

    # Call add_to_list with new arguement
    add_to_list(new_item)

show_list()