const capitals = require('./utils/capitals');
const routes = require('./utils/routes');

const findRegionRoute = (origin, destination) => {
  let routesAmount = 1;
  const { region: regionOfOrigin } = capitals[origin];
  const { region: regionOfDestination } = capitals[destination];

  if (regionOfDestination === regionOfOrigin) return routesAmount;

  console.log(routes);
}

findRegionRoute('Macapá', 'Recife');

module.exports = { findRegionRoute };
