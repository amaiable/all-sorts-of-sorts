export const pyBubbleSort = `def bubble_sort(array: list[int]) -> None:
    n = len(array)
    for i in range(0, n):
        for j in range(0, n-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]`
