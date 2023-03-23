import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@test-repo-na/ui/shared/env';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: {
            API_URL: 'xxx',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
