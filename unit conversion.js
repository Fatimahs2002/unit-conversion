
const temperature=document.getElementById("temperature")
const weight=document.getElementById("weight");
const distance=document.getElementById("distance")

const AddWgt=document.getElementById("AddWeight")
const AddDistance=document.getElementById("ADDDistance")
const AddTmp=document.getElementById("ADDTemperature")

AddWgt.addEventListener("click",ShowWgt=>{
    weight.style.display="block";
   temperature.style.display="none"
   distance.style.display="none"
});

AddDistance.addEventListener("click",ShowDstnce=>{
    weight.style.display="none";
    temperature.style.display="none"
    distance.style.display="block";
});

AddTmp.addEventListener("click",showTmp=>{
    weight.style.display="none";
    temperature.style.display="block";
    distance.style.display="none";
});



first_convrt=document.getElementById("first_cnvrt");

 var rslt1;
first_convrt.addEventListener("click",cnvrt_tmp=>{

    val_tmp=document.getElementById("c").value;
    rslt1=document.getElementById("result1").value= (val_tmp * 9/5) +32;

});

second_convrt=document.getElementById("second_cnvrt");

 var rslt2;
second_convrt.addEventListener("click",cnvrt_weight=>{
    var val_weight=document.getElementById("kg").value;
    rslt2=document.getElementById("result2").value =val_weight * 2.20;
});

third_convrt=document.getElementById("third_cnvrt");
 var val_distance=document.getElementById("km").value;
 var rslt3;
third_convrt.addEventListener("click",cnvrt_distance=>{
    var val_distance=document.getElementById("km").value;
    rslt3=document.getElementById("result3").value =val_distance *  0.62137;
});