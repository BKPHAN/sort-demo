/* sắp xếp nổi bọt
- lặp qua mảng nhiều lần, hoán đối các cặp phần tử liền kề nhau nếu sai thứ tự.
- chi tiết:
Xét một mảng gồm n số nguyên: a_1, a_2, ..., a_n
1: Với cách sắp xếp không giảm từ trái qua phải, mục đích của chúng ta là đưa dần các số lớn nhất về cuối dãy (ngoài cùng bên phải).
2: Bắt đầu từ vị trí số 1, xét lần lượt từng cặp 2 phần tử, nếu phần tử bên phải nhỏ hơn phần tử bên trái, ta sẽ thực hiện đổi chỗ
    2 phần tử này, nếu không, xét tiếp cặp tiếp theo. Với cách làm như vậy, phần tử nhỏ hơn sẽ "nổi" lên, còn phần tử lớn hơn sẽ "chìm" dần và về bên phải.
3: Khi kết thúc vòng thứ nhất, ta sẽ đưa được phần tử lớn nhất về cuối dãy. Sang vòng thứ hai,
ta tiếp tục bắt đầu ở vị trí đầu tiên như vậy và đưa được phần tử lớn thứ hai về vị trí thứ hai ở cuối dãy...
- độ phức tạp thuật toán: O(n^2) n*(n-1)/2
 */

export const bubbleSort = async (arr, renderArray, delay, containerId, resultId) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            renderArray(arr, [j, j + 1], false, containerId);
            await delay(1000);

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                renderArray(arr, [j, j + 1], false, containerId);
                await delay(1000);
            }
        }
    }

    renderArray(arr, [], true, containerId);
    document.getElementById(resultId).innerHTML = `<h3>Kết quả Bubble Sort: ${arr.join(', ')}</h3>`;
    return arr;
};

