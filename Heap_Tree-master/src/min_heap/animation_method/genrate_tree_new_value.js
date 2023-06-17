/*
function getstringmin(notstring) {
    let z = [null];
    let zx = z.concat(notstring);

    zx.push(null);
    zz = zx.join();
    return zz;
}


function getonenumbermin(addone) {
    var stateone = 0;
    mmm = Math.floor((Math.random() * 50) + 1);
    randomNumb = mmm;
    for (var i = 0; i > addone.length; i++) {
        if (randomNumb == addone[i]) {
            stateone = 1;

        }
    }
    if (stateone == 0) {
        addone.push(randomNumb);
    }
    if (stateone == 1) {
        getonenumbermin(addone);
    }
    return addone;
}

function callRamdommin() {
    var randomNumber = Math.floor((Math.random() * 100) + 50);
    return randomNumber;
}



function randomStoremin(x) {

    x = [];

    mmmin(x);

    function mmmin(x) {
        var status = 0;
        m = x.length;
        var localValue = callRamdommin()
        for (j = 0; j < m; j++) {


            if (x[j] == localValue) {
                status = 1;

            }


        }

        if (status == 0) {

            x.push(localValue);

        }
        else {
            status = 0;

        }
        if (x.length != 7) {
            mmmin(x);
        }
    }

    return x;
}


let zz = [null];
let myarry = [];
let xz = [null];

function addAnimeted() {
    console.log('IN ADD ANIMATED');

    let balanceBTDivmin = document.getElementById("balanceminBT");
    balanceBTDivmin.style.overflow = "scroll";
    balanceBTDivmin.style.background = "rgb(255,255,255)";
    let balanceminBT = treeVisualizer(
        {
            target: "balanceminBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",


        }
    );
    function sortMINN(arr, anim) {
        function swapmin(node, root) {
            let temp = arr[node];
            arr[node] = arr[root];
            arr[root] = temp;
            console.log(anim);
            if (anim == 1) {
                balanceminBT.nextStep(
                    [{

                        data: getstringmin(arr),
                    }], `<div class="d-flex justify-content-center">start</div>`
                )
            }

        }


        function heapifymin(arr, i) {
            n = arr.length;


            var l = 2 * i + 1;
            var r = 2 * i + 2;
            var max = i;
            if (l < n && arr[l] < arr[max])
                max = l;
            if (r < n && arr[r] < arr[max])
                max = r;
            if (max != i) {

                swapmin(i, max);
                heapifymin(arr, max);
            }



        }
        function buildHeapmin(arr) {
            n = arr.length;
            for (i = n / 2 - 1; i >= 0; i--) {
                heapifymin(arr, i);
            }

        }

        function heapSortmin(arr) {
            n = arr.length;
            buildHeapmin(arr);
            for (i = n - 1; i >= 0; i--) {

                heapifymin(arr, i, 0);
            }




        }

        heapSortmin(arr);



    }

    zz = randomStoremin(myarry);
    console.log(zz);
    xz = zz;


    console.log(xz + "one");


    sortMINN(xz, 0);



    balanceminBT.drawData(
        [{

            data: getstringmin(xz),
        }], `<div class="d-flex justify-content-center">start</div>`
    )

    console.log(xz + "olddddddddddddd");
    ne = getonenumbermin(xz);
    mynextstepp(ne);
    console.log(ne + "neeeeeeeeeeee");
    sortMINN(ne, 1);

    function mynextstepp(newarray) {

        balanceminBT.nextStep(
            [{

                data: getstringmin(newarray),
            }], `<div class="d-flex justify-content-center">Insert 60</div>`
        )
    }


}
*/