import { Component } from '@angular/core';

// Ck Editer
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
residentOf = [
  {
    'id': 1,
    name: 'One'
  },
  {
    'id': 2,
    name: 'Two'
  },
  {
    'id': 3,
    name: 'Three'
  },
  {
    'id': 4,
    name: 'Four'
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
family = [
  {
    'id': 1,
    'name': 'Family 1'
  },
  {
    'id': 2,
    'name': 'Family 2'
  },
]
familyMember = [
  {
    'id': 1,
    'family': 'Mr. Waseem KUProfessor',
    'unit': 'H-14',
    'name': 'Mr. Ali',
    'relation': 'Head',
    'age': '50 years',
    'Remarks': 'Mr. Waseem KUProfessor',
    'states': false
  },
]

masterSelected!: boolean;

// bread crumb items
  breadCrumbItems!: Array<{}>;
  public Editor = ClassicEditor;
  files: File[] = [];
  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Ecommerce', active: true },
      { label: 'Add Product', active: true }
    ];

  }
  // File Upload
  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    previewsContainer: false
  };

  uploadedFiles: any[] = [];

  // File Upload
  imageURL: any;
  onUploadSuccess(event: any) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 0);
  }

  // File Remove
  removeFile(event: any) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }

  // Page Changed
pageChanged(event: any): void {
  const startItem = (event.page - 1) * event.itemsPerPage;
  const endItem = event.page * event.itemsPerPage;
  this.familyMember = this.familyMember
    .slice(startItem, endItem);
}

checkedValGet: any[] = [];
// The master checkbox will check/ uncheck all items
checkUncheckAll(ev: any) {
  this.familyMember = this.familyMember.map((x: any) => ({ ...x, states: ev.target.checked }));

  var checkedVal: any[] = [];
  var result;
  for (var i = 0; i < this.familyMember.length; i++) {
    if (this.familyMember[i].states == true) {
      result = this.familyMember[i].id;
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
  for (var i = 0; i < this.familyMember.length; i++) {
    if (this.familyMember[i].states == true) {
      result = this.familyMember[i].id;
      checkedVal.push(result);
    }
  }
  this.checkedValGet = checkedVal
  checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
}

  selectedValue = ['Fashion', 'Style', 'Brands', 'Puma'];
  public items: string[] = ['Fashion', 'Style', 'Brands', 'Puma'];
}
