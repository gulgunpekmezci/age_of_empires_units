import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Slider, Checkbox, Radio, Button, Table, Tag, Space } from 'antd';
import type { CheckboxChangeEvent, RadioChangeEvent } from 'antd/es/checkbox';
import type { ColumnsType } from 'antd/lib/table';
import { getUnitsSelector } from '../../store/units/selectors';
import { fetchUnitRequest } from '../../store/units/actions';
import {AGE_TYPES, COST_TYPE} from '../../utils/constants';
import { ICostItem, IUnit, ICost } from '../../utils/types'
import './unit-component.scss';

const UnitComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const units = useSelector(getUnitsSelector);
  const [filteredUnitList, setFilteredUnitList] = useState<IUnit>(units);
  const [selectedAge, setSelectedAge] = useState<string>('All');
  const [selectedCostType, setSelectedCostType] = useState<string | null>(null);
  const [sliderValues, setSliderValue] = useState();
  const [filterCost, setFilterCost] = useState<ICostItem[] | []>(COST_TYPE);
  const [filterX, setFilterX] = useState([]);

  const columns: ColumnsType<IUnit> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Costs',
      key: 'cost',
      dataIndex: 'cost',
      render: cost => {
        let renderItem: string = '';

        if (cost !== null) {
          Object.keys(cost).map((costItem: ICost) => {
            renderItem += `${costItem} : ${cost[costItem]} `
          })
        }

        return renderItem
      },
    }
  ];

  useEffect(() => {
    dispatch(fetchUnitRequest());
    setFilteredUnitList(units);
  }, [units]);


  const onChange = (e: CheckboxChangeEvent) => {
    setSelectedCostType(e.target.name);
    let newArray = [...filterCost];
    newArray[e.target.id].checked = e.target.checked;
    setFilterCost(newArray);
    updateFilterUnit();
  };

  const filterUnitData = (costType: string, min, max) => {
    let newFilteredUnit : IUnit[] = [];
    let currentUnit: IUnit = {};
    filteredUnitList.map(unit => {
      if (unit.cost && unit.cost.hasOwnProperty(costType)) {
        newFilteredUnit.push(unit);
      }
      setFilteredUnitList(newFilteredUnit);
    })
  }

  const handleAgeChange = (e: RadioChangeEvent) => {
    clearFilter();
    setSelectedAge(e.target.value);
    setFilteredUnitList(filterForAge(e.target.value));
  };

  const onChangeSliderValue = (
    value: number | [number, number],
    index: number
  ) => {
    let newArray = [...filterCost];
    newArray[index].value = value;
    setFilterCost(newArray);
  }

  const onAfterChange =  (value: number | [number, number]) => {
    updateFilterUnit();
  }

  const filterForAge = (age) => {
    if (age === AGE_TYPES.ALL) {
      return units;
    }
    return units.filter((unit: any) => unit.age === age)
  }

  const updateFilterUnit = () => {
    let filteredArray = [];

    filterCost.forEach(item => {
      if (item.checked) {
        if (filteredArray.length > 0) {
          filteredArray = filteredArray.filter(unit => unit.cost &&
            unit.cost.hasOwnProperty(item.id) &&
            unit.cost[item.id] > item.value[0] &&
            unit.cost[item.id] < item.value[1])

        } else {
          filteredArray = filterForAge(selectedAge).filter(unit => unit.cost &&
            unit.cost.hasOwnProperty(item.id) &&
            unit.cost[item.id] > item.value[0] &&
            unit.cost[item.id] < item.value[1]);
        }
      }
    });
    setFilteredUnitList(filteredArray);
  }

  const selectedRow = (row) => {
    navigate('/detail', { state: { rowData: row} });
  }

  const clearFilter = () => {
    filterCost.map(filter => {
      filter.checked = false;
    });
  };

  return <div className="unit-component-container">

    <Radio.Group value={selectedAge} onChange={handleAgeChange}>
      {
        Object.values(AGE_TYPES).map(age => <Radio.Button key={age} value={age}>{age}</Radio.Button>)
      }
    </Radio.Group>
    <div className="cost-filter-wrapper">
      {
        filterCost.map((cost, index) =>
          <div className="filter-container" key={cost.id}>
            <Checkbox
              key={`checkbox-${cost.id}`}
              className="checkbox"
              id={index}
              name={cost.id}
              checked={cost.checked}
              onChange={onChange}
            >
              {cost.id}
            </Checkbox>
            {
              cost.checked &&
              <Slider
                  key={`slider-${cost.id}`}
                  className="slider"
                  id={index}
                  range
                  max={200}
                  defaultValue={[0, 200]}
                  onChange={(value) => onChangeSliderValue(value, index)}
                  onAfterChange={onAfterChange}
              />
            }
        </div>
        )
      }
    </div>
    <Table columns={columns} dataSource={filteredUnitList} onRow={(row) => ({
      onClick: () => { selectedRow(row) }
    })} />;
  </div>
};

export default UnitComponent;