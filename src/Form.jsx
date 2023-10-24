import React, { useState, useRef, useEffect } from 'react'
import Button from './Button'
import './CSS/Form.css'
import './CSS/index.css'

function Form() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [Library, setLibrary] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [read, setRead] = useState(false);
  const bookFormContainer = document.getElementById("book-form-container");

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const addBookToLibrary = () => {
    const newTitle = title || "Default Title";
    const newAuthor = author || "Default Author";
    const newPages = parseInt(pages) || 300;

    const book = {
      title: newTitle,
      author: newAuthor,
      pages: newPages,
      read: read,
    };

    setLibrary([...Library, book]);

    console.log(`Book "${newTitle}" with ${newPages} pages added to the library.`);

    setTitle('');
    setAuthor('');
    setPages('');
    setRead(false);
    setFormVisible(false);
  };

  const removeBookFromLibrary = (index) => {
    const updatedLibrary = [...Library];
    updatedLibrary.splice(index, 1);
    setLibrary(updatedLibrary);
  };
  
  window.addEventListener('click', function(event) {
    if (event.target == bookFormContainer) {
        bookFormContainer.style.display = "none";
        bookFormBackground.style.display = "none";
    }
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && isFormVisible) {
        event.preventDefault();
        addBookToLibrary();
    }
});

const toggleReadStatus = (index) => {
  const updatedLibrary = [...Library];
  updatedLibrary[index].read = !updatedLibrary[index].read;
  setLibrary(updatedLibrary);
};


  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <Button onClick={toggleForm} buttonText="+ ADD BOOK" />
      </div>

      <div id="bookFormBackground" style={{ display: isFormVisible ? 'block' : 'none' }}>
        <div id="book-form-container" style={{ display: isFormVisible ? 'block' : 'none' }}>
          <form id="book-form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Enter title" maxLength="35" value={title} onChange={(e) => setTitle(e.target.value)} /><br />

              <label htmlFor="author">Author</label>
              <input type="text" id="author" placeholder="Enter author" maxLength="25" value={author} onChange={(e) => setAuthor(e.target.value)} /><br />

              <label htmlFor="pages">Pages</label>
              <input type="number" id="pages" placeholder="Enter the number of pages" max="10000" value={pages} onChange={(e) => setPages(e.target.value)} />

              <div className="readCheck">
                <label htmlFor="read">Read:</label>
                <input type="checkbox" id="read" name="read" value="yes" checked={read} onChange={() => setRead(!read)} /><br />
              </div>
            </fieldset>

            <div className="submitBookDiv" style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={addBookToLibrary} buttonText="+ ADD BOOK" style={{ margin: '25px', marginTop:0 }}/>
            </div>
          </form>
        </div>
      </div>
      <div id="book-container">
        {Library.map((book, index) => (
          <div className="book" key={index}>
            <div className="title">"{book.title}"</div>
            <div className="author">{book.author}</div>
            <div className="pages">{book.pages} Pages</div>
            <div className="buttonsDiv">
              <button className={`readBtn ${book.read ? 'read' : 'not-read'}`} onClick={() => toggleReadStatus(index)}>{book.read ? 'Read' : 'Not Read'}</button>
              <button className="removeBtn" onClick={() => removeBookFromLibrary(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Form;
