import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addcatagory',
  templateUrl: './addcatagory.component.html',
  styleUrls: ['./addcatagory.component.css']
})
export class AddcatagoryComponent implements OnInit {
  catarr:any =[];
  @Input() showAddcatagory: any;
  @Output() catupdated:EventEmitter <any> = new EventEmitter;
  @Output() catData: EventEmitter <any> = new EventEmitter;
  @Input() editCatagoryData:any;
  @Output() updateCatagory:EventEmitter <any> = new EventEmitter;
  hideSubmitbtn = true;
  showUpdatebtn = false;

  catagoryform = new FormGroup({
    id: new FormControl (uuidv4(), Validators.required),
    catlanguage: new FormControl("", Validators.required),
    catagoryname: new FormControl("", Validators.required),
    Views: new FormControl("")
  });

  constructor() { }

  ngOnInit(): void {
      if(this.editCatagoryData){
       this.catagoryform.setValue({
      id: this.editCatagoryData.id,
      catlanguage: this.editCatagoryData.catlanguage,
      catagoryname: this.editCatagoryData.catagoryname,
      Views: this.editCatagoryData.Views
     });
      
     this.hideSubmitbtn =! this.hideSubmitbtn;
     this.showUpdatebtn =! this.showUpdatebtn;

    }
  }

  closeAddcat(){
    this.catupdated.emit(this.showAddcatagory);
  };
  
  collectData(){
     this.catData.emit(this.catagoryform.value);
     this.catagoryform.reset();
     this.catupdated.emit(this.showAddcatagory);

     Swal.fire({
      icon: 'success',
      title: 'Created!',
      text: 'View has been created successfully',
    });
  };

  updateCatData(){
     this.updateCatagory.emit(this.catagoryform.value);
     this.catupdated.emit(this.showAddcatagory);
     
     Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: 'View has been updates successfully',
    });
  }
}
