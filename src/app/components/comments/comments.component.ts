 
import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
import { SharedataService } from '../../services/sharedata.service';
import { CommentData } from '../../model/comment-data';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  isplayedColumns: string[] = ['id', 'postId', 'name','email','body'];
  dataSource: MatTableDataSource<CommentData>;

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
      console.log(data[3]);
      console.log('Comment Data');
      console.log(this.dataSource.data = data[3]);
      this.dataSource.data = data[3]; // on data receive populate dataSource.data array
      return data[3];
   });
 }
   
 }
