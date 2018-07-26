var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mc: {
    name: {
      singular: 'Metric Carat'
    , plural: 'Metric Carats'
    }
  , to_anchor: 0.2
  }  
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
, hg: {
    name: {
      singular: 'Hectogram'
    , plural: 'Hectograms'
    }
  , to_anchor: 0.2204622622
  }
, kg: {
    name: {
      singular: 'Kilogram'
    , plural: 'Kilograms'
    }
  , to_anchor: 1000
  }
, mt: {
    name: {
      singular: 'Metric Tonne'
    , plural: 'Metric Tonnes'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Ounce'
    , plural: 'Ounces'
    }
  , to_anchor: 1/16
  }
, ot: {
    name: {
      singular: 'Ounce Troy'
    , plural: 'Ounces Troy'
    }
  , to_anchor: 31.1034768
  }
, lb: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
  }
, lt: {
    name: {
      singular: 'Pound Troy',
      plural: 'Pounds Troy',
    },
      to_anchor: 0.822857,
    }   
, dt: {
  name: {
    singular: 'Deciton',
    plural: 'Decitons',
  },
    to_anchor: 220.46226218488,
  }
, t: {
  name: {
    singular: 'Ton',
    plural: 'Tons',
  },
    to_anchor: 2000,
  }
, tl: {
  name: {
    singular: 'Long Ton',
    plural: 'Long Tons',
  },
    to_anchor: 2240,
  }
, tn: {
  name: {
    singular: 'Short Ton',
    plural: 'Short Tons',
  },
    to_anchor: 2200,
  }
, kt: {
  name: {
    singular: 'Kiloton',
    plural: 'Kilotons',
  },
    to_anchor: 2204622.6218,
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};
