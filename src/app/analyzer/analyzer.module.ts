import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from '../core/material/material.module'
import AnalyzerComponent from './analyzer.component';
import { ROUTES } from './analyzer.routes';
import { AnalyzerMenuComponent } from './analyzer-menu/analyzer-menu.component';
import { AnalyzerTranscriptComponent } from './analyzer-transcript/analyzer-transcript.component';
import {MinutesToTime} from './shared/pipes/minutesToTime.pipe'

@NgModule({
    declarations: [ AnalyzerComponent, AnalyzerMenuComponent, AnalyzerTranscriptComponent,MinutesToTime],
    imports: [
        CoreModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class AnalyzerModule {}
