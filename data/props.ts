export interface CatCardProps {
    title: string;
    pic: string;
    speech: string;
  }
export interface ResCardProps {
    title: string;
    pic: string;
    speech: string;
    phonetic: string;
    description: string;
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