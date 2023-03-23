import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBoxComponent } from './user-box.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserBoxComponent', () => {
  let component: UserBoxComponent;
  let fixture: ComponentFixture<UserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBoxComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
