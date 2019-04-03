class ClienteModel
{
	constructor(nombre, email, documentoIdentidad, ,captacion, newsletter, direccion, codigoPostal, region, ciudad, pais, observaciones)
	{
		this.nombre = nombre;
		this.email = email;
		this.documentoIdentidad = documentoIdentidad;
		this.captacion = captacion;
		this.newsletter = newsletter;
		this.direccion = direccion;
		this.codigoPostal = codigoPostal;
		this.region = region;
		this.ciudad = ciudad;
		this.pais = pais;
		this.observaciones = observaciones;
	}
}

module.exports = ClienteModel;