import {Injectable} from '@angular/core';

import CallServiceMock from 'src/app/analyzer/shared/services/mocks/call.service.mock';

@Injectable({providedIn: 'root'})
export default class CallService extends CallServiceMock {
}
