# NEO — Site Institucional

Projeto Next.js 14 (App Router) + TypeScript + Tailwind CSS. Build de produção validado (`next build` e `next lint` sem erros).

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
app/
  layout.tsx        # metadata, SEO, Open Graph, fontes
  page.tsx           # monta as seções da home
  globals.css
  robots.ts           # /robots.txt
  sitemap.ts          # /sitemap.xml
  fonts/               # Inter self-hosted (subset latin, woff2)
  favicon.ico
  apple-icon.png
components/
  navbar.tsx, hero.tsx, about.tsx, services.tsx,
  differentials.tsx, process.tsx, cta.tsx, footer.tsx
  ui/                  # Button, Logo, Reveal, SectionHeading, GeometricMark
lib/
  constants.ts         # ⚠️ edite aqui: WhatsApp, Instagram, textos, serviços
  use-reveal.ts         # hook de scroll reveal (respeita prefers-reduced-motion)
  utils.ts
public/
  logo.png, logo-white.png, favicon-*.png, icon-*.png, og-image.png, manifest.webmanifest
```

## Deploy no GitHub Pages (com domínio próprio)

O projeto já está configurado para exportação estática (`output: "export"` em `next.config.mjs`), que é o formato que o GitHub Pages exige.

1. **Suba o projeto para um repositório no GitHub** (pode ser público ou privado, desde que o plano permita Pages).
2. **Configure seu domínio**: edite `public/CNAME` e coloque seu domínio (ex: `www.seudominio.com.br`), sem `http://` e sem barra no final.
3. **Ative o GitHub Pages**: no repositório, vá em `Settings → Pages → Build and deployment → Source` e selecione **"GitHub Actions"**. O workflow em `.github/workflows/deploy.yml` já está pronto: a cada push na branch `main`, ele builda e publica automaticamente.
4. **Aponte o DNS do seu domínio** para o GitHub Pages:
   - Registro **CNAME** apontando `www` para `seuusuario.github.io`, **ou**
   - Registros **A** apontando o domínio raiz para os IPs do GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
   - Isso é feito no painel do seu provedor de domínio (Registro.br, GoDaddy, etc.), não no GitHub.
5. Depois do primeiro deploy, volte em `Settings → Pages` e marque **"Enforce HTTPS"** quando a opção estiver disponível (pode levar alguns minutos após o DNS propagar).

**Sem domínio próprio (usando `seuusuario.github.io/nome-do-repo`)**: nesse caso é preciso adicionar `basePath: "/nome-do-repo"` em `next.config.mjs` e remover o arquivo `public/CNAME`. Me avise se for esse o seu caso que eu ajusto.

**O que muda com a exportação estática**: as rotas `robots.ts` e `sitemap.ts` continuam funcionando (viram `robots.txt` e `sitemap.xml` estáticos no build), e as imagens usam `<img>` padrão em vez do otimizador do Next (não há servidor no GitHub Pages para isso) — o tamanho de carregamento já é pequeno, então não há perda perceptível de performance.

## Antes de publicar

1. **Domínio real**: troque `SITE.url` em `lib/constants.ts` pelo domínio definitivo (usado em metadata, Open Graph, sitemap, JSON-LD) — deve ser igual ao que você colocou em `public/CNAME`.
2. **Deploy**: além do GitHub Pages, o projeto também roda em qualquer host com Node.js (Vercel, Netlify, etc.) — nesse caso é só remover `output: "export"` do `next.config.mjs` para voltar ao modo padrão com otimizações de imagem no servidor.

## Stack

- Next.js 14.2.35 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- lucide-react (ícones)
- Fonte Inter self-hosted via `next/font/local`
