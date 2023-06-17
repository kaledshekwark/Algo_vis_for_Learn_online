
function sort(arrMinpush) {
    //swap between two values
    function swapMinpush(nodeMinpush, rootMinpush) {
        let tempMinpush = arrMinpush[nodeMinpush];
        arrMinpush[nodeMinpush] = arrMinpush[rootMinpush];
        arrMinpush[rootMinpush] = tempMinpush;
    }
    //detrmine the child and it`s father for the...
    function heapifyMinpush(arrMinpush, i) {
        n = arrMinpush.length;
        var lMinpush = 2 * i + 1;
        var rMinpush = 2 * i + 2;
        var Minpush = i;
        if (lMinpush < n && arrMinpush[lMinpush] < arrMinpush[Minpush])
            Minpush = lMinpush;
        if (rMinpush < n && arrMinpush[rMinpush] < arrMinpush[Minpush])
            Minpush = rMinpush;
        if (Minpush != i) {
            swapMinpush(i, Minpush)
            heapifyMinpush(arrMinpush, Minpush);
        }
    }
    function buildHeapMinpush(arrMinpush) {
        n = arrMinpush.length;
        for (i = n / 2 - 1; i >= 0; i--)
            heapifyMinpush(arrMinpush, i);
    }
    function heapSortMinpush(arrMinpush) {
        n = arrMinpush.length;
        buildHeapMinpush(arrMinpush);
        for (i = n - 1; i >= 0; i--) {
            // swapMinpush(0, i);
            heapifyMinpush(arrMinpush, i, 0);
        }
    }

    heapSortMinpush(arrMinpush);
    // for (let index = 0; index < arrMinpush.length; index++) {
    //     console.log(arrMinpush[index]);
    // }
}
