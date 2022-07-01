import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import * as data from '../../../product-fixtures.json';
import { Router } from '@angular/router';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
	selector: 'app-product-list-page',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'sku', 'cost', 'color', 'actions'];
  dataSource: MatTableDataSource<any>;
  usersArr: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) {
    // Create 100 users
    this.usersArr = Array.from(data);

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.usersArr);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteItem(i: any) {
	// this.usersArr = this.usersArr.find((user:any) => user.sku === i);
	// console.log(this.usersArr)

	// find the index of of i in this.users 
	const index = this.usersArr.findIndex((user:any) => user.sku === i);
	// remove the item from the array
	this.usersArr.splice(index, 1);
	// update the data source
	this.dataSource = new MatTableDataSource(this.usersArr);
	console.log(this.usersArr)
  }

  routeTo(i: any) {	
	// route to page product-details
	this.router.navigate([`/product-details/${i}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */