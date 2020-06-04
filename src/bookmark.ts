export class Bookmark {
    title: string;
    // icon: string;
    favorite: boolean = false;
    url: string = "";
    constructor(title: string, favorite: boolean) {
        this.title = title;
        this.favorite = favorite;

    }

    setUrl(newUrl: string) {
        this.url = newUrl;
        ///use this to set tthe url initially
    }

    getUrl(): string {

        return this.url;
        // gets the url stored in the object box form the element on the page
    }


}

export class CreateElementBookMark {
    bookmark: Bookmark;


    constructor(bookmark: Bookmark) {
        this.bookmark = bookmark;

    }

    createBookMark(id: string) {
        //i need to dyamcially rename each div when i create it or at least try and get a better way of making this styleable - i can;t seem to target the #text property of the new content when it'screated 
        
        let bkm1 = document.createElement("div") as HTMLDivElement | null;
    
        document.getElementById(id)?.appendChild(document.createTextNode(this.bookmark.title))
        document.getElementById(id)?.appendChild(document.createElement("br"))
        document.getElementById(id)?.appendChild(document.createTextNode(this.bookmark.getUrl()))

    }

   
        
 }










