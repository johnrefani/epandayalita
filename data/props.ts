export interface CatCardProps {
    title: string;
    pic: string;
    speech: string;
    hasNoImage: boolean;
  }
export interface ResCardProps {
    id?:number;
    word: string;
    image: string;
    speech: string;
    audio: string;
    definition: string;
    pronunciation: string;
    category?: string;
  }
  export interface Entry {
    id: number;
    word: string;
    definition: string;
    pronunciation: string;
    speech: string;
    image: string;
    audio: string;
    category: string;
  }