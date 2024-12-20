import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Ck Editer
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-invoice-receiving',
  templateUrl: './invoice-receiving.component.html',
  styleUrl: './invoice-receiving.component.scss'
})
export class InvoiceReceivingComponent {
clientType = [
  {
    'id': 1,
    name: 'Builder'
  },
  {
    'id': 2,
    name: 'Union'
  },
  {
    'id': 3,
    name: 'Contractor'
  },
  {
    'id': 4,
    name: 'Consultant'
  },
]
clientStatus = [
  {
    'id': 1,
    'name': 'Active'
  },
  {
    'id': 2,
    'name': 'Inactive'
  },
]
invoiceType = [
  {
    'id': 1,
    'name': 'Union Charges'
  },
  {
    'id': 2,
    'name': 'Maintenance Charges'
  },
  {
    'id': 3,
    'name': 'Club Charges'
  },
  {
    'id': 4,
    'name': 'Other Charges'
  }
]
block = [
  {
    'id': 1,
    'name': 'All'
  },
  {
    'id': 2,
    'name': 'A'
  },
  {
    'id': 3,
    'name': 'B'
  }
]
category = [
  {
    'id': 1,
    'name': 'Studio Appartment'
  },
  {
    'id': 2,
    'name': 'Duplex'
  },
  {
    'id': 3,
    'name': 'Penthouse'
  }
]
unit = [
  {
    'id': 1,
    'name': 'B1'
  },
  {
    'id': 2,
    'name': 'B2'
  },
  {
    'id': 3,
    'name': 'D101'
  },
  {
    'id': 3,
    'name': 'P511'
  }
]
status = [
  {
    'id': 1,
    'name': 'Not Issued'
  },
  {
    'id': 2,
    'name': 'Payment Received'
  },
  {
    'id': 3,
    'name': 'Payment Overdue'
  }
]
propertiesData = [
  {
    'id': 1,
    'block': 'Block-A',
    'category': 'Studio Appartment',
    'unit': 'B1',
    'poc_Name': 'Mr. Ali',
    'ammount': '10,00000',
    'received': '1,00000',
    'balance': '20,000',
    'states': false
  },
  {
    'id': 2,
    'block': 'Block-B',
    'category': 'Duplex',
    'unit': 'B2',
    'poc_Name': 'Mr. Ahmed',
    'ammount': '12,00000',
    'received': '8,00000',
    'balance': '20,000',
    'states': false
  },
  {
    'id': 3,
    'block': 'Block-A',
    'category': 'Penthouse',
    'unit': 'B2',
    'poc_Name': 'Mr. Hasan',
    'ammount': '13,00000',
    'received': '5,00000',
    'balance': '20,000',
    'states': false
  },
  {
    'id': 4,
    'block': 'Block-c',
    'category': 'Studio Appartment',
    'unit': 'B3',
    'poc_Name': 'Mr. Hasan',
    'ammount': '18,00000',
    'received': '7,00000',
    'balance': '20,000',
    'states': false
  },
]

ListForm!: UntypedFormGroup;
masterSelected!: boolean;

// bread crumb items
breadCrumbItems!: Array<{}>;
public Editor = ClassicEditor;
files: File[] = [];

constructor(private formBuilder: UntypedFormBuilder) { }

ngOnInit(): void {
  /**
   * BreadCrumb
   */
  this.breadCrumbItems = [
    { label: 'Ecommerce', active: true },
    { label: 'Add Product', active: true }
  ];

  this.ListForm = this.formBuilder.group({
    id: [''],
    invoiceType: ['', [Validators.required]],
    fromDate: ['', [Validators.required]],
    toDate: ['', [Validators.required]],
    status: ['', [Validators.required]],
  });

}

// Page Changed
pageChanged(event: any): void {
  const startItem = (event.page - 1) * event.itemsPerPage;
  const endItem = event.page * event.itemsPerPage;
  this.propertiesData = this.propertiesData
    .slice(startItem, endItem);
}

checkedValGet: any[] = [];
// The master checkbox will check/ uncheck all items
checkUncheckAll(ev: any) {
  this.propertiesData = this.propertiesData.map((x: any) => ({ ...x, states: ev.target.checked }));

  var checkedVal: any[] = [];
  var result;
  for (var i = 0; i < this.propertiesData.length; i++) {
    if (this.propertiesData[i].states == true) {
      result = this.propertiesData[i].id;
      checkedVal.push(result);
    }
  }

  this.checkedValGet = checkedVal;
  checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
}
// Select Checkbox value Get
onCheckboxChange(e: any) {
  var checkedVal: any[] = [];
  var result
  for (var i = 0; i < this.propertiesData.length; i++) {
    if (this.propertiesData[i].states == true) {
      result = this.propertiesData[i].id;
      checkedVal.push(result);
    }
  }
  this.checkedValGet = checkedVal
  checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
}

selectedValue = ['Fashion', 'Style', 'Brands', 'Puma'];
public items: string[] = ['Fashion', 'Style', 'Brands', 'Puma'];
}
