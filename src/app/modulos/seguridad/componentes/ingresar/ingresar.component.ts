import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Helper } from 'app/helpers';
import { Cia } from '../../modelos';
import { CiaService, AutenticacionService } from '../../servicios';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit, AfterViewInit {
  private companyname = environment.nombrecompany;
  private appname = environment.nombreapp;
  private companias: Cia[] = [];
  private companiaElegida: Cia = new Cia();
  private compania = '';
  private usuario = '';
  private clave = '';
  public loading = false;
  constructor(
    private _helper: Helper,
    private _ciaService: CiaService,
    private _autenticacionService: AutenticacionService,
  ) { }

  ngOnInit() {
    if ('ontouchstart' in document.documentElement) { document.write("<script src='assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>"); }
    $('body').attr('class', 'login-layout blur-login');
    $('#id-text2').attr('class', 'white');
    $('#id-company-text').attr('class', 'light-blue');

    this._ciaService.get()
      .subscribe(
      companias => {
        this.companias = companias
        // console.log(this.companias);
      }
      );
    let _me: IngresarComponent = this;
    // $('input[name="compania"]').bind("enterKey", function (e, me: IngresarComponent = _me) {
    //   me.ingresar();
    // });
    $('input[name="compania"]').keyup(function (e, me: IngresarComponent = _me) {
      if (e.keyCode === 13) {
        if (me.companiaElegida.COMPANIA === '') {
          return false;
        } else {
          // $(this).trigger("enterKey");
          me.ingresar();
        }
      } else {
        me.usuario = me.clave = '';
      }
    });
    $('input[name="usuario"]').keyup(function (e, me: IngresarComponent = _me) {
      if (e.keyCode === 13) {
        if (me.usuario === '') {
          return false;
        } else {
          $('input[name="clave"]').focus();
        }
        // $(this).trigger("enterKey");
      }
    });
    $('input[name="clave"]').keyup(function (e, me: IngresarComponent = _me) {
      if (e.keyCode === 13) {
        // alert('1');
        if (me.usuario === '') {
          $('input[name="usuario"]').focus();
          return false;
        }
        // alert('2');
        if (me.clave === '') {
          $('input[name="clave"]').focus();
          return false;
        }
        // alert('3');
        // $(this).trigger("enterKey");
        me.ingresar();
      }
    });


  }

  ngAfterViewInit() {
    jQuery(function ($) {
      $(document).on('click', '.toolbar a[data-target]', function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.widget-box.visible').removeClass('visible');//hide others
        $(target).addClass('visible');//show target
      });
    });

    // you don't need this, just used for changing background
    // Cambiar el fondo de pantalla del Login
    jQuery(function ($) {
      $('#btn-login-dark').on('click', function (e) {
        $('body').attr('class', 'login-layout');
        $('#id-text2').attr('class', 'white');
        $('#id-company-text').attr('class', 'blue');

        e.preventDefault();
      });
      $('#btn-login-light').on('click', function (e) {
        $('body').attr('class', 'login-layout light-login');
        $('#id-text2').attr('class', 'grey');
        $('#id-company-text').attr('class', 'blue');

        e.preventDefault();
      });
      $('#btn-login-blur').on('click', function (e) {
        $('body').attr('class', 'login-layout blur-login');
        $('#id-text2').attr('class', 'white');
        $('#id-company-text').attr('class', 'light-blue');

        e.preventDefault();
      });

    });

    // $('#company').trigger("click");
    // let ele = <HTMLElement>document.getElementById("company");
    // console.log(ele);
    // ele.click();

    $('#login-box').removeClass("visible");
    $('#forgot-box').addClass("visible");
    $('input[name="compania"]').focus();

  }

  public getCompania() {
    this.compania = this.compania.toUpperCase();
    this.companiaElegida = new Cia();
    this.companias.forEach(compania => {
      if (compania.COMPANIA.toUpperCase() === this.compania.toUpperCase()) {
        this.companiaElegida = compania;
      }
    });
  }

  public ingresar() {
    if (!this.loading) {
      // console.log(this.companiaElegida);
      if (this.companiaElegida.COMPANIA === '') {
        $('#login-box').removeClass("visible");
        $('#forgot-box').addClass("visible");
        $('input[name="compania"]').focus()
        return false;
      } else {
        if (this.usuario === '' || this.clave === '') {
          $('#login-box').removeClass("visible").addClass("visible");
          $('#forgot-box').removeClass("visible");
          $('input[name="usuario"]').focus();
          return false;
        }

        // console.log(this.companiaElegida.COMPANIA);
        // console.log(this.usuario);
        // console.log(this.clave);
        this.loading = true;
        if (this.companiaElegida.COMPANIA !== '' && this.usuario !== '' && this.clave !== '') {
          this._autenticacionService.login(this.companiaElegida, this.usuario, this.clave)
            .subscribe(
            success => {
              this.loading = false;
              // console.log(success);

              if (success) {
                location.reload();
              } else {

              }
            }
            );
        }
      }
    }
  }
}
