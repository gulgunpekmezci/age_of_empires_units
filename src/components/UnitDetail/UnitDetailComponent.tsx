import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { IUnit, ICost } from '../../utils/types'
import './unit-detail-component.scss';

type UnitDetailComponentProps = {
  unit: IUnit;
}

const UnitDetailComponent = (props: UnitDetailComponentProps) => {
  return <div className="unit-detail-container">
    <Row>
      <Col span={6}>ID</Col>
      <Col span={6}>{props.unit.rowData.id}</Col>
    </Row>
    <Row>
      <Col span={6}>Name</Col>
      <Col span={6}>{props.unit.rowData.name}</Col>
    </Row>
    <Row>
      <Col span={6}>Description</Col>
      <Col span={6}>{props.unit.rowData.description}</Col>
    </Row>
    <Row>
      <Col span={6}>Min.Required Age</Col>
      <Col span={6}>{props.unit.rowData.age}</Col>
    </Row>
    <Row>
      <Col span={6}>Wood Cost</Col>
      <Col span={6}>{props.unit.rowData.cost.Wood}</Col>
    </Row>
    <Row>
      <Col span={6}>Food Cost</Col>
      <Col span={6}>{props.unit.rowData.cost.Food}</Col>
    </Row>
    <Row>
      <Col span={6}>Gold Cost</Col>
      <Col span={6}>{props.unit.rowData.cost.Gold}</Col>
    </Row>
    <Row>
      <Col span={6}>Build Time</Col>
      <Col span={6}>{props.unit.rowData.build_time}</Col>
    </Row>
    <Row>
      <Col span={6}>Reload Time</Col>
      <Col span={6}>{props.unit.rowData.reload_time}</Col>
    </Row>
    <Row>
      <Col span={6}>Hit Points</Col>
      <Col span={6}>{props.unit.rowData.hit_points}</Col>
    </Row>
    <Row>
      <Col span={6}>Attack</Col>
      <Col span={6}>c{props.unit.rowData.attack}</Col>
    </Row>
    <Row>
      <Col span={6}>Accurancy</Col>
      <Col span={6}>{props.unit.rowData.accuracy}</Col>
    </Row>
  </div>
}

export default UnitDetailComponent;