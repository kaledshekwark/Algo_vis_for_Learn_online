//Init the array.
arrmax = [];
//this function for init the back ground and draw the data.
function drawTreeMax(zz) {
    //Init the back ground and do some setting on it.
    let balanceBTDiv = document.getElementById("balancemaxBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)"
    //Init the object from the tree visualaizer class.
    let balancemaxBT = treeVisualizer(
        {
            target: "balancemaxBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",
        }
    );
    //Call the draw function on the object.
    balancemaxBT.drawData(
        [{
            data: zz,
        }], `<div class="d-flex justify-content-center"></div>`
    )
}
//This function for clear all the values in the tree.
function clearM() {
    arrmax = [];
    let z = [null];
    let zx = z.concat(arrmax);
    zx.push(null);
    zz = zx.join();
    //document.getElementById('pTextmax').innerHTML = null;
    drawTreeMax(zz);
}
//This function for delete a certain value in the tree and re sorted as a sort max heaptree.
function deleteValueM() {
    let deleteText = document.getElementById('deleteTextmax').value;
    let flag = false;
    deleteNumber = Number(deleteText);
    let xz = arrmax.map(Number);
    for (let i = 0; i < xz.length; i++)
        if (deleteNumber === xz[i]) {
            xz.splice(i, 1);
            arrmax.splice(i, 1);
            flag = true;
        }
    sortMax(xz);
    let z = [null];
    let zx = z.concat(xz);
    numberlastlength = zx.length;
    zx[numberlastlength] = null;
    let zz = String(zx);
    drawTreeMax(zz);
    if (flag === false) {
        //change the alert later cuz its so cring to put it.
        alert("not found");
    }
}
//This function for add a new value in the tree and re sorted as a max heap tree.
function pushValueM() {
    let zrrr=0;
    let inputTextMaxm = document.getElementById('inputTextMax').value;
    for(kme=0;kme<arrmax.length;kme++)
    {
      if(arrmax[kme]==inputTextMaxm)
      {
        zrrr=1;
      }
    }
    if(zrrr==0){
    arrmax.push(inputTextMaxm);
    let xzmax = arrmax.map(Number);
    sortMax(xzmax);
    let z = [null];
    let zxmax = z.concat(xzmax);
    numberlastlengthmax = zxmax.length;
    zxmax[numberlastlengthmax] = null;
    let zzmax = String(zxmax);
    drawTreeMax(zzmax);

}
    else
    {
        alert("you can't enter same number please try different value");
    }
}