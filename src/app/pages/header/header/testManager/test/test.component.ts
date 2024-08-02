import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { id } from '@swimlane/ngx-charts';
import { AddSectionComponent } from '../../../../dynamic/AddSection/add-section/add-section.component';
import { AddTestComponent } from './AddTest/add-test/add-test.component';
import { TestService } from '../../../../../services/Test/test.service';
import { UpdateTestComponent } from './UpdateTest/update-test/update-test.component';

interface Test {
  id: number;
  name: string;
  description: string;
}


@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  tests: any[] = [];

  
  ngOnInit() {
  
    this.getAlltest();
  }

  constructor(private _dialogue: MatDialog,private _test:TestService){
  }

  getAlltest() {
    this._test.getTest().subscribe(data => {
      this.tests = data;
    });
  }

  openAddTest() {
    this._dialogue.open(AddTestComponent);
  }

  openUpdate(id: any) {
    this._dialogue.open(UpdateTestComponent, {
      data: { id: id }
    });
  }


  handleUpdate(updatedTest: Test) {
    const index = this.tests.findIndex(test => test.id === updatedTest.id);
    if (index !== -1) {
      this.tests[index] = updatedTest;
    }
  }

  
  confirmDeleteTest(id: number) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.deleteTest(id);
    }
  }

  deleteTest(id: number) {
    this._test.deleteTestById(id).subscribe(res => {
      this.getAlltest();
    });
  }

}
