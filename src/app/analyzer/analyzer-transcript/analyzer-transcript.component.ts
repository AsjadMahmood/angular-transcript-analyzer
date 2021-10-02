import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Script from '../shared/models/script.model';

@Component({
  selector: 'app-analyzer-transcript',
  templateUrl: './analyzer-transcript.component.html',
  styleUrls: ['./analyzer-transcript.component.scss']
})
export class AnalyzerTranscriptComponent implements OnInit {

  @Input() transcripts: Script[];
  @Input() matchingPercentage: number = 0;
  @Input() matchingScript: Script | null;
  @Input() speakers:Array<string|number>;
  @Input() transcriptMatchPercentage:number = 0;
  @Input() heading: string;
  @Input() headerInfo: string;
  @Input() transcriptType:string;
  @Output() onGetScriptDetail: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  getTooltipText(transcript: Script) {
    if(transcript.matching_sentence){
      let matchtext = this.matchingScript ? `matching with line #${this.matchingScript.order + 1}` : '';
      return transcript ? `${Math.round(transcript.similarity * 100)}% ${matchtext} "${transcript.matching_sentence}"` : '';
    }
    return null;
  }

  setMatchingScript(transcript) {
    this.onGetScriptDetail.emit(transcript);
  }
  
}