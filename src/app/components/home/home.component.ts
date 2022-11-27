import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  hostDirectives: [HighlightDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() name = 'standalone component';

}
