import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import dayjs from 'dayjs';
import URI from 'urijs';
import "./App.css";

import Header from "../common/Header/index";
import Nav from "../common/Nav/index";
import List from "./components/List/index";
import BottomNav from "./components/BottomNav/index";

import {
  setFrom,
  setTo,
  setDepartDate,
  setHighSpeed,
  setSearchParsed,
  setTrainList,
  setTicketTypes,
  setTrainTypes,
  setDepartStations,
  setSelectArriveStations
}  from './action';
import { transDayTime } from '../utils/util';

function App(props) {
  const {
    dispatch,
    from,
    to,
    departDate,
    highSpeed,
    searchParsed,
    orderType,
    onlyTickets,
    selectedTicketTypes,
    selectTrainTypes,
    selectDepartStations,
    selectArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  } = props;

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);
    const { from, to, date, highSpeed } = queries;

    dispatch(setFrom(from));
    dispatch(setTo(to));
    dispatch(setDepartDate(transDayTime(dayjs(date).valueOf())));
    dispatch(setHighSpeed(highSpeed === 'true'));
    dispatch(setSearchParsed(true));
  }, [])

  useEffect(() => {
    if (!searchParsed) {
      return;
    }
    
    const url = new URI('/rest/query')
      .setSearch('from', from)
      .setSearch('to', to)
      .setSearch('highSpeed', highSpeed)
      .setSearch('orderType', orderType)
      .setSearch('onlyTickets', onlyTickets)
      .setSearch('selectedTicketTypes', Object.keys(selectedTicketTypes).join())
      .setSearch('selectTrainTypes', Object.keys(selectTrainTypes).join())
      .setSearch('selectDepartStation', Object.keys(selectDepartStations).join())
      .setSearch('selectArriveStations', Object.keys(selectArriveStations).join())
      .setSearch('departTimeStart', departTimeStart)
      .setSearch('departTimeEnd', departTimeEnd)
      .setSearch('arriveTimeStart', arriveTimeStart)
      .setSearch('arriveTimeEnd', arriveTimeEnd)
      .toString();

      fetch(url)
        .then(response => response.json())
        .then(res => {
          const {
            dataMap: {
              directTrainInfo: {
                trains,
                filter: {
                  ticketType,
                  trainType,
                  depStation,
                  arrStation,
                }
              }
            }
          } = res;

          dispatch(setTrainList(trains));
          dispatch(setTicketTypes(ticketType));
          dispatch(setTrainTypes(trainType));
          dispatch(setDepartStations(depStation));
          dispatch(setSelectArriveStations(arrStation));
        })
  }, [
    from,
    to,
    departDate,
    highSpeed,
    searchParsed,
    orderType,
    onlyTickets,
    selectedTicketTypes,
    selectTrainTypes,
    selectDepartStations,
    // selectArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  ])

  const onBack = useCallback(() => {
    window.history.back();
  }, [])

  if (!searchParsed) {
    return null;
  }

  return (
    <div>
      <div className="header-wrapper">
        <Header title={`${from} → ${to}`} onBack={() => onBack()}/>
      </div>
      <Nav />
      <List />
      <BottomNav />
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
