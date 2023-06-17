
let zzdel = [null];
let myarrydel = [];
let xzdel = [null];



//This methode for animate how the max heap tree work if the root value deleted.
function removeAnimatedM() {
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


    function sortMaxanimdel(arrdel, animdel) {
        function swapdel(nodedel, rootdel) {
            let tempdel = arrdel[nodedel];
            arrdel[nodedel] = arrdel[rootdel];
            arrdel[rootdel] = tempdel;
            
            if (animdel == 1) {
                balancemaxBT.nextStep(
                    [{

                        data: getstringmax(arrdel),
                    }], `<div class="d-flex justify-content-center"></div>`
                )
            }

        }


        function heapifydel(arrdel, idel) {
            ndel = arrdel.length;


            var ldel = 2 * idel + 1;
            var rdel = 2 * idel + 2;
            var maxdel = idel;
            if (ldel < ndel && arrdel[ldel] > arrdel[maxdel])
                maxdel = ldel;
            if (rdel < ndel && arrdel[rdel] > arrdel[maxdel])
                maxdel = rdel;
            if (maxdel != idel) {

                swapdel(idel, maxdel);
                heapifydel(arrdel, maxdel);
            }



        }
        function buildHeapdel(arrdel) {
            ndel = arrdel.length;
            for (idel = ndel / 2 - 1; idel >= 0; idel--) {
                heapifydel(arrdel, idel);
            }

        }

        function heapSortdel(arrdel) {
            ndel = arrdel.length;
            buildHeapdel(arrdel);
            for (idel = ndel - 1; idel >= 0; idel--) {

                heapifydel(arrdel, idel, 0);
            }




        }

        heapSortdel(arrdel);



    }
    zzdel = randomStoremaxdel(myarrydel);

    xzdel = zzdel;


 


    sortMaxanimdel(xzdel, 0);
    //call the draw function on the object.
    balancemaxBT.drawData(
        [{
            data: getstringmaxdel(xzdel),
        }], `<div class="d-flex justify-content-center">start</div>`
    )
    xzdel[0] = xzdel[xzdel.length - 1];
    xzdel.splice(xzdel.length - 1, 1);
    balancemaxBT.nextStep(
        [{

            data: getstringmax(xzdel),
        }], `<div class="d-flex justify-content-center"></div>`
    )

    // balancemaxBT.nextStep(
    //     [{

    //         data: getstringmax(arr),
    //     }], `<div class="d-flex justify-content-center">start</div>`
    // )
    sortMaxanimdel(xzdel, 1);
    //call the next steps function for the animation.
    //this way is the basic one we can improve it later. 

}
function getstringmaxdel(notstringdel) {
    let zdel = [null];
    let zxdel = zdel.concat(notstringdel);

    zxdel.push(null);
    zzdel = zxdel.join();
    return zzdel;
}
function callRamdommaxdel() {
    var randomNumberdel = Math.floor((Math.random() * 100) + 1);
    return randomNumberdel;
}
function randomStoremaxdel(xdel) {

    xdel = [];

    cheaknumdel(xdel);

    function cheaknumdel(xdel) {
        var statusdel = 0;
        mdel = xdel.length;
        var localValuedel = callRamdommaxdel()
        for (jdel = 0; jdel < mdel; jdel++) {


            if (xdel[jdel] == localValuedel) {
                statusdel = 1;

            }


        }

        if (statusdel == 0) {

            xdel.push(localValuedel);

        }
        else {
            statusdel = 0;

        }
        if (xdel.length != 8) {
            cheaknumdel(xdel);
        }
    }

    return xdel;
}


