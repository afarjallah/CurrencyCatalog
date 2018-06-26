import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesCatalogComponent } from './currencies-catalog.component';

describe('CurrenciesCatalogComponent', () => {
  let component: CurrenciesCatalogComponent;
  let fixture: ComponentFixture<CurrenciesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
