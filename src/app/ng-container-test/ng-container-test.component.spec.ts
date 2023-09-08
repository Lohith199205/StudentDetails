import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerTestComponent } from './ng-container-test.component';

describe('NgContainerTestComponent', () => {
  let component: NgContainerTestComponent;
  let fixture: ComponentFixture<NgContainerTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContainerTestComponent]
    });
    fixture = TestBed.createComponent(NgContainerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
