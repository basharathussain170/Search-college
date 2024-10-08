let btn=document.querySelector('button');
let ul=document.querySelector("ul");
btn.addEventListener("click", async()=>{
    // console.log("button was clicked");
    let country=document.querySelector('input').value;
    document.querySelector('input').value="";
    console.log(country);
    
    let collArr= await getCollege(country);
    // console.log(collArr);

    showColl(collArr);
})


function showColl(collArr){
    ul.innerText="";
    for(coll of collArr){
        // console.log(coll);
        // console.log(coll.name);
        let list=document.createElement('li');
        list.innerText=coll.name;
        ul.appendChild(list);
    }
}


let url="http://universities.hipolabs.com/search?country="
async function getCollege(country) {
   try{
    let res=await axios.get(url+country);
    // console.log(res.data);
    return res.data;
   }catch(e){
    console.log("ERROR 404 !",e);
    return [];
   }
}