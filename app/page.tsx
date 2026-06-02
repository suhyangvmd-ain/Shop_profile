'use client';
import { useState, useMemo } from 'react';
import { stores, Grade, GRADE_STYLE } from '@/lib/stores';
import StoreCard from '@/components/StoreCard';

type BrandFilter = 'all' | 'MINKMUI' | 'PP';
type SortKey = 'date' | 'name' | 'sales' | 'salesMonth' | 'hangers' | 'area';

export default function Home() {
  const [brand, setBrand] = useState<BrandFilter>('all');
  const [grade, setGrade] = useState<Grade | 'all'>('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortKey>('sales');

  const filtered = useMemo(() => {
    const q = search.trim();
    return stores
      .filter(s => brand === 'all' || s.brand === brand)
      .filter(s => grade === 'all' || s.grade === grade)
      .filter(s => !q || s.name.includes(q) || s.code.includes(q))
      .sort((a, b) => {
        switch (sort) {
          case 'sales':      return (b.salesPrevYear ?? 0) - (a.salesPrevYear ?? 0);
          case 'salesMonth': return (b.salesLastMonth ?? 0) - (a.salesLastMonth ?? 0);
          case 'hangers':    return b.hangers - a.hangers;
          case 'area':       return (b.area ?? 0) - (a.area ?? 0);
          case 'name':       return a.name.localeCompare(b.name, 'ko');
          default:           return b.openDate.localeCompare(a.openDate);
        }
      });
  }, [brand, grade, search, sort]);

  const mmCount     = stores.filter(s => s.brand === 'MINKMUI').length;
  const ppCount     = stores.filter(s => s.brand === 'PP').length;
  const totalPrev   = stores.reduce((acc, s) => acc + (s.salesPrevYear ?? 0), 0);
  const totalMonth  = stores.reduce((acc, s) => acc + (s.salesLastMonth ?? 0), 0);

  const grades: (Grade | 'all')[] = ['all', 'A', 'B', 'C', 'D', 'E'];

  return (
    <div className="min-h-screen" style={{ background: '#F1F5F9' }}>
      {/* ── 헤더 ── */}
      <header style={{ background: '#1F3864' }} className="sticky top-0 z-30 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-black text-sm">M</div>
            <div>
              <span className="text-white font-bold text-base tracking-wide">매장 프로필</span>
              <span className="text-blue-200 text-xs ml-2">MINKMUI · PETIT PALAIS</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-blue-200">
            <span>전체 {stores.length}개 매장</span>
            <span className="opacity-40">|</span>
            <span>2025 마감 {(totalPrev / 10000).toFixed(1)}억원</span>
            <span className="opacity-40">|</span>
            <span>26년 5월 {(totalMonth / 10000).toFixed(1)}억원</span>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
        {/* 요약 카드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: '전체 매장',       value: `${stores.length}개`,                    color: '#1F3864' },
            { label: 'MINKMUI',         value: `${mmCount}개`,                           color: '#2E75B6' },
            { label: 'PETIT PALAIS',    value: `${ppCount}개`,                           color: '#538135' },
            { label: '26년 5월 매출',   value: `${(totalMonth / 10000).toFixed(1)}억원`, color: '#C55A11' },
          ].map(c => (
            <div key={c.label} className="bg-white rounded-xl px-4 py-3.5 shadow-sm border border-slate-100">
              <div className="text-xs text-slate-400 mb-1">{c.label}</div>
              <div className="text-xl font-bold" style={{ color: c.color }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* 필터 바 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 px-4 py-3 mb-5 flex flex-wrap gap-3 items-center">
          {/* 브랜드 탭 */}
          <div className="flex rounded-lg overflow-hidden border border-slate-200 text-sm">
            {(['all', 'MINKMUI', 'PP'] as const).map(b => (
              <button key={b} onClick={() => setBrand(b)}
                className="px-4 py-1.5 font-medium transition-colors"
                style={brand === b
                  ? { background: '#1F3864', color: 'white' }
                  : { background: 'white', color: '#475569' }}>
                {b === 'all' ? '전체' : b === 'PP' ? 'PETIT PALAIS' : b}
              </button>
            ))}
          </div>

          {/* 등급 필터 */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {grades.map(g => {
              const active = grade === g;
              const style = g !== 'all' ? GRADE_STYLE[g as string] : null;
              return (
                <button key={String(g)} onClick={() => setGrade(g)}
                  className="text-xs font-bold px-2.5 py-1 rounded-md border transition-all"
                  style={active
                    ? { background: style?.bg ?? '#1F3864', color: style?.text ?? 'white', borderColor: style?.bg ?? '#1F3864' }
                    : { background: 'white', color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  {g === 'all' ? '전체등급' : `${g}등급`}
                </button>
              );
            })}
          </div>

          {/* 검색 */}
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="매장명 / 코드 검색"
            className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm w-40 focus:outline-none focus:ring-2 focus:ring-blue-200" />

          {/* 정렬 */}
          <select value={sort} onChange={e => setSort(e.target.value as SortKey)}
            className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-white text-slate-600 focus:outline-none cursor-pointer">
            <option value="sales">전년 매출순</option>
            <option value="salesMonth">5월 매출순</option>
            <option value="date">최근 오픈순</option>
            <option value="name">가나다순</option>
            <option value="hangers">행거수 많은순</option>
            <option value="area">평수 큰순</option>
          </select>

          <span className="text-xs text-slate-400 ml-auto">{filtered.length}개 매장</span>
        </div>

        {/* 카드 그리드 */}
        {filtered.length === 0 ? (
          <div className="text-center text-slate-400 py-20 text-sm">검색 결과가 없습니다.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(s => (
              <StoreCard key={`${s.brand}-${s.code}-${s.name}`} store={s} />
            ))}
          </div>
        )}
      </main>

      <footer className="text-center py-6 text-xs text-slate-400">
        전년: 2025 마감 기준 · 지난달: 2026년 5월 마감 기준 · 단위: 천원÷10 = 만원
      </footer>
    </div>
  );
}
