# flugel.biz Astro + Solid / Svelte / Vue Version

稼働している自分自身の SolidStart 製屋号サイトを、Astro + Solid / Svelte / Vue へリプレイスした実験リポジトリです。
なお、マシン内での node_modules の肥大化を抑えるため、Solid / Svelte / Vue を同居させており、実験なので手動で切り替える簡易的な方法です。
Solid / Svelte / Vue は、自作の SSR 安全なグローバルストア機構を利用側で同じ処理なのですが、React は状態管理の利用方法に依存するので、Astro + React のみ別リポジトリになります。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- Astro 7.3.1 (SSG)
- Astro Solid 7.0.2
- Astro Svelte 9.0.1
- Astro Vue 7.0.2
- TypeScript
- Sass
- ky
- Valibot
- Shiki

## Replaced Features

- SolidStart から各インテグレーションへの翻訳（静的コンポーネントは Solid JSX → Astro JSX、動的コンポーネントは JSX → Svelte テンプレート / Vue テンプレート、Signal → Runes / Ref）
- Meta 情報用共通コンポーネントからレイアウトコンポーネントから注入方式へ変更
- Shiki コードの色付け実行を Astro 標準の Code コンポーネントでビルド時に生成、クライアント時の実行なし

## Replaced Festival Repositories

- [SolidStart 版](https://github.com/wings1685/flugel-website)
- [SvelteKit 版](https://github.com/wings1685/flugel-website-sveltekit)
- [Qwik 版](https://github.com/wings1685/flugel-website-qwik)
- [Next.js 版](https://github.com/wings1685/flugel-website-next)
- [Nuxt 版](https://github.com/wings1685/flugel-website-nuxt)

## Related Articles

- [同一サイトの 9 フレームワークパターンでのリプレイス祭](https://wings.hatenablog.com/entry/replaceFestival)

## Folder Map

```
src/
├─ _global/
│ ├─ lib/
│ ├─ piquo/
│ │ ├─ _models/
│ │ │ ├─ solid/
│ │ │ ├─ svelte/
│ │ │ ├─ vue/
│ ├─ styles/
│ ├─ types/
├─ components/
│ ├─ integrations/
│ │ ├─ _models/
│ │ ├─ solid/
│ │ ├─ svelte/
│ │ ├─ vue/
│ ├─ routes/
│ │ ├─ _models/
│ │ ├─ _parts/
│ │ ├─ archives/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ │ ├─ types/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ ├─ shared/
│ │ ├─ Sections/
│ │ ├─ Typography/
│ │ ├─ Utils/
├─ routes/
```
