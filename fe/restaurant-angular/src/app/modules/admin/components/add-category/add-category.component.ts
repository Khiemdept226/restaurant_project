import {Component, OnInit, ViewChild} from '@angular/core';
import {TechModalComponent} from "../../../shared/components/tech-modal/tech-modal.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {Snackbar} from "../../../../util/utils";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @ViewChild('modalAdd') modalAdd!: TechModalComponent;
  value: string | undefined;
  snackBar = new Snackbar(this.messageService)

  selectedFile!: File | null;
  imagePreview!: string | ArrayBuffer | null

  products: any = [];

  formAdd!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private messageService: MessageService) {
    this.initFormAdd();
  }

  ngOnInit(): void {
    this.getCategories()
  }

  initFormAdd() {
    this.formAdd = this.formBuilder.group({
      name: [null, []],
      description: [null, []]
    })
  }

  addCategory() {
    this.modalAdd.show()
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage()
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    // @ts-ignore
    reader.readAsDataURL(this.selectedFile);
  }

  getCategories() {
    this.adminService.getCategoryList().subscribe({
      next: res => {
        console.log(res)
        this.products = res
        // @ts-ignore
        this.products.forEach(value => {
          value.processedImg = 'data:image/jpg;base64,'+ value.returnedImg;
          console.log(value)
        })
      },
      error: err => {
        console.log(err)
      }
    })
  }

  postCategory() {
    console.log(this.formAdd.value)
    const value = this.formAdd.value
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('img', this.selectedFile);
      formData.append('name', value.name);
      formData.append('description', value.description);
      this.adminService.postCategory(formData).subscribe({
        next: res => {
          if (res.id) {
            this.snackBar.displaySuccessful('Add new Category successful')
            this.modalAdd.hide()
          } else {
            this.snackBar.displayError('Add new Category fail')
          }
        },
        error: err => {
          this.snackBar.displayError('Add new Category fail')
        }
      })
    }
  }

  resetDataAfterHide() {
    this.formAdd.reset();
    this.selectedFile = null;
    this.imagePreview = null;
    this.getCategories()
  }
}
