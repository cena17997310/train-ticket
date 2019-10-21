import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_DEPARTDATE,
  ACTION_SET_HIGHSPEED,
  ACTION_SET_TRANLIST,
  ACTION_SET_ORDERTYPE,
  ACTION_SET_ONLYTICKETS,
  ACTION_SET_TICKETTYPES,
  ACTION_SET_SELECTEDTICKETTYPES,
  ACTION_SET_TRAINTYPES,
  ACTION_SET_SELECTTRAINTYPES,
  ACTION_SET_DEPARTSTATIONS,
  ACTION_SET_SELECTDEPARTSTATION,
  ACTION_SET_ARRIVESTATIONS,
  ACTION_SET_SELECTARRIVESTATIONS,
  ACTION_SET_DEPARTTIMESTART,
  ACTION_SET_DEPARTTIMEEND,
  ACTION_SET_ARRIVETIMESTART,
  ACTION_SET_ARRIVETIMEEND,
  ACTION_SET_ISFILTERSVISIBLE,
  ACTION_SET_SEARCHPARSED
} from "./actionTypes";
import { ORDERTYPE_SHORT } from "./constant";

export default {
  from(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_FROM:
        return payload;
      default:
    }
    return state;
  },
  to(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TO:
        return payload;
      default:
    }
    return state;
  },
  departDate(state = Date.now(), action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTDATE:
        return payload;
      default:
    }
    return state;
  },
  highSpeed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_HIGHSPEED:
        return payload;
      default:
    }
    return state;
  },
  tranList(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TRANLIST:
        return payload;
      default:
    }
    return state;
  },
  orderType(state = ORDERTYPE_SHORT, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ORDERTYPE:
        return payload;
      default:
    }
    return state;
  },
  onlyTickets(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ONLYTICKETS:
        return payload;
      default:
    }
    return state;
  },
  ticketTypes(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TICKETTYPES:
        return payload;
      default:
    }
    return state;
  },
  selectedTicketTypes(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_SELECTEDTICKETTYPES:
        return payload;
      default:
    }
    return state;
  },
  trainTypes(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TRAINTYPES:
        return payload;
      default:
    }
    return state;
  },
  selectTrainTypes(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_SELECTTRAINTYPES:
        return payload;
      default:
    }
    return state;
  },
  departStations(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTSTATIONS:
        return payload;
      default:
    }
    return state;
  },
  selectDepartStations(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_SELECTDEPARTSTATION:
        return payload;
      default:
    }
    return state;
  },
  arriveStations(state = [], action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ARRIVESTATIONS:
        return payload;
      default:
    }
    return state;
  },
  selectArriveStations(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_SELECTARRIVESTATIONS:
        return payload;
      default:
    }
    return state;
  },
  departTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTTIMESTART:
        return payload;
      default:
    }
    return state;
  },
  departTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_DEPARTTIMEEND:
        return payload;
      default:
    }
    return state;
  },
  arriveTimeStart(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ARRIVETIMESTART:
        return payload;
      default:
    }
    return state;
  },
  arriveTimeEnd(state = 24, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ARRIVETIMEEND:
        return payload;
      default:
    }
    return state;
  },
  isFiltersVisible(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_ISFILTERSVISIBLE:
        return payload;
      default:
    }
    return state;
  },
  searchParsed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_SEARCHPARSED:
        return payload;
      default:
    }
    return state;
  }
};
