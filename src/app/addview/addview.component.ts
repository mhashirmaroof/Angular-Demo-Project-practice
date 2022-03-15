import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addview',
  templateUrl: './addview.component.html',
  styleUrls: ['./addview.component.css']
})
export class AddviewComponent implements OnInit {
  
  @Input() showAddviews: any;
  @Output() viewupdated:EventEmitter <any> = new EventEmitter;
  @Output() viewData: EventEmitter <any> = new EventEmitter;
  @Input() editViewData:any;
  @Output() updateView:EventEmitter <any> = new EventEmitter;
  hideSubmitbtn = true;
  showUpdatebtn = false;
  
  constructor() { }

  ngOnInit(): void {
    if(this.editViewData){
     this.viewform.setValue({
     id: this.editViewData.id,
     language: this.editViewData.language,
     viewname: this.editViewData.viewname,
     viewservices: this.editViewData.viewservices,
    });
     
    this.hideSubmitbtn =! this.hideSubmitbtn;
    this.showUpdatebtn =! this.showUpdatebtn;

   }
  }

  closeAddview(){
      this.viewupdated.emit(this.showAddviews)
  }

    viewform = new FormGroup({
    id:new FormControl(uuidv4()),
    language: new FormControl("", Validators.required),
    viewname: new FormControl("", Validators.required),
    viewservices: new FormControl(""),
  })

  collectData(){
     this.viewData.emit(this.viewform.value)
     this.viewform.reset();
     this.viewupdated.emit(this.showAddviews)
     
     Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'View has been created successfully',
    })
  }

  updateCatData(){
     this.updateView.emit(this.viewform.value);
     this.viewupdated.emit(this.showAddviews)

     Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: 'View has been updates successfully',
    });
  }

}
