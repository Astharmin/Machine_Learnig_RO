import { PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Prediction } from '../../types/types';

@Component({
  selector: 'app-prediction',
  imports: [UpperCasePipe, PercentPipe],
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.css'
})
export class PredictionComponent {
@Input({required: true}) prediction: Prediction | null = null;
}
