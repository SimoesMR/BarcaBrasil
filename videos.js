/* Lista única dos vídeos do site (canal youtube.com/@abarcabrasil).
   É usada pelo carrossel da página inicial (index.html) e pela página "Todos os vídeos" (videos.html).

   Cada linha: [id do YouTube, título no YouTube, duração, formato, parte]
   - formato: "h" = horizontal (16:9, aparece como Filme no carrossel) | "v" = vertical (9:16, aparece como Short)
   - parte:   em qual bloco da página videos.html o vídeo aparece: "horizontal", "vertical" ou "institucional"

   Para mudar um vídeo de bloco, basta trocar a última palavra da linha.
   A ordem das linhas é a ordem em que os vídeos aparecem. */
window.BARCA_VIDEOS = [
  ["F4Amt4dnQi0", "Institucional Residem", "3:51", "h", "institucional"],
  ["-m5Ggk13RrU", "Mansano - Lago Sul 9 milhões", "0:36", "h", "horizontal"],
  ["ITEfl4BCnOE", "Livtá - Sênior Living", "2:23", "h", "horizontal"],
  ["4fPdlbW3bk4", "Leandro Pinheiro - Spazio Verde", "1:38", "h", "horizontal"],
  ["14-hBJJowHs", "Clinica Renaissance Livtá - Carnaval", "1:14", "h", "horizontal"],
  ["JqwS1U8Z3ZQ", "Clinica Renaissance Livtá - Ano Novo", "0:44", "h", "horizontal"],
  ["RSzeXVh0Du0", "Residem - Tour casa Solar Primavera", "4:17", "h", "horizontal"],
  ["Rq4DDCYBo2I", "Mansano - Vídeo Institucional", "1:06", "h", "institucional"],
  ["Pl2j7Tu1ZoE", "Leandro Pinheiro - Drone casa Vila de León", "2:14", "h", "horizontal"],
  ["PsMa757G7f4", "Leandro Pinheiro - Casa Spazio Verde", "0:25", "h", "horizontal"],
  ["x9izf-uRPu0", "Ornamentali - Tour Drone", "4:21", "h", "horizontal"],
  ["orOxJg-H7o8", "Livtá Institucional", "1:28", "h", "institucional"],
  ["XYqWMX8bCa4", "Institucional Gecon", "", "h", "institucional"],

  ["oEOlKLmJZ8Q", "Conecta Brokers  Jardim Santa Maria", "", "v", "vertical"],
  ["Y5UlilMJJFk", "Residem casa Jd. Europa", "", "v", "vertical"],
  ["mKoVbNcGW9o", "Casa Shangrilá", "", "v", "vertical"],
  ["pJJb49sfrjg", "Residem - Colombe d'or", "", "v", "vertical"],
  ["VRH9XjmjkiI", "Ornamentali Casa - ambientes da loja", "", "v", "vertical"],
  ["f5yy41Q2mwg", "Livtá Sênior Living", "", "v", "vertical"],
  ["kSM2L5_nEAE", "Renaissance Livtá", "", "v", "vertical"],
  ["gHQpuSQ7UJQ", "Livtá Sênior Living", "", "v", "vertical"],
  ["jaGbxxdxuAs", "Eufloria", "", "v", "vertical"],
  ["hHyOE0jwf4E", "Residem  casa Primavera Piratininga", "", "v", "vertical"],
  ["pP8w1W-WX_4", "Conecta Brokers - Harmonis", "", "v", "vertical"],
  ["DB2F8yaWFh4", "Dani Cardoso - Desafio com aulo", "", "v", "vertical"],
  ["FiWpqdAPXVs", "Dani Cardoso - gravidade", "", "v", "vertical"],
  ["wtTHCzrlriM", "Dani Cardoso pilates", "", "v", "vertical"],
  ["m1yzQ0vIyiw", "Sweet Emma - Pão de mel", "", "v", "vertical"],
  ["W2cdENX8luw", "Conecta Brokers  - Val de Palmas Mira", "", "v", "vertical"],
  ["IAd9KLtltw8", "Sweet Emma - bombom", "", "v", "vertical"],
  ["KZMvM_0egwA", "Sweet Emma - Casadinho", "", "v", "vertical"],
  ["N-Dksk-WG2k", "Sweet Emma Bauru", "", "v", "vertical"],
  ["PafMzN47q4M", "Thereza Pizza Grill", "", "v", "vertical"],
  ["4YwVAuq-S9A", "Conecta Brokers - Harmonis", "", "v", "vertical"],
  ["xE3_va3HAs4", "Dani Cardoso Pilates", "", "v", "vertical"],
  ["te1DACIk7TA", "Locmaster Bauru - ASMR", "", "v", "vertical"],
  ["K6kYLmFV1CQ", "Ornamentali Casa", "", "v", "vertical"],
  ["Ilrv_Asr_lQ", "Ornamentali - Sofá verde", "", "v", "vertical"],
  ["F3Xgl3hc6Zw", "Ornamentali - Sofá", "", "v", "vertical"],
  ["QNN7Ti0ksdE", "Leandro Pinheiro - Aimar Móveis", "", "v", "vertical"],
  ["Or4u-DFl5m8", "Leandro Pinheiro no Covadonga Stable", "", "v", "vertical"]
];
