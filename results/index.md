---
layout: default
title: Results and Data
---

# Results and Data

두 최적화 방식에서 선정한 최종 후보와 공개 CSV를 정리합니다.

## 최종 후보 비교

| Metric | Numerical Method | Plot-Based Method | Interpretation |
|---|---:|---:|---|
| LDD_Dose / LDD_E | `7e13` / 7 keV | `3e13` / 3 keV | plot method가 낮은 LDD 조건 선택 |
| SD_Dose / SD_E | `4e16` / 23 keV | `5e16` / 10 keV | junction 조건의 trade-off 차이 |
| RTA | 5 s | 3 s | plot method가 짧은 anneal 선택 |
| Spacer_Dep | 0.25 | 0.30 | leakage와 resistance 균형 차이 |
| Ion | `1.474e-04 A/µm` | `1.35e-04 A/µm` | plot method 약 9.2% 낮음 |
| Ioff | `1.547e-15 A/µm` | `4.93e-16 A/µm` | plot method 약 68.1% 낮음 |
| SS | 85.660 mV/dec | 85.181 mV/dec | plot method 약 0.56% 낮음 |
| gm | `1.044e-04` | `9.91e-05` | plot method 약 5.3% 낮음 |

![Final method comparison](../figures/overview/final_method_comparison.png)

Plot-based 조건은 Ion과 gm이 조금 낮지만 목표 Ion을 충분히 만족했고, Ioff와 SS가 개선되어 최종 대표 조건으로 선정했습니다.

## 최종 조건

| Parameter | Final Value |
|---|---:|
| Lg | 0.25 |
| GOxTime | 10 |
| NWell | `1e17 cm^-3` |
| LDD_Dose / LDD_E | `3e13 cm^-2` / 3 keV |
| SD_Dose / SD_E | `5e16 cm^-2` / 10 keV |
| RTA | 3 s at 1000 °C |
| Spacer_Dep | 0.30 |
| Vg / Vd | -2.5 V / -1.0 V |

## 성능 검증

| Metric | Result | Target | Check |
|---|---:|---:|---|
| Vtgm | -1.1421 V | Negative pMOS threshold | Pass |
| Ion | `1.35e-04 A/µm` | `> 1e-5` | Pass |
| Ioff | `4.93e-16 A/µm` | `< 1e-14` | Pass |
| SS | 85.181 mV/dec | `< 100` | Pass |
| Vg0_actual | 0 V | 0 V | Verified |
| VgIon_actual | -2.5 V | -2.5 V | Verified |

## 공개 데이터

- [Final results CSV](./final_results.csv)
- [Method 1 자세히 보기](../guide/08_method1_numerical_optimization.html)
- [Method 2 자세히 보기](../guide/09_method2_plot_optimization.html)
- [최종 비교 자세히 보기](../guide/10_method_comparison_and_final.html)

최종 조건은 평가한 split 범위에서 선정한 balanced condition이며, 모든 가능한 조합의 global optimum을 의미하지 않습니다.
