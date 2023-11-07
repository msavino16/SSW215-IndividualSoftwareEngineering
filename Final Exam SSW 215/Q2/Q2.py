f = open("Exam file_1.txt", "r")
mylist=[]
for line in f:
    nums = line.split()
    for num in nums:
        mylist.append(int(num))

mylist.sort()        
print(mylist)
f.close()

def median_fun(l):
    midpoint = len(mylist)
    if midpoint % 2 == 0:
        median1 = l[midpoint//2]
        median2 = l[midpoint//2-1]
        median = (median1 + median2)/2
    else:
        median = l[midpoint//2]
    return median

def mean_fun(l):
    avg = sum(l)/len(l)
    return avg

print ("The Median is ",median_fun(mylist))
print ("The Mean is ",mean_fun(mylist))