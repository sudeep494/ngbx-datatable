# Get Started with NGBX-DATA-TABLE

## Install the ng-bootstrap package in your project
Run `npm install ng-bootstrap`

## Install the package
Run `npm install ngbx-data-table`

## Import the package
Run
`import { NgbxDataTableModule } from 'ngbx-data-table';`

Add Module to your module imports `NgbxDataTableModule`

## Demo
https://sudeep494.github.io/ngbx-data-table-demo/index.html

## Use the Package - example

	<ngbx-data-table
		[documents]="documents"
		[columns]="columns"
		[limit] = "params.limit"
		[sortBy] = "params.sortBy"
		[order] = "params.order"
		count = "33"
		[templates] = "{'MoreInfoTemplate':MoreInfoTemplate,'PriceTemplate':PriceTemplate,'SellerTemplate':SellerTemplate}"
		(refetch)="onRefetch($event)">

	</ngbx-data-table>

	<ng-template #PriceTemplate let-document="document">
		$ {{document.Price}}
	</ng-template>



## Define your columns
```
columns = [
	{'name':'Name', 'label':'Product', 'sortable':true},
	{'name':'Price', 'label':'Price', 'sortable':true, template:'PriceTemplate', tooltip:'Plus Shipping'},
	{'name':'Color', 'label':'Color', 'sortable':false},
	{'name':'SellerCity', 'label':'Ships From', 'sortable':false, template:'SellerTemplate'},
	{'name':'ID', 'label':'More Info', 'sortable':false, template:'MoreInfoTemplate'}
];
```

## Define your params
```
params = {
	page : 1,
	limit: 5,
	sortBy: 'FirstName',
	order: 'asc'
}
```

##Fetch and Define your fetch handler

```
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

onRefetch(event) {
	this.params = event.params;
	this.fetch();
}
```
