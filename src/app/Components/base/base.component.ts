import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SystemService } from 'src/app/Utils/services/system.service';
import { AppConfig, AppConfiguration } from 'src/configuration';
import { WebSocketService } from 'src/app/Utils/services/web-socket.service';
import { FormBuilder } from '@angular/forms';
import { AdminDeclarationService } from 'src/app/Utils/services/AdminDeclaration.service';
import { StudentService } from 'src/app/Utils/services/Student-Declaration.service';
import { common } from 'src/app/app.common';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  constructor(
    @Inject(AppConfig)
    public readonly appConfig: AppConfiguration,
    public router: Router,
    public spinner: NgxSpinnerService,
    public SystemService: SystemService,
    public modalService: NgbModal,
    public toastr: ToastrService,
    private datePipe: DatePipe,
    public route: ActivatedRoute,
    public WebSocketService: WebSocketService,
    private fb: FormBuilder,
    private fromBuilder: FormBuilder,
    public AdminDeclarationService: AdminDeclarationService,
    public StudentService: StudentService,
  ) {}
  public arrNumberPage: any = [];
  arrNumberPage_chil: any = [];
  numberPage: any;
  page: any = 1;
  pages: any = 10000;
  public pageSizes1: any = 10000;
  public pageSize: any = 10;
  public pageSizes: any = [10, 20, 50, 100, 200, 500, 1000, 'Tất cả'];
  public dataTable: any = [];
  public dataChecked: any = [];
  public dataCampus: any = [];
  public dataBuilding: any = [];
  public dataRoom: any = [];
  public dataQuyetDinh: any = [];
  public dataTypeRoom: any = [];
  dataBuildingChange: any;
  public com!: common;
  public Token: any;
  ID_sv: any
  public getNull = false;
  public totalItem!: number;
  totalItemFilter: any;
  isDisplay: boolean = true;
  submitted = false;
  closeResult!: string;
  dataPopup: any = {};
  ngOnInit(): void {
    debugger;
  }
  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  buttonFilter() {
    this.isDisplay = !this.isDisplay;
  }



  
  changeCampusRep(id: any) {
    this.dataBuildingChange = this.dataBuildingChange.filter((x: { ID_CoSo: any; }) => {
      return x.ID_CoSo == id;
    });
  }
  checkAllCheckBox(ev: { target: { checked: any; }; }) {
    this.dataTable.forEach((x: { checked: any; }) => (x.checked = ev.target.checked));
  }
  isAllCheckBoxChecked() {
    if (this.dataTable != undefined)
      return this.dataTable.every((p: { checked: any; }) => p.checked);
  }
  test() {
    this.dataChecked = this.dataTable.filter((x: { checked: boolean; }) => x.checked == true);
  }
  createNumberPage(totalItem: number, pageSize: number) {
    let numberPage = 0;
    let arrNumberPage = [];
    if (totalItem % pageSize == 0) {
      numberPage = Math.floor(totalItem / pageSize);
    } else {
      numberPage = Math.floor(totalItem / pageSize) + 1;
    }
    for (var i = 1; i <= numberPage; i++) {
      arrNumberPage.push(i);
    }
    let arrNumberPage_chil = [];
    if (arrNumberPage.length > 4) {
      for (var i = 1; i <= 4; i++) {
        arrNumberPage_chil.push(i);
      }
    } else {
      arrNumberPage_chil = arrNumberPage;
    }
    return {
      numberPage: numberPage,
      arrNumberPage_chil: arrNumberPage_chil,
    };
  }
  handlePageChange(event: string | number) {
    if (event == 'pre') {
      this.page = this.page - 1;
    } else if (event == 'next') {
      this.page = this.page + 1;
    } else {
      this.page = event;
      this.arrNumberPage_chil = [];
      for (var i = Number(event) - 3; i <= Number(event) + 3; i++) {
        if (i > 0 && i <= this.numberPage) {
          this.arrNumberPage_chil.push(i);
        }
      }
    }
  }
  xoa_dau(str: string) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ|ị/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
    return str;
  }

  getToken() {
    this.com = new common(this.router);
    this.com.CheckLogin();
    var a = this.com.getUserinfo();
    this.Token = a.Token;
    this.ID_sv = a.Info.UserID
  }
  getTokenSV() {
    this.com = new common(this.router);
    this.com.CheckLoginPortal();
    var a = this.com.getPortalInfo();
    this.Token = a.Token;
    this.ID_sv = a.Info.UserID
  }
}
