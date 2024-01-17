
import { Component, NgZone} from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StagesModel } from 'src/app/components/stages/stages-model';
import { StagesService } from 'src/app/components/stages/stages.service';

@Component({
  selector: 'app-dashboardStudent',
  templateUrl: './dashboardStudent.component.html',
  styleUrls: ['./dashboardStudent.component.scss']
})
export class DashboardStudComponent {
  // public props
  berryConfig;
  navCollapsed: boolean;
  navCollapsedMob = false;
  windowWidth: number;
  navigation: any;
  // Constructor
  constructor(
    private service: StagesService,  
    private zone: NgZone,
    private location: Location,
    private locationStrategy: LocationStrategy
  ) {
   
 

    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }

    if (current_url === baseHref + '/layout/theme-compact' || current_url === baseHref + '/layout/box') {
      this.berryConfig.isCollapse_menu = true;
    }

    this.windowWidth = window.innerWidth;
    // this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
  }

  // public method
  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.coded-navbar')?.classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }
  formAdd = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.required]),
    localisation: new FormControl('', [Validators.required, Validators.required]),
    description: new FormControl('', [Validators.required, Validators.required]),
  })
  fileName: any;

  ngOnInit(): void {

  }

  // save(): void {
  //   if (this.formAdd.status === 'VALID') {
  //     const stage = this.formAdd.value as unknown as StagesModel;
  //     this.service.addStage(stage).subscribe((stage) => {
  //       console.log(stage)
  //       this.ngOnInit()
  //     });
  //   }
  // }

}
