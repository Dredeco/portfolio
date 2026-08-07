# Portfolio Design Refresh

**Date:** 2026-08-07  
**Status:** Approved for planning  
**Reference:** `C:\Users\dredeco\Downloads\Melhorar design do portfolio` (Figma Make / Vite)  
**Target:** Next.js 13 portfolio em `c:\Projetos\portfolio`

## Goal

Aplicar o visual e a estrutura de layout do design de referência no portfolio Next.js existente, preservando Firebase (projetos), EmailJS (contato) e o conteúdo real do autor.

## Non-goals

- Migrar para Vite
- Adotar o kit shadcn/ui completo da referência
- Substituir projetos Firebase por mocks
- Remover EmailJS
- Incluir foto de perfil no primeiro viewport (About com foto sai do fluxo principal)

## Decisions

| Decisão | Escolha |
|--------|---------|
| Escopo | Visual/layout novo + dados/integrações atuais |
| Stack | Manter Next.js 13 + Tailwind 3 + React 18 |
| Marca | Texto tipográfico `Dre.dev` (não logo PNG; não `AF.dev`) |
| Sobre | Absorvido no hero; formação vira seção própria |
| Skills | Chips por categoria (não grid de ícones coloridos) |
| Projetos | Layout cards da referência alimentados pelo Firestore |
| Contato | Layout 2 colunas da referência + submit EmailJS atual |
| Ícones | `lucide-react` para UI/redes |

## Visual system

### Colors (CSS variables)

- `--background`: `#080808`
- `--foreground`: `#f0ede6`
- `--card`: `#111111`
- `--primary`: `#c8ff47`
- `--primary-foreground`: `#080808`
- `--muted-foreground`: `#888888`
- `--border`: `rgba(255, 255, 255, 0.07)`
- `--input-background`: `#1a1a1a`

Mapear tokens suficientes no Tailwind 3 (`theme.extend.colors`) ou classes utilitárias via CSS variables — sem migrar para Tailwind 4.

### Typography

- Display / headings: **Fraunces**
- Body: **Plus Jakarta Sans**
- Labels / tags / mono accents: **JetBrains Mono**
- Fonte atual Raleway deixa de ser a tipografia principal

### Motion

- Fade/slide-in suave via Intersection Observer ao entrar na viewport (como na referência)
- Navbar: fundo transparente → blur + borda ao scroll
- Hover nos chips de skills e cards de projetos (borda/cor primary)
- Sem efeitos de glow excessivos ou animações ruidosas

## Architecture

Manter a composição modular atual em `pages/`:

```
pages/
  _app.js          ← Navbar + tema global
  index.js         ← ordem das seções
  components/
    Navbar.jsx     ← redesign
    Main.jsx       ← vira Hero (ou renomear Hero.jsx)
    Skills.jsx     ← chips categorizados
    Projects.jsx   ← cards Firebase
    Education.jsx  ← NOVO (timeline)
    Contact.jsx    ← redesign + EmailJS
    Footer.jsx     ← NOVO (ou embutido no Contact; preferir arquivo próprio)
styles/
  globals.css      ← tokens, fontes, scrollbar, base
```

Dependências novas previstas: `lucide-react`. Remover uso visual de `react-icons` onde substituído (pode permanecer no package se ainda houver imports pontuais, mas o alvo é lucide).

Firebase (`services/actions`, `services/access`, `pages/api/Firebase.js`) permanece inalterado na API pública.

EmailJS: mesmos service/template/public key atualmente em `Contact.jsx`; apenas o UI muda. Sucesso: estado visual “Mensagem enviada!” em vez de `alert`.

## Sections

### 1. Navbar

- Fixo, `h-16`, z-50
- Brand: botão/link `Dre.dev` em JetBrains Mono + primary
- Links desktop: Sobre (scroll hero), Skills, Projetos, Educação, Contato
- CTA `mailto:andrefersouza@gmail.com` com ícone Mail (desktop)
- Mobile: toggle Menu/X + lista vertical

### 2. Hero (`#home` / `#hero`)

- Badge “Disponível para projetos”
- Nome grande: “André” + “Fernandes” em primary (Fraunces)
- Subtítulo: Full-stack Developer — React · Next.js · Node
- Bio curta (texto atual do site, condensado se necessário para o bloco)
- CTAs: Ver Projetos / Fale comigo
- Ícones sociais (GitHub, LinkedIn, Instagram, Facebook) — mesmos links atuais
- Sem imagem de fundo de teclado; sem foto

### 3. Skills (`#skills`)

Categorias e itens (origem: portfolio atual):

- **Frontend:** HTML, CSS, JavaScript, TypeScript, React, Next.js, Angular, Vue, Nuxt, Tailwind
- **Backend:** Node.js, Nest.js, MySQL, SQLite, PostgreSQL, MongoDB, Firebase, Hasura
- **Ferramentas:** Git, GitHub

Chips mono com hover primary.

### 4. Projects (`#projects`)

- Lista vertical de cards (borda, card bg, hover border primary)
- Fonte: `getProjectsAction()` → campos atuais tipicamente `name`, `description`, `img`, `link`
- Mapeamento UI:
  - título ← `name`
  - descrição ← `description`
  - link externo ← `link`
  - `year` / `tech`: se ausentes no documento, não inventar dados falsos — omitir year ou mostrar placeholder discreto; tech só se o doc tiver array/string utilizável
  - `img` opcional no card redesenhado (referência não usa imagem; padrão: sem thumb para bater o layout; se quiser imagem depois, fora do escopo v1)
- Link “Ver todos no GitHub” → `https://github.com/dredeco`
- Skeleton/empty state simples se a lista vier vazia ou falhar (sem quebrar o layout)

### 5. Education (`#educacao`)

Timeline:

1. Análise e Desenvolvimento de Sistemas — Estácio — Em andamento (current)
2. Técnico em Informática — Instituto Federal Fluminense — Concluído

### 6. Contact (`#contact`)

- Esquerda: headline “Vamos trabalhar juntos.” + copy + links LinkedIn/GitHub
- Direita: form (Nome, E-mail, Telefone, Assunto, Mensagem) → EmailJS
- Remover card com imagem `contact.jpg` e botão “voltar ao topo” duplicado se o footer cobrir navegação; manter scroll suave via nav

### 7. Footer

- Copyright atualizado (ano dinâmico ou 2026+)
- Ícones sociais

## Component / data contracts

### Projects from Firebase

```js
// shape observed by current UI
{
  name: string,
  description: string,
  img?: string,
  link: string,
  year?: string,
  tech?: string[] | string
}
```

UI adapters must tolerate missing optional fields.

### Contact form → EmailJS

Preservar nomes de campos atuais do form (`user_name`, `user_phone`, `user_email`, `subject`, `message`) para não quebrar o template EmailJS.

## Error handling

- Firebase fail / empty: seção Projetos mostra mensagem curta muted (“Nenhum projeto para exibir” / “Não foi possível carregar”)
- EmailJS fail: mensagem de erro inline no form (não só console)
- EmailJS success: painel de confirmação no lugar do form

## Testing / verification

- `npm run dev` — desktop e mobile (navbar + form)
- Scroll suave para todas as âncoras
- Projetos carregam do Firestore
- Envio de contato (smoke, se credenciais válidas)
- `npm run build` passa

## Implementation notes

- Não portar pasta `ui/` shadcn da referência
- Não atualizar Next/React major neste trabalho
- Preferir reescrever JSX/CSS nos componentes existentes em vez de um monólito `App.tsx`
- Remover seção `About.jsx` do `index.js` (arquivo pode ficar orphaned ou ser deletado no plano de implementação)
