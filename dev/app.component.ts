import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';
import {AccountComponent}   from './users/account.component';
import {LoginComponent}   from './users/login.component';
import {PartageComponent}   from './partages/partage.component';
import {EventComponent}   from './events/event.component';
import {CreateEventComponent}   from './events/createEvent.component';
import {SignupComponent}   from './users/signup.component';

@Component({
    selector: 'my-app',
    template: `<div class="col-sm-3 menu">
                <div class="sidebar-nav">
                  <div class="navbar navbar-default" role="navigation">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <span class="visible-xs navbar-brand">Sidebar menu</span>
                    </div>
                    <div class="navbar-collapse collapse sidebar-navbar-collapse">
                      <ul class="nav navbar-nav">
                        <li class="profileContainer">
                            <div class="col-sm-3">
                                <div class="avatar" style="background-image:url(https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png)">
                                </div>
                            </div>
                            <div class="col-sm-9 actions">
                                <ul class="list-unstyled">
                                    <li> Mon compte </li>
                                    <li> Déconnexion </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menuList active"><a [routerLink]="['Partage']">Accueil</a></li>
                        <li class="menuList"><a [routerLink]="['Event']">Evènements</a></li>
                        <li class="menuList"><a href="#">Petits déjeuner</a></li>
                        <li class="menuList"><a href="#">Déjeuner</a></li>
                        <li class="menuList"><a href="#">Sondage</a></li>
                        <li class="menuList"><a href="#">Gérer le groupe</a></li>
                        <li class="menuList"><a href="#">Déconnexion</a></li>
                      </ul>
                    </div><!--/.nav-collapse -->
                  </div>
                </div>
              </div><router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES,RouterLink]
})
@RouteConfig ([
	{path: '/account', name: 'Account', component: AccountComponent},
  {path: '/login', name: 'Login', component: LoginComponent},
	{path: '/signup', name: 'Signup', component: SignupComponent},
	{path: '/', name: 'Partage', component: PartageComponent},
  {path: '/event', name: 'Event', component: EventComponent},
  {path: '/event/inscrits', name: 'ListeUserEvent', component: EventComponent},
  {path: '/newEvent', name: 'CreateEvent', component: CreateEventComponent}
])


export class AppComponent {

}
