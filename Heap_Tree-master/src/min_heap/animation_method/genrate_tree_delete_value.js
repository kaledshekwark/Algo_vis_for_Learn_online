
let zzdelmin = [null];
let myarrydelmin = [];
let xzdelmin = [null];
//this methode for animate how the tree work if removed a value
function removeAnimeted() {
    let balanceBTDiv = document.getElementById("balanceBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)";
    let balanceBT = treeVisualizer(
        {
            target: "balanceBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",
        }
    );
    //draw the tree
    function sortMaxanimdelmin(arrdelmin, animdelmin) {
        function swapdelmin(nodedelmin, rootdelmin) {
            let tempdelmin = arrdelmin[nodedelmin];
            arrdelmin[nodedelmin] = arrdelmin[rootdelmin];
            arrdelmin[rootdelmin] = tempdelmin;
          
            if (animdelmin == 1) {
                balanceBT.nextStep(
                    [{

                        data: getstringmindel(arrdelmin),
                    }], `<div class="d-flex justify-content-center"></div>`
                )
            }

        }


        function heapifydelmin(arrdelmin, idelmin) {
            ndelmin = arrdelmin.length;


            var ldelmin = 2 * idelmin + 1;
            var rdelmin = 2 * idelmin + 2;
            var maxdelmin = idelmin;
            if (ldelmin < ndelmin && arrdelmin[ldelmin] < arrdelmin[maxdelmin])
                maxdelmin = ldelmin;
            if (rdelmin < ndelmin && arrdelmin[rdelmin] < arrdelmin[maxdelmin])
                maxdelmin = rdelmin;
            if (maxdelmin != idelmin) {

                swapdelmin(idelmin, maxdelmin);
                heapifydelmin(arrdelmin, maxdelmin);
            }



        }
        function buildHeapdelmin(arrdelmin) {
            ndelmin = arrdelmin.length;
            for (idelmin = ndelmin / 2 - 1; idelmin >= 0; idelmin--) {
                heapifydelmin(arrdelmin, idelmin);
            }

        }

        function heapSortdelmin(arrdelmin) {
            ndelmin = arrdelmin.length;
            buildHeapdelmin(arrdelmin);
            for (idelmin = ndelmin - 1; idelmin >= 0; idelmin--) {

                heapifydelmin(arrdelmin, idelmin, 0);
            }




        }

        heapSortdelmin(arrdelmin);



    }
    zzdelmin = randomStoremindel(myarrydelmin);

    xzdelmin = zzdelmin;





    sortMaxanimdelmin(xzdelmin, 0);
    balanceBT.drawData(
        [{
            data: getstringmindel(xzdelmin),
        }], `<div class="d-flex justify-content-center">start</div>`
    )
    //first step animated

    xzdelmin[0] = xzdelmin[xzdelmin.length - 1];
    xzdelmin.splice(xzdelmin.length - 1, 1);
    balanceBT.nextStep(
        [{

            data: getstringmindel(xzdelmin),
        }], `<div class="d-flex justify-content-center"></div>`
    )
    sortMaxanimdelmin(xzdelmin, 1);
}

function getstringmindel(notstringdelmin) {
    let zdelmin = [null];
    let zxdelmin = zdelmin.concat(notstringdelmin);

    zxdelmin.push(null);
    zzdelmin = zxdelmin.join();
    return zzdelmin;
}
function callRamdommindel() {
    var randomNumberdelmin = Math.floor((Math.random() * 100) + 1);
    return randomNumberdelmin;
}
function randomStoremindel(xdelmin) {

    xdelmin = [];

    cheaknumdelmin(xdelmin);

    function cheaknumdelmin(xdelmin) {
        var statusdelmin = 0;
        mdelmin = xdelmin.length;
        var localValuedelmin = callRamdommindel()
        for (jdelmin = 0; jdelmin < mdelmin; jdelmin++) {


            if (xdelmin[jdelmin] == localValuedelmin) {
                statusdelmin = 1;

            }


        }

        if (statusdelmin == 0) {

            xdelmin.push(localValuedelmin);

        }
        else {
            statusdelmin = 0;

        }
        if (xdelmin.length != 8) {
            cheaknumdelmin(xdelmin);
        }
    }

    return xdelmin;
}