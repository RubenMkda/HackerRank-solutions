#Esto es un contandor de vias por ciudad

def connectingTowns(n, routes):
    a = 1
    mod = 1234567
    while n-1 < len(routes):
        a *= routes[n]
        n -= 1
        
    return a %mod

