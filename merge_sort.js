/*Chia mảng thành 2 phần, sắp xếp từng phần và trộn lại (merge).
Merge Sort là một thuật toán sắp xếp phổ biến được biết đến với hiệu quả và tính ổn định của nó.
Thuật toán này tuân theo phương pháp chia để trị .
Thuật toán này hoạt động bằng cách đệ quy chia mảng đầu vào thành hai nửa,
đệ quy sắp xếp hai nửa và cuối cùng hợp nhất chúng lại với nhau để thu được mảng đã sắp xếp.
Độ phức tạp của thuật toán : O(n log n)
 */

export const mergeSort = async (arr, renderArray, delay, containerId, resultId) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = await mergeSort(arr.slice(0, mid), renderArray, delay, containerId, resultId);
    const right = await mergeSort(arr.slice(mid), renderArray, delay, containerId, resultId);

    // Hiển thị quá trình chia mảng
    renderArray(arr, [], false, containerId);
    await delay(1000);

    const sortedArray = await merge(left, right, renderArray, delay, containerId);

    // Hiển thị kết quả cuối cùng
    renderArray(sortedArray, [], true, containerId);
    document.getElementById(resultId).innerHTML = `<h3>Kết quả Merge Sort: ${sortedArray.join(', ')}</h3>`;
    return sortedArray;
};

const merge = async (left, right, renderArray, delay, containerId) => {
    let result = [], i = 0, j = 0;

    // Kết hợp hai mảng theo thứ tự tăng dần
    while (i < left.length && j < right.length) {
        renderArray([...left.slice(0, i), left[i], ...right.slice(0, j)], [i, j], false, containerId);
        await delay(1000);

        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    // Thêm phần tử còn lại từ cả hai mảng
    result = result.concat(left.slice(i)).concat(right.slice(j));

    // Render kết quả sau khi merge
    renderArray(result.concat(left.slice(i), right.slice(j)), [], true, containerId);
    await delay(1000);

    return result;
};
