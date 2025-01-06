import { AsyncPipe, NgIf, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Prediction } from '../../types/types';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-image-control',
  standalone: true,
  imports: [AsyncPipe, UpperCasePipe, PercentPipe],
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
}
