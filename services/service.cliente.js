const ClienteModel = require("../models/model.cliente");
let Validator = require('fastest-validator');


let clientes = {};

let clienteValidator = new Validator();

// TODO: Patterns para los demas campos 
let textoPattern = /([A-Za-z\-\’])*/;
let codigoPostalPattern = /^[0-9]{5}(?:-[0-9]{4})?$/;

// TODO: Agregar los demas campos con sus respectivos Patterns
const clienteVSchema = {
		
		nombre: { type: "string", min: 1, max: 50, pattern: textoPattern},
		email: { type: "email", max: 75 },
		codigo_postal: { type: "string", max: 5, pattern: codigoPostalPattern},
	};

class ClienteService
{
	static create(data)
	{
		var vres = clienteValidator.validate(data, clienteVSchema);
		
		// Error en validacion 
		if(!(vres === true))
		{
			let errors = {}, item;

			for(const index in vres)
			{
				item = vres[index];

				errors[item.field] = item.message;
			}
			
			throw {
			    name: "ValidationError",
			    message: errors
			};
		}

		// Sin error en validacion. 
		let cliente = new ClienteModel(data.nombre, data.email, data.documento_identidad, data.newsletter, data.captacion, data.direccion, data.codigo_postal, data.region, data.ciudad, data.pais, data.observaciones);

		clientes[cliente.documento_identidad] = cliente;

		return cliente;
	}

	// Devuelve cliente con un documento de identidad dado.
	static retrieveDocumentoIdentidad(documento)
	{
		if(clientes[documento] != null)
		{
			return clientes[documento];
		}
		else
		{
			throw new Error('Imposible devolver cliente con (documento de identidad:'+ documento_identidad +')');
		}
	}

	// Devuelve cliente con un email dado.
	static retrieveEmail(email)
	{
		if(clientes[email] != null)
		{
			return clientes[email];
		}
		else
		{
			throw new Error('Imposible devolver cliente con (email:'+ email +')');
		}
	}

	/* TODO: 	- Arreglar funcionamiento
				- Implementar updateConEmail
	// Actualiza el cliente de un documento de identidad dado.
	static updateConDocumentoIdentidad(documento, data)
	{
		if(clientes[documento] != null)
		{
			const cliente = clientes[documento];
			
			Object.assign(cliente, data);
		}
		else
		{
			throw new Error('Imposible actualizar cliente con (documento de identidad:'+ documento_identidad +')');
		}
	}
	*/
}

module.exports = ClienteService;