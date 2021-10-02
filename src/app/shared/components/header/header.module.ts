import {NgModule} from '@angular/core';

import {CoreModule} from '../../../core/core.module';
import HeaderComponent from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports:      [CoreModule],
  exports:      [HeaderComponent]
})
export default class HeaderModule {
}
