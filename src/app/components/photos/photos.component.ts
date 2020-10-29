 
import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
import { SharedataService } from '../../services/sharedata.service';
import { UserDatanew } from '../../model/userdeta';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
 
  isplayedColumns: string[] = ['id', 'albumId', 'title','url','thumbnailUrl'];
  dataSource: MatTableDataSource<UserDatanew>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:SharedataService) {  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(); // create new object
    this.getServiceData();
   }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  getServiceData() {
       this.service.getData().subscribe((data: {}) => {
      console.log(data[2]);
      console.log('Data');
      console.log(this.dataSource.data = data[2]);
      this.dataSource.data = data[2]; // on data receive populate dataSource.data array
      return data[2];
   });
 }
  

}
