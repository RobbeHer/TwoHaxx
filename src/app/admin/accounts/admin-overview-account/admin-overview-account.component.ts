import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-admin-overview-account',
  templateUrl: './admin-overview-account.component.html',
  styleUrls: ['./admin-overview-account.component.scss']
})
export class AdminOverviewAccountComponent implements OnInit {

  closeResult = '';
  user: User;
  
  constructor(private _Activatedroute: ActivatedRoute, 
    private _router: Router, 
    private _userService: UserService,
    private modalService: NgbModal) { }

  getUser(id: number) {
    this._userService.getUser(id).subscribe(user => {
      this.user = user; 
    });
  }

  deleteUser(userID: number) {
    this._userService.deleteUser(userID).subscribe(() => {
      this._router.navigateByUrl('/admin/accounts');
    }​​​​​);
  }

  ngOnInit(): void {
    this._Activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getUser(id);
    });
  }

  modalOpen(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == "Pressed delete user button") {
        this.deleteUser(this.user.userID)
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}




