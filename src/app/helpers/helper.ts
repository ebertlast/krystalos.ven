import { Injectable } from '@angular/core';
import { Ususu } from '../modulos/seguridad/modelos';
declare var toastr: any;

@Injectable()
export class Helper {
    constructor() { }

    public notificacion(mensaje: string, titulo: string, tipo: string = 'success') {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        switch (tipo) {
            case 'error':
                toastr.error(mensaje, titulo);
                break;
            case 'warning':
                toastr.warning(mensaje, titulo);
                break;
            case 'info':
                toastr.info(mensaje, titulo);
                break;
            default:
                toastr.success(mensaje, titulo);
                break;
        }
    }

    public revisarAvatarDeUsuario(usuario: Ususu) {
        // console.log("Usuarios en foreach:");
        if (usuario.IDIMAGEN === null || usuario.IDIMAGEN === '') {
            if (usuario.NOMBRE.substr(0, 1) !== '') {
                usuario.IDIMAGEN = 'assets/avatars/alfabeto/' + usuario.NOMBRE.substr(0, 1) + '.png';
            } else {
                usuario.IDIMAGEN = 'assets/avatars/user-default.jpg';
            }
        }
    }
}
