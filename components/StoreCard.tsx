'use client';
import { useState } from 'react';
import { Store, fmtDate, fmtSales, GRADE_STYLE } from '@/lib/stores';
import { useNote } from '@/app/hooks/useNotes';

const MM_COLOR = '#2E75B6';
const PP_COLOR = '#538135';

export default function StoreCard({ store }: { store: Store }) {
  const [imgErr, setImgErr] = useState(false);
  const [editingNote, setEditingNote] = useState(false);
  const [draft, setDraft] = useState('');
  const { note, save, ready } = useNote(`${store.brand}_${store.code}_${store.no}`);

  const isMM = store.brand === 'MINKMUI';
  const accent = isMM ? MM_COLOR : PP_COLOR;
  const ssSku  = store.hangers * 15;
  const fwSku  = store.hangers * 13;
  const gradeStyle = store.grade ? GRADE_STYLE[store.grade] : null;

  const monthlyAvg = store.salesPrevYear ? Math.round(store.salesPrevYear / 12) : null;
  const trend =
    store.salesLastMonth && monthlyAvg
      ? store.salesLastMonth >= monthlyAvg * 1.05 ? 'up'
      : store.salesLastMonth <= monthlyAvg * 0.95 ? 'down' : 'flat'
      : null;

  const photoSrc = store.photoFile ? `/사진/${encodeURIComponent(store.photoFile)}` : null;

  function startEdit() {
    setDraft(note);
    setEditingNote(true);
  }
  function commitEdit() {
    save(draft);
    setEditingNote(false);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-slate-100 flex flex-col">

      {/* ── 사진 ── */}
      <div className="relative h-36 bg-slate-100 flex-shrink-0">
        {photoSrc && !imgErr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoSrc} alt={store.name}
            className="w-full h-full object-cover"
            onError={() => setImgErr(true)} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-4xl opacity-10">🏬</span>
            <span className="text-[10px] text-slate-300 mt-1">사진 없음</span>
          </div>
        )}
        <span className="absolute top-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: accent }}>
          {isMM ? 'MINKMUI' : 'PETIT PALAIS'}
        </span>
        <span className="absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/80 text-slate-600">
          {store.type === 'I' ? '직영' : '벤더'}
        </span>
      </div>

      {/* ── 매장명 + 등급 ── */}
      <div className="px-3.5 pt-3 pb-2 border-b border-slate-100 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-bold text-slate-900 text-[15px] leading-tight truncate">{store.name}</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {store.code}
            {store.openDate ? ` · ${fmtDate(store.openDate)}` : ''}
            {store.area ? ` · ${store.area}평` : ''}
          </p>
        </div>
        {gradeStyle && (
          <span className="flex-shrink-0 text-[12px] font-black px-2.5 py-0.5 rounded-lg mt-0.5"
            style={{ background: gradeStyle.bg, color: gradeStyle.text }}>
            {store.grade}
          </span>
        )}
      </div>

      {/* ── 적정 SKU (핵심 섹션) ── */}
      <div className="px-3.5 py-3 border-b border-slate-100" style={{ background: '#F0F6FF' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-slate-500 tracking-wide uppercase">적정 SKU</span>
          <span className="text-[11px] text-slate-400">행거 <b className="text-slate-600">{store.hangers}</b>개 기준</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* SS 적정 */}
          <div className="rounded-xl px-3 py-2.5 text-center" style={{ background: MM_COLOR }}>
            <div className="text-[10px] font-semibold text-blue-100 mb-0.5">SS 적정</div>
            <div className="text-2xl font-black text-white leading-none">{ssSku}</div>
            <div className="text-[10px] text-blue-200 mt-0.5">최대 {store.hangers * 20}</div>
          </div>
          {/* FW 적정 */}
          <div className="rounded-xl px-3 py-2.5 text-center" style={{ background: '#1F3864' }}>
            <div className="text-[10px] font-semibold text-blue-200 mb-0.5">FW 적정</div>
            <div className="text-2xl font-black text-white leading-none">{fwSku}</div>
            <div className="text-[10px] text-blue-300 mt-0.5">최대 {store.hangers * 18}</div>
          </div>
        </div>
      </div>

      {/* ── 매출 ── */}
      <div className="px-3.5 py-2.5 border-b border-slate-100 space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-400">전년 (2025 마감)</span>
          <span className="text-[13px] font-bold text-slate-800">{fmtSales(store.salesPrevYear)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-400">26년 5월</span>
          <span className={`text-[13px] font-semibold flex items-center gap-1 ${trend === 'up' ? 'text-emerald-600' : trend === 'down' ? 'text-red-500' : 'text-slate-600'}`}>
            {trend === 'up' && <span className="text-[10px]">▲</span>}
            {trend === 'down' && <span className="text-[10px]">▼</span>}
            {fmtSales(store.salesLastMonth)}
          </span>
        </div>
      </div>

      {/* ── 운영 이슈 ── */}
      <div className="px-3.5 py-2.5">
        {!editingNote ? (
          <div className="flex items-start gap-2 cursor-pointer group" onClick={startEdit}>
            {ready && note ? (
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-[10px] font-bold text-amber-700">운영 이슈</span>
                  <span className="text-[10px] text-slate-400 ml-auto opacity-0 group-hover:opacity-100">수정</span>
                </div>
                <p className="text-[12px] text-slate-700 leading-snug whitespace-pre-wrap break-words">{note}</p>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-slate-300 hover:text-slate-400 transition-colors">
                <span className="text-[11px]">+ 운영 이슈 기재</span>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] font-bold text-amber-700">운영 이슈</span>
            </div>
            <textarea
              autoFocus
              value={draft}
              onChange={e => setDraft(e.target.value)}
              placeholder="이슈 내용 입력..."
              rows={3}
              className="w-full text-[12px] border border-slate-200 rounded-lg px-2.5 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 text-slate-700"
            />
            <div className="flex gap-2 mt-1.5 justify-end">
              <button onClick={() => setEditingNote(false)}
                className="text-[11px] px-3 py-1 rounded-md text-slate-400 hover:text-slate-600">취소</button>
              <button onClick={commitEdit}
                className="text-[11px] px-3 py-1 rounded-md text-white font-semibold"
                style={{ background: MM_COLOR }}>저장</button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
