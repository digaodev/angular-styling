
import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';

import { itemStateTrigger, markedStateTrigger, slideStateTrigger } from './animations';
import { routeFadeStateTrigger, routeSlideStateTrigger } from './../shared/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [markedStateTrigger, itemStateTrigger, slideStateTrigger, routeFadeStateTrigger, routeSlideStateTrigger]
})
export class ProjectsComponent implements OnInit {
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  projects: Project[];
  displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if (this.projects.length >= 1) {
            this.displayedProjects.push(this.projects[0]);
          }
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    // this.createNew = false;
    setTimeout(() => {
      this.projects.unshift(project);
    }, 400);
  }
}
