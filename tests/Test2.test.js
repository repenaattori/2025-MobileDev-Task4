import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Test2', () => {
    it('Check the button texts when toggling', () => {
        render(<App/>);

        expect(screen.getByText('LOGIN')).toBeOnTheScreen();
        expect(screen.getByText('REGISTER')).not.toBeOnTheScreen();
    
        fireEvent(screen.getByTestId('switch'), 'onValueChange', true);

        expect(screen.getByText('REGISTER')).toBeOnTheScreen();
        expect(screen.getByText('LOGIN')).not.toBeOnTheScreen();
    });
});

