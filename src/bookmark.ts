export class Bookmark {
    title: string;
    icon: string;
    favorite: boolean = false;
    constructor(title: string, icon: string) {
        this.title = title;
        this.icon = icon;
        
    }

    createBookMark(id: string) {
        let bkm1 = document.createElement("div") as HTMLDivElement| null;
        bkm1?.appendChild
        document.getElementById(id)?.appendChild(document.createTextNode(this.title))
        document.getElementById(id)?.appendChild(document.createTextNode(this.icon))
        
    }


}

export class CreateElementBookMark {
        bookmark: Bookmark;
        
        
        constructor(bookmark:Bookmark) {
            this.bookmark = bookmark;

        }



    } 




   /*  setUrl(url:string){
        // when you click the add button it should open up a new tile with an add button - when you add the url into the feild it souhld be into the argu
    }

    getUrl():string {
        return "";
        // this shoould be get the link in the a tag on goto
    }

 */