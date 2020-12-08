import React, { useEffect } from 'react';
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
import userActions from 'state/actions/userActions';

import HandleFocusingOutline from 'utils/HandleFocusingOutline';
import Notifications from 'components/Notifications';

const Root = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  const citizens = useSelector((state) => state.citizensReducer.citizens);
  const reports = useSelector((state) => state.reportsReducer.reports);
  const unsolvedReports = useSelector(
    (state) => state.reportsReducer.unsolvedReports,
  );
  const statistics = useSelector((state) => state.statisticsReducer.statistics);
  const notifications = useSelector(
    (state) => state.notificationReducer.notifications,
  );

  useEffect(() => {
    dispatch(userActions.login(null));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(citizensActions.fetchCitizens());
      dispatch(reportsActions.fetchReports());
      dispatch(statisticsActions.fetchStatistics());
    }
  }, [user, dispatch]);

  return (
    <>
      <Notifications notifications={notifications} />
      <HandleFocusingOutline />
      <BrowserRouter>
        {user ? (
          <AuthorizedTemplate unsolvedReports={unsolvedReports} user={user}>
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
