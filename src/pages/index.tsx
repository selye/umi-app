import { Button, Tabs } from 'antd-mobile';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import moment from 'moment';
import { debounce } from './utils/util';

const Main = () => {
  

  const debounceCick = debounce(() => {
    console.log("11")
  }, 2000) 
  return <div className="report-detail">
    <Button color='primary' onClick={debounceCick}>点我</Button>
  </div>;
};

export default Main;
