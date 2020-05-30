export class Bookmark {
    title: string;
    // icon: string;
    favorite: boolean = false;
    url: string = "";
    constructor(title: string) {
        this.title = title;
        
    }

    setUrl(newUrl:string){
         this.url = newUrl;
        ///use this to set tthe url initially
    }

    getUrl():string {
        
        return this.url;
        // gets the url stored in the object box form the element on the page
    }


}

export class CreateElementBookMark {
        bookmark: Bookmark;
        
        
        constructor(bookmark:Bookmark) {
            this.bookmark = bookmark;

        }

        createBookMark(id: string) {
            let bkm1 = document.createElement("div") as HTMLDivElement| null;
            
            document.getElementById(id)?.appendChild(document.createTextNode(this.bookmark.title))
            document.getElementById(id)?.appendChild(document.createTextNode(this.bookmark.getUrl()))
            
        }

    } 




    

