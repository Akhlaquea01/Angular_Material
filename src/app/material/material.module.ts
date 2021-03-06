import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';







const materialComponent = [
  MatButtonModule,MatCardModule,MatTabsModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatAutocompleteModule,MatCheckboxModule,
  MatDividerModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,
  MatButtonToggleModule,MatTooltipModule,MatSnackBarModule,MatDialogModule,
  MatIconModule,
  MatBadgeModule,MatExpansionModule,
  MatProgressSpinnerModule,
  MatToolbarModule,MatGridListModule,
  MatSidenavModule,
  MatMenuModule,MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    materialComponent

  ],
  exports: [
    materialComponent
  ]
})
export class MaterialModule { }
