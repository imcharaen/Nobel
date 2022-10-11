import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Prizes } from './prizes';
import { MyDataService } from './service/my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nobel';

  listPrizes!: Prizes[];

constructor(private mydataService: MyDataService) { 

  }
    ngOnInit(){
    this.fetchPrizes();

  }

dataSource: any;

  fetchPrizes(){
    this.mydataService.getData().subscribe(data => {
      this.listPrizes = data
    this.dataSource = new MatTableDataSource(this.listPrizes)
      console.log('list of prizes', this.listPrizes)
    })
  }

  displayedColumns: string[] = ['category'];
  //dataSource = ELEMENT_DATA;
}



