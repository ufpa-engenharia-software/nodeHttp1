module.exports = app => {

	app.get("/dobro/:numero", (req, res) => {

			var n = req.params.numero;
			var dobro = n * n;

			res.json(
				{dobro:dobro}
			)
	}
	);

	app.get("/metade/:numero", (req, res) => {

			var n = req.params.numero;
			var metade = n / 2;

			res.json(
				{metade:metade}
			)
	});

	app.get("/triplo/:numero", (req, res) => {

			var n = req.params.numero;
			var tri = n * 3;

			res.json(
				{triplo:tri}
			)
	});

};