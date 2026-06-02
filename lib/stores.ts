export type Brand = 'MINKMUI' | 'PP';
export type StoreType = 'I' | 'B';
export type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'H' | null;

export interface Store {
  no: number;
  brand: Brand;
  code: string;
  name: string;
  type: StoreType;
  openDate: string;
  area: number | null;
  hangers: number;
  grade: Grade;             // 매장 등급 (25 마감 기준)
  salesPrevYear: number | null;  // 만원 (25 마감 천원÷10)
  salesLastMonth: number | null; // 만원 (202605 천원÷10)
}

// 천원 → 만원 변환 메모
// 예) 1,966,563천원 ÷ 10 = 196,656만원

export const stores: Store[] = [
  // ── MINKMUI ──────────────────────────────────────────────────────────────────
  //                                                    grade  전년(만원)  5월(만원)
  { no:1,  brand:'MINKMUI', code:'31710', name:'롯데 노원',        type:'I', openDate:'25.11.04', area:7,     hangers:16, grade:'C', salesPrevYear:45421,  salesLastMonth:22874 },
  { no:2,  brand:'MINKMUI', code:'31640', name:'롯데 잠실',        type:'I', openDate:'25.09.26', area:10,    hangers:15, grade:'A', salesPrevYear:97706,  salesLastMonth:47200 },
  { no:3,  brand:'MINKMUI', code:'31980', name:'PP 신세계 대구',   type:'I', openDate:'25.09.16', area:12,    hangers:10, grade:'B', salesPrevYear:81289,  salesLastMonth:38218 },
  { no:4,  brand:'MINKMUI', code:'31530', name:'PP 현대 중동',     type:'B', openDate:'25.08.27', area:18,    hangers:14, grade:'C', salesPrevYear:40824,  salesLastMonth:23393 },
  { no:5,  brand:'MINKMUI', code:'31740', name:'신세계하남',        type:'B', openDate:'25.04.30', area:7.3,   hangers:9,  grade:'D', salesPrevYear:19636,  salesLastMonth:8996  },
  { no:6,  brand:'MINKMUI', code:'31640', name:'롯데인천터미널',    type:'B', openDate:'25.04.10', area:10.2,  hangers:16, grade:'A', salesPrevYear:83758,  salesLastMonth:36577 },
  { no:7,  brand:'MINKMUI', code:'31990', name:'갤러리아센터시티',  type:'I', openDate:'25.01.24', area:8,     hangers:12, grade:'C', salesPrevYear:44690,  salesLastMonth:19580 },
  { no:8,  brand:'MINKMUI', code:'31010', name:'롯데본점',          type:'I', openDate:'24.12.20', area:8.22,  hangers:12, grade:'A', salesPrevYear:196656, salesLastMonth:90956 },
  { no:9,  brand:'MINKMUI', code:'31140', name:'롯데울산',          type:'B', openDate:'24.12.18', area:10.9,  hangers:12, grade:'D', salesPrevYear:31128,  salesLastMonth:12567 },
  { no:10, brand:'MINKMUI', code:'31460', name:'현대울산',          type:'B', openDate:'24.08.15', area:9.96,  hangers:10, grade:'B', salesPrevYear:76526,  salesLastMonth:31112 },
  { no:11, brand:'MINKMUI', code:'31770', name:'AK수원',            type:'I', openDate:'24.08.06', area:10.7,  hangers:11, grade:'D', salesPrevYear:31392,  salesLastMonth:13164 },
  { no:12, brand:'MINKMUI', code:'31680', name:'신세계경기',        type:'I', openDate:'24.08.01', area:8.6,   hangers:9,  grade:'D', salesPrevYear:36831,  salesLastMonth:15970 },
  { no:13, brand:'MINKMUI', code:'31320', name:'롯데평촌',          type:'B', openDate:'24.04.26', area:11.68, hangers:10, grade:'C', salesPrevYear:35956,  salesLastMonth:16926 },
  { no:14, brand:'MINKMUI', code:'31190', name:'롯데대구',          type:'I', openDate:'24.04.16', area:8.9,   hangers:10, grade:'E', salesPrevYear:30638,  salesLastMonth:13018 },
  { no:15, brand:'MINKMUI', code:'31240', name:'롯데스타',          type:'B', openDate:'24.04.16', area:10.32, hangers:11, grade:'E', salesPrevYear:24429,  salesLastMonth:10556 },
  { no:16, brand:'MINKMUI', code:'31340', name:'롯데 수원',         type:'I', openDate:'23.12.14', area:8.19,  hangers:10, grade:'D', salesPrevYear:30252,  salesLastMonth:13827 },
  { no:17, brand:'MINKMUI', code:'31440', name:'현대천호',          type:'I', openDate:'23.10.17', area:7.03,  hangers:9,  grade:'D', salesPrevYear:35846,  salesLastMonth:16605 },
  { no:18, brand:'MINKMUI', code:'31080', name:'롯데 부산',         type:'B', openDate:'23.09.08', area:7.35,  hangers:10, grade:'B', salesPrevYear:70137,  salesLastMonth:27024 },
  { no:19, brand:'MINKMUI', code:'31690', name:'신세계 센텀',       type:'I', openDate:'23.08.22', area:11.35, hangers:11, grade:'A', salesPrevYear:83306,  salesLastMonth:32773 },
  { no:20, brand:'MINKMUI', code:'31650', name:'신세계강남',        type:'B', openDate:'23.05.25', area:9.32,  hangers:10, grade:'A', salesPrevYear:104855, salesLastMonth:41370 },
  { no:21, brand:'MINKMUI', code:'31040', name:'롯데청량리',        type:'B', openDate:'23.04.22', area:10,    hangers:13, grade:'D', salesPrevYear:39222,  salesLastMonth:18915 },
  { no:22, brand:'MINKMUI', code:'32070', name:'현대판교',          type:'I', openDate:'22.12.30', area:7.3,   hangers:11, grade:'A', salesPrevYear:96792,  salesLastMonth:34569 },
  { no:23, brand:'MINKMUI', code:'31410', name:'현대본점',          type:'B', openDate:'22.12.01', area:7.5,   hangers:9,  grade:'B', salesPrevYear:70726,  salesLastMonth:29880 },
  { no:24, brand:'MINKMUI', code:'31420', name:'현대무역',          type:'B', openDate:'22.09.23', area:7.6,   hangers:11, grade:'B', salesPrevYear:75449,  salesLastMonth:27337 },
  { no:25, brand:'MINKMUI', code:'31520', name:'현대목동',          type:'B', openDate:'22.08.13', area:11.4,  hangers:12, grade:'B', salesPrevYear:66712,  salesLastMonth:25559 },
  { no:26, brand:'MINKMUI', code:'31430', name:'현대신촌',          type:'I', openDate:'22.08.09', area:6.09,  hangers:9,  grade:'C', salesPrevYear:44554,  salesLastMonth:11735 },
  { no:27, brand:'MINKMUI', code:'31660', name:'신세계본점',        type:'I', openDate:'22.08.09', area:7.37,  hangers:11, grade:'H', salesPrevYear:48388,  salesLastMonth:20621 },
  { no:28, brand:'MINKMUI', code:'31700', name:'신세계 천안아산',   type:'I', openDate:'21.09.06', area:10,    hangers:11, grade:'B', salesPrevYear:65046,  salesLastMonth:27764 },
  { no:29, brand:'MINKMUI', code:'31540', name:'현대킨텍스',        type:'B', openDate:'21.08.31', area:8.18,  hangers:12, grade:'C', salesPrevYear:43111,  salesLastMonth:14815 },
  { no:30, brand:'MINKMUI', code:'31850', name:'신세계대전',        type:'I', openDate:'',         area:7.24,  hangers:9,  grade:'B', salesPrevYear:54321,  salesLastMonth:24982 },
  { no:31, brand:'MINKMUI', code:'31360', name:'롯데동탄',          type:'I', openDate:'21.08.08', area:11.3,  hangers:11, grade:'C', salesPrevYear:49399,  salesLastMonth:24388 },
  { no:32, brand:'MINKMUI', code:'31950', name:'갤러리아진주',      type:'I', openDate:'21.08.03', area:8.5,   hangers:12, grade:'E', salesPrevYear:23074,  salesLastMonth:10957 },
  { no:33, brand:'MINKMUI', code:'31090', name:'롯데광주',          type:'B', openDate:'21.07.09', area:13.75, hangers:12, grade:'E', salesPrevYear:28063,  salesLastMonth:11941 },
  { no:34, brand:'MINKMUI', code:'31560', name:'현대충청',          type:'B', openDate:'21.04.23', area:8.8,   hangers:11, grade:'B', salesPrevYear:46179,  salesLastMonth:16874 },
  { no:35, brand:'MINKMUI', code:'31310', name:'AK분당',            type:'I', openDate:'20.09.25', area:4.93,  hangers:9,  grade:'E', salesPrevYear:22400,  salesLastMonth:11333 },
  { no:36, brand:'MINKMUI', code:'31030', name:'롯데영등포',        type:'I', openDate:'20.05.06', area:9.41,  hangers:11, grade:'D', salesPrevYear:33188,  salesLastMonth:14749 },
  { no:37, brand:'MINKMUI', code:'32000', name:'갤러리아광교',      type:'I', openDate:'20.03.02', area:10.18, hangers:12, grade:'C', salesPrevYear:45699,  salesLastMonth:16237 },
  { no:38, brand:'MINKMUI', code:'31980', name:'갤러리아대전',      type:'B', openDate:'20.02.28', area:9.45,  hangers:13, grade:'C', salesPrevYear:48536,  salesLastMonth:21195 },
  { no:39, brand:'MINKMUI', code:'31130', name:'롯데포항',          type:'B', openDate:'19.10.30', area:9.76,  hangers:13, grade:'D', salesPrevYear:29573,  salesLastMonth:13072 },
  { no:40, brand:'MINKMUI', code:'31610', name:'신세계영등포',      type:'B', openDate:'19.09.06', area:6.52,  hangers:11, grade:'D', salesPrevYear:33829,  salesLastMonth:15564 },
  { no:41, brand:'MINKMUI', code:'31200', name:'롯데상인',          type:'B', openDate:'19.08.09', area:7.8,   hangers:12, grade:'E', salesPrevYear:18364,  salesLastMonth:7676  },
  { no:42, brand:'MINKMUI', code:'31120', name:'롯데강남',          type:'B', openDate:'19.07.30', area:9,     hangers:12, grade:'D', salesPrevYear:38264,  salesLastMonth:16320 },
  { no:43, brand:'MINKMUI', code:'31290', name:'롯데중동',          type:'B', openDate:'19.04.17', area:12,    hangers:13, grade:'D', salesPrevYear:42274,  salesLastMonth:17204 },
  { no:44, brand:'MINKMUI', code:'31280', name:'롯데안산',          type:'I', openDate:'18.12.06', area:9.8,   hangers:12, grade:'E', salesPrevYear:24138,  salesLastMonth:9967  },
  { no:45, brand:'MINKMUI', code:'31720', name:'신세계의정부',      type:'B', openDate:'18.08.01', area:8.66,  hangers:12, grade:'C', salesPrevYear:52192,  salesLastMonth:22742 },
  { no:46, brand:'MINKMUI', code:'31070', name:'롯데일산',          type:'B', openDate:'17.03.08', area:9,     hangers:13, grade:'D', salesPrevYear:30612,  salesLastMonth:12310 },
  { no:47, brand:'MINKMUI', code:'31230', name:'롯데센텀',          type:'I', openDate:'16.09.03', area:8.84,  hangers:10, grade:'E', salesPrevYear:16163,  salesLastMonth:7823  },
  { no:48, brand:'MINKMUI', code:'31270', name:'롯데구리',          type:'I', openDate:'16.08.26', area:8.52,  hangers:10, grade:'E', salesPrevYear:21167,  salesLastMonth:9630  },
  { no:49, brand:'MINKMUI', code:'31730', name:'신세계김해',        type:'B', openDate:'16.06.22', area:10.42, hangers:11, grade:'D', salesPrevYear:36937,  salesLastMonth:16110 },
  { no:50, brand:'MINKMUI', code:'31780', name:'AK평택',            type:'B', openDate:'16.04.15', area:10.5,  hangers:10, grade:'E', salesPrevYear:19344,  salesLastMonth:8159  },
  { no:51, brand:'MINKMUI', code:'31110', name:'롯데대전',          type:'B', openDate:'15.09.02', area:12.65, hangers:11, grade:'E', salesPrevYear:24286,  salesLastMonth:9995  },
  { no:52, brand:'MINKMUI', code:'31250', name:'롯데광복',          type:'B', openDate:'14.02.14', area:8.58,  hangers:11, grade:'D', salesPrevYear:30577,  salesLastMonth:13506 },
  { no:53, brand:'MINKMUI', code:'31300', name:'롯데김포',          type:'B', openDate:'14.02.12', area:9.88,  hangers:10, grade:'E', salesPrevYear:29333,  salesLastMonth:12398 },
  { no:54, brand:'MINKMUI', code:'31210', name:'롯데전주',          type:'B', openDate:'13.06.12', area:7.37,  hangers:11, grade:'C', salesPrevYear:47285,  salesLastMonth:21081 },
  { no:55, brand:'MINKMUI', code:'31160', name:'롯데창원',          type:'I', openDate:'13.04.26', area:8.1,   hangers:9,  grade:'C', salesPrevYear:35607,  salesLastMonth:15911 },
  { no:56, brand:'MINKMUI', code:'31630', name:'신세계마산',        type:'B', openDate:'13.03.01', area:9,     hangers:10, grade:'E', salesPrevYear:25029,  salesLastMonth:10952 },
  { no:57, brand:'MINKMUI', code:'31790', name:'AK원주',            type:'B', openDate:'',         area:null,  hangers:10, grade:'D', salesPrevYear:26694,  salesLastMonth:11409 },
  // ── PETIT PALAIS ─────────────────────────────────────────────────────────────
  { no:1,  brand:'PP',      code:'K1690', name:'신세계센텀',        type:'I', openDate:'25.05.20', area:11.47, hangers:4,  grade:null, salesPrevYear:null,  salesLastMonth:null  },
  { no:2,  brand:'PP',      code:'K1650', name:'신세계강남',        type:'I', openDate:'25.05.02', area:11.9,  hangers:5,  grade:null, salesPrevYear:null,  salesLastMonth:null  },
];

export function fmtDate(d: string) {
  if (!d) return '─';
  const [yy, mm, dd] = d.split('.');
  return `20${yy}.${mm}.${dd}`;
}

export function fmtSales(v: number | null) {
  if (v === null) return '─';
  return `${v.toLocaleString()}만원`;
}

export const GRADE_STYLE: Record<string, { bg: string; text: string; label: string }> = {
  A: { bg: '#FEF3C7', text: '#92400E', label: 'A등급' },
  B: { bg: '#DBEAFE', text: '#1E40AF', label: 'B등급' },
  C: { bg: '#D1FAE5', text: '#065F46', label: 'C등급' },
  D: { bg: '#FEE2E2', text: '#991B1B', label: 'D등급' },
  E: { bg: '#F3F4F6', text: '#6B7280', label: 'E등급' },
  H: { bg: '#EDE9FE', text: '#5B21B6', label: 'H등급' },
};
