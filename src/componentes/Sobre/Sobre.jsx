import React from "react";
import {
  FaCode,
  FaChartLine,
  FaGlobeAmericas,
  FaGamepad,
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
            <TextoSobre>
              <p>
                <FaCode
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />
                Desenvolvedor <span className="underline">Full Stack</span>{" "}
                formado na <span className="underline">Infinity School</span>,
                especializado em{" "}
                <span className="underline">
                  JavaScript, Python, React e Node.js
                </span>
                . Transformo ideias em produtos digitais{" "}
                <span className="underline">eficientes e escaláveis</span>.
              </p>

              <p>
                <FaChartLine
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />
                Me diferencio pelo meu conhecimento em negócios, pois combino{" "}
                <span className="underline">6 anos de experiência</span> (como
                ex-Gerente PJ no Itaú) com habilidades técnicas avançadas. Como
                profissional <span className="underline">bilíngue</span>,
                consigo colaborar em projetos internacionais e absorver
                conteúdos técnicos globais.
                <FaGlobeAmericas
                  style={{ marginLeft: "6px", verticalAlign: "middle" }}
                />{" "}
              </p>

              <p>
                <GiBrain
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />
                Possuo uma abordagem em desenvolvimento{" "}
                <span className="underline">
                  focado na experiência do usuário
                </span>
                , com atenção especial à performance e usabilidade.
              </p>

              <p>
                <FaGamepad
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />
                Nas horas vagas, alimento meu lado criativo no{" "}
                <span className="underline">meu blog Keeg Club</span>, onde
                exploro cultura geek - essa paixão me ajuda a pensar{" "}
                <span className="underline">fora da caixa</span> nos projetos.
              </p>
            </TextoSobre>
            <Highlights>
              <hr />
              <p>
                <span className="underline">Foco Atual:</span> Buscando minha
                primeira oportunidade como dev.
              </p>
              <p>
                <span className="underline">Idiomas:</span> Português (nativo) |
                Inglês (fluente - técnico e conversação)
              </p>
              <hr />
            </Highlights>
          </TextoSobre>

          <ImagemSobre>
            <img
              src="src/assets/imagens/LuizGSN-completo.jpg"
              alt="Luiz Gonzaga"
            />
          </ImagemSobre>
        </ConteudoSobre>
      </ContainerSobre>
    </SecaoSobre>
  );
}

export default Sobre;
