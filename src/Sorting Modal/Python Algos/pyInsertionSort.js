export const pyInsertionSort = `def insertion_sort(array: list[int]) -> None:
    n = len(array)
    for i in range(1, n):
        j = i
        while j > 0 and array[j-1] > array[j]:
            array[j], array[j-1] = array[j-1], array[j]
            j -= 1`
