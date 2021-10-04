const capitals = require('./utils/capitals');
const routes = require('./utils/routes');

const findRegionRoute = (origin, destination) => {
  let routesAmount = 1;
  const { region: regionOfOrigin } = capitals[origin];
  const { region: regionOfDestination } = capitals[destination];

  if (regionOfDestination === regionOfOrigin) return routesAmount;

  const interRegionalRoutes = routes.filter((route) => capitals[route[0]].region !== capitals[route[1]].region );
  const regionRoutes = interRegionalRoutes.map((route) => [capitals[route[0]].region, capitals[route[1]].region])
  console.log(regionRoutes);
  
}

findRegionRoute('Macapá', 'Recife');

module.exports = { findRegionRoute };
