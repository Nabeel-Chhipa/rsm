import { Component, ViewChild } from '@angular/core';

// Ck Editer
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addlistingGridData, updatelistingGridData } from 'src/app/store/App-realestate/apprealestate.action';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  propertyForm!: UntypedFormGroup;
  blockForm!: UntypedFormGroup;
  editData: any;
  productslist: any;
  addProperty: any;

  @ViewChild('addBlock', { static: false }) addBlock?: ModalDirective;

  constructor(private formBuilder: UntypedFormBuilder, public store: Store) {
  }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Ecommerce', active: true },
      { label: 'Add Product', active: true }
    ];

    /**
   * Form Validation
   */
    this.propertyForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      bedroom: ['', [Validators.required]],
      bathroom: ['', [Validators.required]],
      area: ['', [Validators.required]],
      price: ['', [Validators.required]],
      agent: ['', [Validators.required]],
      requirement: ['', [Validators.required]],
      location: ['', [Validators.required]],
      img: ['']
    });

    this.blockForm = this.formBuilder.group({
      id: [''],
      blockNo: ['', [Validators.required]],
      blockTitle: [''],
      BlockType: ['', [Validators.required]],
      blockCategory: ['', [Validators.required]],
      blockDescription: [''],
      blockRemarks: [''],
      img: ['']
    });
  }

  
  // File Upload
  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    previewsContainer: false
  };

  uploadedFiles: any[] = [];

  // File Remove
  removeFile(event: any) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }

  // File Upload
  imageURL: any;
  onUploadSuccess(event: any) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
      this.propertyForm.controls['img'].setValue(event[0].dataURL);
    }, 0);
  }

  // Add Property
    saveProperty() {
      if (this.propertyForm.valid) {
        if (this.propertyForm.get('id')?.value) {
          const updatedData = { color: this.editData.color, ...this.propertyForm.value };
          this.store.dispatch(updatelistingGridData({ updatedData }));
        }
        else {
          this.propertyForm.controls['id'].setValue(this.productslist.length + 1)
          const location = this.propertyForm.get('location')?.value;
          const type = this.propertyForm.get('type')?.value;
          const color = (type == 'Villa' ? type == 'Residency' ? 'danger' : 'success' : 'info')
          const newData = {
            type: type,
            color: color,
            location: location,
            ...this.propertyForm.value,
          }
          this.store.dispatch(addlistingGridData({ newData }));
  
        }
        this.propertyForm.reset();
        this.uploadedFiles = [];
        this.addProperty?.hide()
      }
    }

  selectedValue = ['Fashion', 'Style', 'Brands', 'Puma'];
  public items: string[] = ['Fashion', 'Style', 'Brands', 'Puma'];
}
