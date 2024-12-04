import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Check conditional components', () => {
    it('Check the number of form fields when toggling the switch', () => {
        render(<App/>);

        screen.getAllByTestId('textfield')

        expect(screen.getAllByTestId('textfield').length).toBe(2);
        expect(screen.getAllByTestId('input').length).toBe(2);
    
        fireEvent(screen.getByTestId('switch'), 'onValueChange', true);

        expect(screen.getAllByTestId('textfield').length).toBe(4);
        expect(screen.getAllByTestId('input').length).toBe(4);
    });
});

