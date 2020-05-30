import { Bookmark, CreateElementBookMark} from "./bookmark";

let bookMarkBox = document.getElementById("bookMarkBox") as HTMLElement | null;
let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
let userInput = document.getElementById("input") as HTMLInputElement | null;
let userTitle = document.getElementById("title") as HTMLInputElement | null;

if (myButton == null || bookMarkBox == null) {
    alert ("button not found!"); 
} else {
    myButton.onclick = function() {
        if(userTitle == null || myButton == null || bookMarkBox == null || userInput == null)
        {
           alert("Some problems with your elements and probobly have to text in your input box");
           return;
        } else { 
        let bk1 = new Bookmark(userInput.value)
        bk1.setUrl(userTitle.value)
        let el = new CreateElementBookMark(bk1)

        el.createBookMark("bMark")
        }
        
    }
} 