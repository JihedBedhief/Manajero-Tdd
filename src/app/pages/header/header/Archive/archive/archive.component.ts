import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  projectsData: any[] = [];
  tasksData: any[] = [];
  testsData: any[] = [];
  
  // Pagination variables for each table
  currentPageProjects: number = 1;
  currentPageTasks: number = 1;
  currentPageTests: number = 1;
  itemsPerPage: number = 5; // Number of items per page

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArchiveData();
  }

  loadArchiveData(): void {
    this.http.get<any[]>('http://localhost:9090/api/archive')  // Adjust the URL to your API endpoint
      .pipe(
        map(response => {
          if (!response || response.length === 0) {
            throw new Error('No data received from server');
          }

          const data = response[0];  // Assuming data is in the first element
          if (data.projects && data.tasks && data.tsts) {
            this.projectsData = data.projects;
            this.tasksData = data.tasks;
            this.testsData = data.tsts;
          } else {
            throw new Error('Archive data is missing one or more expected fields');
          }
        }),
        catchError(error => {
          console.error('Error loading archive data:', error);
          return of([]);
        })
      )
      .subscribe();
  }

  // Get paginated data
  getPaginatedData(data: any[], currentPage: number): any[] {
    const start = (currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return data.slice(start, end);
  }

  // Change page
  changePage(page: number, table: string): void {
    switch (table) {
      case 'projects':
        this.currentPageProjects = page;
        break;
      case 'tasks':
        this.currentPageTasks = page;
        break;
      case 'tests':
        this.currentPageTests = page;
        break;
    }
  }

  // Calculate total pages
  getTotalPages(data: any[]): number {
    return Math.ceil(data.length / this.itemsPerPage);
  }
}
