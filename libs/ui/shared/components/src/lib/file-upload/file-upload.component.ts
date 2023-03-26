import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'test-repo-na-file-upload',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent implements ControlValueAccessor {
  cdr = inject(ChangeDetectorRef);
  selectedFiles!: File[] | FileList | null;
  isDragging = false;
  previews: string[] = [];
  onTouched!: () => void;
  onChange!: (files: File[] | FileList | null) => void;

  onFileSelect(ev: Event): void {
    this.selectedFiles = (ev.target as HTMLInputElement).files?.length
      ? (ev.target as HTMLInputElement).files
      : (ev as DragEvent).dataTransfer?.files || [];
    this.onChange(this.selectedFiles);

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
          this.cdr.markForCheck();
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  writeValue(files: File[]): void {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        this.selectedFiles &&
          this.selectedFiles[i] &&
          reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  registerOnChange(fn: (file: File[] | FileList | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    this.onFileSelect(event);
  }
}
