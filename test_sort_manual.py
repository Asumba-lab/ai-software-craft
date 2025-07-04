# Ensure task1_sorting_functions.py is in the same directory or adjust the import path accordingly
# Make sure task1_sorting_functions.py exists in the same directory as this test file.



# Sample data
from task1_sorting_function import sort_by_key


data = [
    {"name": "Mpho", "age": 34},
    {"name": "Faith", "age": 22},
    {"name": "Steve", "age": 29}
]

# Test sorting by "age"
sorted_data = sort_by_key(data, "age")

print("Sorted by age:")
for item in sorted_data:
    print(item)