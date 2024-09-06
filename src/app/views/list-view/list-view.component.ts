import { Component } from '@angular/core';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';
import { NgIf, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [TooltipComponent, SlicePipe, NgIf],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  reactors = [
    { name: 'Pressurized Water Reactor (PWR)' },
    { name: 'Boiling Water Reactor (BWR)' },
    { name: 'Advanced Gas-Cooled Reactor (AGR)' },
    { name: 'Light Water Graphite-Moderated Reactor (LWGR)' },
    { name: 'Fast Neutron Reactor (FNR)' },
    { name: 'Operable Nuclear Power Plants' }
  ];

  showsTooltiop = false;
  tooltipText = 'This is default parent component text';
  topPositon: any;
  leftPosition: any;

  onMouseover (tooltipText: string, event: MouseEvent) {
    this.showsTooltiop = true;
    this.tooltipText = tooltipText;
    this.topPositon = event.clientY;
    this.leftPosition = event.clientX;
  }

  onMouseout () {
    this.showsTooltiop = false;
    this.tooltipText = '';
    this.topPositon = null;
    this.leftPosition = null;
  }
}
