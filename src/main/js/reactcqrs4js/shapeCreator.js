'use strict';


export default
const shapeCreator = new ShapeCreator();

class ShapeCreator {
  createEventBusShape(PropTypes) {
    return PropTypes.shape({
      publish: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
    });
  }

  createCommandBusShape(PropTypes) {
    return PropTypes.shape({
      publish: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
    });
  }


}
