const instanciaAxios = require('../services/abstractApi');
const fs = require("fs/promises");

const consultarEmpresa = async (req, res) => {
  const domain = req.params.domain;

  const resposta = await instanciaAxios.get("/", { params: { domain } });

  if (resposta.data.name !== null || resposta.data.name !== undefined) {

    const arquivo = JSON.parse(await fs.readFile("../classe-01/empresas.json"));
    arquivo.push(resposta.data);

    fs.writeFile("../classe-01/empresas.json", JSON.stringify(arquivo));
    res.json(resposta.data);
  } else {
    res.json({
      erro: "Nome faltando"
    });
  }
}

module.exports = {
  consultarEmpresa
}