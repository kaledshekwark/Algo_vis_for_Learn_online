let zz = [null];
let myarry = [];
let xz = [null];

function addAnimatedM() {
    //get the element 'background' from id and do som sitting on it.
    let balanceBTDiv = document.getElementById("balancemaxBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)";
    //init the object from the tree visualaizer class.
    let balancemaxBT = treeVisualizer(
        {
            target: "balancemaxBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",

        }

    );
    //call the draw function on the object.
    function sortMaxanim(arr, anim) {
        function swap(node, root) {
            let temp = arr[node];
            arr[node] = arr[root];
            arr[root] = temp;
           
            if (anim == 1) {
                balancemaxBT.nextStep(
                    [{

                        data: getstringmax(arr),
                    }], `<div class="d-flex justify-content-center"></div>`
                )
            }

        }


        function heapify(arr, i) {
            n = arr.length;


            var l = 2 * i + 1;
            var r = 2 * i + 2;
            var max = i;
            if (l < n && arr[l] > arr[max])
                max = l;
            if (r < n && arr[r] > arr[max])
                max = r;
            if (max != i) {

                swap(i, max);
                heapify(arr, max);
            }



        }
        function buildHeap(arr) {
            n = arr.length;
            for (i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, i);
            }

        }

        function heapSort(arr) {
            n = arr.length;
            buildHeap(arr);
            for (i = n - 1; i >= 0; i--) {

                heapify(arr, i, 0);
            }




        }

        heapSort(arr);



    }
    zz = randomStoremax(myarry);
    
    xz = zz;


   


    sortMaxanim(xz, 0);



    balancemaxBT.drawData(
        [{

            data: getstringmax(xz),
        }], `<div class="d-flex justify-content-center">start</div>`
    )
  
    ne = getonenumbermax(xz);
    mynextsteppmax(ne);
    sortMaxanim(ne, 1);

    function mynextsteppmax(newarray) {

        balancemaxBT.nextStep(
            [{

                data: getstringmax(newarray),
            }], `<div class="d-flex justify-content-center"></div>`
        )
    }



}

function getstringmax(notstring) {
    let z = [null];
    let zx = z.concat(notstring);

    zx.push(null);
    zz = zx.join();
    return zz;
}


function getonenumbermax(addone) {
    var stateone = 0;
    mmm = Math.floor((Math.random() * 100) + 50);
    randomNumb = mmm;
    for (var i = 0; i < addone.length; i++) {
        if (randomNumb == addone[i]) {
            stateone = 1;

        }
    }
    if (stateone == 0) {
        addone.push(randomNumb);
    }
    if (stateone == 1) {
        getonenumbermax(addone);
    }
    return addone;
}

function callRamdommax() {
    var randomNumber = Math.floor((Math.random() * 50) + 1);
    return randomNumber;
}



function randomStoremax(x) {

    x = [];

    cheaknum(x);

    function cheaknum(x) {
        var status = 0;
        m = x.length;
        var localValue = callRamdommax()
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
            cheaknum(x);
        }
    }

    return x;
}


