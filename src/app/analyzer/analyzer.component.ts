import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import CallFacade from 'src/app/analyzer/shared/facades/call.facade';
import TemplateService from 'src/app/analyzer/shared/services/template.service';
import AgentFacade from './shared/facades/agent.facade';
import Script from './shared/models/script.model';
import Transcript from './shared/models/transcript.model';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AnalyzerComponent implements OnInit, AfterViewInit {

  @ViewChild('subHeader')
  private subHeader?: TemplateRef<any>;
  activeTranscript: Transcript | null;
  matchingScript: Script | null = null;
  transcriptMatchPercentage: number = 0;
  scriptMatchPercentage: number = 0;
  transcriptSpeakers: Array<string | number> = [];
  scriptSpeakers: Array<string | number> = [];

  constructor(
    public agents: AgentFacade,
    public calls: CallFacade,
    private _tplService: TemplateService ) {
  }

  public ngAfterViewInit(): void {
    this._tplService.register('subHeader', this.subHeader);
  }

  public ngOnInit(): void {
    this.calls.setMatchingPercentage(38); //setting default to 38
    this.calls.activeTranscript$.subscribe(res => {
      this.activeTranscript = res;
      this.activeTranscript.transcript.forEach((transcript: Script) => {
        this.transcriptSpeakers.push(this.activeTranscript.getSpeaker(transcript.channel));
      })
      this.activeTranscript.script.forEach((script: Script) => {
        this.scriptSpeakers.push('Rep:');
      })
      let matchingLines = 0;
      this.activeTranscript.transcript.forEach((element: Script) => {
        if (element.matching_sentence)
          matchingLines += 1;
      })
      this.transcriptMatchPercentage = (matchingLines) / (this.activeTranscript.transcript.length);
      this.scriptMatchPercentage = (matchingLines) / (this.activeTranscript.script.length);
    })
  }

  onShowScriptDetail(transcript: Script) {
    this.matchingScript = null;
    if (transcript) {
      this.matchingScript = this.activeTranscript.script.find((script: Script) => {
        if (script.sentence === transcript.matching_sentence) {
          return script;
        }
      })
    }
  }

  public selectAgent(event: any): void {
    this.agents.setActiveAgent(event.value);
  };

  public selectCall(event: any): void {
    this.calls.selectCall(event.value);
  }

  public setMatchingPercentage(event: any): void {
    this.calls.setMatchingPercentage(event.value)
  }
}