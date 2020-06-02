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
        
        var bkm1 = document.createElement("div");
        bkm1.id = "urlBox";
        var bkm2 = document.createElement("div");
        bkm2.id = 'TitleBox';
        document.getElementById(id)?.appendChild(bkm1);
        document.getElementById(id)?.appendChild(bkm2);
        document.getElementById('urlBox')?.appendChild(document.createTextNode(this.bookmark.title))
        document.getElementById('urlBox')?.appendChild(document.createElement("br"))
        document.getElementById('TitleBox')?.appendChild(document.createTextNode(this.bookmark.getUrl()))

    }



}






