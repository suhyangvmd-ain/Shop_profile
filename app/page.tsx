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
          case 'hangers':    return (b.wlHangers + b.essHangers) - (a.wlHangers + a.essHangers);
          case 'area':       return (b.area ?? 0) - (a.area ?? 0);
          case 'name':       return a.name.localeCompare(b.name, 'ko');
          default:           return b.openDate.localeCompare(a.openDate);
        }
      });
  }, [brand, grade, search, sort]);

  // ── 통계 (필터 적용 기준) ──
  const totalPrev   = stores.reduce((acc, s) => acc + (s.salesPrevYear ?? 0), 0);
  const totalMonth  = stores.reduce((acc, s) => acc + (s.salesLastMonth ?? 0), 0);

  const validHanger  = filtered.filter(s => s.wlHangers > 0);
  const avgHangers   = validHanger.length
    ? ((validHanger.reduce((a, s) => a + s.wlHangers + s.essHangers, 0)) / validHanger.length).toFixed(1)
    : '─';
  const avgSsSku     = validHanger.length
    ? Math.round(validHanger.reduce((a, s) => a + s.wlHangers * 15, 0) / validHanger.length)
    : '─';
  const avgFwSku     = validHanger.length
    ? Math.round(validHanger.reduce((a, s) => a + s.wlHangers * 13, 0) / validHanger.length)
    : '─';

  const grades: (Grade | 'all')[] = ['all', 'A', 'B', 'C', 'D', 'E', 'H'];

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
            <span>2025 마감 {(totalPrev / 10000).toFixed(1)}억원</span>
            <span className="opacity-40">|</span>
            <span>26년 5월 {(totalMonth / 10000).toFixed(1)}억원</span>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">

        {/* ── 요약 통계 (필터 반응) ── */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
          {[
            { label: '조회 매장', value: `${filtered.length}개`,                           color: '#1F3864' },
            { label: 'MINKMUI',   value: `${stores.filter(s=>s.brand==='MINKMUI').length}개`, color: '#2E75B6' },
            { label: 'PETIT PALAIS', value: `${stores.filter(s=>s.brand==='PP').length}개`,  color: '#538135' },
            { label: '평균 행거수',  value: `${avgHangers}개`,                               color: '#6B7280' },
            { label: '평균 SS 적정', value: `${avgSsSku}개`,                                 color: '#2E75B6' },
            { label: '평균 FW 적정', value: `${avgFwSku}개`,                                 color: '#1F3864' },
          ].map(c => (
            <div key={c.label} className="bg-white rounded-xl px-3 py-3 shadow-sm border border-slate-100">
              <div className="text-[10px] text-slate-400 mb-1">{c.label}</div>
              <div className="text-lg font-bold" style={{ color: c.color }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* ── 필터 바 ── */}
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
          <div className="flex items-center gap-1 flex-wrap">
            {grades.map(g => {
              const active = grade === g;
              const gs = g !== 'all' ? GRADE_STYLE[g as string] : null;
              return (
                <button key={String(g)} onClick={() => setGrade(g)}
                  className="text-xs font-bold px-2.5 py-1 rounded-md border transition-all"
                  style={active
                    ? { background: gs?.bg ?? '#1F3864', color: gs?.text ?? 'white', borderColor: gs?.bg ?? '#1F3864' }
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

        {/* ── 카드 그리드 ── */}
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
        전년: 2025 마감 기준 · 지난달: 2026년 5월 기준 · 단위: 천원÷10 = 만원 · 운영이슈/SKU/샵인샵은 브라우저 저장
      </footer>
    </div>
  );
}
