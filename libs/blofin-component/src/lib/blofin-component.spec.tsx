import { render } from '@testing-library/react';

import BlofinComponent from './blofin-component';

describe('BlofinComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlofinComponent />);
    expect(baseElement).toBeTruthy();
  });
});
