# R para Proteômica

Curso de R do zero, construído sobre dados reais de proteômica label-free
(Progenesis, DEP2, protti, limma). 12 módulos, 55 aulas.

Site estático, sem build e sem dependências. Funciona offline e instala
como app no celular.

## Publicar no GitHub Pages

1. No GitHub, crie um repositório **público** chamado `pRoteomica`.
   (Precisa ser público — o Pages só funciona em repositório privado no plano pago.)
2. Na página do repositório vazio, clique em **uploading an existing file**.
3. Arraste **todos** os arquivos desta pasta, inclusive a pasta `icons`.
4. Clique em **Commit changes**.
5. Vá em **Settings → Pages**.
6. Em *Source*, escolha **Deploy from a branch**; em *Branch*, escolha
   `main` e a pasta `/ (root)`. Salve.
7. Espere 1 a 2 minutos. O endereço aparece no topo dessa mesma tela:
   `https://SEU-USUARIO.github.io/pRoteomica/`

## Instalar no celular

Abra o endereço no Chrome (Android) ou Safari (iPhone).

- **Android:** aparece um aviso de *Instalar app*. Se não aparecer, use o
  menu dos três pontos → *Instalar app* / *Adicionar à tela inicial*.
- **iPhone:** botão de compartilhar → *Adicionar à Tela de Início*.

Depois de instalado, abre em tela cheia, com ícone próprio, e **funciona sem
internet**.

## Atualizar o curso

1. Substitua o `index.html` pelo novo (no GitHub: abra o arquivo → ícone de
   lápis → cole o conteúdo novo → Commit).
2. **Importante:** abra o `sw.js` e mude o número da versão do cache:
   `const CACHE = "rproteomica-v4";` → `"rproteomica-v5"`.

Sem o passo 2, aparelhos que já instalaram continuam com os ícones antigos
em cache. O `index.html` em si sempre busca a versão nova quando há internet,
então o conteúdo do curso atualiza sozinho.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O curso inteiro: conteúdo, estilo e código, num arquivo só |
| `manifest.webmanifest` | Declara o app: nome, ícones, cor, modo tela cheia |
| `sw.js` | Service worker — faz funcionar offline |
| `icons/` | Ícones do app (192, 512, maskable, apple-touch) |

## Onde o progresso fica salvo

No `localStorage` do navegador — ou seja, **por aparelho**. Celular e
computador têm progressos separados, e limpar os dados do navegador apaga.
O botão **Feedback** dentro do curso gera um relatório em texto que pode ser
copiado de um aparelho para outro.
