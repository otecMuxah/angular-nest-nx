import { Component, Inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Photo } from '@test-repo-na/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'test-repo-na-photo-modal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss'],
})
export class PhotoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Photo) {}
}
