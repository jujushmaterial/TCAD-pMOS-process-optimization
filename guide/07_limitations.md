# 13. Limitations and Next Steps

## Limitations

### 1. Sequential Search

각 단계에서 후보를 제거한 뒤 다음 parameter를 비교했기 때문에, 초기 단계에서 제외된 조건이 후속 변수와 결합했을 때 더 좋은 결과를 만들 가능성이 있습니다. 따라서 최종 조건은 **제한된 split 범위에서 선택한 balanced optimum**으로 해석해야 합니다.

### 2. Parameter Interaction

- SD_Dose와 SD_E는 RTA와 함께 junction depth와 activation을 결정
- Spacer_Dep는 LDD/S-D 위치 관계와 electric field를 동시에 변화
- 한 parameter의 단독 trend가 다른 조건에서도 유지된다고 단정할 수 없음

### 3. Evaluation Plane

`Ion/Ioff-SS` 그래프는 trade-off를 직관적으로 보여주지만, 다음 요소에 영향을 받을 수 있습니다.

- axis scale
- 후보 point 중첩
- 우수 영역의 threshold
- Ion/Ioff 계산 시 매우 작은 Ioff에 대한 민감도

## Next Steps

1. 선택된 범위 주변에서 full-factorial 또는 response surface DOE 수행
2. Pareto front를 이용해 다목적 최적화 기준 명확화
3. DIBL, junction depth, electric field, capacitance 추가 비교
4. 원본 SProcess/SDevice/SVisual 전체 command와 project 설정 공개
5. Python으로 Workbench 결과를 자동 수집하고 scatter/Pareto plot 생성

## What Was Learned

최적화 결과뿐 아니라 **어떤 기준으로 후보를 제거했는가**가 최종 결과에 영향을 준다는 점을 확인했습니다. 수치 비교는 개별 trend 이해에 유리하고, 그래프 기반 비교는 다중 metric의 균형을 확인하는 데 유리했습니다.

**Summary:**  
The main limitation is the sequential search space, and future work should use broader multi-objective DOE and structural metrics.
