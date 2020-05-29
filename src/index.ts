import { Bookmark, CreateElementBookMark} from "./bookmark";

let bookMarkBox = document.getElementById("bookMarkBox") as HTMLElement | null;
let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
let userInput = document.getElementById("input") as HTMLInputElement | null;


if (myButton == null || bookMarkBox == null) {
    alert ("button not found!"); 
} else {
    myButton.onclick = function() {
        if(myButton == null || bookMarkBox == null) return;
        
        
        
    }
} 