import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterinchildComponent } from './routerinchild.component';

describe('RouterinchildComponent', () => {
  let component: RouterinchildComponent;
  let fixture: ComponentFixture<RouterinchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterinchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterinchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
