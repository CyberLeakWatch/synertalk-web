// Copies the self-hosted fonts (latin + latin-ext) to assets/fonts and writes fonts.css,
// which input.css imports. Run with: npm run fonts
import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';

const OUT = '../../assets/fonts';
const fonts = [
  { pkg: '@fontsource-variable/manrope', family: 'Manrope', file: 'manrope-{subset}-wght-normal.woff2', style: 'normal', weight: '200 800' },
  { pkg: '@fontsource-variable/jetbrains-mono', family: 'JetBrains Mono', file: 'jetbrains-mono-{subset}-wght-normal.woff2', style: 'normal', weight: '100 800' },
  { pkg: '@fontsource/instrument-serif', family: 'Instrument Serif', file: 'instrument-serif-{subset}-400-normal.woff2', style: 'normal', weight: '400' },
  { pkg: '@fontsource/instrument-serif', family: 'Instrument Serif', file: 'instrument-serif-{subset}-400-italic.woff2', style: 'italic', weight: '400' },
];

function unicodeRange(pkg, fileName) {
  const dir = `node_modules/${pkg}`;
  const css = readdirSync(dir).filter(f => f.endsWith('.css')).map(f => readFileSync(`${dir}/${f}`, 'utf8')).join('\n');
  const block = css.split('@font-face').find(b => b.includes(`/files/${fileName}`));
  return block.match(/unicode-range:\s*([^;]+);/)[1];
}

mkdirSync(OUT, { recursive: true });
let css = '';
for (const f of fonts) {
  for (const subset of ['latin-ext', 'latin']) {
    const name = f.file.replace('{subset}', subset);
    copyFileSync(`node_modules/${f.pkg}/files/${name}`, `${OUT}/${name}`);
    css += `@font-face {\n  font-family: '${f.family}';\n  font-style: ${f.style};\n  font-display: swap;\n  font-weight: ${f.weight};\n  src: url(./fonts/${name}) format('woff2');\n  unicode-range: ${unicodeRange(f.pkg, name)};\n}\n`;
  }
}
writeFileSync('fonts.css', css);
console.log('fonts.css written');
