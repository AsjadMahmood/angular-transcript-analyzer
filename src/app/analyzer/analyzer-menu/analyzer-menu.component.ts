import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Agent from '../shared/models/agent';
import Call from '../shared/models/call.model';

@Component({
  selector: 'app-analyzer-menu',
  templateUrl: './analyzer-menu.component.html',
  styleUrls: ['./analyzer-menu.component.scss']
})
export class AnalyzerMenuComponent implements OnInit {

  @Input() agents: Agent[] | null =[];
  @Input() activeAgentCalls:  Call[] | null =[];
  @Input() matchingPercentage: number= 38; //default 38
  @Output() onSelectAgent: EventEmitter<any> = new EventEmitter();
  @Output() onSelectCall: EventEmitter<any> = new EventEmitter();
  @Output() onSetMatchingPercentage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(){}

  public selectAgent(event: any): void {
    this.onSelectAgent.emit(event);
  };

  public selectCall(event: any): void {
    this.onSelectCall.emit(event)
  }

  public setMatchingPercentage(event):void{
    this.onSetMatchingPercentage.emit(event)
  }

}