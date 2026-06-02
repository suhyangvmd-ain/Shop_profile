export type Brand = 'MINKMUI' | 'PP';
export type StoreType = 'I' | 'B';

export interface Store {
  no: number;
  brand: Brand;
  code: string;
  name: string;
  type: StoreType;
  openDate: string;
  area: number | null;
  hangers: number;
  salesPrevYear: number | null;  // 만원 (2025 연간)
  salesLastMonth: number | null; // 만원
}

export const stores: Store[] = [
  // ── MINKMUI ─────────────────────────────────────────────────────────
  { no:1,  brand:'MINKMUI', code:'31710', name:'롯데 노원',        type:'I', openDate:'25.11.04', area:7,     hangers:16, salesPrevYear:50912,  salesLastMonth:null },
  { no:2,  brand:'MINKMUI', code:'31640', name:'롯데 잠실',        type:'I', openDate:'25.09.26', area:10,    hangers:15, salesPrevYear:114963, salesLastMonth:null },
  { no:3,  brand:'MINKMUI', code:'31980', name:'PP 신세계 대구',   type:'I', openDate:'25.09.16', area:12,    hangers:10, salesPrevYear:89723,  salesLastMonth:null },
  { no:4,  brand:'MINKMUI', code:'31530', name:'PP 현대 중동',     type:'B', openDate:'25.08.27', area:18,    hangers:14, salesPrevYear:45364,  salesLastMonth:null },
  { no:5,  brand:'MINKMUI', code:'31740', name:'신세계하남',        type:'B', openDate:'25.04.30', area:7.3,   hangers:9,  salesPrevYear:21763,  salesLastMonth:null },
  { no:6,  brand:'MINKMUI', code:'31640', name:'롯데인천터미널',    type:'B', openDate:'25.04.10', area:10.2,  hangers:16, salesPrevYear:92531,  salesLastMonth:null },
  { no:7,  brand:'MINKMUI', code:'31980', name:'갤러리아센터시티',  type:'I', openDate:'25.01.24', area:8,     hangers:12, salesPrevYear:49816,  salesLastMonth:null },
  { no:8,  brand:'MINKMUI', code:'31010', name:'롯데본점',          type:'I', openDate:'24.12.20', area:8.22,  hangers:12, salesPrevYear:221317, salesLastMonth:null },
  { no:9,  brand:'MINKMUI', code:'31140', name:'롯데울산',          type:'B', openDate:'24.12.18', area:10.9,  hangers:12, salesPrevYear:34548,  salesLastMonth:null },
  { no:10, brand:'MINKMUI', code:'31480', name:'현대울산',          type:'B', openDate:'24.08.15', area:9.96,  hangers:10, salesPrevYear:84750,  salesLastMonth:null },
  { no:11, brand:'MINKMUI', code:'31770', name:'AK수원',            type:'I', openDate:'24.08.06', area:10.7,  hangers:11, salesPrevYear:36109,  salesLastMonth:null },
  { no:12, brand:'MINKMUI', code:'31680', name:'신세계경기',        type:'I', openDate:'24.08.01', area:8.6,   hangers:9,  salesPrevYear:40998,  salesLastMonth:null },
  { no:13, brand:'MINKMUI', code:'31320', name:'롯데평촌',          type:'B', openDate:'24.04.26', area:11.68, hangers:10, salesPrevYear:40383,  salesLastMonth:null },
  { no:14, brand:'MINKMUI', code:'31190', name:'롯데대구',          type:'I', openDate:'24.04.16', area:8.9,   hangers:10, salesPrevYear:35236,  salesLastMonth:null },
  { no:15, brand:'MINKMUI', code:'31240', name:'롯데스타',          type:'B', openDate:'24.04.16', area:10.32, hangers:11, salesPrevYear:27472,  salesLastMonth:null },
  { no:16, brand:'MINKMUI', code:'31340', name:'롯데 수원',         type:'I', openDate:'23.12.14', area:8.19,  hangers:10, salesPrevYear:33473,  salesLastMonth:null },
  { no:17, brand:'MINKMUI', code:'31440', name:'현대천호',          type:'I', openDate:'23.10.17', area:7.03,  hangers:9,  salesPrevYear:40181,  salesLastMonth:null },
  { no:18, brand:'MINKMUI', code:'31080', name:'롯데 부산',         type:'B', openDate:'23.09.08', area:7.35,  hangers:10, salesPrevYear:79404,  salesLastMonth:null },
  { no:19, brand:'MINKMUI', code:'31690', name:'신세계 센텀',       type:'I', openDate:'23.08.22', area:11.35, hangers:11, salesPrevYear:91878,  salesLastMonth:null },
  { no:20, brand:'MINKMUI', code:'31650', name:'신세계강남',        type:'B', openDate:'23.05.25', area:9.32,  hangers:10, salesPrevYear:121910, salesLastMonth:null },
  { no:21, brand:'MINKMUI', code:'31040', name:'롯데청량리',        type:'B', openDate:'23.04.22', area:10,    hangers:13, salesPrevYear:43958,  salesLastMonth:null },
  { no:22, brand:'MINKMUI', code:'32070', name:'현대판교',          type:'I', openDate:'22.12.30', area:7.3,   hangers:11, salesPrevYear:107061, salesLastMonth:null },
  { no:23, brand:'MINKMUI', code:'31410', name:'현대본점',          type:'B', openDate:'22.12.01', area:7.5,   hangers:9,  salesPrevYear:78934,  salesLastMonth:null },
  { no:24, brand:'MINKMUI', code:'31420', name:'현대무역',          type:'B', openDate:'22.09.23', area:7.6,   hangers:11, salesPrevYear:89936,  salesLastMonth:null },
  { no:25, brand:'MINKMUI', code:'31520', name:'현대목동',          type:'B', openDate:'22.08.13', area:11.4,  hangers:12, salesPrevYear:74255,  salesLastMonth:null },
  { no:26, brand:'MINKMUI', code:'31430', name:'현대신촌',          type:'I', openDate:'22.08.09', area:6.09,  hangers:9,  salesPrevYear:49704,  salesLastMonth:null },
  { no:27, brand:'MINKMUI', code:'31660', name:'신세계본점',        type:'I', openDate:'22.08.09', area:7.37,  hangers:11, salesPrevYear:56970,  salesLastMonth:null },
  { no:28, brand:'MINKMUI', code:'31700', name:'신세계 천안아산',   type:'I', openDate:'21.09.06', area:10,    hangers:11, salesPrevYear:74563,  salesLastMonth:null },
  { no:29, brand:'MINKMUI', code:'31540', name:'현대킨텍스',        type:'B', openDate:'21.08.31', area:8.18,  hangers:12, salesPrevYear:48015,  salesLastMonth:null },
  { no:30, brand:'MINKMUI', code:'31850', name:'신세계대전',        type:'I', openDate:'',         area:7.24,  hangers:9,  salesPrevYear:60969,  salesLastMonth:null },
  { no:31, brand:'MINKMUI', code:'31360', name:'롯데동탄',          type:'I', openDate:'21.08.08', area:11.3,  hangers:11, salesPrevYear:54571,  salesLastMonth:null },
  { no:32, brand:'MINKMUI', code:'31950', name:'갤러리아진주',      type:'I', openDate:'21.08.03', area:8.5,   hangers:12, salesPrevYear:25810,  salesLastMonth:null },
  { no:33, brand:'MINKMUI', code:'31090', name:'롯데광주',          type:'B', openDate:'21.07.09', area:13.75, hangers:12, salesPrevYear:31348,  salesLastMonth:null },
  { no:34, brand:'MINKMUI', code:'31560', name:'현대충청',          type:'B', openDate:'21.04.23', area:8.8,   hangers:11, salesPrevYear:51624,  salesLastMonth:null },
  { no:35, brand:'MINKMUI', code:'31310', name:'AK분당',            type:'I', openDate:'20.09.25', area:4.93,  hangers:9,  salesPrevYear:25186,  salesLastMonth:null },
  { no:36, brand:'MINKMUI', code:'31030', name:'롯데영등포',        type:'I', openDate:'20.05.06', area:9.41,  hangers:11, salesPrevYear:36801,  salesLastMonth:null },
  { no:37, brand:'MINKMUI', code:'32000', name:'갤러리아광교',      type:'I', openDate:'20.03.02', area:10.18, hangers:12, salesPrevYear:51291,  salesLastMonth:null },
  { no:38, brand:'MINKMUI', code:'31980', name:'갤러리아대전',      type:'B', openDate:'20.02.28', area:9.45,  hangers:13, salesPrevYear:53691,  salesLastMonth:null },
  { no:39, brand:'MINKMUI', code:'31130', name:'롯데포항',          type:'B', openDate:'19.10.30', area:9.76,  hangers:13, salesPrevYear:33155,  salesLastMonth:null },
  { no:40, brand:'MINKMUI', code:'31610', name:'신세계영등포',      type:'B', openDate:'19.09.06', area:6.52,  hangers:11, salesPrevYear:37894,  salesLastMonth:null },
  { no:41, brand:'MINKMUI', code:'31200', name:'롯데상인',          type:'B', openDate:'19.08.09', area:7.8,   hangers:12, salesPrevYear:20621,  salesLastMonth:null },
  { no:42, brand:'MINKMUI', code:'31120', name:'롯데강남',          type:'B', openDate:'19.07.30', area:9,     hangers:12, salesPrevYear:42291,  salesLastMonth:null },
  { no:43, brand:'MINKMUI', code:'31290', name:'롯데중동',          type:'B', openDate:'19.04.17', area:12,    hangers:13, salesPrevYear:46841,  salesLastMonth:null },
  { no:44, brand:'MINKMUI', code:'31280', name:'롯데안산',          type:'I', openDate:'18.12.06', area:9.8,   hangers:12, salesPrevYear:27231,  salesLastMonth:null },
  { no:45, brand:'MINKMUI', code:'31720', name:'신세계의정부',      type:'B', openDate:'18.08.01', area:8.66,  hangers:12, salesPrevYear:58897,  salesLastMonth:null },
  { no:46, brand:'MINKMUI', code:'31070', name:'롯데일산',          type:'B', openDate:'17.03.08', area:9,     hangers:13, salesPrevYear:34124,  salesLastMonth:null },
  { no:47, brand:'MINKMUI', code:'31230', name:'롯데센텀',          type:'I', openDate:'16.09.03', area:8.84,  hangers:10, salesPrevYear:19793,  salesLastMonth:null },
  { no:48, brand:'MINKMUI', code:'31270', name:'롯데구리',          type:'I', openDate:'16.08.26', area:8.52,  hangers:10, salesPrevYear:23428,  salesLastMonth:null },
  { no:49, brand:'MINKMUI', code:'31730', name:'신세계김해',        type:'B', openDate:'16.06.22', area:10.42, hangers:11, salesPrevYear:40831,  salesLastMonth:null },
  { no:50, brand:'MINKMUI', code:'31780', name:'AK평택',            type:'B', openDate:'16.04.15', area:10.5,  hangers:10, salesPrevYear:21531,  salesLastMonth:null },
  { no:51, brand:'MINKMUI', code:'31110', name:'롯데대전',          type:'B', openDate:'15.09.02', area:12.65, hangers:11, salesPrevYear:26974,  salesLastMonth:null },
  { no:52, brand:'MINKMUI', code:'31250', name:'롯데광복',          type:'B', openDate:'14.02.14', area:8.58,  hangers:11, salesPrevYear:33879,  salesLastMonth:null },
  { no:53, brand:'MINKMUI', code:'31300', name:'롯데김포',          type:'B', openDate:'14.02.12', area:9.88,  hangers:10, salesPrevYear:33521,  salesLastMonth:null },
  { no:54, brand:'MINKMUI', code:'31210', name:'롯데전주',          type:'B', openDate:'13.06.12', area:7.37,  hangers:11, salesPrevYear:53210,  salesLastMonth:null },
  { no:55, brand:'MINKMUI', code:'31160', name:'롯데창원',          type:'I', openDate:'13.04.26', area:8.1,   hangers:9,  salesPrevYear:39956,  salesLastMonth:null },
  { no:56, brand:'MINKMUI', code:'31630', name:'신세계마산',        type:'B', openDate:'13.03.01', area:9,     hangers:10, salesPrevYear:27815,  salesLastMonth:null },
  { no:57, brand:'MINKMUI', code:'31790', name:'AK원주',            type:'B', openDate:'',         area:null,  hangers:10, salesPrevYear:30289,  salesLastMonth:null },
  // ── PETIT PALAIS ────────────────────────────────────────────────────
  { no:1,  brand:'PP',      code:'K1690', name:'신세계센텀',        type:'I', openDate:'25.05.20', area:11.47, hangers:4,  salesPrevYear:24511,  salesLastMonth:null },
  { no:2,  brand:'PP',      code:'K1650', name:'신세계강남',        type:'I', openDate:'25.05.02', area:11.9,  hangers:5,  salesPrevYear:29051,  salesLastMonth:null },
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
