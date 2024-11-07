import { Component } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {

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
