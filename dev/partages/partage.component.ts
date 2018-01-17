import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,RouterLink} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {PartageService} from './partage.service';
import {Partage} from './partage';
import {NgForm}    from 'angular2/common';

@Component({
   selector: 'index',
   providers: [HTTP_PROVIDERS, PartageService]

})
@View({
	directives: [RouterLink],
	templateUrl: '../views/homepage.ejs'
})

export class PartageComponent {
  constructor(private _PartageService: PartageService){}

  model = new Partage(null,null,null,null,null);
  Partages: Partage[];
  errorMessage = "Une erreur est survenue lors de la récupération des partages :/ ";
  mesPartages: Partage[];

  ngOnInit() { this.getPartages(); }

  public create(model: Partage) {
    //this.model.user_id = 1;

    this.model.dateCreation = new Date();
    this._PartageService.create(this.model)
             .subscribe(
              partages => this.Partages.push(partages),
              error => this.handleError);
    //this.model.content = null;
  }

  handleError() {
		console.log("error");
  }

  public getPartages() {
      this._PartageService.getPartages()
                        .subscribe(
                          partage => this.Partages = partage,
                          error => this.errorMessage = <any> error
                        );

  }

}
