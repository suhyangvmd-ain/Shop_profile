'use client';
import { useState, useEffect } from 'react';

export function useNote(key: string) {
  const [note, setNote] = useState<string>('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setNote(localStorage.getItem(`issue_${key}`) ?? '');
    setReady(true);
  }, [key]);

  const save = (text: string) => {
    setNote(text);
    if (text.trim()) localStorage.setItem(`issue_${key}`, text);
    else localStorage.removeItem(`issue_${key}`);
  };

  return { note, save, ready };
}
