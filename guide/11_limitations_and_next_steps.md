# 11. Limitations and Next Steps

## Limitations

### 1. Sequential Search

각 단계에서 후보를 제거한 뒤 다음 parameter를 비교했기 때문에, 초기 단계에서 제외된 조건이 후속 변수와 결합했을 때 더 좋은 결과를 만들 가능성이 있습니다.

따라서 최종 조건은 **제한된 split 범위에서 선택한 balanced optimum**이며 global optimum을 보장하지 않습니다.

### 2. Parameter Interaction

- SD_Dose와 SD_E는 RTA와 함께 junction depth와 activation을 결정
- Spacer_Dep는 LDD/S-D 위치 관계와 drain field를 동시에 변화
- 한 parameter의 단독 trend가 다른 조건에서도 유지된다고 단정할 수 없음

### 3. Evaluation Plane

`Ion/Ioff–SS` 그래프는 trade-off를 직관적으로 보여주지만 다음 요소에 영향을 받을 수 있습니다.

- axis scale
- 후보 point 중첩
- 우수 영역의 threshold
- 매우 작은 Ioff에 대한 `Ion/Ioff` 민감도

### 4. Available Source Scope

현재 `source/`에는 최종 보고서에 제시된 수정·추출 command를 기능별로 정리했습니다. 전체 mesh, physics, electrode, solve block을 포함한 원본 project command는 아직 포함하지 않았습니다.

## Next Steps

1. 선택 범위 주변에서 full-factorial 또는 response-surface DOE 수행
2. Pareto front를 이용해 다목적 최적화 기준 명확화
3. DIBL, junction depth, electric field, capacitance 추가 비교
4. Python으로 Workbench 결과를 자동 수집하고 scatter/Pareto plot 생성
5. 전체 SProcess, SDevice, SVisual project command 정리
6. 조건별 TDR 구조와 전기적 결과를 자동 연결

## What Was Learned

최적화 결과뿐 아니라 **어떤 기준으로 후보를 제거했는가**가 최종 결과에 영향을 준다는 점을 확인했습니다.

- 수치 비교: 개별 parameter trend 이해에 유리
- 그래프 기반 비교: 여러 metric의 균형 확인에 유리
- 공정 구조와 전기적 결과를 함께 봐야 선택 이유를 설명할 수 있음
- 자동 추출 기준의 실제 bias를 확인해야 DOE 결과의 신뢰성을 유지할 수 있음

**Summary:**  
The main limitation is the sequential search space. A broader joint DOE and Pareto-based evaluation are needed to approach a global optimum.
