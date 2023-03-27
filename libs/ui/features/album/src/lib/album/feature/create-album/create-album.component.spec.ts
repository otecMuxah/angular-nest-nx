import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlbumComponent } from './create-album.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@test-repo-na/ui/shared/env';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateAlbumComponent', () => {
  let component: CreateAlbumComponent;
  let fixture: ComponentFixture<CreateAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreateAlbumComponent,
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: {
            API_URL: 'xxx',
          },
        },
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
