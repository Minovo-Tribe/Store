import { Component, OnInit } from '@angular/core';
import greetingTime from 'greeting-time';
import { User } from 'src/app/model/user.model';
import { LoadingService } from 'src/app/service/loading.service';
import { StoreService } from 'src/app/service/store.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  greeting: string;
  userData: User;
  sideNavList: Array<any>;
  navList: Array<any>;
  selectedList = [];
  sliderLeft = '0%';

  constructor(
    private userService: UserService,
    private storeService: StoreService,
    public loading: LoadingService
  ) {
    this.storeService.getSideNavList().then((res) => {
      this.sideNavList = res;
      this.navList = res;
    });
  }

  ngOnInit(): void {
    this.userData = this.userService.user;
    this.greeting = `${greetingTime(new Date())}, ${this.userData.name}`;
  }

  selectListItem(list) {
    this.selectedList = list.list;
    this.sliderLeft = '-100%';
    this.sideNavList = [];
  }

  backToMenu() {
    this.sideNavList = this.navList;
    this.sliderLeft = '0%';
    this.selectedList = [];
  }

  ngOnDestroy(): void {}
}
