# 10. Method 2 - Ion/Ioff-SS Optimization

## 이 방법의 개요

| Item | Description |
|---|---|
| x-axis | Ion/Ioff, larger is better |
| y-axis | SS, smaller is better |
| Preferred region | lower-right |
| Sequence | LDD -> Source/Drain -> RTA -> Spacer -> Fine Split |

수치 비교에서 제외했던 조건도 다시 포함해, on/off current ratio와 gate 제어성을 동시에 비교했습니다.

## 1. LDD Split

![LDD scatter selection](../figures/actual/method2_optimization.jpg)

낮은 LDD_Dose는 Ion이 약간 감소했지만 Ioff가 더 크게 억제되어 `Ion/Ioff`가 증가하는 경우가 있었습니다. 그래프에서 우수한 위치를 보인 낮은 dose/energy 후보를 다음 단계로 전달했습니다.

대표 후보:

```text
3e13/3, 3e13/5, 3e13/7, 4e13/3
```

## 2. Source/Drain Split

```text
SD_Dose = 1e16, 3e16, 5e16
SD_E    = 10, 15, 20 keV
```

![Source/Drain scatter selection](../figures/actual/method2_optimization.jpg)

- 높은 dose는 Source/Drain resistance 감소에 유리
- 높은 energy는 junction depth와 leakage를 증가시킬 수 있음
- `SD_Dose = 5e16`, `SD_E = 10-15` 주변이 우수 후보로 나타남

## 3. RTA Split

![RTA scatter selection](../figures/actual/method2_optimization.jpg)

RTA 3, 5, 7 s를 비교한 결과, RTA보다 Source/Drain dose/energy 조합의 영향이 더 크게 나타났습니다. 낮은 dose를 RTA 증가만으로 보완하기는 어려웠고, 높은 energy와 긴 RTA 조합은 diffusion과 leakage에 불리할 수 있었습니다.

## 4. Spacer Split

![Spacer scatter selection](../figures/actual/method2_optimization.jpg)

`Spacer_Dep = 0.30-0.35` 영역에서 leakage 억제와 series resistance 사이의 균형이 상대적으로 우수했습니다.

## 5. Fine Split

```text
SD_E       = 12.5 keV
RTA        = 4 s
Spacer_Dep = 0.325
```

기존 우수 후보 주변에 중간값을 추가해 비교했습니다.

![Fine split selection](../figures/actual/method2_optimization.jpg)

점들이 다음 두 그룹으로 나뉘었습니다.

- low SS but lower Ion/Ioff
- high Ion/Ioff but slightly higher SS

최종 선택에서는 Ion/Ioff 최대값 하나만 고르지 않고, 충분히 높은 전류비와 `SS <= 85.2 mV/dec`를 함께 만족하는 후보를 선택했습니다.

## Selected Device

| Parameter | Value |
|---|---:|
| LDD_Dose / LDD_E | `3e13` / 3 keV |
| SD_Dose / SD_E | `5e16` / 10 keV |
| RTA | 3 s |
| Spacer_Dep | 0.30 |
| Ion | `1.35e-04 A/um` |
| Ioff | `4.93e-16 A/um` |
| SS | 85.181 mV/dec |

**Summary:**  
The plot-based method restored candidates discarded by the numerical method and selected a device with a stronger Ion/Ioff and SS balance.

---

# 11. Optimization Method Comparison

## 비교 목적

| Item | Description |
|---|---|
| Method 1 | 각 metric과 증감률을 직접 비교 |
| Method 2 | Ion/Ioff와 SS를 한 평면에서 비교 |
| Decision | 목표 Ion을 유지하면서 leakage와 SS가 더 낮은 조건 선택 |

## Final Candidate Comparison

| Metric | Numerical Method | Plot-Based Method | Difference |
|---|---:|---:|---|
| Ion | `1.474e-04` | `1.35e-04` | plot method 약 9.2% 낮음 |
| Ioff | `1.547e-15` | `4.93e-16` | plot method 약 68.1% 낮음 |
| SS | 85.660 | 85.181 | plot method 약 0.56% 낮음 |
| gm | `1.044e-04` | `9.91e-05` | plot method 약 5.3% 낮음 |

![Final method comparison](../figures/actual/method2_optimization.jpg)

## Interpretation

### Numerical Method

- 특정 metric의 변화량을 확인하기 쉬움
- 높은 Ion 조건을 찾는 데 유리
- 각 지표가 반대 방향으로 움직일 때 최종 판단이 복잡함

### Plot-Based Method

- on/off ratio와 SS trade-off를 한눈에 확인
- 낮은 leakage를 반영해 효율적인 후보 선택 가능
- 축 범위, 겹치는 point, threshold 설정에 따라 판단이 달라질 수 있음

## Final Decision

두 조건 모두 target을 만족했습니다. 그래프 기반 조건은 Ion과 gm이 조금 낮았지만 목표를 충분히 초과했고, Ioff 감소 폭이 훨씬 컸으며 SS도 개선되었습니다. 따라서 전체적인 switching/leakage 균형을 기준으로 그래프 기반 조건을 최종 소자로 선정했습니다.

**Summary:**  
The plot-based candidate was selected because its substantial leakage reduction outweighed the moderate reduction in drive current.

---

# 12. Final Device and Results

## Final Process Condition

| Parameter | Final Value |
|---|---:|
| Lg | 0.25 |
| GOxTime | 10 |
| NWell | `1e17 cm^-3` |
| LDD_Dose | `3e13 cm^-2` |
| LDD_E | 3 keV |
| SD_Dose | `5e16 cm^-2` |
| SD_E | 10 keV |
| RTA | 3 s |
| Spacer_Dep | 0.30 |
| Vg | -2.5 V |
| Vd | -1.0 V |

## Electrical Results

| Metric | Result | Target | Check |
|---|---:|---:|---|
| Vtgm | -1.1421 V | pMOS negative threshold | Pass |
| Ion | `1.35e-04 A/um` | `> 1e-5` | Pass |
| Ioff | `4.93e-16 A/um` | `< 1e-14` | Pass |
| SS | 85.181 mV/dec | `< 100` | Pass |
| gm | `9.91e-05` | reference | - |
| Vg0_actual | 0 V | 0 V | Verified |
| VgIon_actual | -2.5 V | -2.5 V | Verified |

## Verification Images

![pMOS transfer curve](../figures/actual/project_overview.jpg)

![All split comparison](../figures/actual/method2_optimization.jpg)

## Result Meaning

- Ion은 target보다 약 13.5배 높음
- Ioff는 target보다 약 20배 낮음
- SS는 100 mV/dec 이하
- 실제 current 추출 bias도 목표 Vg와 일치
- 모든 split 중 단일 absolute maximum을 주장하기보다, 제한된 탐색 범위에서 균형이 좋은 조건으로 해석

## Data

- [Final results CSV](../results/final_results.csv)
- [Public report](../report/pmos_process_optimization_report.pdf)

**Summary:**  
The final device met all electrical targets and was verified at the intended gate-voltage extraction points.
