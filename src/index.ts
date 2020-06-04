import { Bookmark, CreateElementBookMark } from "./bookmark";

const bookMarkStorage = [{}];

let bookMarkBox = document.getElementById("bookMarkBox") as HTMLElement | null;
let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
let userInput = document.getElementById("input") as HTMLInputElement | null;
let userTitle = document.getElementById("title") as HTMLInputElement | null;

function appendBooks(string: "bookmark-template") {

    const fragment = document.getElementById('bookmark-template') as HTMLTemplateElement;
    if ("bookmark-template" == null) {
        alert("something wrong with your tempalte");
    } else {
        bookMarkStorage.forEach(book => {
            // Create an instance of the template content
            const instance = document.importNode(fragment!.content, true);
            // Add relevant content to the template
            instance.querySelector('.title').innerHTML = bookMarkStorage.title;
            instance.querySelector('.url').innerHTML = bookMarkStorage.url;
            // Append the instance ot the DOM
            booksList.appendChild(instance);
        });


        if (myButton == null || bookMarkBox == null) {
            alert("button not found!");
        } else {
            myButton.onclick = function () {
                if (userTitle == null || myButton == null || bookMarkBox == null || userInput == null) {
                    alert("Some problems with your elements and probobly have to text in your input box");
                    return;
                } else {
                    let bk1 = new Bookmark(userInput.value, false)
                    bk1.setUrl(userTitle.value)
                    let el = new CreateElementBookMark(bk1)
                    el.createBookMark("bMark")
                    bookMarkStorage.push(bk1)
                    console.log(bookMarkStorage)
                }

            }
        } 
    }
}