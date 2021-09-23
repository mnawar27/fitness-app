//export type CardType = 'Easy' | 'Medium' | 'Hard';

/*export enum CardKind{
    Easy = "Easy question",
     Medium = "Medium question",
      Hard = "Hard question"
}*/
export interface Card{
    ID:  number
    Kind: string
    Prompt: string
    Answer: string
}

