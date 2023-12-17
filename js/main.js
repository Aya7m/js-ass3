var siteName=document.getElementById("sn");
var siteUrl=document.getElementById("su");
var massige=document.getElementById('massige');
var overlay=document.getElementById('overlay');
var closBtn=document.getElementById('closBtn');

var vistorList=[];

// add
if(localStorage.visitor !=''){
    vistorList=JSON.parse(localStorage.visitor);
}else{
    vistorList=[];
}
function addVisitor(){
    if(validNameOfSite()){

        var newVisitor={
            name:siteName.value,
            url:siteUrl.value,
        }
    
            vistorList.push(newVisitor);
       
        localStorage.setItem("visitor",JSON.stringify(vistorList));  

        validUrl()

    }
    else{
        overlay.classList.replace("d-none","d-flex")
    }
   
    clearData()
    showVisitor()

}

// clear
function clearData(){
    siteName.value='';
    siteUrl.value='';
}

// show data
function showVisitor(){
    var store='';
    for(var i=0;i<vistorList.length;i++){
        store+=`<tr>
        <td>${vistorList[i].name}</td>
        <td>${vistorList[i].url}</td>
        <td><button class="btn btn-success text-white"><i class="fa-regular fa-eye"></i> Visit</button></td>
        <td><button onclick="deleteVisitor(${i})" class="btn btn-danger text-white"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML=store;
}
showVisitor()

// delete 

function deleteVisitor(i){
    vistorList.splice(i,1);
    localStorage.visitor=JSON.stringify(vistorList);
    showVisitor()

}
function validNameOfSite(){
    var regix=/^([book][a-z]|[book][a-z] {0,1}(market|mark|shop|site)|http\:(market|mark|shop|site)\.com )/;
    var isvalid=regix.test(siteName.value);
    if(isvalid){
        document.getElementById('sitename').classList.replace('d-inline-block','d-none');
       

    }
    else{
        
        document.getElementById('sitename').classList.replace('d-none','d-inline-block');
    
    }    
    return isvalid;
    

}
validNameOfSite(siteName.value);

function validUrl(){
    var reg=/^(w{3}\.[a-zA-Z]{1-9})/;
    var  x=reg.test(siteUrl.value);
    if(x){
        document.getElementById('sitUrl').classList.replace('d-inline-block','d-none');
    }
    else{
        document.getElementById('sitUrl').classList.replace('d-none','d-inline-block');
    }
    return x;
}
validUrl(siteUrl.value);

closBtn.addEventListener('click',closeSlider);

function closeSlider(){
    overlay.classList.replace("d-flex","d-none")
}