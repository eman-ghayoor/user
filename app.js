const users=[
    {
    name:"Alisha",
    occupation : "Web Developer",
    Streak :"Streak : Yes",
    profile:"https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    { 
    name:"Ayesha",
    occupation : "Web Developer",
    Streak :"Streak : Yes",
    profile:"https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Rimsha",
     occupation : "Web Developer",
      Streak :"Streak : Yes",
     profile:"https://media.istockphoto.com/id/1727270843/photo/happy-young-asian-woman-relax-on-comfortable-couch-at-home-texting-messaging-on-smartphone.jpg?s=2048x2048&w=is&k=20&c=HXopDzJ9BRkbXSz1eW43P9WUDkmRlEjhAaob9iYr-HY="},
 ];
 function getUsers(){
    const main = document.getElementById("main");
    setTimeout(() => {
        users.forEach(function(item) {
            const div = document.createElement("div");
            div.classList.add("user")
            main.append(div);
            const img = document.createElement("img");
            img.classList.add("img");
            img.src = item.profile;
            div.append(img);
    
            const div2 = document.createElement("div")
            const p = `<p class="p-1">${item.name}</p>
            <p class="p-2">${item.occupation}</p>
        <p class="p-3">${item.Streak}</p>`
        div2.innerHTML = p
        div.append(div2)
       
    
        });
        document.getElementById("loader").innerHTML="";
     },2000);
 }
 getUsers()