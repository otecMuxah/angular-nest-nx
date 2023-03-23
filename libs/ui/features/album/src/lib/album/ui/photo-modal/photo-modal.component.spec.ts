import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoModalComponent } from './photo-modal.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';
import { Photo } from '@test-repo-na/models';

describe('PhotoModalComponent', () => {
  let component: PhotoModalComponent;
  let fixture: ComponentFixture<PhotoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoModalComponent, MatDialogModule, NgOptimizedImage],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { url: 'xxx' } as Photo,
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
