import {Injectable} from '@angular/core';
import {IWord} from '../IWord';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor() {
  }

  iWords: IWord[] = [{
    word: 'dog',
    mean: 'cho hieu'
  }, {
    word: 'cat',
    mean: 'meo bo'
  }, {
    word: 'power',
    mean: 'sức mạnh'
  }]


  findAll(): IWord[] {
    return this.iWords;
  }

  findByIWord(word: string) {
    return this.iWords.find(obj => obj.word === word)
  }
}
