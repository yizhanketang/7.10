for i in range(0, 10):
  for j in range(0, i+1):
    print("*", end="")
  print()

print()

for i in range(10, 0, -1):
  for j in range(0, i):
    print("*", end="")
  print()

print()

for i in range(0, 10):
  for j in range(0, i+1):
    print(" ", end="")
  for k in range(10, i, -1):
    print("*", end="")
  print()

print()

for i in range(10, 0, -1):
  for j in range(0, i):
    print(" ", end="")
  for k in range(10, i-1, -1):
    print("*", end="")
  print()

print()
