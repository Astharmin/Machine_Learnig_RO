import { AsyncPipe, NgIf, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Prediction } from '../../types/types';
import { UploadService } from '../../services/upload.service';
import { api_key } from '../../keys/api_keys';
import { ImageComponent } from "../image/image.component";
import { PredictionComponent } from "../prediction/prediction.component";

@Component({
  selector: 'app-image-control',
  standalone: true,
  imports: [AsyncPipe, UpperCasePipe, PercentPipe, ImageComponent, PredictionComponent],
  templateUrl: './image-control.component.html',
  styleUrl: './image-control.component.css'
})
export class ImageControlComponent {
  imageUrl: string | null = null;
  selectedFile: File | null = null;
  prediction$: Observable < Prediction[] | null>;
  loading$: Observable <boolean>;
  error$: Observable <string | null>;

  constructor(private uploadImageService: UploadService){
    this.prediction$ = this.uploadImageService.prediction$
    this.loading$ = this.uploadImageService.loading$
    this.error$ = this.uploadImageService.error$
  }

  onFileSelected(event: Event): void{
    const element = event.currentTarget as HTMLInputElement;
    const file = element.files?.[0];
    if (file) {
      this.selectedFile = file;
      this.imageUrl = URL.createObjectURL(file);
    }
  }

  uploadImage(): void {
    if (this.selectedFile) {
      of(
        this.uploadImageService.uploadImage(this.selectedFile,
          `${api_key}/predict`)
      ).subscribe({
        next: (v) => (this.prediction$ = v),
        error: (error) => (this.error$ = error),
        complete: () => console.info('complete')
      });
    } else {
      console.error('No file selected');
    }
  }
}