 import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'AdminDashBoard'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('AdminDashBoard');
//   });

//   it('should render title in a h1 tag', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to AdminDashBoard!');
//   });
// });


describe('AppComponent',()=>{
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[
        AppComponent
      ]
    }).compileComponents()
  }))
})

it('display lohith',()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const debug = fixture.debugElement.componentInstance;
  expect(debug.title).toEqual('lohith')
})