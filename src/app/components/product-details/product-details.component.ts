import { Component, OnInit } from '@angular/core';
import * as data from '../../../product-fixtures.json';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	users: any;
	name = new FormControl('');
	cost = new FormControl('');
	color = new FormControl('');
	description = new FormControl('');
	type = new FormControl('');

  constructor(
	private route: ActivatedRoute,
	private router: Router
	) {
	this.users = Array.from(data);
   }

  ngOnInit(): void {
	// get the route params
	const id = this.route.snapshot.paramMap.get('id');
	console.log(id);
	this.users = Array.from(data);
	this.users = this.users.find((user:any) => user.sku === id);
	console.log(this.users)
  }

  updateName() {
	// get the value of the html field
	var inputValueName = (<HTMLInputElement><unknown>document.getElementById("name")).value;
	var inputValueType = (<HTMLInputElement><unknown>document.getElementById("type")).value;
	var inputValueDescription = (<HTMLInputElement><unknown>document.getElementById("description")).value;
	var inputValueColor = (<HTMLInputElement><unknown>document.getElementById("color")).value;
	var inputValueCost = (<HTMLInputElement><unknown>document.getElementById("cost")).value;

	// update this.users array with new value for name
	if(inputValueName === '') {
	} else {
		this.users.name = inputValueName;
	}
	if(inputValueType === '') {
	} else {
		this.users.type = inputValueType;
	}
	if(inputValueDescription === '') {
	} else {
		this.users.description = inputValueDescription;
	}
	if(inputValueColor === '') {
	} else {
		this.users.color = inputValueColor;
	}
	if(inputValueCost === '') {
	} else {
		this.users.cost = inputValueCost;
	}
	this.users.price = inputValueCost;

	console.log(this.users)

	this.router.navigate([`/product-list`]);
  }


}
