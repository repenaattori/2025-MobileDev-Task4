import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Test2', () => {
    it('Check the button texts when toggling', () => {
        render(<App/>);

        expect(screen.queryByText('LOGIN')).toBeOnTheScreen();
        expect(screen.queryByText('REGISTER')).not.toBeOnTheScreen();
    
        fireEvent(screen.getByTestId('switch'), 'onValueChange', true);

        expect(screen.queryByText('REGISTER')).toBeOnTheScreen();
        expect(screen.queryByText('LOGIN')).not.toBeOnTheScreen();
    });
});

