import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() showsTooltip = true;
  @Input() tooltipText = 'Default tooltip text';
  @Input() topPosition = 215;
  @Input() leftPosition = 400;
}
