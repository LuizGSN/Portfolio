import React from "react";
import {
  FaCode,
  FaGlobeAmericas,
  FaGamepad,
  FaDatabase,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import {
  SecaoSobre,
  ContainerSobre,
  TituloSecao,
  ConteudoSobre,
  TextoSobre,
  ImagemSobre,
  Highlights,
} from "./estilos";

function Sobre() {
  return (
    <SecaoSobre id="sobre">
      <ContainerSobre>
        <TituloSecao>Sobre Mim</TituloSecao>
        <ConteudoSobre>
          <TextoSobre>
            <p>
              <FaCode
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Desenvolvedor <span className="underline">Full Stack</span>{" "}
              com formação prática pela <span className="underline">Infinity School</span> e
              cursando <span className="underline">Análise e Desenvolvimento de Sistemas</span> na UNIFOR.
              Combino sólida base técnica em{" "}
              <span className="underline">JavaScript, React, Node.js e Python</span> com{" "}
              <span className="underline">6 anos de experiência corporativa</span> no Itaú Unibanco.
            </p>

            <p>
              <FaServer
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Atualmente em <span className="underline">estágio na área de TI</span> na Rede Oto (Kora Saúde),
              onde desenvolvo habilidades de infraestrutura, suporte técnico e gestão de acessos —
              conceitos que aplico diretamente na construção de{" "}
              <span className="underline">soluções eficientes e seguras</span>.
              <FaDatabase
                style={{ marginLeft: "6px", verticalAlign: "middle" }}
              />{" "}
            </p>

            <p>
              <GiBrain
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Meu diferencial é unir <span className="underline">visão de negócios</span> com habilidades
              técnicas avançadas. Como profissional <span className="underline">bilíngue</span>,
              consigo colaborar em projetos internacionais e absorver conteúdos técnicos globais.
              <FaGlobeAmericas
                style={{ marginLeft: "6px", verticalAlign: "middle" }}
              />{" "}
            </p>

            <p>
              <FaLaptopCode
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Stack principal:{" "}
              <span className="underline">React, Node.js, Express.js, Python</span>,{" "}
              <span className="underline">MySQL, SQLite</span>,{" "}
              <span className="underline">Git, GitHub e Vercel</span>.
            </p>

            <Highlights>
              <hr />
              <p>
                <span className="underline">Objetivo:</span> Buscando oportunidade como
                Desenvolvedor Full Stack Júnior ou Estágio.
              </p>
              <p>
                <span className="underline">Idiomas:</span> Português (nativo) |
                Inglês (fluente — técnico e conversação)
              </p>
              <hr />
            </Highlights>
          </TextoSobre>

          <ImagemSobre>
            <img
              src="/imagens/LuizGSN-completo.jpg"
              alt="Luiz Gonzaga"
            />
          </ImagemSobre>
        </ConteudoSobre>
      </ContainerSobre>
    </SecaoSobre>
  );
}

export default Sobre;
