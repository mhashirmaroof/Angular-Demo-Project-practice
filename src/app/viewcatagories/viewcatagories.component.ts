import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewcatagories',
  templateUrl: './viewcatagories.component.html',
  styleUrls: ['./viewcatagories.component.css']
})
export class ViewcatagoriesComponent implements OnInit {
  catarr: any = [];
  showAddcatagory = false;
  showAddview = false;
  showOverlay:any = false;
  editcatagorydata: any = "";
  indexofDataCatagory: any = "";
  editviewdata: any = "";
  indexofDataView: any = "";
  idOfCatobj: any = "";
  Viewsarr: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  showAddcat() {
    this.showAddcatagory = !this.showAddcatagory;
    this.editcatagorydata = null;
    this.showOverlay =! this.showOverlay;
  }

  catData(catData: any) {
    catData.Views = []
    this.catarr.push(catData);
    console.log(this.catarr);
  };

  onEditCat(data: any, index: any) {
    this.indexofDataCatagory = index;
    let datafound = this.catarr.find((validData: any) => data == validData)
    console.log(datafound);
    this.editcatagorydata = datafound;
    this.showAddcatagory = !this.showAddcatagory;
  };

  updateCatagory(updateData: any) {
    this.catarr[this.indexofDataCatagory] = updateData;
  }

  onDeleteCat(index: any) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Catagory has been deleted.',
          'success'
        )
        this.catarr.splice(index, 1);
      }
    })
  }

  showAddviews() {
    this.showAddview = !this.showAddview;
    this.editviewdata = null;
    this.showOverlay =! this.showOverlay;
  };

  viewData(viewData: any) {
    let dataofid = this.catarr.find((idData: any) => idData.id == this.idOfCatobj);

    this.catarr[this.catarr.indexOf(dataofid)].Views.push(viewData);
  }

  openViewData(id: any) {
    this.idOfCatobj = id;
    console.log(this.idOfCatobj);

    this.Viewsarr = this.catarr.find((viewdata: any) => viewdata.id == id);
    console.log(this.catarr, "Cat arr");
  }

  onEditView(data: any, index: any) {
    this.indexofDataView = index;
    this.editviewdata = data;
    this.showAddview = !this.showAddview;
  }

  updateView(updateView: any) {
    this.Viewsarr.Views[this.indexofDataView] = updateView;
    console.log(this.catarr, "cat arr")
  }

  onDeleteView(index: any) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'View has been deleted.',
          'success'
        )
        this.Viewsarr.Views.splice(index, 1)
      }
    })
  }
}