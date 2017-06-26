import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Archivo } from '../../modelos';
declare var $: any;
declare var TableTools: any;
declare var ActiveXObject: any;
@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit, AfterViewInit {
  public archivos: Archivo[] = [];
  constructor() { }
  ngAfterViewInit() { }
  ngOnInit() {
    let _this: ArchivosComponent = this;
    $('input[type=file]').change(function () {
      // console.log(this.files);
      _this.archivos = [];
      for (let i: number = 0; i < this.files.length; i++) {
        _this.pushArchivo(this.files[i]);
      }
      console.log(_this.archivos);
      // console.log(this.files[0].mozFullPath);
    });
  }
  private pushArchivo(a: any) {
    let archivo: Archivo = new Archivo()
    archivo.lastModified = a.lastModified;
    archivo.lastModifiedDate = a.lastModifiedDate;
    archivo.name = a.name;
    archivo.size = a.size;
    archivo.type = a.type;
    archivo.webkitRelativePath = a.webkitRelativePath;
    archivo.idtercero = 'V175761728';
    archivo.razonsocial = 'Ebert Zerpa';
    archivo.emails.push('ebertunerg@gmail.com');
    archivo.emails.push('ebertunerg@gmail.com');

    console.log(archivo);
    this.archivos.push(archivo);


    this.eliminarArchivo(archivo.webkitRelativePath);
  }
  public selectFolder(e) {
    console.log(e);

    // const theFiles = e.target.files;
    // const relativePath = theFiles[0].webkitRelativePath;
    // const folder = relativePath.split("/");
    // console.log(folder);

    // alert(folder[0]);
  }

  public eliminarArchivo(urlArchivo: string) {


    console.log(urlArchivo);
    const _return: boolean = false;
    if (_return) { return; }
    
    const activex = new ActiveXObject("Scripting.FileSystemObject");
    activex.DeleteFile(urlArchivo);
  }
}

