from copy import deepcopy

class Grid:

	def __init__(self, width=0, height=0):
		self.width = width
		self.height = height
		self.grid = [['x' for x in range(self.height)] for x in range(self.width)]
		self.prevGen = deepcopy(self.grid)
	
	def printGrid(self):
		for i in range(len(self.grid)):
			for j in range(len(self.grid[i])):
				print(self.grid[i][j], end = " ")
			print()
		print()

	def setInitialState(self):
		print("Set alive cells by x and y.")
		setX = int(input("Choose X: "))
		setY = int(input("Choose Y: "))
		self.grid[setX-1][setY-1] = 'a'
		choice = input("Do you want to continue? Y or N: ")

		while choice != 'n' or choice != 'n':
			setX = int(input("Choose X: "))
			setY = int(input("Choose Y: "))
			self.grid[setX-1][setY-1] = 'a'
			choice = input("Do you want to continue? Y or N: ")

	def setState(self):
		posAndNeighbours = {}
		for i in range(len(self.grid)-1):
			for j in range(len(self.grid[i])-1):
				neighbours = [self.grid[i][j+1],
							  self.grid[i][j-1],
							  self.grid[i+1][j-1],
							  self.grid[i+1][j],
							  self.grid[i+1][j+1],
							  self.grid[i-1][j-1],
							  self.grid[i-1][j],
							  self.grid[i-1][j+1]]

				positions = (i,j)
				posAndNeighbours[positions] = neighbours

		for key,value in posAndNeighbours.items():
			if self.grid[key[0]][key[1]] == 'a':
				if value.count('a') < 2 or value.count('a') > 3:
					self.grid[key[0]][key[1]] = 'x'
			else:
				if value.count('a') == 3:
					self.grid[key[0]][key[1]] = 'a'
	
	def checkGens(self):
		if self.grid == self.prevGen:
			return False
		else:
			self.prevGen = deepcopy(self.grid)
			return True

print("***Game of Life***")
generation = 0;
width = int(input("Enter the width please: "))
height = int(input("Enter the height please: "))

gr = Grid(width, height)
gr.setInitialState()
check = gr.checkGens()

while check:
	generation += 1
	gr.printGrid()
	print("Generation: {0}".format(generation))
	gr.setState()
	check = gr.checkGens()