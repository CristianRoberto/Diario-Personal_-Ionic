import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntradasDetallePage } from './entradas-detalle.page';

describe('EntradasDetallePage', () => {
  let component: EntradasDetallePage;
  let fixture: ComponentFixture<EntradasDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntradasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
