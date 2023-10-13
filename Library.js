document.addEventListener('DOMContentLoaded', function() {
    const Library = [];

    const bookFormBackground = document.getElementById("bookFormBackground");
    const bookFormContainer = document.getElementById("book-form-container");
    const titleInput = document.getElementById("title");
    const pagesInput = document.getElementById("pages");
    const authorInput = document.getElementById("author");
    const readInput = document.getElementById("read");
    const addBooksButton = document.getElementById("addBookBtn"); 

    addBooksButton.addEventListener('click', function() {
        if (bookFormContainer.style.display === "none" || bookFormContainer.style.display === "") {
            bookFormContainer.style.display = "block";
            bookFormBackground.style.display = "block";
            titleInput.focus();
        } else {
            bookFormContainer.style.display = "none";
            bookFormBackground.style.display = "none";
        }
    });


    // Close the book container when clicking outside its contents
    window.addEventListener('click', function(event) {
        if (event.target == bookFormContainer) {
            bookFormContainer.style.display = "none";
            bookFormBackground.style.display = "none";
        }
    });

    // Submit the form and close it when Enter key is pressed
    bookFormContainer.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            addBookToLibrary();
            bookFormContainer.style.display = "none";
            bookFormBackground.style.display = "none";
        }
    });

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function() {
            return [title, pages];
        }
    }

    function addBookToLibrary() {
        let title = titleInput.value;
        let pages = parseInt(pagesInput.value);
        let author = authorInput.value;
        let read = readInput.checked;

        if (!title) {
            title = "Default Title";
        }
        if (isNaN(pages)) {
            pages = 300;
        }
        if (!author) {
            author = "Default Author";
        }

        const book = new Book(title, author, pages, read);
        Library.push(book);
        displayBooks(book);

        console.log(`Book "${book.title}" with ${book.pages} pages added to the library.`);

        titleInput.value = "";
        pagesInput.value = "";
        authorInput.value = "";
        readInput.checked = false;
    }

    const bookForm = document.getElementById('book-form');
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addBookToLibrary();
        bookFormContainer.style.display = "none";
        bookFormBackground.style.display = "none";
    });

    function displayBooks(book) {
        const bookContainer = document.querySelector('#book-container');
        const bookDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authDiv = document.createElement('div');
        const pageDiv = document.createElement('div');
        const buttonsDiv = document.createElement('div'); 
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');
        
        bookDiv.classList.add('book');
        bookDiv.setAttribute('id', Library.indexOf(book));
        bookContainer.appendChild(bookDiv);
    
        titleDiv.textContent = `"${book.title}"`;
        titleDiv.classList.add('title');
        bookDiv.appendChild(titleDiv);
    
        authDiv.textContent = book.author;
        authDiv.classList.add('author');
        bookDiv.appendChild(authDiv);
    
        pageDiv.textContent = `${book.pages} Pages`;
        pageDiv.classList.add('pages');
        bookDiv.appendChild(pageDiv);
    
        buttonsDiv.classList.add('buttonsDiv'); 
        bookDiv.appendChild(buttonsDiv); 
    
        readBtn.classList.add('readBtn');
        buttonsDiv.appendChild(readBtn); 
    
        if (book.read === false) {
            readBtn.textContent = 'Not Read';
            readBtn.style.backgroundColor = '#e04f63';
        } else {
            readBtn.textContent = 'Read';
            readBtn.style.backgroundColor = '#63da63';
        }
    
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('removeBtn');
        buttonsDiv.appendChild(removeBtn); 
    
        removeBtn.addEventListener('click', () => {
            const index = Library.indexOf(book);
            if (index !== -1) {
                Library.splice(index, 1);
                bookContainer.removeChild(bookDiv);
            }
        });
    
        readBtn.addEventListener('click', () => {
            book.read = !book.read;
    
            if (book.read === false) {
                readBtn.textContent = 'Not Read';
                readBtn.style.backgroundColor = '#e04f63';
            } else {
                readBtn.textContent = 'Read';
                readBtn.style.backgroundColor = '#63da63';
            }
        });
    }
});
