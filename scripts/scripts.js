
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayName = function() {
        console.log(title)
    }
}

function addBookToLibrary() {
    myLibrary.push(Book);
}


function form(){
    const bookId = document.getElementById('bookId')
    const authorId = document.getElementById('authorId')
    const pagesId = document.getElementById('pagesId')
    const checkboxId = document.getElementById('checkboxId')

    title = bookId.value
    author = authorId.value
    pages = pagesId.value
    read = checkboxId.value
}

const btn = document.querySelector('#new');

let myLibrary = [];

btn.addEventListener('click', () => {
    //let myLibrary = []
   
    form()

    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    console.log(myLibrary)
    let bookShelf = document.querySelector('#bookshelf')
    bookShelf.innerHTML = "";
    
    
    for(let i = 0; i < myLibrary.length; i++){
        
        let bookShelf = document.querySelector('#bookshelf')
        

        let logBook = document.createElement('p')
        
        logBook.classList.add('bookmark' + i)

        
        logBook.innerHTML = myLibrary[i].title + '<br></br>' + myLibrary[i].author + '<br></br>' + myLibrary[i].pages.toString() +'<br></br>' + '<input type="checkbox"/>' + myLibrary[i].read + '<br></br>'
        
        bookShelf.appendChild(logBook)
        console.log(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read)

        
        const remove = document.querySelector('.bookmark' + i)
        const removeButton = document.createElement('button')
            
        removeButton.addEventListener('click', () => {
            bookshelf.removeChild(logBook)
            //bookshelf.removeChild(removeButton)
            myLibrary.splice(i, 1)
        })
        removeButton.classList.add('remove' + i)
        removeButton.textContent = 'REMOVE'
        remove.appendChild(removeButton)
            
        console.log(`This is the  i value: ${i}`)
        console.log(`This is the class: bookmark`+i)

       
    }

    
})


var hideButton = document.querySelector('.modal')

hideButton.addEventListener('click', () => {
    
    var modal = document.querySelector('.hidden')
    
    if (modal.classList.contains('hide')){
        modal.classList.remove('hide')
    } else {
        modal.classList.add('hide')
    }
    
    
    
})

// const bookShelf = document.querySelector('#bookshelf')
// const logBook = document.createElement('p')
// logBook.classList.add('bookmark')
// logBook.textContent = myLibrary
// bookshelf.appendChild(logBook)