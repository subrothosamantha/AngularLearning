import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOutputComponent } from './todo-output.component';

describe('TodoOutputComponent', () => {
  let component: TodoOutputComponent;
  let fixture: ComponentFixture<TodoOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
