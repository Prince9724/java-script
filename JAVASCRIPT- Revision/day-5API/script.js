 const tbody = document.getElementById("tbody");
 
 fetch("https://jsonplaceholder.typicode.com/posts")
 .then((res)=>res.json())
 .then((posts)=>{
   posts.forEach((data)=>{
   const tr =   document.createElement("tr")
     tr.innerHTML=`
     <th scope="row">${data.id}</th>
      <td>${data.title}</td>
      <td>${data.body}</td>       
     `;
    tbody.appendChild(tr);
   })
    
 })