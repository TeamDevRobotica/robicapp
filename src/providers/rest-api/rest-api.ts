import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestApiProvider {

    url: any;
    urlLocal: any;
    constructor(public http: HttpClient) {
        console.log('Hello RestApiProvider Provider');
        this.url = 'http://educaciondigitalmisiones.com:50000';
        this.urlLocal = 'http://localhost:3000';
    }

    getUsuarios() {
        return new Promise(resolve => {
            this.http.get(this.url).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getUsuario(usuario, clave) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/loguin/' + usuario + '/' + clave).subscribe(data => {
                //Si data no tiene keys(usuario o clave incorrectas) devuelve null
                if (Object.keys(data).length <= 0) {
                    return null;
                }
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
                reject(err);
            });
        }).catch(err => {
            return null;
        });
    }


    getTurnos() {
        return new Promise(resolve => {
            this.http.get(this.url + '/turno').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getPaises() {
        return new Promise(resolve => {
            this.http.get(this.url + '/pais').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getProvincias(/* idPais */) {
        return new Promise(resolve => {
            this.http.get(this.url + '/provincia'/* +idPais */).subscribe(data => {
                console.log("getprovincias(idpais) ", data);
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getDepartamentos() {
        return new Promise(resolve => {
            this.http.get(this.url + '/departamento').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getLocalidades() {
        return new Promise(resolve => {
            this.http.get(this.url + '/localidad').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    guardarPreInscripcion(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/preinscripcion', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getNiveles() {
        return new Promise(resolve => {
            this.http.get(this.url + '/nivel').subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    registrar(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/registrar', data)
                .subscribe(res => {
                    console.log(res);
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    //Devuelve un tutor por dni que no tenga usuario
    getTutorPorDniYSinUsuario(dni) {
        // return this.http.get(this.urlLocal + '/tutorPorDniYSinUsuario/' + dni);
        return new Promise(resolve => {
            this.http.get(this.url + '/tutorPorDniYSinUsuario/' + dni).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

    //Devuelve un tutor por id de usuario
    getTutorPorIdUsuario(id) {
        return new Promise(resolve => {
            this.http.get(this.url + '/tutorPorUsuario/' + id).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }


    //Devuelve un hijo con sus relaciones
    getPersonaConTodasSusRelaciones(persona) {
        return new Promise(resolve => {
            this.http.get(this.url + '/personaConRelaciones/' + persona).subscribe(data => {
                resolve(data);
                console.log(data);
            }, err => {
                console.log(err);
            });
        });
    }

}
