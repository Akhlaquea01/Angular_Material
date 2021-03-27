import { NgModule } from '@angular/core';
import { TooltipComponent } from '@angular/material/tooltip';
import { Routes, RouterModule } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtontypeComponent } from './buttontype/buttontype.component';
import { CardsComponent } from './cards/cards.component';
import { CheckBoxradioButtonComponent } from './check-boxradio-button/check-boxradio-button.component';
import { DatePikerComponent } from './date-piker/date-piker.component';
import { DilogboxComponent } from './dilogbox/dilogbox.component';
import { DisplayClaasTextComponent } from './display-claas-text/display-claas-text.component';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SelectComponent } from './select/select.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path:'auto-Complete' , component:AutoCompleteComponent },
  {path:'badges' , component:BadgesComponent },
  {path:'buttontype' , component:ButtontypeComponent },
  {path:'cards' , component:CardsComponent },
  {path:'checkbox-radio' , component:CheckBoxradioButtonComponent },
  {path:'datepicker' , component:DatePikerComponent },
  {path:'dialog' , component:DilogboxComponent },
  {path:'display' , component:DisplayClaasTextComponent },
  {path:'expansion' , component:ExpansionPanelsComponent },
  {path:'grid' , component:GridListComponent },
  {path:'input' , component:InputComponent },
  {path:'list' , component:ListComponent },
  {path:'menu' , component:MenuComponent },
  {path:'navbar' , component:NavbarComponent },
  {path:'progress' , component:ProgressBarComponent },
  {path:'select' , component:SelectComponent },
  {path:'snackbar' , component:SnackbarComponent },
  {path:'Stepper' , component:StepperComponent },
  {path:'tabs' , component:TabsComponent },
  {path:'tooltip' , component:TooltipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
