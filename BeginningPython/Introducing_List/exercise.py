continents = [
    'Asia',
    'South America',
    'North America', 
    'Africa',
    'Europe',
    'Antartica',
    'Australia',
]

for name in continents:
    if name[0] == 'A':
        print(name)
    
# Multi-Dimensional list. First dimension is group, 2nd is group member
# Loop through each group and output the members joined together with a ", " comma space
# as a separator
musical_groups = [
    ["Ad Rock", "MCA", "Mike D."],
    ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"],
    ["Salt", "Peppa", "Spinderella"],
    ["Rivers Cuomo", "Patrick Wilson", "Brian Bell", "Scott Shriner"],
    ["Chuck D.", "Flavor Flav", "Professor Griff", "Khari Winn", "DJ Lord"],
    ["Axl Rose", "Slash", "Duff McKagan", "Steven Adler"],
    ["Run", "DMC", "Jam Master Jay"],
]
for list in musical_groups:
    print(", ".join(list))
  