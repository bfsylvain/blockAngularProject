import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopoeiaComponentComponent } from './create-onomatopoeia-component.component';

describe('CreateOnomatopoeiaComponentComponent', () => {
  let component: CreateOnomatopoeiaComponentComponent;
  let fixture: ComponentFixture<CreateOnomatopoeiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOnomatopoeiaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatopoeiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
