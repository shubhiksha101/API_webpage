let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests)
    ihtml = ""
    for(item in contests){
        console.log(contests[item])
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
        <img src="20160628101609-Coding.jpeg" class="card-img-top my-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
          <p class="card-text"> In 24 hours? ${contests[item].in_24_hours}</p>
          <p>Starts at: ${contests[item].start_time} </p>
          <p>Ends at: ${contests[item].end_time} </p>
          <a href="${contests[item].url}" class="btn btn-primary">Visit contest</a>
        </div>
        </div>
        `
        cardContainer.innerHTML = ihtml
    }
})


/** 
let n= localStorage.getItem("note")
alert("your note is"+ n)
let a = prompt('enter your note: ');
if(a)
{
localStorage.setItem("note",a)
}
let c=confirm("do you want to delete the note?")
if(c) {
    localStorage.removeItem("note")
    alert("note removed successfully!!")
}
**/