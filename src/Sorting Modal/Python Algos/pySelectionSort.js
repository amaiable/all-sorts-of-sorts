export const pySelectionSort = `def selection_sort(array: list[int]) -> None:
    n = len(array)
    for i in range(0, n):
        min_index = find_min(array, i)
        array[i], array[min_index] = array[min_index], array[i]


def find_min(array: list[int], mark: int):
    n = len(array)
    ind_min = mark
    for i in range(mark+1, n):
        if array[i] < array[ind_min]:
            ind_min = i
    return ind_min`
