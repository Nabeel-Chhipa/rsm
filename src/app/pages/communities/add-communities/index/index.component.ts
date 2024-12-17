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
propertyType = [
  {
    'id': 1,
    'name': 'Residential Appartments',
  },
  {
    'id': 2,
    'name': 'Offices',
  },
  {
    'id': 3,
    'name': 'Shopping Mall',
  },
  {
    'id': 4,
    'name': 'Shopping Mall & Residential',
  },
  {
    'id': 5,
    'name': 'Housing Society',
  },
];
blocks = [
  {
    'id': 1,
    'name': 'Flats'
  },
  {
    'id': 2,
    'name': 'Shops'
  },
  {
    'id': 3,
    'name': 'Offices'
  },
  {
    'id': 4,
    'name': 'Parking'
  }
]
blockType = [
  {
    'id': 1,
    'name': 'House'
  },
  {
    'id': 2,
    'name': 'Flats'
  },
  {
    'id': 3,
    'name': 'Portion'
  },
  {
    'id': 4,
    'name': 'Shop'
  },
  {
    'id': 5,
    'name': 'Show room'
  },
  {
    'id': 6,
    'name': 'Office'
  }
]
blockCategory = [
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
    'name': 'Luxury Appartment'
  },
  {
    'id': 4,
    'name': 'Penthouse'
  }
]
units = [
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
    'name': 'Luxury Appartment'
  },
  {
    'id': 4,
    'name': 'Penthouse'
  }
]
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

  selectedValue = ['Fashion', 'Style', 'Brands', 'Puma'];
  public items: string[] = ['Fashion', 'Style', 'Brands', 'Puma'];
}
