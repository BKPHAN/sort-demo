/* Xây dần mảng đã sắp xếp bằng cách chèn từng phần tử vào đúng vị trí.
Sắp xếp chèn là một thuật toán sắp xếp đơn giản hoạt động bằng cách lặp lại việc chèn từng phần tử của một danh sách chưa được sắp xếp vào đúng vị trí của nó trong một phần đã được sắp xếp của danh sách. Nó giống như việc sắp xếp các lá bài trong tay bạn. Bạn chia các lá bài thành hai nhóm: các lá bài đã được sắp xếp và các lá bài chưa được sắp xếp. Sau đó, bạn chọn một lá bài từ nhóm chưa được sắp xếp và đặt nó vào đúng vị trí trong nhóm đã được sắp xếp.
Chi tiết:
1: Chúng ta bắt đầu với phần tử thứ hai của mảng vì phần tử đầu tiên được coi là đã được sắp xếp.
2: So sánh phần tử thứ hai với phần tử thứ nhất, nếu phần tử thứ hai nhỏ hơn thì hoán đổi chúng.
3: Di chuyển đến phần tử thứ ba, so sánh nó với hai phần tử đầu tiên và đặt nó vào đúng vị trí
4: Lặp lại cho đến khi toàn bộ mảng được sắp xếp.
Độ phức tạp thuật toán : O(n^2).
 */

export const insertionSort = async (arr, renderArray, delay, containerId, resultId) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        renderArray(arr, [i], false, containerId);
        await delay(1000);
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
            renderArray(arr, [j + 1, j], false, containerId);
            await delay(1000);
        }
        arr[j + 1] = key;
        renderArray(arr, [j + 1], false, containerId);
        await delay(1000);
    }

    renderArray(arr, [], true, containerId);
    document.getElementById(resultId).innerHTML = `<h3>Kết quả Insertion Sort: ${arr.join(', ')}</h3>`;
    return arr;
};