const capitals = require('./utils/capitals');
const routes = require('./utils/routes');
const regions = require('./utils/regions');

const findMissingRoutes = () => {
  const allRegionRoutes = [];
  regions
    .forEach((regionOne, indexOne) => regions
      .forEach((regionTwo, indexTwo) => indexOne !== indexTwo
        && allRegionRoutes.push([regionOne, regionTwo])
      )
  );

  const interRegionalRoutes = routes
    .filter((route) => capitals[route[0]].region !== capitals[route[1]].region);

  const regionRoutes = interRegionalRoutes
    .map((route) => [
      capitals[route[0]].region, capitals[route[1]].region
    ]);

  const missingOrigins = allRegionRoutes.filter((route) => !regionRoutes
    .find((fordRoute) => fordRoute[0] === route[0])
  );

  const missingDestinations = missingOrigins.filter((route) => !regionRoutes
    .find((fordRoute) => fordRoute[1] === route[1])
  );

  const missingRoutes = missingDestinations.filter((route) => !regionRoutes
    .find((fordRoute) => fordRoute[0] === route[1] && fordRoute[1] === route[0])
  );

  const unidirectionalRoutes = missingRoutes.filter((route) => !missingRoutes
    .find((routeTwo) => route[0] === routeTwo[1] && route[1] === routeTwo[0])
  );

  return unidirectionalRoutes.length;
}

console.log(findMissingRoutes());

module.exports = { findMissingRoutes };
