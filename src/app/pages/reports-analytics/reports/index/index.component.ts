import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
reportListingData = [
  {
    'id': 1,
    'name': 'Chart of Accounts Debit / Credit for all Customers and Vendors (Account Khata +, -, datedwise of Jibran clothes and SS.Brothers)',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate quibusdam fuga consequatur vitae in inventore saepe veniam expedita aliquam.',
  },
  {
    'id': 2,
    'name': 'Inventory (Stock of dresess)',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate quibusdam fuga consequatur vitae in inventore saepe veniam expedita aliquam.',
    'states': false
  },
  {
    'id': 3,
    'name': 'P.O',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate quibusdam fuga consequatur vitae in inventore saepe veniam expedita aliquam.',
    'states': false
  },
  {
    'id': 4,
    'name': 'S.O',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate quibusdam fuga consequatur vitae in inventore saepe veniam expedita aliquam.',
    'states': false
  },
  {
    'id': 5,
    'name': 'Payment Report',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate quibusdam fuga consequatur vitae in inventore saepe veniam expedita aliquam.',
    'states': false
  },
  {
    'id': 6,
    'name': 'Liabilities',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate quibusdam fuga consequatur vitae in inventore saepe veniam expedita aliquam.',
    'states': false
  },
  {
    'id': 6,
    'name': 'Income Statement (Profit Report)',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate quibusdam fuga consequatur vitae in inventore saepe veniam expedita aliquam.',
    'states': false
  },
]

invoiceDataGrid = [
  {
    'id': 1,
    'unit_no': 'MOBILINK ANTENA',
    'Name_Owner_Tenant': '-',
    'previous_balance': '0',
    'JAN_24': '8,580',
    'FEB_24': '8,400',
    'MAR_24': '8,940',
    'APR_24': '9,000',
    'MAY_24': '9,080',
    'JUN_24': '8,640',
    'JUL_24': '8,600',
    'AUG_24': '8,500',
    'SEP_24': '8,700',
    'OCT_24': '9,840',
    'NOV_24': '8,680',
    'DEC_24': '-',
    'Total_dues': '96,960',
    'W_H_T': '-',
    'Rec_Amt': '78,440',
    'Balance': '18,520',
    'states': false
  },
  {
    'id': 2,
    'unit_no': 'MOBILINK ANTENA',
    'Name_Owner_Tenant': ' ',
    'previous_balance': '0',
    'JAN_24': '8,580',
    'FEB_24': '8,400',
    'MAR_24': '8,940',
    'APR_24': '9,000',
    'MAY_24': '9,080',
    'JUN_24': '8,640',
    'JUL_24': '8,600',
    'AUG_24': '8,500',
    'SEP_24': '8,700',
    'OCT_24': '9,840',
    'NOV_24': '8,680',
    'DEC_24': ' ',
    'Total_dues': '96,960',
    'W_H_T': ' ',
    'Rec_Amt': '78,440',
    'Balance': '18,520',
    'states': false
  },
]

ListForm!: UntypedFormGroup;
masterSelected!: boolean;

// bread crumb items
breadCrumbItems!: Array<{}>;
public Editor = ClassicEditor;
files: File[] = [];
isTableClosed: boolean = false;

constructor(private formBuilder: UntypedFormBuilder) { }

ngOnInit(): void {
  /**
   * BreadCrumb
   */
  this.breadCrumbItems = [
    { label: 'Report & Analytics ', active: true },
    { label: 'Reports', active: true }
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
  this.reportListingData = this.reportListingData
    .slice(startItem, endItem);
}

checkedValGet: any[] = [];
// The master checkbox will check/ uncheck all items
checkUncheckAll(ev: any) {
  this.reportListingData = this.reportListingData.map((x: any) => ({ ...x, states: ev.target.checked }));

  var checkedVal: any[] = [];
  var result;
  for (var i = 0; i < this.reportListingData.length; i++) {
    if (this.reportListingData[i].states == true) {
      result = this.reportListingData[i].id;
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
  for (var i = 0; i < this.reportListingData.length; i++) {
    if (this.reportListingData[i].states == true) {
      result = this.reportListingData[i].id;
      checkedVal.push(result);
    }
  }
  this.checkedValGet = checkedVal
  checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
}

selectedValue = ['Fashion', 'Style', 'Brands', 'Puma'];
public items: string[] = ['Fashion', 'Style', 'Brands', 'Puma'];

showInvoiceTable() {
  this.isTableClosed = this.isTableClosed = true;
}
}