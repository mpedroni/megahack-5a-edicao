export default [
  {
    id: 1,
    name: "PET Energy",
    title:
      "Geração de energia elétrica utilizando garrafas PET e energia solar",
    authors: [
      {
        id: 1,
        name: "Eliezer Duarte",
        skills: ["biólogo", "pesquisador", "professor de biologia"]
      },
      {
        id: 2,
        name: "Augusto Hoffmann",
        skills: [
          "data scientist",
          "dev python",
          "processamento de dados",
          "mysql"
        ]
      }
    ],
    locality: {
      city: "São Paulo",
      state: "SP"
    },
    description:
      "Por meio de painéis solares feitos, basicamente, utilizando garrafas PET, eu criei um jeito eficiente e barato de gerar energia elétrica a partir da luz/energia solar",
    tags: [
      "energia",
      "energia limpa",
      "energia solar",
      "sustentabilidade",
      "meio ambiente"
    ],
    needings: ["dev C/C++", "advogado", "engenheiro eletricista"]
  },
  {
    id: 2,
    title: "Aplicativo mobile de compartilhamento de fotos e vídeos",
    name: "Instabook",
    authors: [
      {
        id: 2,
        name: "Augusto Hoffmann",
        skills: [
          "data scientist",
          "dev python",
          "processamento de dados",
          "mysql"
        ]
      }
    ],
    locality: {
      city: "Tarauacá",
      state: "AC"
    },
    description:
      "Aplicativo em formato de rede social onde os usuários cadastrados poderão compartilhar vídeos e fotos com sua rede de amigos (seguidores), podendo estes interagir uns com os outros dentro do aplicativo/rede social",
    tags: ["app", "mobile", "rede social", "fotos e vídeos"],
    needings: [
      "dev frontend",
      "ux designer",
      "advogado com conhecimento em direitos autorais"
    ]
  },
  {
    id: 3,
    title: "Software livre de gestão empresarial",
    name: "Erudion",
    authors: [
      {
        id: 2,
        name: "Jhony Filipe Augusto Gonçalves",
        skills: ["dev php", "dev nodejs", "dev vuejs", "dev angular", "docker"]
      }
    ],
    locality: {
      city: "Itajaí",
      state: "SC"
    },
    description:
      "Software que dá suporte e permite todo o processo de gestão empresarial, desde o planejamento até projeções futuras",
    tags: ["gestao empresarial", "php", "vuejs"],
    needings: [
      "ux designer",
      "dev frontend",
      "devops engineer",
      "postgress DBA"
    ]
  }
];
