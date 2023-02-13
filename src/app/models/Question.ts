export class Question{
    id: number;
    text: string;
    gender: string;
    level: number;
    answer: string;

    constructor(id: number, text: string, gender: string, level: number, answer: string) {
        this.id = id;
        this.text = text;
        this.level = level;
        this.answer = answer;
        this.gender = gender;
    }

}