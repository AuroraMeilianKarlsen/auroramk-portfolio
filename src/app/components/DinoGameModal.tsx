'use client';

import { useEffect } from 'react';
import styles from './DinoGameModal.module.css';

interface DinoGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DinoGameModal({ isOpen, onClose }: DinoGameModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dino-game-title"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close game"
        >
          ×
        </button>

        <iframe
          src="https://aurorameiliankarlsen.github.io/dino-game/"
          title="Dino Game"
          className={styles.gameFrame}
          allow="keyboard-map"
        />
      </div>
    </div>
  );
}
