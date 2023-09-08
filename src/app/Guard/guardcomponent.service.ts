import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AdminDashboardService} from '../admin-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class GuardcomponentService implements CanActivate {

  constructor(private _service:AdminDashboardService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Entered in to guard",state.url);
    return true;
  }
}
