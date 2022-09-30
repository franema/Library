const $addBookButton = document.querySelector(".add-book_button")
const $formContainer = document.querySelector(".form-container")
const $form = document.querySelector(".book-form")
let myLibrarie = []

function Book(title, autor, pages, readed) {
    this.title = title
    this.autor = autor
    this.pages = pages
    this.readed = readed
}

function addBookToLibrary(book) {
    myLibrarie.push(book)
}

function addBook(event) {
    const title = document.querySelector("#title").value
    const autor = document.querySelector("#autor").value
    const pages = document.querySelector("#pages").value
    const readed = document.querySelector("#readed").checked
    const book = new Book(title, autor, pages, readed)
    addBookToLibrary(book)
    hideForm()
    buildLibrarie()
    event.preventDefault()
    $form.reset()
}

function showForm() {
    $formContainer.style.visibility = "visible"
}

function hideForm() {
    $formContainer.style.visibility = "hidden"
}

function buildLibrarie() {
    const $bookContainer = document.querySelector(".books-container")
    $bookContainer.innerHTML = ""
    myLibrarie.forEach((book) => {
        $bookContainer.innerHTML += `
        <div class="book">
            <p>${book.title}</p>
            <p>${book.autor}</p>
            <p>${book.pages}</p>
            <button class="readed_button">${book.readed ? "readed" : "not readed"}</button>
        </div>`
    })
}

$form.onsubmit = addBook
$addBookButton.addEventListener("click", showForm)
