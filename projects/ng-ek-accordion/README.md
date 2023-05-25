# Angular Accordion

Accordion groups a collection of contents in tabs.

## Installation

```
npm install ng-ek-accordion --save
```

## Available Angular Versions

#### Angular 15

### Properties

| @Input()   | Type   | Required | Default |
| ---------- | ------ | -------- | ------- |
| styleClass | string | optional | null    |
| header     | string | optional | 'Click' |
| icon       | string | optional | null    |

## DEMO

[Try the Demo in StackBlitz](https://stackblitz.com/edit/ng-ek-accordion)

![Alt Text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmNkNzYxYTgyNjYwNTM0MzQ4YWQ5NDYxMzE4MWQ4ZGMzNzgzMjExMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/i0KL36Tcg0C80C1Qfq/giphy.gif)

## Usage

First, import the NgEkAccordionModule to your module:

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgEkAccordionModule } from "ng-ek-accordion";
import { AppComponent } from "./app";

@NgModule({
  imports: [BrowserModule, NgEkAccordionModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```typescript
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NgEkAccordionModule],
  template: `
    <div class="p-2">
      <ng-ek-accordion styleClass="mb-3">
        <div style="padding: 1rem; background-color: red; color: #fff">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo sed
          quaerat, officia quae officiis a? Consequuntur, laborum itaque repellat
          nulla tempore pariatur assumenda, nemo, sed soluta reiciendis illo
          voluptatum?
        </div>
      </ng-ek-accordion>

      <ng-ek-accordion header="Show My Form" icon="fa-solid fa-circle-right">
        <form class="p-3">
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </ng-ek-accordion>
    </div>
  `,
})
```
