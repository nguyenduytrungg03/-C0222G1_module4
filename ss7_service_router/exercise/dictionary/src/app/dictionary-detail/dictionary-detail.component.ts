import { Component, OnInit } from '@angular/core';
import {IWord} from "../iword";
import {DictionaryService} from "../Dictionary/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  iWord: IWord;
  constructor(private dictionaryService: DictionaryService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.iWord = this.dictionaryService.findByIWord(this.activatedRoute.snapshot.params.word);
  }

}
