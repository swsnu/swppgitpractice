a=range(5,51)
for i in a:
    temp=range(2,i)
    for j in temp:
        if(i%j==0): 
            break
        if(j==i-1): 
            print(i)

print("finish")
