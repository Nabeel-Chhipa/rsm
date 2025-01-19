import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  nature = [
    {
      'id': 1,
      'nature': 0,
      'nature_description': '-',
      'states': false
    },
    {
      'id': 2,
      'nature': 1,
      'nature_description': 'Monthly',
      'states': false
    },
    {
      'id': 3,
      'nature': 2,
      'nature_description': 'Services',
      'states': false
    },
    {
      'id': 4,
      'nature': 3,
      'nature_description': 'Rentals',
      'states': false
    }
  ]
  category = [
    {
      'id': 1,
      'nature': 'Monthly',
      'category': 0,
      'category_description': '-'
    },
    {
      'id': 2,
      'nature': 'Monthly',
      'category': 1,
      'category_description': 'Mosque'
    },
    {
      'id': 3,
      'nature': 'Monthly',
      'category': 2,
      'category_description': 'AC Rentals'
    }
  ]
  type = [
    {
      'id': 1,
      'nature': 'Monthly',
      'category': '0',
      'category_description': '-',
      'type': '-'
    },
    {
      'id': 2,
      'nature': 'Monthly',
      'category': 'Mosque',
      'category_description': '1',
      'type': 'Mosque Zakaat'
    },
    {
      'id': 3,
      'nature': 'Monthly',
      'category': 'Mosque',
      'category_description': '2',
      'type': 'Mosque Chanda'
    }
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
    this.nature = this.nature
      .slice(startItem, endItem);
  }
  
  checkedValGet: any[] = [];
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.nature = this.nature.map((x: any) => ({ ...x, states: ev.target.checked }));
  
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.nature.length; i++) {
      if (this.nature[i].states == true) {
        result = this.nature[i].id;
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
    for (var i = 0; i < this.nature.length; i++) {
      if (this.nature[i].states == true) {
        result = this.nature[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }

}
