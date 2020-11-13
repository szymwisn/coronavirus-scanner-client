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
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  const citizens = useSelector((state) => state.citizensReducer.citizens);
  const reports = useSelector((state) => state.reportsReducer.reports);
  const unsolvedReports = useSelector(
    (state) => state.reportsReducer.unsolvedReports,
  );
  const statistics = useSelector((state) => state.statisticsReducer.statistics);

  useEffect(() => {
    if (user) {
      dispatch(citizensActions.fetchCitizens());
      dispatch(reportsActions.fetchReports());
      dispatch(statisticsActions.fetchStatistics());
    }
  }, [user, dispatch]);

  return (
    <>
      <HandleFocusingOutline />
      <BrowserRouter>
        {user ? (
          <UserContext.Provider value={user}>
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
