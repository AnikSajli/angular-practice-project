import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy{

  @Output()
  featureSelected = new EventEmitter<string>();
  private userSub: Subscription;
  isAuthenticated = false;
  constructor( private authService: AuthService,
               private dataStorageService: DataStorageService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }

  saveData(): void {
    this.dataStorageService.storeRecipes();
  }

  fetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe(recipes =>{
      console.log(recipes);
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
