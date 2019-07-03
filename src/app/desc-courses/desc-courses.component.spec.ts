import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCoursesComponent } from './desc-courses.component';

describe('DescCoursesComponent', () => {
  let component: DescCoursesComponent;
  let fixture: ComponentFixture<DescCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
