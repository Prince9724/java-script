 
    // <div class="card" style="width: 18rem;">
    //             <img src="https://imagedelivery.net/O3WFf73JpL0l5z5Q_yyhTw/museum-backend.colby.edu/2025/04/Abercrombie_The-Church_1938.jpg/w=1200,quality=75,format=webp"
    //                 class="card-img-top" alt="..."></img>
    //             <div class="card-body">
    //                 <h5 class="card-title">Card title</h5>
    //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
    //                     card’s content.</p>
    //                 <a href="#" class="btn btn-primary">Go somewhere</a>
    //             </div>
    //         </div>  
 

const container = document.getElementById("container");

const creatPost = (posts)=>{
    posts.forEach((post)=>{
        const div = document.createElement("div");
        div.innerHTML=`<div class="card" style="width: 18rem;">
                <img src="https://imagedelivery.net/O3WFf73JpL0l5z5Q_yyhTw/museum-backend.colby.edu/2025/04/Abercrombie_The-Church_1938.jpg/w=1200,quality=75,format=webp"
                    class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text"> ${post.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> `;
            container.appendChild(div);
    });
}
const fetchNote=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")//fetch -post ulr 
        .then((res)=>res.json())//data response formate me hai usko json me convert krne ke liye.
        .then((data)=>{
            creatPost(data);
        })

}

fetchNote();