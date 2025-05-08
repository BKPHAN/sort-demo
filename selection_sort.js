/* Tìm phần tử nhỏ nhất và đặt nó ở đầu mảng.
Selection Sort là thuật toán sắp xếp dựa trên so sánh. Thuật toán này sắp xếp một mảng bằng cách chọn đi chọn lại phần tử nhỏ nhất (hoặc lớn nhất) từ phần chưa được sắp xếp và hoán đổi nó với phần tử chưa được sắp xếp đầu tiên. Quá trình này tiếp tục cho đến khi toàn bộ mảng được sắp xếp.
Chi tiết:
1: Đầu tiên chúng ta tìm phần tử nhỏ nhất và hoán đổi nó với phần tử đầu tiên. Bằng cách này, chúng ta sẽ có được phần tử nhỏ nhất ở đúng vị trí của nó.
2: Sau đó, chúng ta tìm phần tử nhỏ nhất trong số các phần tử còn lại (hoặc phần tử nhỏ thứ hai) và hoán đổi nó với phần tử thứ hai.
3: Chúng ta tiếp tục làm như vậy cho đến khi di chuyển được tất cả các thành phần đến đúng vị trí.

độ phức tạp thuật toán: O(n^2)
 */

export const selectionSort = async (arr, renderArray, delay, containerId, resultId) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        renderArray(arr, [i], false, containerId);
        await delay(1000);

        for (let j = i + 1; j < n; j++) {
            renderArray(arr, [minIdx, j], false, containerId);
            await delay(1000);

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            renderArray(arr, [i, minIdx], false, containerId);
            await delay(1000);
        }
    }

    renderArray(arr, [], true, containerId);
    document.getElementById(resultId).innerHTML = `<h3>Kết quả Selection Sort: ${arr.join(', ')}</h3>`;
    return arr;
};

