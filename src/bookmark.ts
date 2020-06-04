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

    createBookMark(fragment: HTMLTemplateElement){ 

        let instance = document.importNode(fragment.content, true);
     
        let title = instance.querySelector('.title');
        if(title == null){ 
            return null;
        }
        title.innerHTML = this.bookmark.title;

        let url = instance.querySelector('.url');
        if(url == null){ 
            return null;
        }
        url.innerHTML = this.bookmark.url;
        
        return instance;
    }

   
        
 }










