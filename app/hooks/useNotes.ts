'use client';
import { useState, useEffect } from 'react';

export function useNote(key: string) {
  const [note, setNote] = useState('');
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

export function useActualSku(key: string) {
  const [sku, setSku] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem(`sku_${key}`);
    setSku(v ? parseInt(v, 10) : null);
    setReady(true);
  }, [key]);
  const save = (val: number | null) => {
    setSku(val);
    if (val !== null) localStorage.setItem(`sku_${key}`, String(val));
    else localStorage.removeItem(`sku_${key}`);
  };
  return { sku, save, ready };
}

export function useShopInShop(key: string) {
  const [isSIS, setIsSIS] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setIsSIS(localStorage.getItem(`sis_${key}`) === 'true');
    setReady(true);
  }, [key]);
  const toggle = () => {
    const next = !isSIS;
    setIsSIS(next);
    if (next) localStorage.setItem(`sis_${key}`, 'true');
    else localStorage.removeItem(`sis_${key}`);
  };
  return { isSIS, toggle, ready };
}
