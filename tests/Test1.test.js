import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Test1', () => {
    it('Check the number of form fields when starting', () => {
        render(<App />);

        expect(screen.getAllByTestId('textfield').length).toBe(2);
        expect(screen.getAllByTestId('input').length).toBe(2);
    });

    it('Check the number of form fields when toggling the switch', () => {
        render(<App />);

        fireEvent(screen.getByTestId('switch'), 'onValueChange', true);

        expect(screen.getAllByTestId('textfield').length).toBe(4);
        expect(screen.getAllByTestId('input').length).toBe(4);
    });
});

