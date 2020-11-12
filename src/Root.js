import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import routes from 'routes';

import Citizens from 'pages/Citizens';
import Login from 'pages/Login';
import Reports from 'pages/Reports';
import Statistics from 'pages/Statistics';

import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';

import citizensActions from 'state/actions/citizensActions';
import reportsActions from 'state/actions/reportsActions';
import statisticsActions from 'state/actions/statisticsActions';
import UserContext from 'state/context/UserContext';

import HandleFocusingOutline from 'utils/HandleFocusingOutline';

const Root = () => {
  const [userId, setUserId] = useState('tempId');

  const dispatch = useDispatch();
  const citizens = useSelector((state) => state.citizensReducers.citizens);
  const reports = useSelector((state) => state.reportsReducers.reports);
  const unsolvedReports = useSelector(
    (state) => state.reportsReducers.unsolvedReports,
  );
  const statistics = useSelector(
    (state) => state.statisticsReducers.statistics,
  );

  useEffect(() => {
    dispatch(citizensActions.fetchCitizens());
    dispatch(reportsActions.fetchReports());
    dispatch(statisticsActions.fetchStatistics());
  }, [userId, dispatch]);

  return (
    <>
      <HandleFocusingOutline />
      <BrowserRouter>
        {userId ? (
          <UserContext.Provider value={{ userId }}>
            <AuthorizedTemplate unsolvedReports={unsolvedReports}>
              <Switch>
                <Route path={routes.reports} exact>
                  <Reports reports={reports} />
                </Route>
                <Route path={routes.statistics} exact>
                  <Statistics statistics={statistics} />
                </Route>
                <Route path={routes.citizens} exact>
                  <Citizens citizens={citizens} />
                </Route>
                <Route
                  path={routes.wildcard}
                  render={() => <Redirect to={routes.reports} />}
                />
              </Switch>
            </AuthorizedTemplate>
          </UserContext.Provider>
        ) : (
          <UnauthorizedTemplate>
            <Switch>
              <Route path={routes.login} exact component={Login} />
              <Route
                path={routes.wildcard}
                render={() => <Redirect to={routes.login} />}
              />
            </Switch>
          </UnauthorizedTemplate>
        )}
      </BrowserRouter>
    </>
  );
};

export default Root;
