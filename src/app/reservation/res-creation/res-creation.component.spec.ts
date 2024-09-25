import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResCreationComponent } from './res-creation.component';

describe('ResCreationComponent', () => {
  let component: ResCreationComponent;
  let fixture: ComponentFixture<ResCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
