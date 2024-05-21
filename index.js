const filmes = [
  {
    img: "./images/sherlokjpg.jpg",
    title: "Sherlock Holmes",
    background: "auto",
    description: "Quando uma série de assassinatos brutais aterroriza Londres, não demora muito para o lendário detetive Sherlock Holmes e seu parceiro solucionador de crimes, o Dr. Watson, encontrar o assassino, Lord Blackwood. Um devoto das artes das trevas, Blackwood tem um esquema maior em mente e sua execução está em seus planos. O jogo está em andamento quando Blackwood parece subir da sepultura, levando Holmes e Watson para o mundo das tecnologias ocultas e estranhas."
  },
  {
    img: "./images/aranha.webp",
    title: "Homem Aranha",
    background: "center",
    description: "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso."
  },
  {
    img: "./images/liga.jpg",
    title: "Liga da Justiça",
    background: "auto",
    description: "Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos, mas mesmo com a formação da liga de heróis sem precedentes, pode ser tarde demais para salvar o planeta de um catastrófico ataque."
  },
  {
    img: "./images/superman.jpg",
    title: "O Homem de Aço",
    background: "auto",
    description: 'Com a iminente destruição de Krypton, seu planeta natal, Jor-El e sua mulher procuram preservar a raça enviando o filho recém-nascido para a Terra. A nave espacial da criança aterrissa na fazenda de Jonathan e Martha Kent, que o batizam de Clark e o criam como seu próprio filho. Apesar das habilidades extraordinárias levarem o Clark adulto a viver à margem da sociedade, ele precisa se tornar um herói para salvar aqueles que ama de uma terrível ameaça.'
  },
  {
    img: "./images/aqua.webp",
    title: "Aquaman",
    background: "auto",
    description: "A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm. Com um vasto exército a seu dispor, Orm planeja conquistar tanto os demais reinos do oceano, quanto o mundo da superfície. Em seu caminho está Aquaman, meio-humano e meio-atlante, e verdadeiro herdeiro do trono. Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu destino como protetor das profundezas."
  }
];

const title = document.querySelector('.title');
const description = document.querySelector('.description');
const trending = document.querySelector('.trending');
const arr = document.querySelector('#arrow-right');
const arrLeft = document.querySelector('#arrow-left');
let count = 0;

function atu(index) {
  trending.style.background = `url(${filmes[index].img}) no-repeat`;
  trending.style.backgroundSize = "cover";
  trending.style.backgroundPosition = filmes[index].background;
  title.innerHTML = filmes[index].title;
  description.innerText = filmes[index].description;
}


atu(count);

arrLeft.addEventListener('click', e => {
  count--;
  if (count < 0) {
    count = filmes.length - 1; 
  }
  atu(count);
});

arr.addEventListener('click', e => {
  count++;
  if (count >= filmes.length) {
    count = 0; 
  }
  atu(count);
});