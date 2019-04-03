var express = require('express');
var router = express.Router();
var ClienteService = require('../services/service.cliente');

/* Listado de cliente. */
router.get('/', async function(req, res, next)
{
	res.json({error: "Documento de identidad del cliente no valido."});
});

// Registrar un nuevo cliente en la lista.
router.post('/', async (req, res, next) =>
{
	const body = req.body;

	try
	{
		const cliente = await ClienteService.create(body);

		if(body.documento_identidad != null)
		{
			cliente.documento_identidad = body.documento_identidad;
		}

		res.cookie('documento_identidad', cliente.documento_identidad, { maxAge: 900000, httpOnly: true });

		// Crea cliente. 
		return res.status(201).json({ cliente: cliente });
	}
	catch(err)
	{
		if (err.name === 'ValidationError')
		{
        	return res.status(400).json({ error: err.message });
		}

		return next(err);
	}
});

/* TODO: 	- Funcionamiento
// Acceso a clientes por su documento de identidad
router.get('/:id', async (req, res, next) =>
{
	try
	{
		const cliente = await ClienteService.retrieve(req.params.id);

		return res.json({ cliente: cliente });
	}
	catch(err)
	{
		return next(err);
	}
});
*/

/* TODO: 	- Funcionamiento
// Actualiza cliente segun su documento de identidad
router.put('/:id', async (req, res, next) =>
{
	try
	{
		const cliente = await ClienteService.update(req.params.id, req.body);

		return res.json({ cliente: cliente });
	}
	catch(err)
	{
		return next(err);
	}
});
*/

module.exports = router;
