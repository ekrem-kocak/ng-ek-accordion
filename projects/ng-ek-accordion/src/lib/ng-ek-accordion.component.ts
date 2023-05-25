import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-ek-accordion',
  template: `
    <div
      class="ng-ek-accordion-container"
      [class.show]="show"
      [ngClass]="styleClass"
    >
      <button class="btn-ek-primary" (click)="show = !show">
        <span>{{ header }}</span>

        <i *ngIf="icon" [ngClass]="icon || ''"></i>

        <svg
          *ngIf="!icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <div class="ng-ek-accordion-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./ng-ek-accordion.component.scss'],
})
export class NgEkAccordionComponent {
  @Input() styleClass: string | null = null;
  @Input() header: string = 'Click';
  @Input() icon: string | null = null;

  show = false;
}
