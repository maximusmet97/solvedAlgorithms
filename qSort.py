def qsort(lst):
    if len(lst) <= 1:
        return lst
    else:
        pivot = lst[0]
        less = [x for x in lst if x < pivot]
        equal = [x for x in lst if x == pivot]
        more = [x for x in lst if x > pivot]
        return qsort(less) + equal + qsort(more)


l = [3, 6, 1, 44, 6, 2]
print(qsort(l))
