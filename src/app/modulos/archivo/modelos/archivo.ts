export class Archivo {
    constructor(
        public lastModified: number = 0,
        public name: string = '',
        public size: number = 0,
        public type: string = '',
        public webkitRelativePath: string = '',
        public lastModifiedDate: Date = null,
        public emails: string[] = [],
        public idtercero:string = '', 
        public razonsocial:string = ''
    ) { }
}
