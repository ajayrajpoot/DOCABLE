import { Component, OnInit } from '@angular/core';

import $ from "jquery";
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  result: any = [];
  pFrm: FormGroup;
  cColl1: any = '1o'
  cColl2: any = '2c'
  cColl3: any = '3c'

  alig: any = ['Engineering', 'Design', 'Sales']
  alig4: any = ['Business', 'People', 'Process', 'Customer']

  userList: any = [ { name: "Rahmat" }, { name: 'Swati' }, { name: 'Rajni' },{ name: 'Mayank' }];
  showUserList: any = -1;
  constructor(public fb: FormBuilder) {
    console.log("localStorage.get('result')", localStorage.getItem('result'))
    if (localStorage.getItem('result') != null) {
      this.result = JSON.parse(localStorage.getItem('result'));
    }
  }
  onFocush(i) {

    setTimeout(() => {
      this.showUserList = i;
    }, 100)
    this.showUserList = i;
  }
  onFocushout(i) {
    setTimeout(() => {
      this.showUserList = -1;
    }, 200)
  }
  collapseMe(c) {

    if (c == '1') {
      this.cColl2 = '2c';
      this.cColl3 = '3c';

      if (this.cColl1 == '1o') {
        this.cColl1 = '1c';
      } else {
        this.cColl1 = '1o';
      }
    } else if (c == '2') {
      this.cColl1 = '1c';
      this.cColl3 = '3c';

      if (this.cColl2 == '2o') {
        this.cColl2 = '2c';
      } else {
        this.cColl2 = '2o';
      }
    } else if (c == '3') {
      this.cColl1 = '1c';
      this.cColl2 = '2c';

      if (this.cColl3 == '3o') {
        this.cColl3 = '3c';
      } else {
        this.cColl3 = '3o';
      }
    }
  }

  bingFrnLogin() {
    this.pFrm = this.fb.group({
      title: ['', Validators.required],
      timeLineFrom: [''],
      timeLineTo: [''],
      owner: ['Individual'],
      ownerName: this.fb.array([this.fb.group({
        name: ['']
      })]),
      alignment: ['Functional Skill'],
      Type: ['2'],

      keyResult1: [''],
      keyResult2: [''],
      weightage: [''],
      privacy: ['']
    });

    this.pFrm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.pFrm);
    });
  }


  addNewCompany() {
    let control = <FormArray>this.pFrm.controls.ownerName;
    control.push(
      this.fb.group({
        name: ['']
      })
    )
  }
  deleteCompany(index) {
    let control = <FormArray>this.pFrm.controls.ownerName;
    if (control.length > 1) {
      control.removeAt(index)
    }
  }
  setValue(index, value) {
    let control = <FormArray>this.pFrm.controls.ownerName;
    control.controls[index].get('name').setValue(value);
  }
  onSubmit() {
    this.markFormGroupTouched(this.pFrm);

    this.result.push(this.pFrm.value);
    console.log(">>>>>this.result>>>", this.result)
    localStorage.setItem("result", JSON.stringify(this.result));
    this.logValidationErrors();
    this.bingFrnLogin();
  }
  ngOnInit() {
    this.bingFrnLogin();
  }
  markFormGroupTouched(formGroup: FormGroup=this.pFrm) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  formErrors = {
    'title': '',
    'timeLineFrom': '',
    'timeLineTo': '',
    'owner': '',
    'ownerName': '',
    "name": '',
    'alignment': ''
  };

  validationMessages = {
    'title': {
      'required': 'Tile is required.'
    },
    'owner': {
      'required': 'Email is required.'
    },
    'ownerName': {
      'required': 'Skill Name is required.',
    },
    'alignment': {
      'required': 'Experience is required.',
    }
  };
  logValidationErrors(group: FormGroup = this.pFrm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        console.log("formErrorsLogin", this.pFrm);

        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          console.log("abstractControl.errors", abstractControl.errors);
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }
}
