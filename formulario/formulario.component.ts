import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  	registered = false;
	submitted = false;
	userForm: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {

  }

  // Cada this.serviceErrors. lanza un error por no tener acesso a él.
  // No está bien conectado fullstack con fullstack-api.
  // Quizas la api deberia estar en la estructura de archivos de fullstack.
  errorNombre()
  {
  	return (this.submitted && (/*this.serviceErrors.nombre != null ||*/ this.userForm.controls.nombre.errors != null));
  }

  errorEmail()
  {
  	return (this.submitted && (/*this.serviceErrors.email != null ||*/ this.userForm.controls.email.errors != null));
  }

  errorDocumentoIdentidad()
  {
  	return (this.submitted && (/*this.serviceErrors.documento_identidad != null ||*/ this.userForm.controls.documento_identidad.errors != null));
  }

  errorNewsletter()
  {
  	return (this.submitted && (/*this.serviceErrors.newsletter != null ||*/ this.userForm.controls.newsletter.errors != null));
  }

  errorCaptacion()
  {
  	return (this.submitted && (/*this.serviceErrors.captacion != null ||*/ this.userForm.controls.captacion.errors != null));
  }

  errorDireccion()
  {
    return (this.submitted && (/*this.serviceErrors.direccion != null ||*/ this.userForm.controls.direccion.errors != null));
  }

  errorCodigoPostal()
  {
    return (this.submitted && (/*this.serviceErrors.codigo_postal != null ||*/ this.userForm.controls.codigo_postal.errors != null));
  }

  errorRegion()
  {
    return (this.submitted && (/*this.serviceErrors.region != null ||*/ this.userForm.controls.region.errors != null));
  }

  errorCiudad()
  {
    return (this.submitted && (/*this.serviceErrors.ciudad != null ||*/ this.userForm.controls.ciudad.errors != null));
  }

  errorPais()
  {
    return (this.submitted && (/*this.serviceErrors.pais != null ||*/ this.userForm.controls.pais.errors != null));
  }

  errorObservaciones()
  {
    return (this.submitted && (/*this.serviceErrors.observaciones != null ||*/ this.userForm.controls.observaciones.errors != null));
  }

  //Comprobar validaciones de cada campo
  ngOnInit()
  {
  	this.userForm = this.formBuilder.group({
  		nombre: ['', Validators.required],
  		email: ['', [Validators.required, Validators.email]],
      	documento_identidad: ['', Validators.required],
      	newsletter: [''],
      	captacion: ['', Validators.required],
      	direccion: [''],
  	  	codigo_postal: ['', Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')],
      	region: [''],
      	ciudad: [''],
      	pais: [''],
      	observaciones: ['']
  	});
  }

  onSubmit()
  {
  	this.submitted = true;

  	if(this.userForm.invalid == true)
  	{
  		return;
  	}
  	else
  	{
  		this.registered = true;
  	}
  }

};
