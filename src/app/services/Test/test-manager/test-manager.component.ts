import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface Test {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'ngx-test-manager',
  templateUrl: './test-manager.component.html',
  styleUrls: ['./test-manager.component.scss']
})
export class TestManagerComponent {
  tests: Test[] = [
    { id: 1, name: 'Test 1', description: 'Description 1' },
    { id: 2, name: 'Test 2', description: 'Description 2' },
    // Add more initial test data if needed
  ];

  handleDelete(id: number) {
    this.tests = this.tests.filter(test => test.id !== id);
  }

  handleUpdate(updatedTest: Test) {
    const index = this.tests.findIndex(test => test.id === updatedTest.id);
    if (index !== -1) {
      this.tests[index] = updatedTest;
    }
  }
}
