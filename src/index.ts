import { Bookmark, CreateElementBookMark } from "./bookmark";

let bookMarkStorage = [{}];

let bookMarkBox = document.getElementById("bookMarkBox") as HTMLElement | null;
let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
let userInput = document.getElementById("input") as HTMLInputElement | null;
let userTitle = document.getElementById("title") as HTMLInputElement | null;


if (myButton == null || bookMarkBox == null) {
    alert("button not found!");
} else {
    myButton.onclick = function () {
        if (userTitle == null || myButton == null || bookMarkBox == null || userInput == null) {
            alert("Some problems with your elements and probobly have to text in your input box");
            return;
        } else {
            //new instance of a bookmark
            let bk1 = new Bookmark(userInput.value, false)
            //using the setter append the user input to the bookmark
            bk1.setUrl(userTitle.value)
            //add the bookmark to the array
            bookMarkStorage.push(bk1);

            //instantiate a new instance of a boomark element
            let el = new CreateElementBookMark(bk1)
            
            
            let fragment = document.getElementById("bookmark-template") as HTMLTemplateElement;
            // bookmarkel gets the bookmark and then passes a method to it which takes fragment (the template)
            const bookmarkEl = el.createBookMark(fragment);
            //null checking
            if(bookmarkEl == null) {
                alert("Seomthing broke")
                return;
            }
            
            let bmOutput = document.getElementsByClassName("bmOutput")[0];
            bmOutput.appendChild(bookmarkEl)
            console.log(bookMarkStorage, bookmarkEl)    
            

        }



    }
} 
