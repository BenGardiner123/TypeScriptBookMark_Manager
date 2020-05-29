import { Bookmark} from "./bookmark";


let bookMarkBox = document.getElementById("bookMarkBox") as HTMLElement | null;

let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null || bookMarkBox == null) {
    alert ("button not found!"); 
} else {
    myButton.onclick = function() {
        if(myButton == null || bookMarkBox == null) return;
        let book1 = new Bookmark ("Functions", "HERE", false);
        console.log(Bookmark);
        
    }
} 