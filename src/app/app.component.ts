import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';``

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private http: HttpClient) { }
	title = 'app';

	url = 'http://5c78b1f83a89af0014cd7109.mockapi.io/test/documents';

	documents = [];

	params = {
		page : 1,
		limit: 5,
		sortBy: 'FirstName',
		order: 'asc'
	}

	ngOnInit() {
		this.fetch();
	}

	fetch() {
		const fetchUrl = this.url+'?page='+this.params.page+'&limit='+this.params.limit+'&sortBy='+this.params.sortBy+'&order='+this.params.order;
		this.http.get(fetchUrl).subscribe(
			response => {
				this.documents = <any[]>(response);
				console.log(this.documents);
			}
		);
	}

	columns = [
		{'name':'Name', 'label':'Product', 'sortable':true},
		{'name':'Price', 'label':'Price', 'sortable':true, template:'PriceTemplate', tooltip:'Plus shipping'},
		{'name':'Color', 'label':'Color', 'sortable':false},
		{'name':'SellerCity', 'label':'Ships From', 'sortable':false, template:'SellerTemplate'},
		{'name':'ID', 'label':'More Info', 'sortable':false, template:'MoreInfoTemplate'}
	];

	onRefetch(event) {
		this.params = event.params;
		this.fetch();
	}

	showMoreInfo(id) {
		alert(`This Product is only available until Until ${this.documents.filter(function(document) { return document.ID == id; })[0].AvailableUntil}`);
	}
}
