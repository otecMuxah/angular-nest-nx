import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
})
export class FileUploadComponent implements ControlValueAccessor {
  value!: File;
  selectedFiles!: File[];
  isDragging = false;
  previews: string[] = [];
  onTouched!: () => void;
  onChange!: (files: File[]) => void;

  onFileSelect(ev: any): void {
    this.selectedFiles = ev?.target?.files;
    this.onChange(this.selectedFiles);

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
    // debugger;
    // const file = ev.target.files.item(0);
    // if (!file) return;
    // this.onChange(file);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   debugger;
    //   this.imageUrl = reader.result as string;
    // };
  }

  writeValue(files: File[]): void {
    debugger;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
      //
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   this.imageUrl = reader.result as string;
      // };
    }
  }

  registerOnChange(fn: (file: File[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement if necessary
  }
  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: any) {
    debugger;
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    this.onFileSelect(event);
  }

  onSubmit() {
    // const formData = new FormData();
    // formData.append('file', this.fileForm.get('file')?.value);
    //
    // this.http.post('your-server-url', formData).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // );
  }
}
