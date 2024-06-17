export const dialogos = [
  {
    personagem: "1",
    texto_dialogo: { text: "Olá, Leo! Meu computador não está ligando. Falei com um técnico conhecido que me sugeriu três possíveis soluções. Qual devo escolher?" },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "2",
    texto_dialogo: {
      text: "Já sim, Fabi.  A empatia é como um elo que conecta o profissional ao cliente, permitindo entender suas necessidades e preocupações.",
    },
    tem_questao: 1,
    questao_vinculada: [
      {
        pegunta: "Qual seira sua resposa?",
      },
      {
        opcoes: [
          {
            op: "Eu posso salvar num pendrive para você.",
          },
          {
            op: "Vou te enviar o arquivo anexado em um e-mail, pode ser?",
          },
          {
            op: "Vou salvar na nuvem e te mando.",
          },
        ],
      },
      {
        feedbacks: [
          {
            feed: "Assistindo a alguns vídeos cheguei a conclusão que o problema pode ser resolvido de outra maneira",
          },
          {
            feed: "Pode até ser, mas o melhor é salvar em nuvem.",
          },
          {
            feed: "Perfeito! 😃",
          },
        ],
      },
    ],
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: "Assistindo a alguns vídeos cheguei a conclusão que o problema pode ser resolvido de outra maneira.",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: { text: "Veja mais sobre isso no vídeo abaixo:" },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: "Ah, e a empatia também fortalece o relacionamento entre a empresa e o cliente. Quando se sentem compreendidos e valorizados, os clientes tendem a voltar e até mesmo recomendar os serviços ou produtos para outras pessoas.",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "2",
    texto_dialogo: { text: "É verdade. A empatia cria laços de confiança e fidelidade. Além disso, ela não se limita apenas ao atendimento ao cliente externo. No ambiente interno da empresa, entre colegas de trabalho, também é fundamental para um ambiente mais colaborativo e produtivo. " },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: { text: "Com certeza. A empatia não é apenas uma habilidade, mas uma atitude que deveríamos cultivar em todas as nossas interações, seja com clientes, colegas de trabalho ou até mesmo na vida pessoal." },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "2",
    texto_dialogo: {
      text: "Também não acho uma boa ideia.",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "1",
    texto_dialogo: {
      text: "Acesse o link abaixo:",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
  {
    personagem: "2",
    texto_dialogo: {
      text: "Sem dúvida, a empatia é a chave para um atendimento excepcional.",
    },
    tem_questao: 0,
    questao_vinculada: "",
  },
];
