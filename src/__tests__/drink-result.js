import React from 'react';
import {shallow, mount} from 'enzyme';

import DrinkResult from '../components/drink-result';

describe('<DrinkResult />', () => {
    it('Renders without crashing', () => {
        shallow(<DrinkResult key=1 drink= />);
    });

});
