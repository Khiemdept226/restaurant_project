import {Component, OnInit, ViewChild} from '@angular/core';
import {TechModalComponent} from "../../../shared/components/tech-modal/tech-modal.component";
import {FormBuilder, FormGroup} from "@angular/forms";

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @ViewChild('modalAdd') modalAdd!: TechModalComponent;
  value: string | undefined;

  products = [
    {
      id: '1000',
      name: 'Bamboo Watch 1',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
    },
    {
      id: '1001',
      name: 'Bamboo Watch 2',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',

    },
    {
      id: '1003',
      name: 'Bamboo Watch 3',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
    },
  ];

  formAdd!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initFormAdd();
  }

  ngOnInit(): void {
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

}
