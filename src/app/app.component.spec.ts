import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {AddressComponent} from './address/address.component';
import {AddressService} from './common/address.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AddressComponent
      ],
      providers: [
       AddressService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.title);
  }));
});
