const axios = require('axios');
const fs = require("fs/promises");

const buscarVoto = async (req, res) => {
  const pais = req.params.pais;
  const ip = req.params.ip;

  try {
    const resposta = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=dc4e80730faa474c9a3c7decff57b2ed&ip_address=${ip}`);

    if (pais === resposta.data.country) {
      const arquivo = JSON.parse(await fs.readFile("../classe-02/votos.json"));
      arquivo.push({
        ip: resposta.data.ip_address,
        voto: req.body.voto
      });

      fs.writeFile("../classe-02/votos.json", JSON.stringify(arquivo));
      res.json({
        ip: resposta.data.ip_address,
        voto: req.body.voto
      });
    } else {
      res.status(400);
      res.json({ Mensagem: "O IP enviado não coincide com o país da votação" });
    }
  } catch (error) {
    res.status(400);
    res.json({ Mensagem: "O IP enviado náo é válido" });
  }


}

const mostrarVotos = async (req, res) => {
  const arquivo = JSON.parse(await fs.readFile("../classe-02/votos.json"));
  res.json(arquivo);
}

module.exports = {
  buscarVoto,
  mostrarVotos
}