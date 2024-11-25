document.querySelectorAll('.navegacao a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

let fundoAlterado = false;

document.getElementById('alterarFundoBtn').addEventListener('click', function() {
    const elements = document.querySelectorAll('[style*="background-color: white"], .introducao, .modal-conteudo, .episodio, .form, .personagem, .modalVideo-content, .mensagemSucesso');
    
    elements.forEach(function(element) {
        if (!fundoAlterado) {
            element.classList.add('fundo-escuro');
            element.classList.add('borda-preta');
            element.classList.add('sombra-branca');
        } else {
            element.classList.remove('fundo-escuro');
            element.classList.remove('borda-preta');
            element.classList.remove('sombra-branca');
        }
    });

    fundoAlterado = !fundoAlterado;
});

const form = document.getElementById('contatoForm');
const sucessoMensagem = document.getElementById('sucessoMensagem');

function validarFormulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    sucessoMensagem.style.display = 'block';

    form.reset();
}

form.addEventListener('submit', validarFormulario);

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

function abrirModal(personagem) {
    const modais = {
        'naruto': {
            nome: 'Naruto Uzumaki',
            imagem: 'imagens/naruto.png',
            descricao: 'Naruto Uzumaki é um jovem ninja da Vila da Folha que sonha em se tornar Hokage para ganhar reconhecimento e respeito. Órfão e portador da raposa de nove caudas (Kurama), ele enfrentou rejeição desde pequeno, mas compensou com determinação e espírito indomável. Como membro do Time 7, Naruto embarca em inúmeras missões, enfrentando inimigos poderosos, criando laços fortes e superando seus próprios limites. Sua jornada é marcada pela busca por aceitação, amizade e pela luta para proteger aqueles que ama, enquanto persegue seu sonho de se tornar o líder de sua vila.'
        },
        'sasuke': {
            nome: 'Sasuke Uchiha',
            imagem: 'imagens/sasuke.png',
            descricao: 'Sasuke Uchiha é um ninja prodígio da Vila da Folha e o último membro sobrevivente do clã Uchiha após o massacre perpetrado por seu irmão mais velho, Itachi. Esse evento traumático moldou sua personalidade e o colocou em um caminho de vingança, dedicando sua vida a se tornar mais forte para derrotar Itachi. Inicialmente parte do Time 7 ao lado de Naruto e Sakura, Sasuke luta contra seus próprios demônios internos e eventualmente abandona a vila em busca de poder com Orochimaru. Apesar de suas ações sombrias, Sasuke busca, no fundo, restaurar o legado de seu clã e encontrar redenção.'
        },
        'sakura': {
            nome: 'Sakura Haruno',
            imagem: 'imagens/sakura.png',
            descricao: 'Sakura Haruno é uma ninja da Vila da Folha e uma das principais personagens da série Naruto. No começo, ela tem uma grande admiração por Sasuke e frequentemente se vê em competição com Naruto. Porém, ao longo da série, Sakura passa por uma grande transformação, focando em melhorar suas habilidades. Sob a orientação de Tsunade, a Quinta Hokage, Sakura desenvolve habilidades médicas avançadas e se torna uma força formidável em combate, com grande força física e regeneração.'
        }
    };

    const dados = modais[personagem];
    if (dados) {
        document.getElementById('nome-completo').innerText = dados.nome;
        document.getElementById('imagem-personagem').src = dados.imagem;
        document.getElementById('descricao-detalhada').innerText = dados.descricao;
        document.getElementById('modal').style.display = 'block';
    }
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function assistirTrailer(trailerId) {
    var modal = document.getElementById("myModal");
    var iframeElement = document.getElementById("trailerIframe");


    if (trailerId === 'trailer1') {
        iframeElement.src = 'https://www.youtube.com/embed/TW47H_6EThY';
    } else if (trailerId === 'trailer2') {
        iframeElement.src = 'https://www.youtube.com/embed/phvXqs2pHhU';
    } else if (trailerId === 'trailer3') {
        iframeElement.src = 'https://www.youtube.com/embed/UeN5B6KJ4YI';
    }

 
    modal.style.display = "block";
}

function fecharmyModal() {
    document.getElementById('myModal').style.display = 'none';

    var iframeElement = document.getElementById("trailerIframe");
    iframeElement.src = '';
}

