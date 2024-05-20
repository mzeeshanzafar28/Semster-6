size = int(input("Enter Tree Size: "))
tree = [] 
visited = []

print("Enter Tree Values(left to right): ")
for i in range(0, size):
	val = int(input())
	tree.append(val)
target = int(input("Enter Search Value: "))

def bfs(tree,size,target,visited):
	for i in range(0, size):
		if (tree[i] == target):
			print("Value Found at Index ",i, ".")
			exit()
		visited.append(tree[i])
	if len(visited) == size:
		print("Value not Found.")

bfs(tree,size,target,visited)
