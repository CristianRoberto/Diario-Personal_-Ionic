import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntradasPage } from './entradas.page';

describe('EntradasPage', () => {
  let component: EntradasPage;
  let fixture: ComponentFixture<EntradasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
