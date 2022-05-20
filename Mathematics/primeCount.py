def primeCount(n):
    count = 0
    taste = 2
    arr = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 83, 89, 97]
    if (n == 1): return count
    count += 1
    if (n <= 4): return count
    i = 0
    
    while (taste < n):
        taste *= arr[i]
        i += 1
        if(taste > n):
            return count
        count +=1
    

    return count


# ---------------------------------------------------

q = 500000000000
print(primeCount(q))
