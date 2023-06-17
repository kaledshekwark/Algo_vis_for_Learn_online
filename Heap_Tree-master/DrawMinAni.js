let zzmin = [null];
let myarrymin = [];
let xzmin = [null];


function drawmyarrary() {
 
    let balanceBTDiv = document.getElementById("balanceBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)"
    //Init the object from the Tree visualizer class.
    let balanceBT = treeVisualizer(
        {
            target: "balanceBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",


        }
    );

    function sortAinmin(arrmin, animmin) {
        function swapMIN(nodemin, rootmin) {
            let tempmin = arrmin[nodemin];
            arrmin[nodemin] = arrmin[rootmin];
            arrmin[rootmin] = tempmin
          
            if (animmin == 1) {
                balanceBT.nextStep(
                    [{

                        data: getstringmin(arrmin),
                    }], `<div class="d-flex justify-content-center"></div>`
                )
            }

        }


        function heapifymin(arrmin, imin) {
            nmin = arrmin.length;


            var lmin = 2 * imin + 1;
            var rmin = 2 * imin + 2;
            var NumberMInn = imin;
            if (lmin < nmin && arrmin[lmin] < arrmin[NumberMInn])
                NumberMInn = lmin;
            if (rmin < nmin && arrmin[rmin] < arrmin[NumberMInn])
                NumberMInn = rmin;
            if (NumberMInn != imin) {

                swapMIN(imin, NumberMInn);
                heapifymin(arrmin, NumberMInn);
            }



        }
        function buildHeapmin(arrmin) {
            nmin = arrmin.length;
            for (i = nmin / 2 - 1; i >= 0; i--) {
                heapifymin(arrmin, i);
            }

        }

        function heapSortmin(arrmin) {
            n = arrmin.length;
            buildHeapmin(arrmin);
            for (i = n - 1; i >= 0; i--) {

                heapifymin(arrmin, i, 0);
            }




        }

        heapSortmin(arrmin);



    }
    zzmin = randomStoremin(myarrymin);

    xzmin = zzmin;




    sortAinmin(xzmin, 0);



    balanceBT.drawData(
        [{

            data: getstringmin(xzmin),
        }], `<div class="d-flex justify-content-center">start</div>`
    )
      var   mynumberrr="20";
    nemin = getonenumbermin(xzmin);
    mynextsteppmin(nemin);
    sortAinmin(nemin, 1);

    function mynextsteppmin(newarraymin) {

        balanceBT.nextStep(
            [{

                data: getstringmin(newarraymin),
            }], `<div class="d-flex justify-content-center"> </div>`
        )
    }













}
function getstringmin(notstringmin) {
    let zmin = [null];
    let zxmin = zmin.concat(notstringmin);

    zxmin.push(null);
    zzmin = zxmin.join();
    return zzmin;
}
function getonenumbermin(addonemin) {
    var stateonemin = 0;
    mmmmin = Math.floor((Math.random() * 50) + 5);
    randomNumbmin = mmmmin;
    for (var i = 0; i < addonemin.length; i++) {
        if (randomNumbmin == addonemin[i]) {
            stateonemin = 1;

        }
    }
    if (stateonemin == 0) {
        addonemin.push(randomNumbmin);
    }
    if (stateonemin == 1) {
        getonenumbermin(addonemin);
    }
    return addonemin;
}
function callRamdommin() {
    var randomNumbermin = Math.floor((Math.random() * 100) + 50);
    return randomNumbermin;
}
function randomStoremin(xmin) {

    xmin = [];

    cheaknummin(xmin);

    function cheaknummin(xmin) {
        var statusmin = 0;
        mmin = xmin.length;
        var localValuemin = callRamdommin()
        for (j = 0; j < mmin; j++) {


            if (xmin[j] == localValuemin) {
                statusmin = 1;

            }


        }

        if (statusmin == 0) {

            xmin.push(localValuemin);

        }
        else {
            statusmin = 0;

        }
        if (xmin.length != 7) {
            cheaknummin(xmin);
        }
    }

    return xmin;
}

