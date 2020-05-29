export class Bookmark {
    title: string;
    icon: string;
    favorite: boolean = false;
    constructor(title: string, icon: string, favorite: boolean) {
        this.title = title;
        this.icon = icon;
        this.favorite = favorite;
        
    }


    


}

 /*   export class CreateElementBookMark {
        bookmark: Bookmark
        element: HTMLElement | null = null;
        root: HTMLElement | null = null;
        
        constructor(abookmark:Bookmark) {
            this.bookmark = abookmark;
        }

        create(root: HTMLElement) {
            this.root = root;
            this.element = document.createElement("div");
            this.element = document.appendChild(document.createTextNode(this.bookmark.title));

        }


    } */




   /*  setUrl(url:string){
        // when you click the add button it should open up a new tile with an add button - when you add the url into the feild it souhld be into the argu
    }

    getUrl():string {
        return "";
        // this shoould be get the link in the a tag on goto
    }

 */