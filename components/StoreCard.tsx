'use client';
import { useState } from 'react';
import { Store, fmtDate, fmtSales, GRADE_STYLE } from '@/lib/stores';

const MM_COLOR = '#2E75B6';
const PP_COLOR = '#538135';

export default function StoreCard({ store }: { store: Store }) {
  const [imgErr, setImgErr] = useState(false);
  const isMM = store.brand === 'MINKMUI';
  const accent = isMM ? MM_COLOR : PP_COLOR;
  const ssSku = store.hangers * 15;
  const fwSku = store.hangers * 13;
  const gradeStyle = store.grade ? GRADE_STYLE[store.grade] : null;

  // 전년 대비 5월 추이 (단순 비교: 전년÷12 기준)
  const monthlyAvg = store.salesPrevYear ? Math.round(store.salesPrevYear / 12) : null;
  const salesTrend =
    store.salesLastMonth && monthlyAvg
      ? store.salesLastMonth >= monthlyAvg * 1.05
        ? 'up'
        : store.salesLastMonth <= monthlyAvg * 0.95
        ? 'down'
        : 'flat'
      : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-slate-100 flex flex-col">
      {/* 사진 */}
      <div className="relative h-40 bg-slate-100 flex-shrink-0">
        {!imgErr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/사진/${encodeURIComponent(store.name)}.jpg`}
            alt={store.name}
            className="w-full h-full object-cover"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-1">
            <span className="text-5xl opacity-10">🏬</span>
            <span className="text-xs text-slate-300">사진 없음</span>
          </div>
        )}
        {/* 브랜드 뱃지 */}
        <span
          className="absolute top-2.5 left-2.5 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: accent }}
        >
          {isMM ? 'MINKMUI' : 'PETIT PALAIS'}
        </span>
        {/* 매장 형태 뱃지 */}
        <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 border border-white/60">
          {store.type === 'I' ? '직영' : '벤더'}
        </span>
      </div>

      {/* 매장명 + 등급 */}
      <div className="px-4 pt-3.5 pb-2.5 border-b border-slate-100 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-bold text-slate-900 text-[15px] leading-tight truncate">{store.name}</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">코드 {store.code}</p>
        </div>
        {gradeStyle && (
          <span
            className="flex-shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-md mt-0.5"
            style={{ background: gradeStyle.bg, color: gradeStyle.text }}
          >
            {store.grade}
          </span>
        )}
      </div>

      {/* 기본 정보 */}
      <div className="px-4 py-3 grid grid-cols-2 gap-x-3 gap-y-2.5 border-b border-slate-100 flex-1">
        <Info label="오픈일" value={fmtDate(store.openDate)} />
        <Info label="평수" value={store.area ? `${store.area}평` : '─'} />
        <Info label="행거수" value={`${store.hangers}개`} />
        <div />
        <Info label="SS 적정 SKU" value={`${ssSku}개`} accent={accent} />
        <Info label="FW 적정 SKU" value={`${fwSku}개`} accent={accent} />
        <Info label="SS 최대 SKU" value={`${store.hangers * 20}개`} dim />
        <Info label="FW 최대 SKU" value={`${store.hangers * 18}개`} dim />
      </div>

      {/* 매출 */}
      <div className="px-4 py-3 space-y-1.5">
        <SalesRow label="전년 매출 (2025 마감)" value={fmtSales(store.salesPrevYear)} bold />
        <SalesRow label="지난달 (2026.05)" value={fmtSales(store.salesLastMonth)} trend={salesTrend} />
      </div>
    </div>
  );
}

function Info({ label, value, accent, dim }: { label: string; value: string; accent?: string; dim?: boolean }) {
  return (
    <div>
      <div className="text-[10px] text-slate-400 mb-0.5">{label}</div>
      <div
        className={`text-[13px] font-semibold ${dim ? 'text-slate-400' : 'text-slate-700'}`}
        style={accent ? { color: accent } : undefined}
      >
        {value}
      </div>
    </div>
  );
}

function SalesRow({ label, value, bold, trend }: {
  label: string; value: string; bold?: boolean; trend?: 'up' | 'down' | 'flat' | null
}) {
  const trendIcon = trend === 'up' ? '▲' : trend === 'down' ? '▼' : '';
  const trendColor = trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-red-400' : '';
  return (
    <div className="flex justify-between items-center">
      <span className="text-[11px] text-slate-400">{label}</span>
      <span className={`text-[13px] flex items-center gap-1 ${bold ? 'font-bold text-slate-800' : 'font-medium text-slate-600'}`}>
        {trendIcon && <span className={`text-[10px] ${trendColor}`}>{trendIcon}</span>}
        {value}
      </span>
    </div>
  );
}
