import sys
num = int(sys.argv[1])
numSet = []
numDividers = []
orbitSet = []
orbitMask = []
r = 0

def findDividers(num):
    global numDividers
    cnt = 2
    while (cnt < num):
        if (num % cnt == 0):
            numDividers.append(cnt)
        cnt = cnt + 1

def dividersLogic(num):
    global numDividers
    cnt = 0
    while (cnt < len(numDividers)):
        if (num % numDividers[cnt] == 0 ):
            return False
        cnt = cnt + 1 
    return True

def killNum(num):
    global numSet
    cnt = 1
    while (cnt < num):
        if (dividersLogic(cnt)):
            numSet.append(cnt)
        cnt = cnt + 1
        
def findMod(el, num):
    return (2*el) % num

def findOrbit(num):
    global orbitSet
    check = True
    el = 1;
    while(check):
        el = findMod(el, num)
        orbitSet.append(el)
        if(el == 1):
            check = False

def genMask():
    global numSet
    global orbitSet
    global orbitMask
    
    cnt = 0
    while(cnt < len(numSet)):
        if(orbitSet.count(numSet[cnt]) > 0):
            orbitMask.append(1)
        else:
            orbitMask.append(0)
        cnt = cnt + 1

def findR():
    global orbitMask
    global r
    
    xi = 0
    check = False
    while(len(orbitMask) > 0):
        tmp = orbitMask.pop(0)
        if (tmp == 1):
            if(not check):
                check = True
            else:
                print xi**2, '+',
                r = r + xi**2
            xi = 1
        else:
            xi = xi + 1
    print xi**2,
    r = r + xi**2



if (num % 2 == 0 or num <= 1):
    print "<br>"
    print ("Error. n mod 2 = 0 OR n <= 1.")
else:
    print "<br>"
    findDividers(num)

    killNum(num)
    m = len(numSet)
    print "G(n):",numSet
    print "<br>"
    print "m =", m
    print "<br>"
    print "<br>"

    findOrbit(num)
    t = len(orbitSet)
    print "Orbit:",orbitSet
    print "<br>"
    print "T =", t
    print "<br>"
    print "<br>"

    genMask()
    print "R = ", 
    findR()
    print "=",r

    rmin = float(r)/(m**2)
    print "<br>"
    print "r =", rmin
    print "<br>"
    s = float(rmin)*t
    print "s =", s
