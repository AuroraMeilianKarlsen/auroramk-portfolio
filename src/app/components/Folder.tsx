'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';
import styles from './Folder.module.css';

// Mørkner en hex-farge med gitt andel (0-1), brukt til bakside og ark
const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const num = parseInt(color.slice(0, 6), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    '#' +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

interface FolderProps {
  color?: string;
  size?: number;
  items?: ReactNode[];
  /** Antall ark i mappen. Originalen har 3, vi bruker 1 for CV-en. */
  paperCount?: number;
  /** Gjør hele mappen til en nedlastingslenke i stedet for en knapp. */
  href?: string;
  download?: string;
  /** Synlig tekst på selve mappen. */
  label?: ReactNode;
  /** Lenkens tilgjengelige navn, siden teksten på mappen og arket er dekorativ. */
  ariaLabel?: string;
  className?: string;
}

export default function Folder({
  color = '#5227FF',
  size = 1,
  items = [],
  paperCount = 3,
  href,
  download,
  label,
  ariaLabel,
  className = '',
}: FolderProps) {
  const papers: ReactNode[] = items.slice(0, paperCount);
  while (papers.length < paperCount) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(() =>
    Array.from({ length: paperCount }, () => ({ x: 0, y: 0 }))
  );

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': darkenColor(color, 0.08),
    '--paper-1': darkenColor('#ffffff', 0.1),
    '--paper-2': darkenColor('#ffffff', 0.05),
    '--paper-3': '#ffffff',
  } as CSSProperties;

  const handleClick = () => {
    setOpen((prev) => {
      if (prev) {
        setPaperOffsets(
          Array.from({ length: paperCount }, () => ({ x: 0, y: 0 }))
        );
      }
      return !prev;
    });
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
    const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
    setPaperOffsets((prev) => {
      const next = [...prev];
      next[index] = { x: offsetX, y: offsetY };
      return next;
    });
  };

  const handlePaperMouseLeave = (index: number) => {
    setPaperOffsets((prev) => {
      const next = [...prev];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  };

  const folderVisual = (
    <div
      className={`${styles.folder} ${open ? styles.open : ''} ${
        paperCount === 1 ? styles.single : ''
      }`}
      style={folderStyle}
    >
      <div className={styles.folderBack}>
        {papers.map((item, i) => (
          <div
            key={i}
            className={styles.paper}
            onMouseMove={(e) => handlePaperMouseMove(e, i)}
            onMouseLeave={() => handlePaperMouseLeave(i)}
            style={
              open
                ? ({
                    '--magnet-x': `${paperOffsets[i]?.x ?? 0}px`,
                    '--magnet-y': `${paperOffsets[i]?.y ?? 0}px`,
                  } as CSSProperties)
                : undefined
            }
          >
            {item}
          </div>
        ))}
        <div className={styles.folderFront} />
        <div className={`${styles.folderFront} ${styles.right}`} />
        {label ? <span className={styles.label}>{label}</span> : null}
      </div>
    </div>
  );

  // Med href blir <a> det interaktive elementet, så nedlastingen skjer
  // nativt (Enter, høyreklikk og "lagre som" fungerer som før).
  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={handleClick}
        aria-label={ariaLabel}
        style={{ transform: `scale(${size})` }}
        className={`${styles.folderLink} ${className}`.trim()}
      >
        {folderVisual}
      </a>
    );
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      aria-label={ariaLabel}
      style={{ transform: `scale(${size})` }}
      className={`${styles.folderLink} ${className}`.trim()}
    >
      {folderVisual}
    </div>
  );
}
