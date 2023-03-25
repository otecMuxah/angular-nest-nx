import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListPageComponent } from './user-list-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@test-repo-na/ui/shared/env';

describe('UsersComponent', () => {
  let component: UserListPageComponent;
  let fixture: ComponentFixture<UserListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListPageComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: {
            API_URL: '',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
