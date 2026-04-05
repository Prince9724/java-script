const APIKey = "AIzaSyCkXdbqqX7D3ekKdfyZJXotX2sGxH_WtMQ";
const SearchText = document.getElementById("searchInput");
const SearchButton = document.getElementById("searchBtn");
const booksContainer = document.getElementById("booksContainer")
// display function 

function DisplayBooks(books) {
    books.map((book) => {
        const div = document.createElement("div");
        div.innerHTML = `   <div class="card p-3" style="width: 18rem;">
            <img src=${book.volumeInfo.imageLinks?.thumbnail == undefined ? "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_incoming&w=740&q=80" : book.volumeInfo.imageLinks.thumbnail} class="card - img - top" alt="Book-IMG"> 
                 <div class= "card-body">
                 <h5 class="card-title fw-bold fs-5">${book.volumeInfo.title == undefined ? "No author" : book.volumeInfo.title}</h5>
                 <h5 class="card-title text-secondary"> by ${book.volumeInfo.authors == undefined ? "No author" : book.volumeInfo.authors[0]}</h5>
                 <h5 class="card-title fs-6">Publish Date : ${book.volumeInfo?.publishedDate == undefined ? "No Data Found !" : book.volumeInfo.publishedDate}</h5>
                 <h5 class="card-title fs-6">Language : ${book.volumeInfo?.language == undefined ? "No Data Found !" : book.volumeInfo.language}</h5>
                 <h5 class="card-title text-light-50 fs-6">Page Count : ${book.volumeInfo?.pageCount == undefined ? "No Data Found !" : book.volumeInfo.pageCount}</h5>
                 
                <a href=${book.volumeInfo.previewLink} class="btn btn-outline-success">Preview</a>
                </div >
                </div > `
        booksContainer.appendChild(div);
    })
}

function FetchBooks() {
    const search = SearchText.value;
    const BaseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:keyes&key=${APIKey}`;
    fetch(BaseURL)
        .then((res) => res.json())
        .then((data) => {
            // data.items se map ke through ham sab data ko check karenge then display karenge
            // <p class="card-text">${book.volumeInfo.description == undefined ? "No description" : book.volumeInfo.description}</p>
            // data.items.map((e) => {
            //     console.log(e.volumeInfo.imageLinks?.thumbnail == undefined ? "No image" : e.volumeInfo.imageLinks.thumbnail)
            //     console.log(e.volumeInfo.title == undefined ? "No Title" : e.volumeInfo.title);// checked 
            //     // console.log(e.volumeInfo.description == undefined ? "No Description" : e.volumeInfo.description);
            //     // console.log(e.volumeInfo.authors == undefined ? "No Author" : e.volumeInfo.authors[0]);
            // })
            // console.log(data)
            // call the books display function here !
            console.log(data)
            DisplayBooks(data.items);// so that ki yaha se full data call up ho and server se aaye 

        });
}
// FetchBooks();
SearchButton.addEventListener("click", FetchBooks)
 