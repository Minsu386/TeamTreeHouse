attendees = ["Ken", "Alena", "Treasure"]
# add Asheley to the attendees list
attendees.append("Ashley")
# Ashley suggest 2 more names
attendees.extend(["James", "Guil"])
# add optional attendees
optional_invite = ["Ben J", "Dave"]
potential_attendees = attendees + optional_invite
print("There are", len(potential_attendees), "potential attendes currently")


to_line = ", ".join(attendees)
cc_line = ", ".join(optional_invite)
print("To: " + to_line)
print("CC: " + cc_line)