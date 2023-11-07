def fibonacciCheck():
    n=int(input("Input a number to check if its in the fibonacci series \n"))
    a=0
    b=1
    if (n<=0):
        return False
    while b<n:
        c=a
        a=b
        b=c+b
        
    return(b==n)

print(fibonacciCheck())    