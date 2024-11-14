import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
// import { NavigationComponent } from '../navigation/navigation.component';
// import { MastheadComponent } from '../masthead/masthead.component';
import { ServicesComponent } from '../services/services.component';
import { PortfolioGridComponent } from '../portfolio-grid/portfolio-grid.component';
import { AboutComponent } from '../about/about.component';
import { TeamComponent } from '../team/team.component';
import { ClientsComponent } from '../clients/clients.component';
import { ContactComponent } from '../contact/contact.component';
// import { FooterComponent } from '../footer/footer.component';
import { PortfolioModalsComponent } from '../portfolio-modals/portfolio-modals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ServicesComponent,PortfolioGridComponent,AboutComponent
    ,TeamComponent,ClientsComponent,ContactComponent,PortfolioModalsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
